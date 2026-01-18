import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

/**
 * Auth guard for inbound events.
 *
 * Allows either:
 * - Gateway-authenticated admin requests (x-user-* headers), or
 * - Webhook secret (x-webhook-secret) for service-to-service calls.
 */
@Injectable()
export class EventsAuthGuard implements CanActivate {
  private readonly skipAuth: boolean;

  constructor(private readonly configService: ConfigService) {
    this.skipAuth = this.configService.get<string>('SKIP_AUTH') === 'true';
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    if (this.skipAuth) {
      return true;
    }

    const webhookSecret =
      this.configService.get<string>('events.webhookSecret') || undefined;
    const receivedSecret = request.headers['x-webhook-secret'] as
      | string
      | undefined;

    if (webhookSecret && receivedSecret === webhookSecret) {
      return true;
    }

    // Allow admin calls coming through mez.gateway (gateway validates bearer and injects these headers)
    const userId = request.headers['x-user-id'] as string | undefined;
    const userRole = request.headers['x-user-role'] as string | undefined;
    if (!userId) {
      throw new UnauthorizedException(
        'Missing authentication headers. Requests must go through Gateway or include x-webhook-secret.',
      );
    }

    if (userRole !== 'ADMIN') {
      throw new ForbiddenException('Admin access required');
    }

    return true;
  }
}

