
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Channel
 * 
 */
export type Channel = $Result.DefaultSelection<Prisma.$ChannelPayload>
/**
 * Model ChannelRule
 * 
 */
export type ChannelRule = $Result.DefaultSelection<Prisma.$ChannelRulePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostDelivery
 * 
 */
export type PostDelivery = $Result.DefaultSelection<Prisma.$PostDeliveryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ChannelRuleType: {
  TAG: 'TAG',
  CATEGORY: 'CATEGORY',
  ALL: 'ALL'
};

export type ChannelRuleType = (typeof ChannelRuleType)[keyof typeof ChannelRuleType]


export const PostStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  PARTIAL: 'PARTIAL',
  FAILED: 'FAILED'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]


export const DeliveryStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus]

}

export type ChannelRuleType = $Enums.ChannelRuleType

export const ChannelRuleType: typeof $Enums.ChannelRuleType

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

export type DeliveryStatus = $Enums.DeliveryStatus

export const DeliveryStatus: typeof $Enums.DeliveryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Channels
 * const channels = await prisma.channel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Channels
   * const channels = await prisma.channel.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.ChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channelRule`: Exposes CRUD operations for the **ChannelRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChannelRules
    * const channelRules = await prisma.channelRule.findMany()
    * ```
    */
  get channelRule(): Prisma.ChannelRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postDelivery`: Exposes CRUD operations for the **PostDelivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostDeliveries
    * const postDeliveries = await prisma.postDelivery.findMany()
    * ```
    */
  get postDelivery(): Prisma.PostDeliveryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Channel: 'Channel',
    ChannelRule: 'ChannelRule',
    Post: 'Post',
    PostDelivery: 'PostDelivery'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "channel" | "channelRule" | "post" | "postDelivery"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Channel: {
        payload: Prisma.$ChannelPayload<ExtArgs>
        fields: Prisma.ChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findFirst: {
            args: Prisma.ChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findMany: {
            args: Prisma.ChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          create: {
            args: Prisma.ChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          createMany: {
            args: Prisma.ChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          delete: {
            args: Prisma.ChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          update: {
            args: Prisma.ChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          deleteMany: {
            args: Prisma.ChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          upsert: {
            args: Prisma.ChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannel>
          }
          groupBy: {
            args: Prisma.ChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number
          }
        }
      }
      ChannelRule: {
        payload: Prisma.$ChannelRulePayload<ExtArgs>
        fields: Prisma.ChannelRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelRulePayload>
          }
          findFirst: {
            args: Prisma.ChannelRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelRulePayload>
          }
          findMany: {
            args: Prisma.ChannelRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelRulePayload>[]
          }
          create: {
            args: Prisma.ChannelRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelRulePayload>
          }
          createMany: {
            args: Prisma.ChannelRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelRulePayload>[]
          }
          delete: {
            args: Prisma.ChannelRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelRulePayload>
          }
          update: {
            args: Prisma.ChannelRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelRulePayload>
          }
          deleteMany: {
            args: Prisma.ChannelRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelRulePayload>[]
          }
          upsert: {
            args: Prisma.ChannelRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelRulePayload>
          }
          aggregate: {
            args: Prisma.ChannelRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannelRule>
          }
          groupBy: {
            args: Prisma.ChannelRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelRuleCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelRuleCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostDelivery: {
        payload: Prisma.$PostDeliveryPayload<ExtArgs>
        fields: Prisma.PostDeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostDeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostDeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeliveryPayload>
          }
          findFirst: {
            args: Prisma.PostDeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostDeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeliveryPayload>
          }
          findMany: {
            args: Prisma.PostDeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeliveryPayload>[]
          }
          create: {
            args: Prisma.PostDeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeliveryPayload>
          }
          createMany: {
            args: Prisma.PostDeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostDeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeliveryPayload>[]
          }
          delete: {
            args: Prisma.PostDeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeliveryPayload>
          }
          update: {
            args: Prisma.PostDeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeliveryPayload>
          }
          deleteMany: {
            args: Prisma.PostDeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostDeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostDeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeliveryPayload>[]
          }
          upsert: {
            args: Prisma.PostDeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDeliveryPayload>
          }
          aggregate: {
            args: Prisma.PostDeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostDelivery>
          }
          groupBy: {
            args: Prisma.PostDeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostDeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostDeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<PostDeliveryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    channel?: ChannelOmit
    channelRule?: ChannelRuleOmit
    post?: PostOmit
    postDelivery?: PostDeliveryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ChannelCountOutputType
   */

  export type ChannelCountOutputType = {
    rules: number
    deliveries: number
  }

  export type ChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | ChannelCountOutputTypeCountRulesArgs
    deliveries?: boolean | ChannelCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelCountOutputType
     */
    select?: ChannelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelRuleWhereInput
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostDeliveryWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    deliveries: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | PostCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostDeliveryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelMinAggregateOutputType = {
    id: string | null
    key: string | null
    chatId: string | null
    username: string | null
    title: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: string | null
    key: string | null
    chatId: string | null
    username: string | null
    title: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    key: number
    chatId: number
    username: number
    title: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChannelMinAggregateInputType = {
    id?: true
    key?: true
    chatId?: true
    username?: true
    title?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    key?: true
    chatId?: true
    username?: true
    title?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    key?: true
    chatId?: true
    username?: true
    title?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type ChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithAggregationInput | ChannelOrderByWithAggregationInput[]
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum
    having?: ChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }

  export type ChannelGroupByOutputType = {
    id: string
    key: string
    chatId: string
    username: string | null
    title: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChannelCountAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    chatId?: boolean
    username?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rules?: boolean | Channel$rulesArgs<ExtArgs>
    deliveries?: boolean | Channel$deliveriesArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    chatId?: boolean
    username?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    chatId?: boolean
    username?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectScalar = {
    id?: boolean
    key?: boolean
    chatId?: boolean
    username?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "chatId" | "username" | "title" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["channel"]>
  export type ChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | Channel$rulesArgs<ExtArgs>
    deliveries?: boolean | Channel$deliveriesArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      rules: Prisma.$ChannelRulePayload<ExtArgs>[]
      deliveries: Prisma.$PostDeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      chatId: string
      username: string | null
      title: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["channel"]>
    composites: {}
  }

  type ChannelGetPayload<S extends boolean | null | undefined | ChannelDefaultArgs> = $Result.GetResult<Prisma.$ChannelPayload, S>

  type ChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface ChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channel'], meta: { name: 'Channel' } }
    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelFindUniqueArgs>(args: SelectSubset<T, ChannelFindUniqueArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Channel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelFindFirstArgs>(args?: SelectSubset<T, ChannelFindFirstArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelFindManyArgs>(args?: SelectSubset<T, ChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
     */
    create<T extends ChannelCreateArgs>(args: SelectSubset<T, ChannelCreateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Channels.
     * @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelCreateManyArgs>(args?: SelectSubset<T, ChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Channels and returns the data saved in the database.
     * @param {ChannelCreateManyAndReturnArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
     */
    delete<T extends ChannelDeleteArgs>(args: SelectSubset<T, ChannelDeleteArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelUpdateArgs>(args: SelectSubset<T, ChannelUpdateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelDeleteManyArgs>(args?: SelectSubset<T, ChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelUpdateManyArgs>(args: SelectSubset<T, ChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels and returns the data updated in the database.
     * @param {ChannelUpdateManyAndReturnArgs} args - Arguments to update many Channels.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
     */
    upsert<T extends ChannelUpsertArgs>(args: SelectSubset<T, ChannelUpsertArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channel model
   */
  readonly fields: ChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rules<T extends Channel$rulesArgs<ExtArgs> = {}>(args?: Subset<T, Channel$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deliveries<T extends Channel$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Channel$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Channel model
   */
  interface ChannelFieldRefs {
    readonly id: FieldRef<"Channel", 'String'>
    readonly key: FieldRef<"Channel", 'String'>
    readonly chatId: FieldRef<"Channel", 'String'>
    readonly username: FieldRef<"Channel", 'String'>
    readonly title: FieldRef<"Channel", 'String'>
    readonly isActive: FieldRef<"Channel", 'Boolean'>
    readonly createdAt: FieldRef<"Channel", 'DateTime'>
    readonly updatedAt: FieldRef<"Channel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Channel findUnique
   */
  export type ChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findFirst
   */
  export type ChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel create
   */
  export type ChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
  }

  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channel createManyAndReturn
   */
  export type ChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channel update
   */
  export type ChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channel updateManyAndReturn
   */
  export type ChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
  }

  /**
   * Channel delete
   */
  export type ChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to delete.
     */
    limit?: number
  }

  /**
   * Channel.rules
   */
  export type Channel$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleInclude<ExtArgs> | null
    where?: ChannelRuleWhereInput
    orderBy?: ChannelRuleOrderByWithRelationInput | ChannelRuleOrderByWithRelationInput[]
    cursor?: ChannelRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelRuleScalarFieldEnum | ChannelRuleScalarFieldEnum[]
  }

  /**
   * Channel.deliveries
   */
  export type Channel$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryInclude<ExtArgs> | null
    where?: PostDeliveryWhereInput
    orderBy?: PostDeliveryOrderByWithRelationInput | PostDeliveryOrderByWithRelationInput[]
    cursor?: PostDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostDeliveryScalarFieldEnum | PostDeliveryScalarFieldEnum[]
  }

  /**
   * Channel without action
   */
  export type ChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
  }


  /**
   * Model ChannelRule
   */

  export type AggregateChannelRule = {
    _count: ChannelRuleCountAggregateOutputType | null
    _min: ChannelRuleMinAggregateOutputType | null
    _max: ChannelRuleMaxAggregateOutputType | null
  }

  export type ChannelRuleMinAggregateOutputType = {
    id: string | null
    channelId: string | null
    type: $Enums.ChannelRuleType | null
    value: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelRuleMaxAggregateOutputType = {
    id: string | null
    channelId: string | null
    type: $Enums.ChannelRuleType | null
    value: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelRuleCountAggregateOutputType = {
    id: number
    channelId: number
    type: number
    value: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChannelRuleMinAggregateInputType = {
    id?: true
    channelId?: true
    type?: true
    value?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelRuleMaxAggregateInputType = {
    id?: true
    channelId?: true
    type?: true
    value?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelRuleCountAggregateInputType = {
    id?: true
    channelId?: true
    type?: true
    value?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChannelRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelRule to aggregate.
     */
    where?: ChannelRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelRules to fetch.
     */
    orderBy?: ChannelRuleOrderByWithRelationInput | ChannelRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChannelRules
    **/
    _count?: true | ChannelRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelRuleMaxAggregateInputType
  }

  export type GetChannelRuleAggregateType<T extends ChannelRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateChannelRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelRule[P]>
      : GetScalarType<T[P], AggregateChannelRule[P]>
  }




  export type ChannelRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelRuleWhereInput
    orderBy?: ChannelRuleOrderByWithAggregationInput | ChannelRuleOrderByWithAggregationInput[]
    by: ChannelRuleScalarFieldEnum[] | ChannelRuleScalarFieldEnum
    having?: ChannelRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelRuleCountAggregateInputType | true
    _min?: ChannelRuleMinAggregateInputType
    _max?: ChannelRuleMaxAggregateInputType
  }

  export type ChannelRuleGroupByOutputType = {
    id: string
    channelId: string
    type: $Enums.ChannelRuleType
    value: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChannelRuleCountAggregateOutputType | null
    _min: ChannelRuleMinAggregateOutputType | null
    _max: ChannelRuleMaxAggregateOutputType | null
  }

  type GetChannelRuleGroupByPayload<T extends ChannelRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelRuleGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelRuleGroupByOutputType[P]>
        }
      >
    >


  export type ChannelRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    type?: boolean
    value?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelRule"]>

  export type ChannelRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    type?: boolean
    value?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelRule"]>

  export type ChannelRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    type?: boolean
    value?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelRule"]>

  export type ChannelRuleSelectScalar = {
    id?: boolean
    channelId?: boolean
    type?: boolean
    value?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChannelRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channelId" | "type" | "value" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["channelRule"]>
  export type ChannelRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type ChannelRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type ChannelRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }

  export type $ChannelRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChannelRule"
    objects: {
      channel: Prisma.$ChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channelId: string
      type: $Enums.ChannelRuleType
      value: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["channelRule"]>
    composites: {}
  }

  type ChannelRuleGetPayload<S extends boolean | null | undefined | ChannelRuleDefaultArgs> = $Result.GetResult<Prisma.$ChannelRulePayload, S>

  type ChannelRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelRuleCountAggregateInputType | true
    }

  export interface ChannelRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChannelRule'], meta: { name: 'ChannelRule' } }
    /**
     * Find zero or one ChannelRule that matches the filter.
     * @param {ChannelRuleFindUniqueArgs} args - Arguments to find a ChannelRule
     * @example
     * // Get one ChannelRule
     * const channelRule = await prisma.channelRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelRuleFindUniqueArgs>(args: SelectSubset<T, ChannelRuleFindUniqueArgs<ExtArgs>>): Prisma__ChannelRuleClient<$Result.GetResult<Prisma.$ChannelRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChannelRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelRuleFindUniqueOrThrowArgs} args - Arguments to find a ChannelRule
     * @example
     * // Get one ChannelRule
     * const channelRule = await prisma.channelRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelRuleClient<$Result.GetResult<Prisma.$ChannelRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelRuleFindFirstArgs} args - Arguments to find a ChannelRule
     * @example
     * // Get one ChannelRule
     * const channelRule = await prisma.channelRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelRuleFindFirstArgs>(args?: SelectSubset<T, ChannelRuleFindFirstArgs<ExtArgs>>): Prisma__ChannelRuleClient<$Result.GetResult<Prisma.$ChannelRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelRuleFindFirstOrThrowArgs} args - Arguments to find a ChannelRule
     * @example
     * // Get one ChannelRule
     * const channelRule = await prisma.channelRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelRuleClient<$Result.GetResult<Prisma.$ChannelRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChannelRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChannelRules
     * const channelRules = await prisma.channelRule.findMany()
     * 
     * // Get first 10 ChannelRules
     * const channelRules = await prisma.channelRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelRuleWithIdOnly = await prisma.channelRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelRuleFindManyArgs>(args?: SelectSubset<T, ChannelRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChannelRule.
     * @param {ChannelRuleCreateArgs} args - Arguments to create a ChannelRule.
     * @example
     * // Create one ChannelRule
     * const ChannelRule = await prisma.channelRule.create({
     *   data: {
     *     // ... data to create a ChannelRule
     *   }
     * })
     * 
     */
    create<T extends ChannelRuleCreateArgs>(args: SelectSubset<T, ChannelRuleCreateArgs<ExtArgs>>): Prisma__ChannelRuleClient<$Result.GetResult<Prisma.$ChannelRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChannelRules.
     * @param {ChannelRuleCreateManyArgs} args - Arguments to create many ChannelRules.
     * @example
     * // Create many ChannelRules
     * const channelRule = await prisma.channelRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelRuleCreateManyArgs>(args?: SelectSubset<T, ChannelRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChannelRules and returns the data saved in the database.
     * @param {ChannelRuleCreateManyAndReturnArgs} args - Arguments to create many ChannelRules.
     * @example
     * // Create many ChannelRules
     * const channelRule = await prisma.channelRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChannelRules and only return the `id`
     * const channelRuleWithIdOnly = await prisma.channelRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChannelRule.
     * @param {ChannelRuleDeleteArgs} args - Arguments to delete one ChannelRule.
     * @example
     * // Delete one ChannelRule
     * const ChannelRule = await prisma.channelRule.delete({
     *   where: {
     *     // ... filter to delete one ChannelRule
     *   }
     * })
     * 
     */
    delete<T extends ChannelRuleDeleteArgs>(args: SelectSubset<T, ChannelRuleDeleteArgs<ExtArgs>>): Prisma__ChannelRuleClient<$Result.GetResult<Prisma.$ChannelRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChannelRule.
     * @param {ChannelRuleUpdateArgs} args - Arguments to update one ChannelRule.
     * @example
     * // Update one ChannelRule
     * const channelRule = await prisma.channelRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelRuleUpdateArgs>(args: SelectSubset<T, ChannelRuleUpdateArgs<ExtArgs>>): Prisma__ChannelRuleClient<$Result.GetResult<Prisma.$ChannelRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChannelRules.
     * @param {ChannelRuleDeleteManyArgs} args - Arguments to filter ChannelRules to delete.
     * @example
     * // Delete a few ChannelRules
     * const { count } = await prisma.channelRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelRuleDeleteManyArgs>(args?: SelectSubset<T, ChannelRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChannelRules
     * const channelRule = await prisma.channelRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelRuleUpdateManyArgs>(args: SelectSubset<T, ChannelRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelRules and returns the data updated in the database.
     * @param {ChannelRuleUpdateManyAndReturnArgs} args - Arguments to update many ChannelRules.
     * @example
     * // Update many ChannelRules
     * const channelRule = await prisma.channelRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChannelRules and only return the `id`
     * const channelRuleWithIdOnly = await prisma.channelRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChannelRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChannelRule.
     * @param {ChannelRuleUpsertArgs} args - Arguments to update or create a ChannelRule.
     * @example
     * // Update or create a ChannelRule
     * const channelRule = await prisma.channelRule.upsert({
     *   create: {
     *     // ... data to create a ChannelRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChannelRule we want to update
     *   }
     * })
     */
    upsert<T extends ChannelRuleUpsertArgs>(args: SelectSubset<T, ChannelRuleUpsertArgs<ExtArgs>>): Prisma__ChannelRuleClient<$Result.GetResult<Prisma.$ChannelRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChannelRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelRuleCountArgs} args - Arguments to filter ChannelRules to count.
     * @example
     * // Count the number of ChannelRules
     * const count = await prisma.channelRule.count({
     *   where: {
     *     // ... the filter for the ChannelRules we want to count
     *   }
     * })
    **/
    count<T extends ChannelRuleCountArgs>(
      args?: Subset<T, ChannelRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChannelRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChannelRuleAggregateArgs>(args: Subset<T, ChannelRuleAggregateArgs>): Prisma.PrismaPromise<GetChannelRuleAggregateType<T>>

    /**
     * Group by ChannelRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChannelRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelRuleGroupByArgs['orderBy'] }
        : { orderBy?: ChannelRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChannelRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChannelRule model
   */
  readonly fields: ChannelRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChannelRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChannelRule model
   */
  interface ChannelRuleFieldRefs {
    readonly id: FieldRef<"ChannelRule", 'String'>
    readonly channelId: FieldRef<"ChannelRule", 'String'>
    readonly type: FieldRef<"ChannelRule", 'ChannelRuleType'>
    readonly value: FieldRef<"ChannelRule", 'String'>
    readonly isActive: FieldRef<"ChannelRule", 'Boolean'>
    readonly createdAt: FieldRef<"ChannelRule", 'DateTime'>
    readonly updatedAt: FieldRef<"ChannelRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChannelRule findUnique
   */
  export type ChannelRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleInclude<ExtArgs> | null
    /**
     * Filter, which ChannelRule to fetch.
     */
    where: ChannelRuleWhereUniqueInput
  }

  /**
   * ChannelRule findUniqueOrThrow
   */
  export type ChannelRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleInclude<ExtArgs> | null
    /**
     * Filter, which ChannelRule to fetch.
     */
    where: ChannelRuleWhereUniqueInput
  }

  /**
   * ChannelRule findFirst
   */
  export type ChannelRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleInclude<ExtArgs> | null
    /**
     * Filter, which ChannelRule to fetch.
     */
    where?: ChannelRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelRules to fetch.
     */
    orderBy?: ChannelRuleOrderByWithRelationInput | ChannelRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelRules.
     */
    cursor?: ChannelRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelRules.
     */
    distinct?: ChannelRuleScalarFieldEnum | ChannelRuleScalarFieldEnum[]
  }

  /**
   * ChannelRule findFirstOrThrow
   */
  export type ChannelRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleInclude<ExtArgs> | null
    /**
     * Filter, which ChannelRule to fetch.
     */
    where?: ChannelRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelRules to fetch.
     */
    orderBy?: ChannelRuleOrderByWithRelationInput | ChannelRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelRules.
     */
    cursor?: ChannelRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelRules.
     */
    distinct?: ChannelRuleScalarFieldEnum | ChannelRuleScalarFieldEnum[]
  }

  /**
   * ChannelRule findMany
   */
  export type ChannelRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleInclude<ExtArgs> | null
    /**
     * Filter, which ChannelRules to fetch.
     */
    where?: ChannelRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelRules to fetch.
     */
    orderBy?: ChannelRuleOrderByWithRelationInput | ChannelRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChannelRules.
     */
    cursor?: ChannelRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelRules.
     */
    skip?: number
    distinct?: ChannelRuleScalarFieldEnum | ChannelRuleScalarFieldEnum[]
  }

  /**
   * ChannelRule create
   */
  export type ChannelRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a ChannelRule.
     */
    data: XOR<ChannelRuleCreateInput, ChannelRuleUncheckedCreateInput>
  }

  /**
   * ChannelRule createMany
   */
  export type ChannelRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChannelRules.
     */
    data: ChannelRuleCreateManyInput | ChannelRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChannelRule createManyAndReturn
   */
  export type ChannelRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * The data used to create many ChannelRules.
     */
    data: ChannelRuleCreateManyInput | ChannelRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChannelRule update
   */
  export type ChannelRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a ChannelRule.
     */
    data: XOR<ChannelRuleUpdateInput, ChannelRuleUncheckedUpdateInput>
    /**
     * Choose, which ChannelRule to update.
     */
    where: ChannelRuleWhereUniqueInput
  }

  /**
   * ChannelRule updateMany
   */
  export type ChannelRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChannelRules.
     */
    data: XOR<ChannelRuleUpdateManyMutationInput, ChannelRuleUncheckedUpdateManyInput>
    /**
     * Filter which ChannelRules to update
     */
    where?: ChannelRuleWhereInput
    /**
     * Limit how many ChannelRules to update.
     */
    limit?: number
  }

  /**
   * ChannelRule updateManyAndReturn
   */
  export type ChannelRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * The data used to update ChannelRules.
     */
    data: XOR<ChannelRuleUpdateManyMutationInput, ChannelRuleUncheckedUpdateManyInput>
    /**
     * Filter which ChannelRules to update
     */
    where?: ChannelRuleWhereInput
    /**
     * Limit how many ChannelRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChannelRule upsert
   */
  export type ChannelRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the ChannelRule to update in case it exists.
     */
    where: ChannelRuleWhereUniqueInput
    /**
     * In case the ChannelRule found by the `where` argument doesn't exist, create a new ChannelRule with this data.
     */
    create: XOR<ChannelRuleCreateInput, ChannelRuleUncheckedCreateInput>
    /**
     * In case the ChannelRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelRuleUpdateInput, ChannelRuleUncheckedUpdateInput>
  }

  /**
   * ChannelRule delete
   */
  export type ChannelRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleInclude<ExtArgs> | null
    /**
     * Filter which ChannelRule to delete.
     */
    where: ChannelRuleWhereUniqueInput
  }

  /**
   * ChannelRule deleteMany
   */
  export type ChannelRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelRules to delete
     */
    where?: ChannelRuleWhereInput
    /**
     * Limit how many ChannelRules to delete.
     */
    limit?: number
  }

  /**
   * ChannelRule without action
   */
  export type ChannelRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelRule
     */
    select?: ChannelRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelRule
     */
    omit?: ChannelRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelRuleInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    articleId: string | null
    status: $Enums.PostStatus | null
    payloadHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    articleId: string | null
    status: $Enums.PostStatus | null
    payloadHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    articleId: number
    status: number
    payload: number
    payloadHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    articleId?: true
    status?: true
    payloadHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    articleId?: true
    status?: true
    payloadHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    articleId?: true
    status?: true
    payload?: true
    payloadHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    articleId: string
    status: $Enums.PostStatus
    payload: JsonValue
    payloadHash: string | null
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    status?: boolean
    payload?: boolean
    payloadHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveries?: boolean | Post$deliveriesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    status?: boolean
    payload?: boolean
    payloadHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    status?: boolean
    payload?: boolean
    payloadHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    articleId?: boolean
    status?: boolean
    payload?: boolean
    payloadHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "status" | "payload" | "payloadHash" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | Post$deliveriesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      deliveries: Prisma.$PostDeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleId: string
      status: $Enums.PostStatus
      payload: Prisma.JsonValue
      payloadHash: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends Post$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Post$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly articleId: FieldRef<"Post", 'String'>
    readonly status: FieldRef<"Post", 'PostStatus'>
    readonly payload: FieldRef<"Post", 'Json'>
    readonly payloadHash: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.deliveries
   */
  export type Post$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryInclude<ExtArgs> | null
    where?: PostDeliveryWhereInput
    orderBy?: PostDeliveryOrderByWithRelationInput | PostDeliveryOrderByWithRelationInput[]
    cursor?: PostDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostDeliveryScalarFieldEnum | PostDeliveryScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostDelivery
   */

  export type AggregatePostDelivery = {
    _count: PostDeliveryCountAggregateOutputType | null
    _avg: PostDeliveryAvgAggregateOutputType | null
    _sum: PostDeliverySumAggregateOutputType | null
    _min: PostDeliveryMinAggregateOutputType | null
    _max: PostDeliveryMaxAggregateOutputType | null
  }

  export type PostDeliveryAvgAggregateOutputType = {
    revision: number | null
    attempts: number | null
  }

  export type PostDeliverySumAggregateOutputType = {
    revision: number | null
    attempts: number | null
  }

  export type PostDeliveryMinAggregateOutputType = {
    id: string | null
    postId: string | null
    channelId: string | null
    revision: number | null
    status: $Enums.DeliveryStatus | null
    telegramMessageId: string | null
    attempts: number | null
    lastError: string | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostDeliveryMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    channelId: string | null
    revision: number | null
    status: $Enums.DeliveryStatus | null
    telegramMessageId: string | null
    attempts: number | null
    lastError: string | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostDeliveryCountAggregateOutputType = {
    id: number
    postId: number
    channelId: number
    revision: number
    status: number
    telegramMessageId: number
    attempts: number
    lastError: number
    sentAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostDeliveryAvgAggregateInputType = {
    revision?: true
    attempts?: true
  }

  export type PostDeliverySumAggregateInputType = {
    revision?: true
    attempts?: true
  }

  export type PostDeliveryMinAggregateInputType = {
    id?: true
    postId?: true
    channelId?: true
    revision?: true
    status?: true
    telegramMessageId?: true
    attempts?: true
    lastError?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostDeliveryMaxAggregateInputType = {
    id?: true
    postId?: true
    channelId?: true
    revision?: true
    status?: true
    telegramMessageId?: true
    attempts?: true
    lastError?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostDeliveryCountAggregateInputType = {
    id?: true
    postId?: true
    channelId?: true
    revision?: true
    status?: true
    telegramMessageId?: true
    attempts?: true
    lastError?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostDeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostDelivery to aggregate.
     */
    where?: PostDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDeliveries to fetch.
     */
    orderBy?: PostDeliveryOrderByWithRelationInput | PostDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostDeliveries
    **/
    _count?: true | PostDeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostDeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostDeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostDeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostDeliveryMaxAggregateInputType
  }

  export type GetPostDeliveryAggregateType<T extends PostDeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregatePostDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostDelivery[P]>
      : GetScalarType<T[P], AggregatePostDelivery[P]>
  }




  export type PostDeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostDeliveryWhereInput
    orderBy?: PostDeliveryOrderByWithAggregationInput | PostDeliveryOrderByWithAggregationInput[]
    by: PostDeliveryScalarFieldEnum[] | PostDeliveryScalarFieldEnum
    having?: PostDeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostDeliveryCountAggregateInputType | true
    _avg?: PostDeliveryAvgAggregateInputType
    _sum?: PostDeliverySumAggregateInputType
    _min?: PostDeliveryMinAggregateInputType
    _max?: PostDeliveryMaxAggregateInputType
  }

  export type PostDeliveryGroupByOutputType = {
    id: string
    postId: string
    channelId: string
    revision: number
    status: $Enums.DeliveryStatus
    telegramMessageId: string | null
    attempts: number
    lastError: string | null
    sentAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PostDeliveryCountAggregateOutputType | null
    _avg: PostDeliveryAvgAggregateOutputType | null
    _sum: PostDeliverySumAggregateOutputType | null
    _min: PostDeliveryMinAggregateOutputType | null
    _max: PostDeliveryMaxAggregateOutputType | null
  }

  type GetPostDeliveryGroupByPayload<T extends PostDeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostDeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostDeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostDeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], PostDeliveryGroupByOutputType[P]>
        }
      >
    >


  export type PostDeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    channelId?: boolean
    revision?: boolean
    status?: boolean
    telegramMessageId?: boolean
    attempts?: boolean
    lastError?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postDelivery"]>

  export type PostDeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    channelId?: boolean
    revision?: boolean
    status?: boolean
    telegramMessageId?: boolean
    attempts?: boolean
    lastError?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postDelivery"]>

  export type PostDeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    channelId?: boolean
    revision?: boolean
    status?: boolean
    telegramMessageId?: boolean
    attempts?: boolean
    lastError?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postDelivery"]>

  export type PostDeliverySelectScalar = {
    id?: boolean
    postId?: boolean
    channelId?: boolean
    revision?: boolean
    status?: boolean
    telegramMessageId?: boolean
    attempts?: boolean
    lastError?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostDeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "channelId" | "revision" | "status" | "telegramMessageId" | "attempts" | "lastError" | "sentAt" | "createdAt" | "updatedAt", ExtArgs["result"]["postDelivery"]>
  export type PostDeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type PostDeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type PostDeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }

  export type $PostDeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostDelivery"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      channel: Prisma.$ChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      channelId: string
      revision: number
      status: $Enums.DeliveryStatus
      telegramMessageId: string | null
      attempts: number
      lastError: string | null
      sentAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["postDelivery"]>
    composites: {}
  }

  type PostDeliveryGetPayload<S extends boolean | null | undefined | PostDeliveryDefaultArgs> = $Result.GetResult<Prisma.$PostDeliveryPayload, S>

  type PostDeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostDeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostDeliveryCountAggregateInputType | true
    }

  export interface PostDeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostDelivery'], meta: { name: 'PostDelivery' } }
    /**
     * Find zero or one PostDelivery that matches the filter.
     * @param {PostDeliveryFindUniqueArgs} args - Arguments to find a PostDelivery
     * @example
     * // Get one PostDelivery
     * const postDelivery = await prisma.postDelivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostDeliveryFindUniqueArgs>(args: SelectSubset<T, PostDeliveryFindUniqueArgs<ExtArgs>>): Prisma__PostDeliveryClient<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostDelivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostDeliveryFindUniqueOrThrowArgs} args - Arguments to find a PostDelivery
     * @example
     * // Get one PostDelivery
     * const postDelivery = await prisma.postDelivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostDeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, PostDeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostDeliveryClient<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostDelivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeliveryFindFirstArgs} args - Arguments to find a PostDelivery
     * @example
     * // Get one PostDelivery
     * const postDelivery = await prisma.postDelivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostDeliveryFindFirstArgs>(args?: SelectSubset<T, PostDeliveryFindFirstArgs<ExtArgs>>): Prisma__PostDeliveryClient<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostDelivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeliveryFindFirstOrThrowArgs} args - Arguments to find a PostDelivery
     * @example
     * // Get one PostDelivery
     * const postDelivery = await prisma.postDelivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostDeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, PostDeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostDeliveryClient<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostDeliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostDeliveries
     * const postDeliveries = await prisma.postDelivery.findMany()
     * 
     * // Get first 10 PostDeliveries
     * const postDeliveries = await prisma.postDelivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postDeliveryWithIdOnly = await prisma.postDelivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostDeliveryFindManyArgs>(args?: SelectSubset<T, PostDeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostDelivery.
     * @param {PostDeliveryCreateArgs} args - Arguments to create a PostDelivery.
     * @example
     * // Create one PostDelivery
     * const PostDelivery = await prisma.postDelivery.create({
     *   data: {
     *     // ... data to create a PostDelivery
     *   }
     * })
     * 
     */
    create<T extends PostDeliveryCreateArgs>(args: SelectSubset<T, PostDeliveryCreateArgs<ExtArgs>>): Prisma__PostDeliveryClient<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostDeliveries.
     * @param {PostDeliveryCreateManyArgs} args - Arguments to create many PostDeliveries.
     * @example
     * // Create many PostDeliveries
     * const postDelivery = await prisma.postDelivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostDeliveryCreateManyArgs>(args?: SelectSubset<T, PostDeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostDeliveries and returns the data saved in the database.
     * @param {PostDeliveryCreateManyAndReturnArgs} args - Arguments to create many PostDeliveries.
     * @example
     * // Create many PostDeliveries
     * const postDelivery = await prisma.postDelivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostDeliveries and only return the `id`
     * const postDeliveryWithIdOnly = await prisma.postDelivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostDeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, PostDeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostDelivery.
     * @param {PostDeliveryDeleteArgs} args - Arguments to delete one PostDelivery.
     * @example
     * // Delete one PostDelivery
     * const PostDelivery = await prisma.postDelivery.delete({
     *   where: {
     *     // ... filter to delete one PostDelivery
     *   }
     * })
     * 
     */
    delete<T extends PostDeliveryDeleteArgs>(args: SelectSubset<T, PostDeliveryDeleteArgs<ExtArgs>>): Prisma__PostDeliveryClient<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostDelivery.
     * @param {PostDeliveryUpdateArgs} args - Arguments to update one PostDelivery.
     * @example
     * // Update one PostDelivery
     * const postDelivery = await prisma.postDelivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostDeliveryUpdateArgs>(args: SelectSubset<T, PostDeliveryUpdateArgs<ExtArgs>>): Prisma__PostDeliveryClient<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostDeliveries.
     * @param {PostDeliveryDeleteManyArgs} args - Arguments to filter PostDeliveries to delete.
     * @example
     * // Delete a few PostDeliveries
     * const { count } = await prisma.postDelivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeliveryDeleteManyArgs>(args?: SelectSubset<T, PostDeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostDeliveries
     * const postDelivery = await prisma.postDelivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostDeliveryUpdateManyArgs>(args: SelectSubset<T, PostDeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostDeliveries and returns the data updated in the database.
     * @param {PostDeliveryUpdateManyAndReturnArgs} args - Arguments to update many PostDeliveries.
     * @example
     * // Update many PostDeliveries
     * const postDelivery = await prisma.postDelivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostDeliveries and only return the `id`
     * const postDeliveryWithIdOnly = await prisma.postDelivery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostDeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, PostDeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostDelivery.
     * @param {PostDeliveryUpsertArgs} args - Arguments to update or create a PostDelivery.
     * @example
     * // Update or create a PostDelivery
     * const postDelivery = await prisma.postDelivery.upsert({
     *   create: {
     *     // ... data to create a PostDelivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostDelivery we want to update
     *   }
     * })
     */
    upsert<T extends PostDeliveryUpsertArgs>(args: SelectSubset<T, PostDeliveryUpsertArgs<ExtArgs>>): Prisma__PostDeliveryClient<$Result.GetResult<Prisma.$PostDeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeliveryCountArgs} args - Arguments to filter PostDeliveries to count.
     * @example
     * // Count the number of PostDeliveries
     * const count = await prisma.postDelivery.count({
     *   where: {
     *     // ... the filter for the PostDeliveries we want to count
     *   }
     * })
    **/
    count<T extends PostDeliveryCountArgs>(
      args?: Subset<T, PostDeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostDeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostDeliveryAggregateArgs>(args: Subset<T, PostDeliveryAggregateArgs>): Prisma.PrismaPromise<GetPostDeliveryAggregateType<T>>

    /**
     * Group by PostDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostDeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostDeliveryGroupByArgs['orderBy'] }
        : { orderBy?: PostDeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostDelivery model
   */
  readonly fields: PostDeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostDelivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostDeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostDelivery model
   */
  interface PostDeliveryFieldRefs {
    readonly id: FieldRef<"PostDelivery", 'String'>
    readonly postId: FieldRef<"PostDelivery", 'String'>
    readonly channelId: FieldRef<"PostDelivery", 'String'>
    readonly revision: FieldRef<"PostDelivery", 'Int'>
    readonly status: FieldRef<"PostDelivery", 'DeliveryStatus'>
    readonly telegramMessageId: FieldRef<"PostDelivery", 'String'>
    readonly attempts: FieldRef<"PostDelivery", 'Int'>
    readonly lastError: FieldRef<"PostDelivery", 'String'>
    readonly sentAt: FieldRef<"PostDelivery", 'DateTime'>
    readonly createdAt: FieldRef<"PostDelivery", 'DateTime'>
    readonly updatedAt: FieldRef<"PostDelivery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostDelivery findUnique
   */
  export type PostDeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which PostDelivery to fetch.
     */
    where: PostDeliveryWhereUniqueInput
  }

  /**
   * PostDelivery findUniqueOrThrow
   */
  export type PostDeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which PostDelivery to fetch.
     */
    where: PostDeliveryWhereUniqueInput
  }

  /**
   * PostDelivery findFirst
   */
  export type PostDeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which PostDelivery to fetch.
     */
    where?: PostDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDeliveries to fetch.
     */
    orderBy?: PostDeliveryOrderByWithRelationInput | PostDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostDeliveries.
     */
    cursor?: PostDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostDeliveries.
     */
    distinct?: PostDeliveryScalarFieldEnum | PostDeliveryScalarFieldEnum[]
  }

  /**
   * PostDelivery findFirstOrThrow
   */
  export type PostDeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which PostDelivery to fetch.
     */
    where?: PostDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDeliveries to fetch.
     */
    orderBy?: PostDeliveryOrderByWithRelationInput | PostDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostDeliveries.
     */
    cursor?: PostDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostDeliveries.
     */
    distinct?: PostDeliveryScalarFieldEnum | PostDeliveryScalarFieldEnum[]
  }

  /**
   * PostDelivery findMany
   */
  export type PostDeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which PostDeliveries to fetch.
     */
    where?: PostDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDeliveries to fetch.
     */
    orderBy?: PostDeliveryOrderByWithRelationInput | PostDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostDeliveries.
     */
    cursor?: PostDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDeliveries.
     */
    skip?: number
    distinct?: PostDeliveryScalarFieldEnum | PostDeliveryScalarFieldEnum[]
  }

  /**
   * PostDelivery create
   */
  export type PostDeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a PostDelivery.
     */
    data: XOR<PostDeliveryCreateInput, PostDeliveryUncheckedCreateInput>
  }

  /**
   * PostDelivery createMany
   */
  export type PostDeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostDeliveries.
     */
    data: PostDeliveryCreateManyInput | PostDeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostDelivery createManyAndReturn
   */
  export type PostDeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many PostDeliveries.
     */
    data: PostDeliveryCreateManyInput | PostDeliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostDelivery update
   */
  export type PostDeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a PostDelivery.
     */
    data: XOR<PostDeliveryUpdateInput, PostDeliveryUncheckedUpdateInput>
    /**
     * Choose, which PostDelivery to update.
     */
    where: PostDeliveryWhereUniqueInput
  }

  /**
   * PostDelivery updateMany
   */
  export type PostDeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostDeliveries.
     */
    data: XOR<PostDeliveryUpdateManyMutationInput, PostDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which PostDeliveries to update
     */
    where?: PostDeliveryWhereInput
    /**
     * Limit how many PostDeliveries to update.
     */
    limit?: number
  }

  /**
   * PostDelivery updateManyAndReturn
   */
  export type PostDeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * The data used to update PostDeliveries.
     */
    data: XOR<PostDeliveryUpdateManyMutationInput, PostDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which PostDeliveries to update
     */
    where?: PostDeliveryWhereInput
    /**
     * Limit how many PostDeliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostDelivery upsert
   */
  export type PostDeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the PostDelivery to update in case it exists.
     */
    where: PostDeliveryWhereUniqueInput
    /**
     * In case the PostDelivery found by the `where` argument doesn't exist, create a new PostDelivery with this data.
     */
    create: XOR<PostDeliveryCreateInput, PostDeliveryUncheckedCreateInput>
    /**
     * In case the PostDelivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostDeliveryUpdateInput, PostDeliveryUncheckedUpdateInput>
  }

  /**
   * PostDelivery delete
   */
  export type PostDeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryInclude<ExtArgs> | null
    /**
     * Filter which PostDelivery to delete.
     */
    where: PostDeliveryWhereUniqueInput
  }

  /**
   * PostDelivery deleteMany
   */
  export type PostDeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostDeliveries to delete
     */
    where?: PostDeliveryWhereInput
    /**
     * Limit how many PostDeliveries to delete.
     */
    limit?: number
  }

  /**
   * PostDelivery without action
   */
  export type PostDeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDelivery
     */
    select?: PostDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDelivery
     */
    omit?: PostDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDeliveryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChannelScalarFieldEnum: {
    id: 'id',
    key: 'key',
    chatId: 'chatId',
    username: 'username',
    title: 'title',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const ChannelRuleScalarFieldEnum: {
    id: 'id',
    channelId: 'channelId',
    type: 'type',
    value: 'value',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChannelRuleScalarFieldEnum = (typeof ChannelRuleScalarFieldEnum)[keyof typeof ChannelRuleScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    status: 'status',
    payload: 'payload',
    payloadHash: 'payloadHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostDeliveryScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    channelId: 'channelId',
    revision: 'revision',
    status: 'status',
    telegramMessageId: 'telegramMessageId',
    attempts: 'attempts',
    lastError: 'lastError',
    sentAt: 'sentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostDeliveryScalarFieldEnum = (typeof PostDeliveryScalarFieldEnum)[keyof typeof PostDeliveryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ChannelRuleType'
   */
  export type EnumChannelRuleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelRuleType'>
    


  /**
   * Reference to a field of type 'ChannelRuleType[]'
   */
  export type ListEnumChannelRuleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelRuleType[]'>
    


  /**
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'PostStatus[]'
   */
  export type ListEnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DeliveryStatus'
   */
  export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>
    


  /**
   * Reference to a field of type 'DeliveryStatus[]'
   */
  export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ChannelWhereInput = {
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    id?: StringFilter<"Channel"> | string
    key?: StringFilter<"Channel"> | string
    chatId?: StringFilter<"Channel"> | string
    username?: StringNullableFilter<"Channel"> | string | null
    title?: StringNullableFilter<"Channel"> | string | null
    isActive?: BoolFilter<"Channel"> | boolean
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    rules?: ChannelRuleListRelationFilter
    deliveries?: PostDeliveryListRelationFilter
  }

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    chatId?: SortOrder
    username?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rules?: ChannelRuleOrderByRelationAggregateInput
    deliveries?: PostDeliveryOrderByRelationAggregateInput
  }

  export type ChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    chatId?: StringFilter<"Channel"> | string
    username?: StringNullableFilter<"Channel"> | string | null
    title?: StringNullableFilter<"Channel"> | string | null
    isActive?: BoolFilter<"Channel"> | boolean
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    rules?: ChannelRuleListRelationFilter
    deliveries?: PostDeliveryListRelationFilter
  }, "id" | "key">

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    chatId?: SortOrder
    username?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChannelCountOrderByAggregateInput
    _max?: ChannelMaxOrderByAggregateInput
    _min?: ChannelMinOrderByAggregateInput
  }

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    OR?: ChannelScalarWhereWithAggregatesInput[]
    NOT?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Channel"> | string
    key?: StringWithAggregatesFilter<"Channel"> | string
    chatId?: StringWithAggregatesFilter<"Channel"> | string
    username?: StringNullableWithAggregatesFilter<"Channel"> | string | null
    title?: StringNullableWithAggregatesFilter<"Channel"> | string | null
    isActive?: BoolWithAggregatesFilter<"Channel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
  }

  export type ChannelRuleWhereInput = {
    AND?: ChannelRuleWhereInput | ChannelRuleWhereInput[]
    OR?: ChannelRuleWhereInput[]
    NOT?: ChannelRuleWhereInput | ChannelRuleWhereInput[]
    id?: StringFilter<"ChannelRule"> | string
    channelId?: StringFilter<"ChannelRule"> | string
    type?: EnumChannelRuleTypeFilter<"ChannelRule"> | $Enums.ChannelRuleType
    value?: StringFilter<"ChannelRule"> | string
    isActive?: BoolFilter<"ChannelRule"> | boolean
    createdAt?: DateTimeFilter<"ChannelRule"> | Date | string
    updatedAt?: DateTimeFilter<"ChannelRule"> | Date | string
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }

  export type ChannelRuleOrderByWithRelationInput = {
    id?: SortOrder
    channelId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    channel?: ChannelOrderByWithRelationInput
  }

  export type ChannelRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    channelId_type_value?: ChannelRuleChannelIdTypeValueCompoundUniqueInput
    AND?: ChannelRuleWhereInput | ChannelRuleWhereInput[]
    OR?: ChannelRuleWhereInput[]
    NOT?: ChannelRuleWhereInput | ChannelRuleWhereInput[]
    channelId?: StringFilter<"ChannelRule"> | string
    type?: EnumChannelRuleTypeFilter<"ChannelRule"> | $Enums.ChannelRuleType
    value?: StringFilter<"ChannelRule"> | string
    isActive?: BoolFilter<"ChannelRule"> | boolean
    createdAt?: DateTimeFilter<"ChannelRule"> | Date | string
    updatedAt?: DateTimeFilter<"ChannelRule"> | Date | string
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }, "id" | "channelId_type_value">

  export type ChannelRuleOrderByWithAggregationInput = {
    id?: SortOrder
    channelId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChannelRuleCountOrderByAggregateInput
    _max?: ChannelRuleMaxOrderByAggregateInput
    _min?: ChannelRuleMinOrderByAggregateInput
  }

  export type ChannelRuleScalarWhereWithAggregatesInput = {
    AND?: ChannelRuleScalarWhereWithAggregatesInput | ChannelRuleScalarWhereWithAggregatesInput[]
    OR?: ChannelRuleScalarWhereWithAggregatesInput[]
    NOT?: ChannelRuleScalarWhereWithAggregatesInput | ChannelRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChannelRule"> | string
    channelId?: StringWithAggregatesFilter<"ChannelRule"> | string
    type?: EnumChannelRuleTypeWithAggregatesFilter<"ChannelRule"> | $Enums.ChannelRuleType
    value?: StringWithAggregatesFilter<"ChannelRule"> | string
    isActive?: BoolWithAggregatesFilter<"ChannelRule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChannelRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChannelRule"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    articleId?: StringFilter<"Post"> | string
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    payload?: JsonFilter<"Post">
    payloadHash?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    deliveries?: PostDeliveryListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrder
    status?: SortOrder
    payload?: SortOrder
    payloadHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveries?: PostDeliveryOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    articleId?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    payload?: JsonFilter<"Post">
    payloadHash?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    deliveries?: PostDeliveryListRelationFilter
  }, "id" | "articleId">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrder
    status?: SortOrder
    payload?: SortOrder
    payloadHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    articleId?: StringWithAggregatesFilter<"Post"> | string
    status?: EnumPostStatusWithAggregatesFilter<"Post"> | $Enums.PostStatus
    payload?: JsonWithAggregatesFilter<"Post">
    payloadHash?: StringNullableWithAggregatesFilter<"Post"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type PostDeliveryWhereInput = {
    AND?: PostDeliveryWhereInput | PostDeliveryWhereInput[]
    OR?: PostDeliveryWhereInput[]
    NOT?: PostDeliveryWhereInput | PostDeliveryWhereInput[]
    id?: StringFilter<"PostDelivery"> | string
    postId?: StringFilter<"PostDelivery"> | string
    channelId?: StringFilter<"PostDelivery"> | string
    revision?: IntFilter<"PostDelivery"> | number
    status?: EnumDeliveryStatusFilter<"PostDelivery"> | $Enums.DeliveryStatus
    telegramMessageId?: StringNullableFilter<"PostDelivery"> | string | null
    attempts?: IntFilter<"PostDelivery"> | number
    lastError?: StringNullableFilter<"PostDelivery"> | string | null
    sentAt?: DateTimeNullableFilter<"PostDelivery"> | Date | string | null
    createdAt?: DateTimeFilter<"PostDelivery"> | Date | string
    updatedAt?: DateTimeFilter<"PostDelivery"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }

  export type PostDeliveryOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    revision?: SortOrder
    status?: SortOrder
    telegramMessageId?: SortOrderInput | SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    channel?: ChannelOrderByWithRelationInput
  }

  export type PostDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_channelId_revision?: PostDeliveryPostIdChannelIdRevisionCompoundUniqueInput
    AND?: PostDeliveryWhereInput | PostDeliveryWhereInput[]
    OR?: PostDeliveryWhereInput[]
    NOT?: PostDeliveryWhereInput | PostDeliveryWhereInput[]
    postId?: StringFilter<"PostDelivery"> | string
    channelId?: StringFilter<"PostDelivery"> | string
    revision?: IntFilter<"PostDelivery"> | number
    status?: EnumDeliveryStatusFilter<"PostDelivery"> | $Enums.DeliveryStatus
    telegramMessageId?: StringNullableFilter<"PostDelivery"> | string | null
    attempts?: IntFilter<"PostDelivery"> | number
    lastError?: StringNullableFilter<"PostDelivery"> | string | null
    sentAt?: DateTimeNullableFilter<"PostDelivery"> | Date | string | null
    createdAt?: DateTimeFilter<"PostDelivery"> | Date | string
    updatedAt?: DateTimeFilter<"PostDelivery"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }, "id" | "postId_channelId_revision">

  export type PostDeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    revision?: SortOrder
    status?: SortOrder
    telegramMessageId?: SortOrderInput | SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostDeliveryCountOrderByAggregateInput
    _avg?: PostDeliveryAvgOrderByAggregateInput
    _max?: PostDeliveryMaxOrderByAggregateInput
    _min?: PostDeliveryMinOrderByAggregateInput
    _sum?: PostDeliverySumOrderByAggregateInput
  }

  export type PostDeliveryScalarWhereWithAggregatesInput = {
    AND?: PostDeliveryScalarWhereWithAggregatesInput | PostDeliveryScalarWhereWithAggregatesInput[]
    OR?: PostDeliveryScalarWhereWithAggregatesInput[]
    NOT?: PostDeliveryScalarWhereWithAggregatesInput | PostDeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostDelivery"> | string
    postId?: StringWithAggregatesFilter<"PostDelivery"> | string
    channelId?: StringWithAggregatesFilter<"PostDelivery"> | string
    revision?: IntWithAggregatesFilter<"PostDelivery"> | number
    status?: EnumDeliveryStatusWithAggregatesFilter<"PostDelivery"> | $Enums.DeliveryStatus
    telegramMessageId?: StringNullableWithAggregatesFilter<"PostDelivery"> | string | null
    attempts?: IntWithAggregatesFilter<"PostDelivery"> | number
    lastError?: StringNullableWithAggregatesFilter<"PostDelivery"> | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"PostDelivery"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PostDelivery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostDelivery"> | Date | string
  }

  export type ChannelCreateInput = {
    id?: string
    key: string
    chatId: string
    username?: string | null
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: ChannelRuleCreateNestedManyWithoutChannelInput
    deliveries?: PostDeliveryCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateInput = {
    id?: string
    key: string
    chatId: string
    username?: string | null
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: ChannelRuleUncheckedCreateNestedManyWithoutChannelInput
    deliveries?: PostDeliveryUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: ChannelRuleUpdateManyWithoutChannelNestedInput
    deliveries?: PostDeliveryUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: ChannelRuleUncheckedUpdateManyWithoutChannelNestedInput
    deliveries?: PostDeliveryUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelCreateManyInput = {
    id?: string
    key: string
    chatId: string
    username?: string | null
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelRuleCreateInput = {
    id?: string
    type?: $Enums.ChannelRuleType
    value: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: ChannelCreateNestedOneWithoutRulesInput
  }

  export type ChannelRuleUncheckedCreateInput = {
    id?: string
    channelId: string
    type?: $Enums.ChannelRuleType
    value: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelRuleTypeFieldUpdateOperationsInput | $Enums.ChannelRuleType
    value?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutRulesNestedInput
  }

  export type ChannelRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelRuleTypeFieldUpdateOperationsInput | $Enums.ChannelRuleType
    value?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelRuleCreateManyInput = {
    id?: string
    channelId: string
    type?: $Enums.ChannelRuleType
    value: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelRuleTypeFieldUpdateOperationsInput | $Enums.ChannelRuleType
    value?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelRuleTypeFieldUpdateOperationsInput | $Enums.ChannelRuleType
    value?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    articleId: string
    status?: $Enums.PostStatus
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: PostDeliveryCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    articleId: string
    status?: $Enums.PostStatus
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: PostDeliveryUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: PostDeliveryUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: PostDeliveryUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    articleId: string
    status?: $Enums.PostStatus
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDeliveryCreateInput = {
    id?: string
    revision?: number
    status?: $Enums.DeliveryStatus
    telegramMessageId?: string | null
    attempts?: number
    lastError?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutDeliveriesInput
    channel: ChannelCreateNestedOneWithoutDeliveriesInput
  }

  export type PostDeliveryUncheckedCreateInput = {
    id?: string
    postId: string
    channelId: string
    revision?: number
    status?: $Enums.DeliveryStatus
    telegramMessageId?: string | null
    attempts?: number
    lastError?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostDeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutDeliveriesNestedInput
    channel?: ChannelUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type PostDeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDeliveryCreateManyInput = {
    id?: string
    postId: string
    channelId: string
    revision?: number
    status?: $Enums.DeliveryStatus
    telegramMessageId?: string | null
    attempts?: number
    lastError?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostDeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChannelRuleListRelationFilter = {
    every?: ChannelRuleWhereInput
    some?: ChannelRuleWhereInput
    none?: ChannelRuleWhereInput
  }

  export type PostDeliveryListRelationFilter = {
    every?: PostDeliveryWhereInput
    some?: PostDeliveryWhereInput
    none?: PostDeliveryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChannelRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostDeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    chatId?: SortOrder
    username?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    chatId?: SortOrder
    username?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    chatId?: SortOrder
    username?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumChannelRuleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelRuleType | EnumChannelRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelRuleType[] | ListEnumChannelRuleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelRuleType[] | ListEnumChannelRuleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelRuleTypeFilter<$PrismaModel> | $Enums.ChannelRuleType
  }

  export type ChannelScalarRelationFilter = {
    is?: ChannelWhereInput
    isNot?: ChannelWhereInput
  }

  export type ChannelRuleChannelIdTypeValueCompoundUniqueInput = {
    channelId: string
    type: $Enums.ChannelRuleType
    value: string
  }

  export type ChannelRuleCountOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelRuleMinOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumChannelRuleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelRuleType | EnumChannelRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelRuleType[] | ListEnumChannelRuleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelRuleType[] | ListEnumChannelRuleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelRuleTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChannelRuleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelRuleTypeFilter<$PrismaModel>
    _max?: NestedEnumChannelRuleTypeFilter<$PrismaModel>
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    status?: SortOrder
    payload?: SortOrder
    payloadHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    status?: SortOrder
    payloadHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    status?: SortOrder
    payloadHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostDeliveryPostIdChannelIdRevisionCompoundUniqueInput = {
    postId: string
    channelId: string
    revision: number
  }

  export type PostDeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    revision?: SortOrder
    status?: SortOrder
    telegramMessageId?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostDeliveryAvgOrderByAggregateInput = {
    revision?: SortOrder
    attempts?: SortOrder
  }

  export type PostDeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    revision?: SortOrder
    status?: SortOrder
    telegramMessageId?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostDeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    channelId?: SortOrder
    revision?: SortOrder
    status?: SortOrder
    telegramMessageId?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostDeliverySumOrderByAggregateInput = {
    revision?: SortOrder
    attempts?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ChannelRuleCreateNestedManyWithoutChannelInput = {
    create?: XOR<ChannelRuleCreateWithoutChannelInput, ChannelRuleUncheckedCreateWithoutChannelInput> | ChannelRuleCreateWithoutChannelInput[] | ChannelRuleUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelRuleCreateOrConnectWithoutChannelInput | ChannelRuleCreateOrConnectWithoutChannelInput[]
    createMany?: ChannelRuleCreateManyChannelInputEnvelope
    connect?: ChannelRuleWhereUniqueInput | ChannelRuleWhereUniqueInput[]
  }

  export type PostDeliveryCreateNestedManyWithoutChannelInput = {
    create?: XOR<PostDeliveryCreateWithoutChannelInput, PostDeliveryUncheckedCreateWithoutChannelInput> | PostDeliveryCreateWithoutChannelInput[] | PostDeliveryUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostDeliveryCreateOrConnectWithoutChannelInput | PostDeliveryCreateOrConnectWithoutChannelInput[]
    createMany?: PostDeliveryCreateManyChannelInputEnvelope
    connect?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
  }

  export type ChannelRuleUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<ChannelRuleCreateWithoutChannelInput, ChannelRuleUncheckedCreateWithoutChannelInput> | ChannelRuleCreateWithoutChannelInput[] | ChannelRuleUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelRuleCreateOrConnectWithoutChannelInput | ChannelRuleCreateOrConnectWithoutChannelInput[]
    createMany?: ChannelRuleCreateManyChannelInputEnvelope
    connect?: ChannelRuleWhereUniqueInput | ChannelRuleWhereUniqueInput[]
  }

  export type PostDeliveryUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<PostDeliveryCreateWithoutChannelInput, PostDeliveryUncheckedCreateWithoutChannelInput> | PostDeliveryCreateWithoutChannelInput[] | PostDeliveryUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostDeliveryCreateOrConnectWithoutChannelInput | PostDeliveryCreateOrConnectWithoutChannelInput[]
    createMany?: PostDeliveryCreateManyChannelInputEnvelope
    connect?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChannelRuleUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ChannelRuleCreateWithoutChannelInput, ChannelRuleUncheckedCreateWithoutChannelInput> | ChannelRuleCreateWithoutChannelInput[] | ChannelRuleUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelRuleCreateOrConnectWithoutChannelInput | ChannelRuleCreateOrConnectWithoutChannelInput[]
    upsert?: ChannelRuleUpsertWithWhereUniqueWithoutChannelInput | ChannelRuleUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ChannelRuleCreateManyChannelInputEnvelope
    set?: ChannelRuleWhereUniqueInput | ChannelRuleWhereUniqueInput[]
    disconnect?: ChannelRuleWhereUniqueInput | ChannelRuleWhereUniqueInput[]
    delete?: ChannelRuleWhereUniqueInput | ChannelRuleWhereUniqueInput[]
    connect?: ChannelRuleWhereUniqueInput | ChannelRuleWhereUniqueInput[]
    update?: ChannelRuleUpdateWithWhereUniqueWithoutChannelInput | ChannelRuleUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ChannelRuleUpdateManyWithWhereWithoutChannelInput | ChannelRuleUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ChannelRuleScalarWhereInput | ChannelRuleScalarWhereInput[]
  }

  export type PostDeliveryUpdateManyWithoutChannelNestedInput = {
    create?: XOR<PostDeliveryCreateWithoutChannelInput, PostDeliveryUncheckedCreateWithoutChannelInput> | PostDeliveryCreateWithoutChannelInput[] | PostDeliveryUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostDeliveryCreateOrConnectWithoutChannelInput | PostDeliveryCreateOrConnectWithoutChannelInput[]
    upsert?: PostDeliveryUpsertWithWhereUniqueWithoutChannelInput | PostDeliveryUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: PostDeliveryCreateManyChannelInputEnvelope
    set?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    disconnect?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    delete?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    connect?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    update?: PostDeliveryUpdateWithWhereUniqueWithoutChannelInput | PostDeliveryUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: PostDeliveryUpdateManyWithWhereWithoutChannelInput | PostDeliveryUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: PostDeliveryScalarWhereInput | PostDeliveryScalarWhereInput[]
  }

  export type ChannelRuleUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ChannelRuleCreateWithoutChannelInput, ChannelRuleUncheckedCreateWithoutChannelInput> | ChannelRuleCreateWithoutChannelInput[] | ChannelRuleUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelRuleCreateOrConnectWithoutChannelInput | ChannelRuleCreateOrConnectWithoutChannelInput[]
    upsert?: ChannelRuleUpsertWithWhereUniqueWithoutChannelInput | ChannelRuleUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ChannelRuleCreateManyChannelInputEnvelope
    set?: ChannelRuleWhereUniqueInput | ChannelRuleWhereUniqueInput[]
    disconnect?: ChannelRuleWhereUniqueInput | ChannelRuleWhereUniqueInput[]
    delete?: ChannelRuleWhereUniqueInput | ChannelRuleWhereUniqueInput[]
    connect?: ChannelRuleWhereUniqueInput | ChannelRuleWhereUniqueInput[]
    update?: ChannelRuleUpdateWithWhereUniqueWithoutChannelInput | ChannelRuleUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ChannelRuleUpdateManyWithWhereWithoutChannelInput | ChannelRuleUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ChannelRuleScalarWhereInput | ChannelRuleScalarWhereInput[]
  }

  export type PostDeliveryUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<PostDeliveryCreateWithoutChannelInput, PostDeliveryUncheckedCreateWithoutChannelInput> | PostDeliveryCreateWithoutChannelInput[] | PostDeliveryUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PostDeliveryCreateOrConnectWithoutChannelInput | PostDeliveryCreateOrConnectWithoutChannelInput[]
    upsert?: PostDeliveryUpsertWithWhereUniqueWithoutChannelInput | PostDeliveryUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: PostDeliveryCreateManyChannelInputEnvelope
    set?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    disconnect?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    delete?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    connect?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    update?: PostDeliveryUpdateWithWhereUniqueWithoutChannelInput | PostDeliveryUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: PostDeliveryUpdateManyWithWhereWithoutChannelInput | PostDeliveryUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: PostDeliveryScalarWhereInput | PostDeliveryScalarWhereInput[]
  }

  export type ChannelCreateNestedOneWithoutRulesInput = {
    create?: XOR<ChannelCreateWithoutRulesInput, ChannelUncheckedCreateWithoutRulesInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutRulesInput
    connect?: ChannelWhereUniqueInput
  }

  export type EnumChannelRuleTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChannelRuleType
  }

  export type ChannelUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<ChannelCreateWithoutRulesInput, ChannelUncheckedCreateWithoutRulesInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutRulesInput
    upsert?: ChannelUpsertWithoutRulesInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutRulesInput, ChannelUpdateWithoutRulesInput>, ChannelUncheckedUpdateWithoutRulesInput>
  }

  export type PostDeliveryCreateNestedManyWithoutPostInput = {
    create?: XOR<PostDeliveryCreateWithoutPostInput, PostDeliveryUncheckedCreateWithoutPostInput> | PostDeliveryCreateWithoutPostInput[] | PostDeliveryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostDeliveryCreateOrConnectWithoutPostInput | PostDeliveryCreateOrConnectWithoutPostInput[]
    createMany?: PostDeliveryCreateManyPostInputEnvelope
    connect?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
  }

  export type PostDeliveryUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostDeliveryCreateWithoutPostInput, PostDeliveryUncheckedCreateWithoutPostInput> | PostDeliveryCreateWithoutPostInput[] | PostDeliveryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostDeliveryCreateOrConnectWithoutPostInput | PostDeliveryCreateOrConnectWithoutPostInput[]
    createMany?: PostDeliveryCreateManyPostInputEnvelope
    connect?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type PostDeliveryUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostDeliveryCreateWithoutPostInput, PostDeliveryUncheckedCreateWithoutPostInput> | PostDeliveryCreateWithoutPostInput[] | PostDeliveryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostDeliveryCreateOrConnectWithoutPostInput | PostDeliveryCreateOrConnectWithoutPostInput[]
    upsert?: PostDeliveryUpsertWithWhereUniqueWithoutPostInput | PostDeliveryUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostDeliveryCreateManyPostInputEnvelope
    set?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    disconnect?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    delete?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    connect?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    update?: PostDeliveryUpdateWithWhereUniqueWithoutPostInput | PostDeliveryUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostDeliveryUpdateManyWithWhereWithoutPostInput | PostDeliveryUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostDeliveryScalarWhereInput | PostDeliveryScalarWhereInput[]
  }

  export type PostDeliveryUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostDeliveryCreateWithoutPostInput, PostDeliveryUncheckedCreateWithoutPostInput> | PostDeliveryCreateWithoutPostInput[] | PostDeliveryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostDeliveryCreateOrConnectWithoutPostInput | PostDeliveryCreateOrConnectWithoutPostInput[]
    upsert?: PostDeliveryUpsertWithWhereUniqueWithoutPostInput | PostDeliveryUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostDeliveryCreateManyPostInputEnvelope
    set?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    disconnect?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    delete?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    connect?: PostDeliveryWhereUniqueInput | PostDeliveryWhereUniqueInput[]
    update?: PostDeliveryUpdateWithWhereUniqueWithoutPostInput | PostDeliveryUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostDeliveryUpdateManyWithWhereWithoutPostInput | PostDeliveryUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostDeliveryScalarWhereInput | PostDeliveryScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<PostCreateWithoutDeliveriesInput, PostUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: PostCreateOrConnectWithoutDeliveriesInput
    connect?: PostWhereUniqueInput
  }

  export type ChannelCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<ChannelCreateWithoutDeliveriesInput, ChannelUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutDeliveriesInput
    connect?: ChannelWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PostUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<PostCreateWithoutDeliveriesInput, PostUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: PostCreateOrConnectWithoutDeliveriesInput
    upsert?: PostUpsertWithoutDeliveriesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutDeliveriesInput, PostUpdateWithoutDeliveriesInput>, PostUncheckedUpdateWithoutDeliveriesInput>
  }

  export type ChannelUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<ChannelCreateWithoutDeliveriesInput, ChannelUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutDeliveriesInput
    upsert?: ChannelUpsertWithoutDeliveriesInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutDeliveriesInput, ChannelUpdateWithoutDeliveriesInput>, ChannelUncheckedUpdateWithoutDeliveriesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumChannelRuleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelRuleType | EnumChannelRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelRuleType[] | ListEnumChannelRuleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelRuleType[] | ListEnumChannelRuleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelRuleTypeFilter<$PrismaModel> | $Enums.ChannelRuleType
  }

  export type NestedEnumChannelRuleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelRuleType | EnumChannelRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelRuleType[] | ListEnumChannelRuleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelRuleType[] | ListEnumChannelRuleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelRuleTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChannelRuleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelRuleTypeFilter<$PrismaModel>
    _max?: NestedEnumChannelRuleTypeFilter<$PrismaModel>
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ChannelRuleCreateWithoutChannelInput = {
    id?: string
    type?: $Enums.ChannelRuleType
    value: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelRuleUncheckedCreateWithoutChannelInput = {
    id?: string
    type?: $Enums.ChannelRuleType
    value: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelRuleCreateOrConnectWithoutChannelInput = {
    where: ChannelRuleWhereUniqueInput
    create: XOR<ChannelRuleCreateWithoutChannelInput, ChannelRuleUncheckedCreateWithoutChannelInput>
  }

  export type ChannelRuleCreateManyChannelInputEnvelope = {
    data: ChannelRuleCreateManyChannelInput | ChannelRuleCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type PostDeliveryCreateWithoutChannelInput = {
    id?: string
    revision?: number
    status?: $Enums.DeliveryStatus
    telegramMessageId?: string | null
    attempts?: number
    lastError?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutDeliveriesInput
  }

  export type PostDeliveryUncheckedCreateWithoutChannelInput = {
    id?: string
    postId: string
    revision?: number
    status?: $Enums.DeliveryStatus
    telegramMessageId?: string | null
    attempts?: number
    lastError?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostDeliveryCreateOrConnectWithoutChannelInput = {
    where: PostDeliveryWhereUniqueInput
    create: XOR<PostDeliveryCreateWithoutChannelInput, PostDeliveryUncheckedCreateWithoutChannelInput>
  }

  export type PostDeliveryCreateManyChannelInputEnvelope = {
    data: PostDeliveryCreateManyChannelInput | PostDeliveryCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type ChannelRuleUpsertWithWhereUniqueWithoutChannelInput = {
    where: ChannelRuleWhereUniqueInput
    update: XOR<ChannelRuleUpdateWithoutChannelInput, ChannelRuleUncheckedUpdateWithoutChannelInput>
    create: XOR<ChannelRuleCreateWithoutChannelInput, ChannelRuleUncheckedCreateWithoutChannelInput>
  }

  export type ChannelRuleUpdateWithWhereUniqueWithoutChannelInput = {
    where: ChannelRuleWhereUniqueInput
    data: XOR<ChannelRuleUpdateWithoutChannelInput, ChannelRuleUncheckedUpdateWithoutChannelInput>
  }

  export type ChannelRuleUpdateManyWithWhereWithoutChannelInput = {
    where: ChannelRuleScalarWhereInput
    data: XOR<ChannelRuleUpdateManyMutationInput, ChannelRuleUncheckedUpdateManyWithoutChannelInput>
  }

  export type ChannelRuleScalarWhereInput = {
    AND?: ChannelRuleScalarWhereInput | ChannelRuleScalarWhereInput[]
    OR?: ChannelRuleScalarWhereInput[]
    NOT?: ChannelRuleScalarWhereInput | ChannelRuleScalarWhereInput[]
    id?: StringFilter<"ChannelRule"> | string
    channelId?: StringFilter<"ChannelRule"> | string
    type?: EnumChannelRuleTypeFilter<"ChannelRule"> | $Enums.ChannelRuleType
    value?: StringFilter<"ChannelRule"> | string
    isActive?: BoolFilter<"ChannelRule"> | boolean
    createdAt?: DateTimeFilter<"ChannelRule"> | Date | string
    updatedAt?: DateTimeFilter<"ChannelRule"> | Date | string
  }

  export type PostDeliveryUpsertWithWhereUniqueWithoutChannelInput = {
    where: PostDeliveryWhereUniqueInput
    update: XOR<PostDeliveryUpdateWithoutChannelInput, PostDeliveryUncheckedUpdateWithoutChannelInput>
    create: XOR<PostDeliveryCreateWithoutChannelInput, PostDeliveryUncheckedCreateWithoutChannelInput>
  }

  export type PostDeliveryUpdateWithWhereUniqueWithoutChannelInput = {
    where: PostDeliveryWhereUniqueInput
    data: XOR<PostDeliveryUpdateWithoutChannelInput, PostDeliveryUncheckedUpdateWithoutChannelInput>
  }

  export type PostDeliveryUpdateManyWithWhereWithoutChannelInput = {
    where: PostDeliveryScalarWhereInput
    data: XOR<PostDeliveryUpdateManyMutationInput, PostDeliveryUncheckedUpdateManyWithoutChannelInput>
  }

  export type PostDeliveryScalarWhereInput = {
    AND?: PostDeliveryScalarWhereInput | PostDeliveryScalarWhereInput[]
    OR?: PostDeliveryScalarWhereInput[]
    NOT?: PostDeliveryScalarWhereInput | PostDeliveryScalarWhereInput[]
    id?: StringFilter<"PostDelivery"> | string
    postId?: StringFilter<"PostDelivery"> | string
    channelId?: StringFilter<"PostDelivery"> | string
    revision?: IntFilter<"PostDelivery"> | number
    status?: EnumDeliveryStatusFilter<"PostDelivery"> | $Enums.DeliveryStatus
    telegramMessageId?: StringNullableFilter<"PostDelivery"> | string | null
    attempts?: IntFilter<"PostDelivery"> | number
    lastError?: StringNullableFilter<"PostDelivery"> | string | null
    sentAt?: DateTimeNullableFilter<"PostDelivery"> | Date | string | null
    createdAt?: DateTimeFilter<"PostDelivery"> | Date | string
    updatedAt?: DateTimeFilter<"PostDelivery"> | Date | string
  }

  export type ChannelCreateWithoutRulesInput = {
    id?: string
    key: string
    chatId: string
    username?: string | null
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: PostDeliveryCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutRulesInput = {
    id?: string
    key: string
    chatId: string
    username?: string | null
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: PostDeliveryUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutRulesInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutRulesInput, ChannelUncheckedCreateWithoutRulesInput>
  }

  export type ChannelUpsertWithoutRulesInput = {
    update: XOR<ChannelUpdateWithoutRulesInput, ChannelUncheckedUpdateWithoutRulesInput>
    create: XOR<ChannelCreateWithoutRulesInput, ChannelUncheckedCreateWithoutRulesInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutRulesInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutRulesInput, ChannelUncheckedUpdateWithoutRulesInput>
  }

  export type ChannelUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: PostDeliveryUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: PostDeliveryUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type PostDeliveryCreateWithoutPostInput = {
    id?: string
    revision?: number
    status?: $Enums.DeliveryStatus
    telegramMessageId?: string | null
    attempts?: number
    lastError?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: ChannelCreateNestedOneWithoutDeliveriesInput
  }

  export type PostDeliveryUncheckedCreateWithoutPostInput = {
    id?: string
    channelId: string
    revision?: number
    status?: $Enums.DeliveryStatus
    telegramMessageId?: string | null
    attempts?: number
    lastError?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostDeliveryCreateOrConnectWithoutPostInput = {
    where: PostDeliveryWhereUniqueInput
    create: XOR<PostDeliveryCreateWithoutPostInput, PostDeliveryUncheckedCreateWithoutPostInput>
  }

  export type PostDeliveryCreateManyPostInputEnvelope = {
    data: PostDeliveryCreateManyPostInput | PostDeliveryCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostDeliveryUpsertWithWhereUniqueWithoutPostInput = {
    where: PostDeliveryWhereUniqueInput
    update: XOR<PostDeliveryUpdateWithoutPostInput, PostDeliveryUncheckedUpdateWithoutPostInput>
    create: XOR<PostDeliveryCreateWithoutPostInput, PostDeliveryUncheckedCreateWithoutPostInput>
  }

  export type PostDeliveryUpdateWithWhereUniqueWithoutPostInput = {
    where: PostDeliveryWhereUniqueInput
    data: XOR<PostDeliveryUpdateWithoutPostInput, PostDeliveryUncheckedUpdateWithoutPostInput>
  }

  export type PostDeliveryUpdateManyWithWhereWithoutPostInput = {
    where: PostDeliveryScalarWhereInput
    data: XOR<PostDeliveryUpdateManyMutationInput, PostDeliveryUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutDeliveriesInput = {
    id?: string
    articleId: string
    status?: $Enums.PostStatus
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    articleId: string
    status?: $Enums.PostStatus
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutDeliveriesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutDeliveriesInput, PostUncheckedCreateWithoutDeliveriesInput>
  }

  export type ChannelCreateWithoutDeliveriesInput = {
    id?: string
    key: string
    chatId: string
    username?: string | null
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: ChannelRuleCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    key: string
    chatId: string
    username?: string | null
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: ChannelRuleUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutDeliveriesInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutDeliveriesInput, ChannelUncheckedCreateWithoutDeliveriesInput>
  }

  export type PostUpsertWithoutDeliveriesInput = {
    update: XOR<PostUpdateWithoutDeliveriesInput, PostUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<PostCreateWithoutDeliveriesInput, PostUncheckedCreateWithoutDeliveriesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutDeliveriesInput, PostUncheckedUpdateWithoutDeliveriesInput>
  }

  export type PostUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUpsertWithoutDeliveriesInput = {
    update: XOR<ChannelUpdateWithoutDeliveriesInput, ChannelUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<ChannelCreateWithoutDeliveriesInput, ChannelUncheckedCreateWithoutDeliveriesInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutDeliveriesInput, ChannelUncheckedUpdateWithoutDeliveriesInput>
  }

  export type ChannelUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: ChannelRuleUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: ChannelRuleUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelRuleCreateManyChannelInput = {
    id?: string
    type?: $Enums.ChannelRuleType
    value: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostDeliveryCreateManyChannelInput = {
    id?: string
    postId: string
    revision?: number
    status?: $Enums.DeliveryStatus
    telegramMessageId?: string | null
    attempts?: number
    lastError?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelRuleUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelRuleTypeFieldUpdateOperationsInput | $Enums.ChannelRuleType
    value?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelRuleUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelRuleTypeFieldUpdateOperationsInput | $Enums.ChannelRuleType
    value?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelRuleUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelRuleTypeFieldUpdateOperationsInput | $Enums.ChannelRuleType
    value?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDeliveryUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type PostDeliveryUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDeliveryUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDeliveryCreateManyPostInput = {
    id?: string
    channelId: string
    revision?: number
    status?: $Enums.DeliveryStatus
    telegramMessageId?: string | null
    attempts?: number
    lastError?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostDeliveryUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type PostDeliveryUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDeliveryUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    revision?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}