
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Merchant
 * 
 */
export type Merchant = $Result.DefaultSelection<Prisma.$MerchantPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model DefaultAccount
 * 
 */
export type DefaultAccount = $Result.DefaultSelection<Prisma.$DefaultAccountPayload>
/**
 * Model Accounts
 * 
 */
export type Accounts = $Result.DefaultSelection<Prisma.$AccountsPayload>
/**
 * Model LinkedBankToken
 * 
 */
export type LinkedBankToken = $Result.DefaultSelection<Prisma.$LinkedBankTokenPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthType: {
  Google: 'Google',
  Github: 'Github'
};

export type AuthType = (typeof AuthType)[keyof typeof AuthType]


export const Txn_status: {
  success: 'success',
  failed: 'failed',
  pending: 'pending'
};

export type Txn_status = (typeof Txn_status)[keyof typeof Txn_status]


export const Acc_status: {
  active: 'active',
  closed: 'closed',
  frozen: 'frozen'
};

export type Acc_status = (typeof Acc_status)[keyof typeof Acc_status]


export const Txn_type: {
  credit: 'credit',
  debit: 'debit'
};

export type Txn_type = (typeof Txn_type)[keyof typeof Txn_type]


export const Acc_type: {
  savings: 'savings',
  checking: 'checking',
  wallet: 'wallet',
  joint: 'joint',
  business: 'business'
};

export type Acc_type = (typeof Acc_type)[keyof typeof Acc_type]


export const Txn_channel: {
  upi: 'upi',
  wallet: 'wallet',
  netbanking: 'netbanking',
  card: 'card'
};

export type Txn_channel = (typeof Txn_channel)[keyof typeof Txn_channel]


export const Bank_name: {
  icici: 'icici',
  sbi: 'sbi',
  hdfc: 'hdfc',
  ubi: 'ubi'
};

export type Bank_name = (typeof Bank_name)[keyof typeof Bank_name]

}

export type AuthType = $Enums.AuthType

export const AuthType: typeof $Enums.AuthType

export type Txn_status = $Enums.Txn_status

export const Txn_status: typeof $Enums.Txn_status

export type Acc_status = $Enums.Acc_status

export const Acc_status: typeof $Enums.Acc_status

export type Txn_type = $Enums.Txn_type

export const Txn_type: typeof $Enums.Txn_type

export type Acc_type = $Enums.Acc_type

export const Acc_type: typeof $Enums.Acc_type

export type Txn_channel = $Enums.Txn_channel

export const Txn_channel: typeof $Enums.Txn_channel

export type Bank_name = $Enums.Bank_name

export const Bank_name: typeof $Enums.Bank_name

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.merchant`: Exposes CRUD operations for the **Merchant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merchants
    * const merchants = await prisma.merchant.findMany()
    * ```
    */
  get merchant(): Prisma.MerchantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.defaultAccount`: Exposes CRUD operations for the **DefaultAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DefaultAccounts
    * const defaultAccounts = await prisma.defaultAccount.findMany()
    * ```
    */
  get defaultAccount(): Prisma.DefaultAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **Accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.AccountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkedBankToken`: Exposes CRUD operations for the **LinkedBankToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkedBankTokens
    * const linkedBankTokens = await prisma.linkedBankToken.findMany()
    * ```
    */
  get linkedBankToken(): Prisma.LinkedBankTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Merchant: 'Merchant',
    Verification: 'Verification',
    DefaultAccount: 'DefaultAccount',
    Accounts: 'Accounts',
    LinkedBankToken: 'LinkedBankToken',
    Transactions: 'Transactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "merchant" | "verification" | "defaultAccount" | "accounts" | "linkedBankToken" | "transactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Merchant: {
        payload: Prisma.$MerchantPayload<ExtArgs>
        fields: Prisma.MerchantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findFirst: {
            args: Prisma.MerchantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findMany: {
            args: Prisma.MerchantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          create: {
            args: Prisma.MerchantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          createMany: {
            args: Prisma.MerchantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          delete: {
            args: Prisma.MerchantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          update: {
            args: Prisma.MerchantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          deleteMany: {
            args: Prisma.MerchantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MerchantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          upsert: {
            args: Prisma.MerchantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          aggregate: {
            args: Prisma.MerchantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchant>
          }
          groupBy: {
            args: Prisma.MerchantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchantCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      DefaultAccount: {
        payload: Prisma.$DefaultAccountPayload<ExtArgs>
        fields: Prisma.DefaultAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DefaultAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DefaultAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultAccountPayload>
          }
          findFirst: {
            args: Prisma.DefaultAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DefaultAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultAccountPayload>
          }
          findMany: {
            args: Prisma.DefaultAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultAccountPayload>[]
          }
          create: {
            args: Prisma.DefaultAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultAccountPayload>
          }
          createMany: {
            args: Prisma.DefaultAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DefaultAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultAccountPayload>[]
          }
          delete: {
            args: Prisma.DefaultAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultAccountPayload>
          }
          update: {
            args: Prisma.DefaultAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultAccountPayload>
          }
          deleteMany: {
            args: Prisma.DefaultAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DefaultAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DefaultAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultAccountPayload>[]
          }
          upsert: {
            args: Prisma.DefaultAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultAccountPayload>
          }
          aggregate: {
            args: Prisma.DefaultAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDefaultAccount>
          }
          groupBy: {
            args: Prisma.DefaultAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<DefaultAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.DefaultAccountCountArgs<ExtArgs>
            result: $Utils.Optional<DefaultAccountCountAggregateOutputType> | number
          }
        }
      }
      Accounts: {
        payload: Prisma.$AccountsPayload<ExtArgs>
        fields: Prisma.AccountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findFirst: {
            args: Prisma.AccountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findMany: {
            args: Prisma.AccountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          create: {
            args: Prisma.AccountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          createMany: {
            args: Prisma.AccountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          delete: {
            args: Prisma.AccountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          update: {
            args: Prisma.AccountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          deleteMany: {
            args: Prisma.AccountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          upsert: {
            args: Prisma.AccountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.AccountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      LinkedBankToken: {
        payload: Prisma.$LinkedBankTokenPayload<ExtArgs>
        fields: Prisma.LinkedBankTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkedBankTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedBankTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkedBankTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedBankTokenPayload>
          }
          findFirst: {
            args: Prisma.LinkedBankTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedBankTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkedBankTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedBankTokenPayload>
          }
          findMany: {
            args: Prisma.LinkedBankTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedBankTokenPayload>[]
          }
          create: {
            args: Prisma.LinkedBankTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedBankTokenPayload>
          }
          createMany: {
            args: Prisma.LinkedBankTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkedBankTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedBankTokenPayload>[]
          }
          delete: {
            args: Prisma.LinkedBankTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedBankTokenPayload>
          }
          update: {
            args: Prisma.LinkedBankTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedBankTokenPayload>
          }
          deleteMany: {
            args: Prisma.LinkedBankTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkedBankTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkedBankTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedBankTokenPayload>[]
          }
          upsert: {
            args: Prisma.LinkedBankTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedBankTokenPayload>
          }
          aggregate: {
            args: Prisma.LinkedBankTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkedBankToken>
          }
          groupBy: {
            args: Prisma.LinkedBankTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkedBankTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkedBankTokenCountArgs<ExtArgs>
            result: $Utils.Optional<LinkedBankTokenCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    merchant?: MerchantOmit
    verification?: VerificationOmit
    defaultAccount?: DefaultAccountOmit
    accounts?: AccountsOmit
    linkedBankToken?: LinkedBankTokenOmit
    transactions?: TransactionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    verifications: number
    accounts: number
    linkedbankedtoken: number
    defaultAccount: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verifications?: boolean | UserCountOutputTypeCountVerificationsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    linkedbankedtoken?: boolean | UserCountOutputTypeCountLinkedbankedtokenArgs
    defaultAccount?: boolean | UserCountOutputTypeCountDefaultAccountArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinkedbankedtokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedBankTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDefaultAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DefaultAccountWhereInput
  }


  /**
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    transactions: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AccountsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    number: string | null
    password: string | null
    isVerified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    number: string | null
    password: string | null
    isVerified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    number: number
    password: number
    isVerified: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    number?: true
    password?: true
    isVerified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    number?: true
    password?: true
    isVerified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    number?: true
    password?: true
    isVerified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string | null
    username: string | null
    number: string
    password: string
    isVerified: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    number?: boolean
    password?: boolean
    isVerified?: boolean
    verifications?: boolean | User$verificationsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    linkedbankedtoken?: boolean | User$linkedbankedtokenArgs<ExtArgs>
    defaultAccount?: boolean | User$defaultAccountArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    number?: boolean
    password?: boolean
    isVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    number?: boolean
    password?: boolean
    isVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    number?: boolean
    password?: boolean
    isVerified?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "number" | "password" | "isVerified", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verifications?: boolean | User$verificationsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    linkedbankedtoken?: boolean | User$linkedbankedtokenArgs<ExtArgs>
    defaultAccount?: boolean | User$defaultAccountArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      verifications: Prisma.$VerificationPayload<ExtArgs>[]
      accounts: Prisma.$AccountsPayload<ExtArgs>[]
      linkedbankedtoken: Prisma.$LinkedBankTokenPayload<ExtArgs>[]
      defaultAccount: Prisma.$DefaultAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      username: string | null
      number: string
      password: string
      isVerified: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verifications<T extends User$verificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkedbankedtoken<T extends User$linkedbankedtokenArgs<ExtArgs> = {}>(args?: Subset<T, User$linkedbankedtokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedBankTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    defaultAccount<T extends User$defaultAccountArgs<ExtArgs> = {}>(args?: Subset<T, User$defaultAccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly number: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.verifications
   */
  export type User$verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    cursor?: VerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    where?: AccountsWhereInput
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    cursor?: AccountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * User.linkedbankedtoken
   */
  export type User$linkedbankedtokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenInclude<ExtArgs> | null
    where?: LinkedBankTokenWhereInput
    orderBy?: LinkedBankTokenOrderByWithRelationInput | LinkedBankTokenOrderByWithRelationInput[]
    cursor?: LinkedBankTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkedBankTokenScalarFieldEnum | LinkedBankTokenScalarFieldEnum[]
  }

  /**
   * User.defaultAccount
   */
  export type User$defaultAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountInclude<ExtArgs> | null
    where?: DefaultAccountWhereInput
    orderBy?: DefaultAccountOrderByWithRelationInput | DefaultAccountOrderByWithRelationInput[]
    cursor?: DefaultAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DefaultAccountScalarFieldEnum | DefaultAccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Merchant
   */

  export type AggregateMerchant = {
    _count: MerchantCountAggregateOutputType | null
    _avg: MerchantAvgAggregateOutputType | null
    _sum: MerchantSumAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  export type MerchantAvgAggregateOutputType = {
    id: number | null
  }

  export type MerchantSumAggregateOutputType = {
    id: number | null
  }

  export type MerchantMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    auth_type: $Enums.AuthType | null
  }

  export type MerchantMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    auth_type: $Enums.AuthType | null
  }

  export type MerchantCountAggregateOutputType = {
    id: number
    email: number
    name: number
    auth_type: number
    _all: number
  }


  export type MerchantAvgAggregateInputType = {
    id?: true
  }

  export type MerchantSumAggregateInputType = {
    id?: true
  }

  export type MerchantMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    auth_type?: true
  }

  export type MerchantMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    auth_type?: true
  }

  export type MerchantCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    auth_type?: true
    _all?: true
  }

  export type MerchantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchant to aggregate.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Merchants
    **/
    _count?: true | MerchantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerchantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerchantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantMaxAggregateInputType
  }

  export type GetMerchantAggregateType<T extends MerchantAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchant[P]>
      : GetScalarType<T[P], AggregateMerchant[P]>
  }




  export type MerchantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantWhereInput
    orderBy?: MerchantOrderByWithAggregationInput | MerchantOrderByWithAggregationInput[]
    by: MerchantScalarFieldEnum[] | MerchantScalarFieldEnum
    having?: MerchantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantCountAggregateInputType | true
    _avg?: MerchantAvgAggregateInputType
    _sum?: MerchantSumAggregateInputType
    _min?: MerchantMinAggregateInputType
    _max?: MerchantMaxAggregateInputType
  }

  export type MerchantGroupByOutputType = {
    id: number
    email: string
    name: string | null
    auth_type: $Enums.AuthType
    _count: MerchantCountAggregateOutputType | null
    _avg: MerchantAvgAggregateOutputType | null
    _sum: MerchantSumAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  type GetMerchantGroupByPayload<T extends MerchantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantGroupByOutputType[P]>
        }
      >
    >


  export type MerchantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    auth_type?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    auth_type?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    auth_type?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    auth_type?: boolean
  }

  export type MerchantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "auth_type", ExtArgs["result"]["merchant"]>

  export type $MerchantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Merchant"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      auth_type: $Enums.AuthType
    }, ExtArgs["result"]["merchant"]>
    composites: {}
  }

  type MerchantGetPayload<S extends boolean | null | undefined | MerchantDefaultArgs> = $Result.GetResult<Prisma.$MerchantPayload, S>

  type MerchantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MerchantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MerchantCountAggregateInputType | true
    }

  export interface MerchantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Merchant'], meta: { name: 'Merchant' } }
    /**
     * Find zero or one Merchant that matches the filter.
     * @param {MerchantFindUniqueArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchantFindUniqueArgs>(args: SelectSubset<T, MerchantFindUniqueArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Merchant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MerchantFindUniqueOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchantFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchantFindFirstArgs>(args?: SelectSubset<T, MerchantFindFirstArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchantFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merchants
     * const merchants = await prisma.merchant.findMany()
     * 
     * // Get first 10 Merchants
     * const merchants = await prisma.merchant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantWithIdOnly = await prisma.merchant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchantFindManyArgs>(args?: SelectSubset<T, MerchantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Merchant.
     * @param {MerchantCreateArgs} args - Arguments to create a Merchant.
     * @example
     * // Create one Merchant
     * const Merchant = await prisma.merchant.create({
     *   data: {
     *     // ... data to create a Merchant
     *   }
     * })
     * 
     */
    create<T extends MerchantCreateArgs>(args: SelectSubset<T, MerchantCreateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Merchants.
     * @param {MerchantCreateManyArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchantCreateManyArgs>(args?: SelectSubset<T, MerchantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merchants and returns the data saved in the database.
     * @param {MerchantCreateManyAndReturnArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchantCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Merchant.
     * @param {MerchantDeleteArgs} args - Arguments to delete one Merchant.
     * @example
     * // Delete one Merchant
     * const Merchant = await prisma.merchant.delete({
     *   where: {
     *     // ... filter to delete one Merchant
     *   }
     * })
     * 
     */
    delete<T extends MerchantDeleteArgs>(args: SelectSubset<T, MerchantDeleteArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Merchant.
     * @param {MerchantUpdateArgs} args - Arguments to update one Merchant.
     * @example
     * // Update one Merchant
     * const merchant = await prisma.merchant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchantUpdateArgs>(args: SelectSubset<T, MerchantUpdateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Merchants.
     * @param {MerchantDeleteManyArgs} args - Arguments to filter Merchants to delete.
     * @example
     * // Delete a few Merchants
     * const { count } = await prisma.merchant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchantDeleteManyArgs>(args?: SelectSubset<T, MerchantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchantUpdateManyArgs>(args: SelectSubset<T, MerchantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants and returns the data updated in the database.
     * @param {MerchantUpdateManyAndReturnArgs} args - Arguments to update many Merchants.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.updateManyAndReturn({
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
    updateManyAndReturn<T extends MerchantUpdateManyAndReturnArgs>(args: SelectSubset<T, MerchantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Merchant.
     * @param {MerchantUpsertArgs} args - Arguments to update or create a Merchant.
     * @example
     * // Update or create a Merchant
     * const merchant = await prisma.merchant.upsert({
     *   create: {
     *     // ... data to create a Merchant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merchant we want to update
     *   }
     * })
     */
    upsert<T extends MerchantUpsertArgs>(args: SelectSubset<T, MerchantUpsertArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCountArgs} args - Arguments to filter Merchants to count.
     * @example
     * // Count the number of Merchants
     * const count = await prisma.merchant.count({
     *   where: {
     *     // ... the filter for the Merchants we want to count
     *   }
     * })
    **/
    count<T extends MerchantCountArgs>(
      args?: Subset<T, MerchantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MerchantAggregateArgs>(args: Subset<T, MerchantAggregateArgs>): Prisma.PrismaPromise<GetMerchantAggregateType<T>>

    /**
     * Group by Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantGroupByArgs} args - Group by arguments.
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
      T extends MerchantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchantGroupByArgs['orderBy'] }
        : { orderBy?: MerchantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MerchantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Merchant model
   */
  readonly fields: MerchantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Merchant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Merchant model
   */
  interface MerchantFieldRefs {
    readonly id: FieldRef<"Merchant", 'Int'>
    readonly email: FieldRef<"Merchant", 'String'>
    readonly name: FieldRef<"Merchant", 'String'>
    readonly auth_type: FieldRef<"Merchant", 'AuthType'>
  }
    

  // Custom InputTypes
  /**
   * Merchant findUnique
   */
  export type MerchantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findUniqueOrThrow
   */
  export type MerchantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findFirst
   */
  export type MerchantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findFirstOrThrow
   */
  export type MerchantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findMany
   */
  export type MerchantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Filter, which Merchants to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant create
   */
  export type MerchantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The data needed to create a Merchant.
     */
    data: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
  }

  /**
   * Merchant createMany
   */
  export type MerchantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant createManyAndReturn
   */
  export type MerchantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant update
   */
  export type MerchantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The data needed to update a Merchant.
     */
    data: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
    /**
     * Choose, which Merchant to update.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant updateMany
   */
  export type MerchantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
    /**
     * Limit how many Merchants to update.
     */
    limit?: number
  }

  /**
   * Merchant updateManyAndReturn
   */
  export type MerchantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
    /**
     * Limit how many Merchants to update.
     */
    limit?: number
  }

  /**
   * Merchant upsert
   */
  export type MerchantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The filter to search for the Merchant to update in case it exists.
     */
    where: MerchantWhereUniqueInput
    /**
     * In case the Merchant found by the `where` argument doesn't exist, create a new Merchant with this data.
     */
    create: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
    /**
     * In case the Merchant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
  }

  /**
   * Merchant delete
   */
  export type MerchantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Filter which Merchant to delete.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant deleteMany
   */
  export type MerchantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchants to delete
     */
    where?: MerchantWhereInput
    /**
     * Limit how many Merchants to delete.
     */
    limit?: number
  }

  /**
   * Merchant without action
   */
  export type MerchantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _avg: VerificationAvgAggregateOutputType | null
    _sum: VerificationSumAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type VerificationSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type VerificationMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    otp: string | null
    type: string | null
    expiresAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    otp: string | null
    type: string | null
    expiresAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    user_id: number
    otp: number
    type: number
    expiresAt: number
    _all: number
  }


  export type VerificationAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type VerificationSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type VerificationMinAggregateInputType = {
    id?: true
    user_id?: true
    otp?: true
    type?: true
    expiresAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    user_id?: true
    otp?: true
    type?: true
    expiresAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    user_id?: true
    otp?: true
    type?: true
    expiresAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _avg?: VerificationAvgAggregateInputType
    _sum?: VerificationSumAggregateInputType
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: number
    user_id: number
    otp: string
    type: string
    expiresAt: Date
    _count: VerificationCountAggregateOutputType | null
    _avg: VerificationAvgAggregateOutputType | null
    _sum: VerificationSumAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    otp?: boolean
    type?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    otp?: boolean
    type?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    otp?: boolean
    type?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    user_id?: boolean
    otp?: boolean
    type?: boolean
    expiresAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "otp" | "type" | "expiresAt", ExtArgs["result"]["verification"]>
  export type VerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      otp: string
      type: string
      expiresAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'Int'>
    readonly user_id: FieldRef<"Verification", 'Int'>
    readonly otp: FieldRef<"Verification", 'String'>
    readonly type: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
  }


  /**
   * Model DefaultAccount
   */

  export type AggregateDefaultAccount = {
    _count: DefaultAccountCountAggregateOutputType | null
    _avg: DefaultAccountAvgAggregateOutputType | null
    _sum: DefaultAccountSumAggregateOutputType | null
    _min: DefaultAccountMinAggregateOutputType | null
    _max: DefaultAccountMaxAggregateOutputType | null
  }

  export type DefaultAccountAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DefaultAccountSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DefaultAccountMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    bankName: $Enums.Bank_name | null
    accOrgType: $Enums.Acc_type | null
  }

  export type DefaultAccountMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    bankName: $Enums.Bank_name | null
    accOrgType: $Enums.Acc_type | null
  }

  export type DefaultAccountCountAggregateOutputType = {
    id: number
    user_id: number
    bankName: number
    accOrgType: number
    _all: number
  }


  export type DefaultAccountAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DefaultAccountSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DefaultAccountMinAggregateInputType = {
    id?: true
    user_id?: true
    bankName?: true
    accOrgType?: true
  }

  export type DefaultAccountMaxAggregateInputType = {
    id?: true
    user_id?: true
    bankName?: true
    accOrgType?: true
  }

  export type DefaultAccountCountAggregateInputType = {
    id?: true
    user_id?: true
    bankName?: true
    accOrgType?: true
    _all?: true
  }

  export type DefaultAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DefaultAccount to aggregate.
     */
    where?: DefaultAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultAccounts to fetch.
     */
    orderBy?: DefaultAccountOrderByWithRelationInput | DefaultAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DefaultAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DefaultAccounts
    **/
    _count?: true | DefaultAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DefaultAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DefaultAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DefaultAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DefaultAccountMaxAggregateInputType
  }

  export type GetDefaultAccountAggregateType<T extends DefaultAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateDefaultAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDefaultAccount[P]>
      : GetScalarType<T[P], AggregateDefaultAccount[P]>
  }




  export type DefaultAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DefaultAccountWhereInput
    orderBy?: DefaultAccountOrderByWithAggregationInput | DefaultAccountOrderByWithAggregationInput[]
    by: DefaultAccountScalarFieldEnum[] | DefaultAccountScalarFieldEnum
    having?: DefaultAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DefaultAccountCountAggregateInputType | true
    _avg?: DefaultAccountAvgAggregateInputType
    _sum?: DefaultAccountSumAggregateInputType
    _min?: DefaultAccountMinAggregateInputType
    _max?: DefaultAccountMaxAggregateInputType
  }

  export type DefaultAccountGroupByOutputType = {
    id: number
    user_id: number
    bankName: $Enums.Bank_name
    accOrgType: $Enums.Acc_type
    _count: DefaultAccountCountAggregateOutputType | null
    _avg: DefaultAccountAvgAggregateOutputType | null
    _sum: DefaultAccountSumAggregateOutputType | null
    _min: DefaultAccountMinAggregateOutputType | null
    _max: DefaultAccountMaxAggregateOutputType | null
  }

  type GetDefaultAccountGroupByPayload<T extends DefaultAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DefaultAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DefaultAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DefaultAccountGroupByOutputType[P]>
            : GetScalarType<T[P], DefaultAccountGroupByOutputType[P]>
        }
      >
    >


  export type DefaultAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bankName?: boolean
    accOrgType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["defaultAccount"]>

  export type DefaultAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bankName?: boolean
    accOrgType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["defaultAccount"]>

  export type DefaultAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bankName?: boolean
    accOrgType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["defaultAccount"]>

  export type DefaultAccountSelectScalar = {
    id?: boolean
    user_id?: boolean
    bankName?: boolean
    accOrgType?: boolean
  }

  export type DefaultAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "bankName" | "accOrgType", ExtArgs["result"]["defaultAccount"]>
  export type DefaultAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DefaultAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DefaultAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DefaultAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DefaultAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      bankName: $Enums.Bank_name
      accOrgType: $Enums.Acc_type
    }, ExtArgs["result"]["defaultAccount"]>
    composites: {}
  }

  type DefaultAccountGetPayload<S extends boolean | null | undefined | DefaultAccountDefaultArgs> = $Result.GetResult<Prisma.$DefaultAccountPayload, S>

  type DefaultAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DefaultAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DefaultAccountCountAggregateInputType | true
    }

  export interface DefaultAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DefaultAccount'], meta: { name: 'DefaultAccount' } }
    /**
     * Find zero or one DefaultAccount that matches the filter.
     * @param {DefaultAccountFindUniqueArgs} args - Arguments to find a DefaultAccount
     * @example
     * // Get one DefaultAccount
     * const defaultAccount = await prisma.defaultAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DefaultAccountFindUniqueArgs>(args: SelectSubset<T, DefaultAccountFindUniqueArgs<ExtArgs>>): Prisma__DefaultAccountClient<$Result.GetResult<Prisma.$DefaultAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DefaultAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DefaultAccountFindUniqueOrThrowArgs} args - Arguments to find a DefaultAccount
     * @example
     * // Get one DefaultAccount
     * const defaultAccount = await prisma.defaultAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DefaultAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, DefaultAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DefaultAccountClient<$Result.GetResult<Prisma.$DefaultAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DefaultAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultAccountFindFirstArgs} args - Arguments to find a DefaultAccount
     * @example
     * // Get one DefaultAccount
     * const defaultAccount = await prisma.defaultAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DefaultAccountFindFirstArgs>(args?: SelectSubset<T, DefaultAccountFindFirstArgs<ExtArgs>>): Prisma__DefaultAccountClient<$Result.GetResult<Prisma.$DefaultAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DefaultAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultAccountFindFirstOrThrowArgs} args - Arguments to find a DefaultAccount
     * @example
     * // Get one DefaultAccount
     * const defaultAccount = await prisma.defaultAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DefaultAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, DefaultAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__DefaultAccountClient<$Result.GetResult<Prisma.$DefaultAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DefaultAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DefaultAccounts
     * const defaultAccounts = await prisma.defaultAccount.findMany()
     * 
     * // Get first 10 DefaultAccounts
     * const defaultAccounts = await prisma.defaultAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const defaultAccountWithIdOnly = await prisma.defaultAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DefaultAccountFindManyArgs>(args?: SelectSubset<T, DefaultAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DefaultAccount.
     * @param {DefaultAccountCreateArgs} args - Arguments to create a DefaultAccount.
     * @example
     * // Create one DefaultAccount
     * const DefaultAccount = await prisma.defaultAccount.create({
     *   data: {
     *     // ... data to create a DefaultAccount
     *   }
     * })
     * 
     */
    create<T extends DefaultAccountCreateArgs>(args: SelectSubset<T, DefaultAccountCreateArgs<ExtArgs>>): Prisma__DefaultAccountClient<$Result.GetResult<Prisma.$DefaultAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DefaultAccounts.
     * @param {DefaultAccountCreateManyArgs} args - Arguments to create many DefaultAccounts.
     * @example
     * // Create many DefaultAccounts
     * const defaultAccount = await prisma.defaultAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DefaultAccountCreateManyArgs>(args?: SelectSubset<T, DefaultAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DefaultAccounts and returns the data saved in the database.
     * @param {DefaultAccountCreateManyAndReturnArgs} args - Arguments to create many DefaultAccounts.
     * @example
     * // Create many DefaultAccounts
     * const defaultAccount = await prisma.defaultAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DefaultAccounts and only return the `id`
     * const defaultAccountWithIdOnly = await prisma.defaultAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DefaultAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, DefaultAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DefaultAccount.
     * @param {DefaultAccountDeleteArgs} args - Arguments to delete one DefaultAccount.
     * @example
     * // Delete one DefaultAccount
     * const DefaultAccount = await prisma.defaultAccount.delete({
     *   where: {
     *     // ... filter to delete one DefaultAccount
     *   }
     * })
     * 
     */
    delete<T extends DefaultAccountDeleteArgs>(args: SelectSubset<T, DefaultAccountDeleteArgs<ExtArgs>>): Prisma__DefaultAccountClient<$Result.GetResult<Prisma.$DefaultAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DefaultAccount.
     * @param {DefaultAccountUpdateArgs} args - Arguments to update one DefaultAccount.
     * @example
     * // Update one DefaultAccount
     * const defaultAccount = await prisma.defaultAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DefaultAccountUpdateArgs>(args: SelectSubset<T, DefaultAccountUpdateArgs<ExtArgs>>): Prisma__DefaultAccountClient<$Result.GetResult<Prisma.$DefaultAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DefaultAccounts.
     * @param {DefaultAccountDeleteManyArgs} args - Arguments to filter DefaultAccounts to delete.
     * @example
     * // Delete a few DefaultAccounts
     * const { count } = await prisma.defaultAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DefaultAccountDeleteManyArgs>(args?: SelectSubset<T, DefaultAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DefaultAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DefaultAccounts
     * const defaultAccount = await prisma.defaultAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DefaultAccountUpdateManyArgs>(args: SelectSubset<T, DefaultAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DefaultAccounts and returns the data updated in the database.
     * @param {DefaultAccountUpdateManyAndReturnArgs} args - Arguments to update many DefaultAccounts.
     * @example
     * // Update many DefaultAccounts
     * const defaultAccount = await prisma.defaultAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DefaultAccounts and only return the `id`
     * const defaultAccountWithIdOnly = await prisma.defaultAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends DefaultAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, DefaultAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DefaultAccount.
     * @param {DefaultAccountUpsertArgs} args - Arguments to update or create a DefaultAccount.
     * @example
     * // Update or create a DefaultAccount
     * const defaultAccount = await prisma.defaultAccount.upsert({
     *   create: {
     *     // ... data to create a DefaultAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DefaultAccount we want to update
     *   }
     * })
     */
    upsert<T extends DefaultAccountUpsertArgs>(args: SelectSubset<T, DefaultAccountUpsertArgs<ExtArgs>>): Prisma__DefaultAccountClient<$Result.GetResult<Prisma.$DefaultAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DefaultAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultAccountCountArgs} args - Arguments to filter DefaultAccounts to count.
     * @example
     * // Count the number of DefaultAccounts
     * const count = await prisma.defaultAccount.count({
     *   where: {
     *     // ... the filter for the DefaultAccounts we want to count
     *   }
     * })
    **/
    count<T extends DefaultAccountCountArgs>(
      args?: Subset<T, DefaultAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DefaultAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DefaultAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DefaultAccountAggregateArgs>(args: Subset<T, DefaultAccountAggregateArgs>): Prisma.PrismaPromise<GetDefaultAccountAggregateType<T>>

    /**
     * Group by DefaultAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultAccountGroupByArgs} args - Group by arguments.
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
      T extends DefaultAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DefaultAccountGroupByArgs['orderBy'] }
        : { orderBy?: DefaultAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DefaultAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDefaultAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DefaultAccount model
   */
  readonly fields: DefaultAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DefaultAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DefaultAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DefaultAccount model
   */
  interface DefaultAccountFieldRefs {
    readonly id: FieldRef<"DefaultAccount", 'Int'>
    readonly user_id: FieldRef<"DefaultAccount", 'Int'>
    readonly bankName: FieldRef<"DefaultAccount", 'Bank_name'>
    readonly accOrgType: FieldRef<"DefaultAccount", 'Acc_type'>
  }
    

  // Custom InputTypes
  /**
   * DefaultAccount findUnique
   */
  export type DefaultAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountInclude<ExtArgs> | null
    /**
     * Filter, which DefaultAccount to fetch.
     */
    where: DefaultAccountWhereUniqueInput
  }

  /**
   * DefaultAccount findUniqueOrThrow
   */
  export type DefaultAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountInclude<ExtArgs> | null
    /**
     * Filter, which DefaultAccount to fetch.
     */
    where: DefaultAccountWhereUniqueInput
  }

  /**
   * DefaultAccount findFirst
   */
  export type DefaultAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountInclude<ExtArgs> | null
    /**
     * Filter, which DefaultAccount to fetch.
     */
    where?: DefaultAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultAccounts to fetch.
     */
    orderBy?: DefaultAccountOrderByWithRelationInput | DefaultAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DefaultAccounts.
     */
    cursor?: DefaultAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DefaultAccounts.
     */
    distinct?: DefaultAccountScalarFieldEnum | DefaultAccountScalarFieldEnum[]
  }

  /**
   * DefaultAccount findFirstOrThrow
   */
  export type DefaultAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountInclude<ExtArgs> | null
    /**
     * Filter, which DefaultAccount to fetch.
     */
    where?: DefaultAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultAccounts to fetch.
     */
    orderBy?: DefaultAccountOrderByWithRelationInput | DefaultAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DefaultAccounts.
     */
    cursor?: DefaultAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DefaultAccounts.
     */
    distinct?: DefaultAccountScalarFieldEnum | DefaultAccountScalarFieldEnum[]
  }

  /**
   * DefaultAccount findMany
   */
  export type DefaultAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountInclude<ExtArgs> | null
    /**
     * Filter, which DefaultAccounts to fetch.
     */
    where?: DefaultAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultAccounts to fetch.
     */
    orderBy?: DefaultAccountOrderByWithRelationInput | DefaultAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DefaultAccounts.
     */
    cursor?: DefaultAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultAccounts.
     */
    skip?: number
    distinct?: DefaultAccountScalarFieldEnum | DefaultAccountScalarFieldEnum[]
  }

  /**
   * DefaultAccount create
   */
  export type DefaultAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a DefaultAccount.
     */
    data: XOR<DefaultAccountCreateInput, DefaultAccountUncheckedCreateInput>
  }

  /**
   * DefaultAccount createMany
   */
  export type DefaultAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DefaultAccounts.
     */
    data: DefaultAccountCreateManyInput | DefaultAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DefaultAccount createManyAndReturn
   */
  export type DefaultAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * The data used to create many DefaultAccounts.
     */
    data: DefaultAccountCreateManyInput | DefaultAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DefaultAccount update
   */
  export type DefaultAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a DefaultAccount.
     */
    data: XOR<DefaultAccountUpdateInput, DefaultAccountUncheckedUpdateInput>
    /**
     * Choose, which DefaultAccount to update.
     */
    where: DefaultAccountWhereUniqueInput
  }

  /**
   * DefaultAccount updateMany
   */
  export type DefaultAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DefaultAccounts.
     */
    data: XOR<DefaultAccountUpdateManyMutationInput, DefaultAccountUncheckedUpdateManyInput>
    /**
     * Filter which DefaultAccounts to update
     */
    where?: DefaultAccountWhereInput
    /**
     * Limit how many DefaultAccounts to update.
     */
    limit?: number
  }

  /**
   * DefaultAccount updateManyAndReturn
   */
  export type DefaultAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * The data used to update DefaultAccounts.
     */
    data: XOR<DefaultAccountUpdateManyMutationInput, DefaultAccountUncheckedUpdateManyInput>
    /**
     * Filter which DefaultAccounts to update
     */
    where?: DefaultAccountWhereInput
    /**
     * Limit how many DefaultAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DefaultAccount upsert
   */
  export type DefaultAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the DefaultAccount to update in case it exists.
     */
    where: DefaultAccountWhereUniqueInput
    /**
     * In case the DefaultAccount found by the `where` argument doesn't exist, create a new DefaultAccount with this data.
     */
    create: XOR<DefaultAccountCreateInput, DefaultAccountUncheckedCreateInput>
    /**
     * In case the DefaultAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DefaultAccountUpdateInput, DefaultAccountUncheckedUpdateInput>
  }

  /**
   * DefaultAccount delete
   */
  export type DefaultAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountInclude<ExtArgs> | null
    /**
     * Filter which DefaultAccount to delete.
     */
    where: DefaultAccountWhereUniqueInput
  }

  /**
   * DefaultAccount deleteMany
   */
  export type DefaultAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DefaultAccounts to delete
     */
    where?: DefaultAccountWhereInput
    /**
     * Limit how many DefaultAccounts to delete.
     */
    limit?: number
  }

  /**
   * DefaultAccount without action
   */
  export type DefaultAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultAccount
     */
    select?: DefaultAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultAccount
     */
    omit?: DefaultAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultAccountInclude<ExtArgs> | null
  }


  /**
   * Model Accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    acc_id: number | null
    user_id: number | null
    balance: Decimal | null
  }

  export type AccountsSumAggregateOutputType = {
    acc_id: number | null
    user_id: number | null
    balance: Decimal | null
  }

  export type AccountsMinAggregateOutputType = {
    acc_id: number | null
    user_id: number | null
    acc_name: string | null
    acc_number: string | null
    status: $Enums.Acc_status | null
    type: $Enums.Acc_type | null
    bank: $Enums.Bank_name | null
    balance: Decimal | null
    connectedToMain: boolean | null
    created_At: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    acc_id: number | null
    user_id: number | null
    acc_name: string | null
    acc_number: string | null
    status: $Enums.Acc_status | null
    type: $Enums.Acc_type | null
    bank: $Enums.Bank_name | null
    balance: Decimal | null
    connectedToMain: boolean | null
    created_At: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    acc_id: number
    user_id: number
    acc_name: number
    acc_number: number
    status: number
    type: number
    bank: number
    balance: number
    connectedToMain: number
    created_At: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    acc_id?: true
    user_id?: true
    balance?: true
  }

  export type AccountsSumAggregateInputType = {
    acc_id?: true
    user_id?: true
    balance?: true
  }

  export type AccountsMinAggregateInputType = {
    acc_id?: true
    user_id?: true
    acc_name?: true
    acc_number?: true
    status?: true
    type?: true
    bank?: true
    balance?: true
    connectedToMain?: true
    created_At?: true
  }

  export type AccountsMaxAggregateInputType = {
    acc_id?: true
    user_id?: true
    acc_name?: true
    acc_number?: true
    status?: true
    type?: true
    bank?: true
    balance?: true
    connectedToMain?: true
    created_At?: true
  }

  export type AccountsCountAggregateInputType = {
    acc_id?: true
    user_id?: true
    acc_name?: true
    acc_number?: true
    status?: true
    type?: true
    bank?: true
    balance?: true
    connectedToMain?: true
    created_At?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to aggregate.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type AccountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsWhereInput
    orderBy?: AccountsOrderByWithAggregationInput | AccountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: AccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    acc_id: number
    user_id: number
    acc_name: string
    acc_number: string
    status: $Enums.Acc_status
    type: $Enums.Acc_type
    bank: $Enums.Bank_name
    balance: Decimal
    connectedToMain: boolean
    created_At: Date
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends AccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type AccountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    acc_id?: boolean
    user_id?: boolean
    acc_name?: boolean
    acc_number?: boolean
    status?: boolean
    type?: boolean
    bank?: boolean
    balance?: boolean
    connectedToMain?: boolean
    created_At?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Accounts$transactionsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    acc_id?: boolean
    user_id?: boolean
    acc_name?: boolean
    acc_number?: boolean
    status?: boolean
    type?: boolean
    bank?: boolean
    balance?: boolean
    connectedToMain?: boolean
    created_At?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    acc_id?: boolean
    user_id?: boolean
    acc_name?: boolean
    acc_number?: boolean
    status?: boolean
    type?: boolean
    bank?: boolean
    balance?: boolean
    connectedToMain?: boolean
    created_At?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectScalar = {
    acc_id?: boolean
    user_id?: boolean
    acc_name?: boolean
    acc_number?: boolean
    status?: boolean
    type?: boolean
    bank?: boolean
    balance?: boolean
    connectedToMain?: boolean
    created_At?: boolean
  }

  export type AccountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"acc_id" | "user_id" | "acc_name" | "acc_number" | "status" | "type" | "bank" | "balance" | "connectedToMain" | "created_At", ExtArgs["result"]["accounts"]>
  export type AccountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Accounts$transactionsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accounts"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      acc_id: number
      user_id: number
      acc_name: string
      acc_number: string
      status: $Enums.Acc_status
      type: $Enums.Acc_type
      bank: $Enums.Bank_name
      balance: Prisma.Decimal
      connectedToMain: boolean
      created_At: Date
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type AccountsGetPayload<S extends boolean | null | undefined | AccountsDefaultArgs> = $Result.GetResult<Prisma.$AccountsPayload, S>

  type AccountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface AccountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accounts'], meta: { name: 'Accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {AccountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountsFindUniqueArgs>(args: SelectSubset<T, AccountsFindUniqueArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountsFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountsFindFirstArgs>(args?: SelectSubset<T, AccountsFindFirstArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountsFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `acc_id`
     * const accountsWithAcc_idOnly = await prisma.accounts.findMany({ select: { acc_id: true } })
     * 
     */
    findMany<T extends AccountsFindManyArgs>(args?: SelectSubset<T, AccountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {AccountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends AccountsCreateArgs>(args: SelectSubset<T, AccountsCreateArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountsCreateManyArgs>(args?: SelectSubset<T, AccountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `acc_id`
     * const accountsWithAcc_idOnly = await prisma.accounts.createManyAndReturn({
     *   select: { acc_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountsCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accounts.
     * @param {AccountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends AccountsDeleteArgs>(args: SelectSubset<T, AccountsDeleteArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {AccountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountsUpdateArgs>(args: SelectSubset<T, AccountsUpdateArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountsDeleteManyArgs>(args?: SelectSubset<T, AccountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountsUpdateManyArgs>(args: SelectSubset<T, AccountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountsUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `acc_id`
     * const accountsWithAcc_idOnly = await prisma.accounts.updateManyAndReturn({
     *   select: { acc_id: true },
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
    updateManyAndReturn<T extends AccountsUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accounts.
     * @param {AccountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends AccountsUpsertArgs>(args: SelectSubset<T, AccountsUpsertArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountsCountArgs>(
      args?: Subset<T, AccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsGroupByArgs} args - Group by arguments.
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
      T extends AccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsGroupByArgs['orderBy'] }
        : { orderBy?: AccountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accounts model
   */
  readonly fields: AccountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Accounts$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Accounts model
   */
  interface AccountsFieldRefs {
    readonly acc_id: FieldRef<"Accounts", 'Int'>
    readonly user_id: FieldRef<"Accounts", 'Int'>
    readonly acc_name: FieldRef<"Accounts", 'String'>
    readonly acc_number: FieldRef<"Accounts", 'String'>
    readonly status: FieldRef<"Accounts", 'Acc_status'>
    readonly type: FieldRef<"Accounts", 'Acc_type'>
    readonly bank: FieldRef<"Accounts", 'Bank_name'>
    readonly balance: FieldRef<"Accounts", 'Decimal'>
    readonly connectedToMain: FieldRef<"Accounts", 'Boolean'>
    readonly created_At: FieldRef<"Accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Accounts findUnique
   */
  export type AccountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findUniqueOrThrow
   */
  export type AccountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findFirst
   */
  export type AccountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findFirstOrThrow
   */
  export type AccountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findMany
   */
  export type AccountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts create
   */
  export type AccountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to create a Accounts.
     */
    data: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
  }

  /**
   * Accounts createMany
   */
  export type AccountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accounts createManyAndReturn
   */
  export type AccountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accounts update
   */
  export type AccountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to update a Accounts.
     */
    data: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
    /**
     * Choose, which Accounts to update.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts updateMany
   */
  export type AccountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Accounts updateManyAndReturn
   */
  export type AccountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accounts upsert
   */
  export type AccountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The filter to search for the Accounts to update in case it exists.
     */
    where: AccountsWhereUniqueInput
    /**
     * In case the Accounts found by the `where` argument doesn't exist, create a new Accounts with this data.
     */
    create: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
    /**
     * In case the Accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
  }

  /**
   * Accounts delete
   */
  export type AccountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter which Accounts to delete.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts deleteMany
   */
  export type AccountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Accounts.transactions
   */
  export type Accounts$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Accounts without action
   */
  export type AccountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
  }


  /**
   * Model LinkedBankToken
   */

  export type AggregateLinkedBankToken = {
    _count: LinkedBankTokenCountAggregateOutputType | null
    _avg: LinkedBankTokenAvgAggregateOutputType | null
    _sum: LinkedBankTokenSumAggregateOutputType | null
    _min: LinkedBankTokenMinAggregateOutputType | null
    _max: LinkedBankTokenMaxAggregateOutputType | null
  }

  export type LinkedBankTokenAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type LinkedBankTokenSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type LinkedBankTokenMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    bankName: string | null
    accessToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type LinkedBankTokenMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    bankName: string | null
    accessToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type LinkedBankTokenCountAggregateOutputType = {
    id: number
    user_id: number
    bankName: number
    accessToken: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type LinkedBankTokenAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type LinkedBankTokenSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type LinkedBankTokenMinAggregateInputType = {
    id?: true
    user_id?: true
    bankName?: true
    accessToken?: true
    expiresAt?: true
    createdAt?: true
  }

  export type LinkedBankTokenMaxAggregateInputType = {
    id?: true
    user_id?: true
    bankName?: true
    accessToken?: true
    expiresAt?: true
    createdAt?: true
  }

  export type LinkedBankTokenCountAggregateInputType = {
    id?: true
    user_id?: true
    bankName?: true
    accessToken?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type LinkedBankTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedBankToken to aggregate.
     */
    where?: LinkedBankTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedBankTokens to fetch.
     */
    orderBy?: LinkedBankTokenOrderByWithRelationInput | LinkedBankTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkedBankTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedBankTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedBankTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkedBankTokens
    **/
    _count?: true | LinkedBankTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkedBankTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkedBankTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkedBankTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkedBankTokenMaxAggregateInputType
  }

  export type GetLinkedBankTokenAggregateType<T extends LinkedBankTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkedBankToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkedBankToken[P]>
      : GetScalarType<T[P], AggregateLinkedBankToken[P]>
  }




  export type LinkedBankTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedBankTokenWhereInput
    orderBy?: LinkedBankTokenOrderByWithAggregationInput | LinkedBankTokenOrderByWithAggregationInput[]
    by: LinkedBankTokenScalarFieldEnum[] | LinkedBankTokenScalarFieldEnum
    having?: LinkedBankTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkedBankTokenCountAggregateInputType | true
    _avg?: LinkedBankTokenAvgAggregateInputType
    _sum?: LinkedBankTokenSumAggregateInputType
    _min?: LinkedBankTokenMinAggregateInputType
    _max?: LinkedBankTokenMaxAggregateInputType
  }

  export type LinkedBankTokenGroupByOutputType = {
    id: number
    user_id: number
    bankName: string
    accessToken: string
    expiresAt: Date
    createdAt: Date
    _count: LinkedBankTokenCountAggregateOutputType | null
    _avg: LinkedBankTokenAvgAggregateOutputType | null
    _sum: LinkedBankTokenSumAggregateOutputType | null
    _min: LinkedBankTokenMinAggregateOutputType | null
    _max: LinkedBankTokenMaxAggregateOutputType | null
  }

  type GetLinkedBankTokenGroupByPayload<T extends LinkedBankTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkedBankTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkedBankTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkedBankTokenGroupByOutputType[P]>
            : GetScalarType<T[P], LinkedBankTokenGroupByOutputType[P]>
        }
      >
    >


  export type LinkedBankTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bankName?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedBankToken"]>

  export type LinkedBankTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bankName?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedBankToken"]>

  export type LinkedBankTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bankName?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedBankToken"]>

  export type LinkedBankTokenSelectScalar = {
    id?: boolean
    user_id?: boolean
    bankName?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type LinkedBankTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "bankName" | "accessToken" | "expiresAt" | "createdAt", ExtArgs["result"]["linkedBankToken"]>
  export type LinkedBankTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LinkedBankTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LinkedBankTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LinkedBankTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkedBankToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      bankName: string
      accessToken: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["linkedBankToken"]>
    composites: {}
  }

  type LinkedBankTokenGetPayload<S extends boolean | null | undefined | LinkedBankTokenDefaultArgs> = $Result.GetResult<Prisma.$LinkedBankTokenPayload, S>

  type LinkedBankTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkedBankTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkedBankTokenCountAggregateInputType | true
    }

  export interface LinkedBankTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkedBankToken'], meta: { name: 'LinkedBankToken' } }
    /**
     * Find zero or one LinkedBankToken that matches the filter.
     * @param {LinkedBankTokenFindUniqueArgs} args - Arguments to find a LinkedBankToken
     * @example
     * // Get one LinkedBankToken
     * const linkedBankToken = await prisma.linkedBankToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkedBankTokenFindUniqueArgs>(args: SelectSubset<T, LinkedBankTokenFindUniqueArgs<ExtArgs>>): Prisma__LinkedBankTokenClient<$Result.GetResult<Prisma.$LinkedBankTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkedBankToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkedBankTokenFindUniqueOrThrowArgs} args - Arguments to find a LinkedBankToken
     * @example
     * // Get one LinkedBankToken
     * const linkedBankToken = await prisma.linkedBankToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkedBankTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkedBankTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkedBankTokenClient<$Result.GetResult<Prisma.$LinkedBankTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedBankToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedBankTokenFindFirstArgs} args - Arguments to find a LinkedBankToken
     * @example
     * // Get one LinkedBankToken
     * const linkedBankToken = await prisma.linkedBankToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkedBankTokenFindFirstArgs>(args?: SelectSubset<T, LinkedBankTokenFindFirstArgs<ExtArgs>>): Prisma__LinkedBankTokenClient<$Result.GetResult<Prisma.$LinkedBankTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedBankToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedBankTokenFindFirstOrThrowArgs} args - Arguments to find a LinkedBankToken
     * @example
     * // Get one LinkedBankToken
     * const linkedBankToken = await prisma.linkedBankToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkedBankTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkedBankTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkedBankTokenClient<$Result.GetResult<Prisma.$LinkedBankTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkedBankTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedBankTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkedBankTokens
     * const linkedBankTokens = await prisma.linkedBankToken.findMany()
     * 
     * // Get first 10 LinkedBankTokens
     * const linkedBankTokens = await prisma.linkedBankToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkedBankTokenWithIdOnly = await prisma.linkedBankToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkedBankTokenFindManyArgs>(args?: SelectSubset<T, LinkedBankTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedBankTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkedBankToken.
     * @param {LinkedBankTokenCreateArgs} args - Arguments to create a LinkedBankToken.
     * @example
     * // Create one LinkedBankToken
     * const LinkedBankToken = await prisma.linkedBankToken.create({
     *   data: {
     *     // ... data to create a LinkedBankToken
     *   }
     * })
     * 
     */
    create<T extends LinkedBankTokenCreateArgs>(args: SelectSubset<T, LinkedBankTokenCreateArgs<ExtArgs>>): Prisma__LinkedBankTokenClient<$Result.GetResult<Prisma.$LinkedBankTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkedBankTokens.
     * @param {LinkedBankTokenCreateManyArgs} args - Arguments to create many LinkedBankTokens.
     * @example
     * // Create many LinkedBankTokens
     * const linkedBankToken = await prisma.linkedBankToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkedBankTokenCreateManyArgs>(args?: SelectSubset<T, LinkedBankTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkedBankTokens and returns the data saved in the database.
     * @param {LinkedBankTokenCreateManyAndReturnArgs} args - Arguments to create many LinkedBankTokens.
     * @example
     * // Create many LinkedBankTokens
     * const linkedBankToken = await prisma.linkedBankToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkedBankTokens and only return the `id`
     * const linkedBankTokenWithIdOnly = await prisma.linkedBankToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkedBankTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkedBankTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedBankTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkedBankToken.
     * @param {LinkedBankTokenDeleteArgs} args - Arguments to delete one LinkedBankToken.
     * @example
     * // Delete one LinkedBankToken
     * const LinkedBankToken = await prisma.linkedBankToken.delete({
     *   where: {
     *     // ... filter to delete one LinkedBankToken
     *   }
     * })
     * 
     */
    delete<T extends LinkedBankTokenDeleteArgs>(args: SelectSubset<T, LinkedBankTokenDeleteArgs<ExtArgs>>): Prisma__LinkedBankTokenClient<$Result.GetResult<Prisma.$LinkedBankTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkedBankToken.
     * @param {LinkedBankTokenUpdateArgs} args - Arguments to update one LinkedBankToken.
     * @example
     * // Update one LinkedBankToken
     * const linkedBankToken = await prisma.linkedBankToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkedBankTokenUpdateArgs>(args: SelectSubset<T, LinkedBankTokenUpdateArgs<ExtArgs>>): Prisma__LinkedBankTokenClient<$Result.GetResult<Prisma.$LinkedBankTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkedBankTokens.
     * @param {LinkedBankTokenDeleteManyArgs} args - Arguments to filter LinkedBankTokens to delete.
     * @example
     * // Delete a few LinkedBankTokens
     * const { count } = await prisma.linkedBankToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkedBankTokenDeleteManyArgs>(args?: SelectSubset<T, LinkedBankTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedBankTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedBankTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkedBankTokens
     * const linkedBankToken = await prisma.linkedBankToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkedBankTokenUpdateManyArgs>(args: SelectSubset<T, LinkedBankTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedBankTokens and returns the data updated in the database.
     * @param {LinkedBankTokenUpdateManyAndReturnArgs} args - Arguments to update many LinkedBankTokens.
     * @example
     * // Update many LinkedBankTokens
     * const linkedBankToken = await prisma.linkedBankToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkedBankTokens and only return the `id`
     * const linkedBankTokenWithIdOnly = await prisma.linkedBankToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends LinkedBankTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkedBankTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedBankTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkedBankToken.
     * @param {LinkedBankTokenUpsertArgs} args - Arguments to update or create a LinkedBankToken.
     * @example
     * // Update or create a LinkedBankToken
     * const linkedBankToken = await prisma.linkedBankToken.upsert({
     *   create: {
     *     // ... data to create a LinkedBankToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkedBankToken we want to update
     *   }
     * })
     */
    upsert<T extends LinkedBankTokenUpsertArgs>(args: SelectSubset<T, LinkedBankTokenUpsertArgs<ExtArgs>>): Prisma__LinkedBankTokenClient<$Result.GetResult<Prisma.$LinkedBankTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkedBankTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedBankTokenCountArgs} args - Arguments to filter LinkedBankTokens to count.
     * @example
     * // Count the number of LinkedBankTokens
     * const count = await prisma.linkedBankToken.count({
     *   where: {
     *     // ... the filter for the LinkedBankTokens we want to count
     *   }
     * })
    **/
    count<T extends LinkedBankTokenCountArgs>(
      args?: Subset<T, LinkedBankTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkedBankTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkedBankToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedBankTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkedBankTokenAggregateArgs>(args: Subset<T, LinkedBankTokenAggregateArgs>): Prisma.PrismaPromise<GetLinkedBankTokenAggregateType<T>>

    /**
     * Group by LinkedBankToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedBankTokenGroupByArgs} args - Group by arguments.
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
      T extends LinkedBankTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkedBankTokenGroupByArgs['orderBy'] }
        : { orderBy?: LinkedBankTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkedBankTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkedBankTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkedBankToken model
   */
  readonly fields: LinkedBankTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkedBankToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkedBankTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LinkedBankToken model
   */
  interface LinkedBankTokenFieldRefs {
    readonly id: FieldRef<"LinkedBankToken", 'Int'>
    readonly user_id: FieldRef<"LinkedBankToken", 'Int'>
    readonly bankName: FieldRef<"LinkedBankToken", 'String'>
    readonly accessToken: FieldRef<"LinkedBankToken", 'String'>
    readonly expiresAt: FieldRef<"LinkedBankToken", 'DateTime'>
    readonly createdAt: FieldRef<"LinkedBankToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LinkedBankToken findUnique
   */
  export type LinkedBankTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenInclude<ExtArgs> | null
    /**
     * Filter, which LinkedBankToken to fetch.
     */
    where: LinkedBankTokenWhereUniqueInput
  }

  /**
   * LinkedBankToken findUniqueOrThrow
   */
  export type LinkedBankTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenInclude<ExtArgs> | null
    /**
     * Filter, which LinkedBankToken to fetch.
     */
    where: LinkedBankTokenWhereUniqueInput
  }

  /**
   * LinkedBankToken findFirst
   */
  export type LinkedBankTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenInclude<ExtArgs> | null
    /**
     * Filter, which LinkedBankToken to fetch.
     */
    where?: LinkedBankTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedBankTokens to fetch.
     */
    orderBy?: LinkedBankTokenOrderByWithRelationInput | LinkedBankTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedBankTokens.
     */
    cursor?: LinkedBankTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedBankTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedBankTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedBankTokens.
     */
    distinct?: LinkedBankTokenScalarFieldEnum | LinkedBankTokenScalarFieldEnum[]
  }

  /**
   * LinkedBankToken findFirstOrThrow
   */
  export type LinkedBankTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenInclude<ExtArgs> | null
    /**
     * Filter, which LinkedBankToken to fetch.
     */
    where?: LinkedBankTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedBankTokens to fetch.
     */
    orderBy?: LinkedBankTokenOrderByWithRelationInput | LinkedBankTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedBankTokens.
     */
    cursor?: LinkedBankTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedBankTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedBankTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedBankTokens.
     */
    distinct?: LinkedBankTokenScalarFieldEnum | LinkedBankTokenScalarFieldEnum[]
  }

  /**
   * LinkedBankToken findMany
   */
  export type LinkedBankTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenInclude<ExtArgs> | null
    /**
     * Filter, which LinkedBankTokens to fetch.
     */
    where?: LinkedBankTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedBankTokens to fetch.
     */
    orderBy?: LinkedBankTokenOrderByWithRelationInput | LinkedBankTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkedBankTokens.
     */
    cursor?: LinkedBankTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedBankTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedBankTokens.
     */
    skip?: number
    distinct?: LinkedBankTokenScalarFieldEnum | LinkedBankTokenScalarFieldEnum[]
  }

  /**
   * LinkedBankToken create
   */
  export type LinkedBankTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkedBankToken.
     */
    data: XOR<LinkedBankTokenCreateInput, LinkedBankTokenUncheckedCreateInput>
  }

  /**
   * LinkedBankToken createMany
   */
  export type LinkedBankTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkedBankTokens.
     */
    data: LinkedBankTokenCreateManyInput | LinkedBankTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkedBankToken createManyAndReturn
   */
  export type LinkedBankTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * The data used to create many LinkedBankTokens.
     */
    data: LinkedBankTokenCreateManyInput | LinkedBankTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedBankToken update
   */
  export type LinkedBankTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkedBankToken.
     */
    data: XOR<LinkedBankTokenUpdateInput, LinkedBankTokenUncheckedUpdateInput>
    /**
     * Choose, which LinkedBankToken to update.
     */
    where: LinkedBankTokenWhereUniqueInput
  }

  /**
   * LinkedBankToken updateMany
   */
  export type LinkedBankTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkedBankTokens.
     */
    data: XOR<LinkedBankTokenUpdateManyMutationInput, LinkedBankTokenUncheckedUpdateManyInput>
    /**
     * Filter which LinkedBankTokens to update
     */
    where?: LinkedBankTokenWhereInput
    /**
     * Limit how many LinkedBankTokens to update.
     */
    limit?: number
  }

  /**
   * LinkedBankToken updateManyAndReturn
   */
  export type LinkedBankTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * The data used to update LinkedBankTokens.
     */
    data: XOR<LinkedBankTokenUpdateManyMutationInput, LinkedBankTokenUncheckedUpdateManyInput>
    /**
     * Filter which LinkedBankTokens to update
     */
    where?: LinkedBankTokenWhereInput
    /**
     * Limit how many LinkedBankTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedBankToken upsert
   */
  export type LinkedBankTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkedBankToken to update in case it exists.
     */
    where: LinkedBankTokenWhereUniqueInput
    /**
     * In case the LinkedBankToken found by the `where` argument doesn't exist, create a new LinkedBankToken with this data.
     */
    create: XOR<LinkedBankTokenCreateInput, LinkedBankTokenUncheckedCreateInput>
    /**
     * In case the LinkedBankToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkedBankTokenUpdateInput, LinkedBankTokenUncheckedUpdateInput>
  }

  /**
   * LinkedBankToken delete
   */
  export type LinkedBankTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenInclude<ExtArgs> | null
    /**
     * Filter which LinkedBankToken to delete.
     */
    where: LinkedBankTokenWhereUniqueInput
  }

  /**
   * LinkedBankToken deleteMany
   */
  export type LinkedBankTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedBankTokens to delete
     */
    where?: LinkedBankTokenWhereInput
    /**
     * Limit how many LinkedBankTokens to delete.
     */
    limit?: number
  }

  /**
   * LinkedBankToken without action
   */
  export type LinkedBankTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedBankToken
     */
    select?: LinkedBankTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedBankToken
     */
    omit?: LinkedBankTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedBankTokenInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    txn_id: number | null
    acc_id: number | null
    amount: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    txn_id: number | null
    acc_id: number | null
    amount: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    txn_id: number | null
    acc_id: number | null
    status: $Enums.Txn_status | null
    type: $Enums.Txn_type | null
    amount: number | null
    created_At: Date | null
    channel: $Enums.Txn_channel | null
    category: string | null
  }

  export type TransactionsMaxAggregateOutputType = {
    txn_id: number | null
    acc_id: number | null
    status: $Enums.Txn_status | null
    type: $Enums.Txn_type | null
    amount: number | null
    created_At: Date | null
    channel: $Enums.Txn_channel | null
    category: string | null
  }

  export type TransactionsCountAggregateOutputType = {
    txn_id: number
    acc_id: number
    status: number
    type: number
    amount: number
    created_At: number
    channel: number
    category: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    txn_id?: true
    acc_id?: true
    amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    txn_id?: true
    acc_id?: true
    amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    txn_id?: true
    acc_id?: true
    status?: true
    type?: true
    amount?: true
    created_At?: true
    channel?: true
    category?: true
  }

  export type TransactionsMaxAggregateInputType = {
    txn_id?: true
    acc_id?: true
    status?: true
    type?: true
    amount?: true
    created_At?: true
    channel?: true
    category?: true
  }

  export type TransactionsCountAggregateInputType = {
    txn_id?: true
    acc_id?: true
    status?: true
    type?: true
    amount?: true
    created_At?: true
    channel?: true
    category?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    txn_id: number
    acc_id: number
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    amount: number
    created_At: Date
    channel: $Enums.Txn_channel
    category: string
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    txn_id?: boolean
    acc_id?: boolean
    status?: boolean
    type?: boolean
    amount?: boolean
    created_At?: boolean
    channel?: boolean
    category?: boolean
    accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    txn_id?: boolean
    acc_id?: boolean
    status?: boolean
    type?: boolean
    amount?: boolean
    created_At?: boolean
    channel?: boolean
    category?: boolean
    accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    txn_id?: boolean
    acc_id?: boolean
    status?: boolean
    type?: boolean
    amount?: boolean
    created_At?: boolean
    channel?: boolean
    category?: boolean
    accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    txn_id?: boolean
    acc_id?: boolean
    status?: boolean
    type?: boolean
    amount?: boolean
    created_At?: boolean
    channel?: boolean
    category?: boolean
  }

  export type TransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"txn_id" | "acc_id" | "status" | "type" | "amount" | "created_At" | "channel" | "category", ExtArgs["result"]["transactions"]>
  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      accounts: Prisma.$AccountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      txn_id: number
      acc_id: number
      status: $Enums.Txn_status
      type: $Enums.Txn_type
      amount: number
      created_At: Date
      channel: $Enums.Txn_channel
      category: string
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `txn_id`
     * const transactionsWithTxn_idOnly = await prisma.transactions.findMany({ select: { txn_id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `txn_id`
     * const transactionsWithTxn_idOnly = await prisma.transactions.createManyAndReturn({
     *   select: { txn_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `txn_id`
     * const transactionsWithTxn_idOnly = await prisma.transactions.updateManyAndReturn({
     *   select: { txn_id: true },
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
    updateManyAndReturn<T extends TransactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
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
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transactions model
   */
  interface TransactionsFieldRefs {
    readonly txn_id: FieldRef<"Transactions", 'Int'>
    readonly acc_id: FieldRef<"Transactions", 'Int'>
    readonly status: FieldRef<"Transactions", 'Txn_status'>
    readonly type: FieldRef<"Transactions", 'Txn_type'>
    readonly amount: FieldRef<"Transactions", 'Int'>
    readonly created_At: FieldRef<"Transactions", 'DateTime'>
    readonly channel: FieldRef<"Transactions", 'Txn_channel'>
    readonly category: FieldRef<"Transactions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transactions updateManyAndReturn
   */
  export type TransactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    number: 'number',
    password: 'password',
    isVerified: 'isVerified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MerchantScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    auth_type: 'auth_type'
  };

  export type MerchantScalarFieldEnum = (typeof MerchantScalarFieldEnum)[keyof typeof MerchantScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    otp: 'otp',
    type: 'type',
    expiresAt: 'expiresAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const DefaultAccountScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bankName: 'bankName',
    accOrgType: 'accOrgType'
  };

  export type DefaultAccountScalarFieldEnum = (typeof DefaultAccountScalarFieldEnum)[keyof typeof DefaultAccountScalarFieldEnum]


  export const AccountsScalarFieldEnum: {
    acc_id: 'acc_id',
    user_id: 'user_id',
    acc_name: 'acc_name',
    acc_number: 'acc_number',
    status: 'status',
    type: 'type',
    bank: 'bank',
    balance: 'balance',
    connectedToMain: 'connectedToMain',
    created_At: 'created_At'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const LinkedBankTokenScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bankName: 'bankName',
    accessToken: 'accessToken',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type LinkedBankTokenScalarFieldEnum = (typeof LinkedBankTokenScalarFieldEnum)[keyof typeof LinkedBankTokenScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    txn_id: 'txn_id',
    acc_id: 'acc_id',
    status: 'status',
    type: 'type',
    amount: 'amount',
    created_At: 'created_At',
    channel: 'channel',
    category: 'category'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'AuthType'
   */
  export type EnumAuthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthType'>
    


  /**
   * Reference to a field of type 'AuthType[]'
   */
  export type ListEnumAuthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Bank_name'
   */
  export type EnumBank_nameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bank_name'>
    


  /**
   * Reference to a field of type 'Bank_name[]'
   */
  export type ListEnumBank_nameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bank_name[]'>
    


  /**
   * Reference to a field of type 'Acc_type'
   */
  export type EnumAcc_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Acc_type'>
    


  /**
   * Reference to a field of type 'Acc_type[]'
   */
  export type ListEnumAcc_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Acc_type[]'>
    


  /**
   * Reference to a field of type 'Acc_status'
   */
  export type EnumAcc_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Acc_status'>
    


  /**
   * Reference to a field of type 'Acc_status[]'
   */
  export type ListEnumAcc_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Acc_status[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Txn_status'
   */
  export type EnumTxn_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Txn_status'>
    


  /**
   * Reference to a field of type 'Txn_status[]'
   */
  export type ListEnumTxn_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Txn_status[]'>
    


  /**
   * Reference to a field of type 'Txn_type'
   */
  export type EnumTxn_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Txn_type'>
    


  /**
   * Reference to a field of type 'Txn_type[]'
   */
  export type ListEnumTxn_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Txn_type[]'>
    


  /**
   * Reference to a field of type 'Txn_channel'
   */
  export type EnumTxn_channelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Txn_channel'>
    


  /**
   * Reference to a field of type 'Txn_channel[]'
   */
  export type ListEnumTxn_channelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Txn_channel[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    number?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    verifications?: VerificationListRelationFilter
    accounts?: AccountsListRelationFilter
    linkedbankedtoken?: LinkedBankTokenListRelationFilter
    defaultAccount?: DefaultAccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    number?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    verifications?: VerificationOrderByRelationAggregateInput
    accounts?: AccountsOrderByRelationAggregateInput
    linkedbankedtoken?: LinkedBankTokenOrderByRelationAggregateInput
    defaultAccount?: DefaultAccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    verifications?: VerificationListRelationFilter
    accounts?: AccountsListRelationFilter
    linkedbankedtoken?: LinkedBankTokenListRelationFilter
    defaultAccount?: DefaultAccountListRelationFilter
  }, "id" | "email" | "number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    number?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    number?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type MerchantWhereInput = {
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    id?: IntFilter<"Merchant"> | number
    email?: StringFilter<"Merchant"> | string
    name?: StringNullableFilter<"Merchant"> | string | null
    auth_type?: EnumAuthTypeFilter<"Merchant"> | $Enums.AuthType
  }

  export type MerchantOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    auth_type?: SortOrder
  }

  export type MerchantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    name?: StringNullableFilter<"Merchant"> | string | null
    auth_type?: EnumAuthTypeFilter<"Merchant"> | $Enums.AuthType
  }, "id" | "email">

  export type MerchantOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    auth_type?: SortOrder
    _count?: MerchantCountOrderByAggregateInput
    _avg?: MerchantAvgOrderByAggregateInput
    _max?: MerchantMaxOrderByAggregateInput
    _min?: MerchantMinOrderByAggregateInput
    _sum?: MerchantSumOrderByAggregateInput
  }

  export type MerchantScalarWhereWithAggregatesInput = {
    AND?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    OR?: MerchantScalarWhereWithAggregatesInput[]
    NOT?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Merchant"> | number
    email?: StringWithAggregatesFilter<"Merchant"> | string
    name?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    auth_type?: EnumAuthTypeWithAggregatesFilter<"Merchant"> | $Enums.AuthType
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: IntFilter<"Verification"> | number
    user_id?: IntFilter<"Verification"> | number
    otp?: StringFilter<"Verification"> | string
    type?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    otp?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    user_id?: IntFilter<"Verification"> | number
    otp?: StringFilter<"Verification"> | string
    type?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    otp?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _avg?: VerificationAvgOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
    _sum?: VerificationSumOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Verification"> | number
    user_id?: IntWithAggregatesFilter<"Verification"> | number
    otp?: StringWithAggregatesFilter<"Verification"> | string
    type?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type DefaultAccountWhereInput = {
    AND?: DefaultAccountWhereInput | DefaultAccountWhereInput[]
    OR?: DefaultAccountWhereInput[]
    NOT?: DefaultAccountWhereInput | DefaultAccountWhereInput[]
    id?: IntFilter<"DefaultAccount"> | number
    user_id?: IntFilter<"DefaultAccount"> | number
    bankName?: EnumBank_nameFilter<"DefaultAccount"> | $Enums.Bank_name
    accOrgType?: EnumAcc_typeFilter<"DefaultAccount"> | $Enums.Acc_type
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DefaultAccountOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bankName?: SortOrder
    accOrgType?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DefaultAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DefaultAccountWhereInput | DefaultAccountWhereInput[]
    OR?: DefaultAccountWhereInput[]
    NOT?: DefaultAccountWhereInput | DefaultAccountWhereInput[]
    user_id?: IntFilter<"DefaultAccount"> | number
    bankName?: EnumBank_nameFilter<"DefaultAccount"> | $Enums.Bank_name
    accOrgType?: EnumAcc_typeFilter<"DefaultAccount"> | $Enums.Acc_type
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DefaultAccountOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bankName?: SortOrder
    accOrgType?: SortOrder
    _count?: DefaultAccountCountOrderByAggregateInput
    _avg?: DefaultAccountAvgOrderByAggregateInput
    _max?: DefaultAccountMaxOrderByAggregateInput
    _min?: DefaultAccountMinOrderByAggregateInput
    _sum?: DefaultAccountSumOrderByAggregateInput
  }

  export type DefaultAccountScalarWhereWithAggregatesInput = {
    AND?: DefaultAccountScalarWhereWithAggregatesInput | DefaultAccountScalarWhereWithAggregatesInput[]
    OR?: DefaultAccountScalarWhereWithAggregatesInput[]
    NOT?: DefaultAccountScalarWhereWithAggregatesInput | DefaultAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DefaultAccount"> | number
    user_id?: IntWithAggregatesFilter<"DefaultAccount"> | number
    bankName?: EnumBank_nameWithAggregatesFilter<"DefaultAccount"> | $Enums.Bank_name
    accOrgType?: EnumAcc_typeWithAggregatesFilter<"DefaultAccount"> | $Enums.Acc_type
  }

  export type AccountsWhereInput = {
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    acc_id?: IntFilter<"Accounts"> | number
    user_id?: IntFilter<"Accounts"> | number
    acc_name?: StringFilter<"Accounts"> | string
    acc_number?: StringFilter<"Accounts"> | string
    status?: EnumAcc_statusFilter<"Accounts"> | $Enums.Acc_status
    type?: EnumAcc_typeFilter<"Accounts"> | $Enums.Acc_type
    bank?: EnumBank_nameFilter<"Accounts"> | $Enums.Bank_name
    balance?: DecimalFilter<"Accounts"> | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolFilter<"Accounts"> | boolean
    created_At?: DateTimeFilter<"Accounts"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type AccountsOrderByWithRelationInput = {
    acc_id?: SortOrder
    user_id?: SortOrder
    acc_name?: SortOrder
    acc_number?: SortOrder
    status?: SortOrder
    type?: SortOrder
    bank?: SortOrder
    balance?: SortOrder
    connectedToMain?: SortOrder
    created_At?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type AccountsWhereUniqueInput = Prisma.AtLeast<{
    acc_id?: number
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    user_id?: IntFilter<"Accounts"> | number
    acc_name?: StringFilter<"Accounts"> | string
    acc_number?: StringFilter<"Accounts"> | string
    status?: EnumAcc_statusFilter<"Accounts"> | $Enums.Acc_status
    type?: EnumAcc_typeFilter<"Accounts"> | $Enums.Acc_type
    bank?: EnumBank_nameFilter<"Accounts"> | $Enums.Bank_name
    balance?: DecimalFilter<"Accounts"> | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolFilter<"Accounts"> | boolean
    created_At?: DateTimeFilter<"Accounts"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionsListRelationFilter
  }, "acc_id">

  export type AccountsOrderByWithAggregationInput = {
    acc_id?: SortOrder
    user_id?: SortOrder
    acc_name?: SortOrder
    acc_number?: SortOrder
    status?: SortOrder
    type?: SortOrder
    bank?: SortOrder
    balance?: SortOrder
    connectedToMain?: SortOrder
    created_At?: SortOrder
    _count?: AccountsCountOrderByAggregateInput
    _avg?: AccountsAvgOrderByAggregateInput
    _max?: AccountsMaxOrderByAggregateInput
    _min?: AccountsMinOrderByAggregateInput
    _sum?: AccountsSumOrderByAggregateInput
  }

  export type AccountsScalarWhereWithAggregatesInput = {
    AND?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    OR?: AccountsScalarWhereWithAggregatesInput[]
    NOT?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    acc_id?: IntWithAggregatesFilter<"Accounts"> | number
    user_id?: IntWithAggregatesFilter<"Accounts"> | number
    acc_name?: StringWithAggregatesFilter<"Accounts"> | string
    acc_number?: StringWithAggregatesFilter<"Accounts"> | string
    status?: EnumAcc_statusWithAggregatesFilter<"Accounts"> | $Enums.Acc_status
    type?: EnumAcc_typeWithAggregatesFilter<"Accounts"> | $Enums.Acc_type
    bank?: EnumBank_nameWithAggregatesFilter<"Accounts"> | $Enums.Bank_name
    balance?: DecimalWithAggregatesFilter<"Accounts"> | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolWithAggregatesFilter<"Accounts"> | boolean
    created_At?: DateTimeWithAggregatesFilter<"Accounts"> | Date | string
  }

  export type LinkedBankTokenWhereInput = {
    AND?: LinkedBankTokenWhereInput | LinkedBankTokenWhereInput[]
    OR?: LinkedBankTokenWhereInput[]
    NOT?: LinkedBankTokenWhereInput | LinkedBankTokenWhereInput[]
    id?: IntFilter<"LinkedBankToken"> | number
    user_id?: IntFilter<"LinkedBankToken"> | number
    bankName?: StringFilter<"LinkedBankToken"> | string
    accessToken?: StringFilter<"LinkedBankToken"> | string
    expiresAt?: DateTimeFilter<"LinkedBankToken"> | Date | string
    createdAt?: DateTimeFilter<"LinkedBankToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LinkedBankTokenOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bankName?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LinkedBankTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_bankName?: LinkedBankTokenUser_idBankNameCompoundUniqueInput
    AND?: LinkedBankTokenWhereInput | LinkedBankTokenWhereInput[]
    OR?: LinkedBankTokenWhereInput[]
    NOT?: LinkedBankTokenWhereInput | LinkedBankTokenWhereInput[]
    user_id?: IntFilter<"LinkedBankToken"> | number
    bankName?: StringFilter<"LinkedBankToken"> | string
    accessToken?: StringFilter<"LinkedBankToken"> | string
    expiresAt?: DateTimeFilter<"LinkedBankToken"> | Date | string
    createdAt?: DateTimeFilter<"LinkedBankToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id_bankName">

  export type LinkedBankTokenOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bankName?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: LinkedBankTokenCountOrderByAggregateInput
    _avg?: LinkedBankTokenAvgOrderByAggregateInput
    _max?: LinkedBankTokenMaxOrderByAggregateInput
    _min?: LinkedBankTokenMinOrderByAggregateInput
    _sum?: LinkedBankTokenSumOrderByAggregateInput
  }

  export type LinkedBankTokenScalarWhereWithAggregatesInput = {
    AND?: LinkedBankTokenScalarWhereWithAggregatesInput | LinkedBankTokenScalarWhereWithAggregatesInput[]
    OR?: LinkedBankTokenScalarWhereWithAggregatesInput[]
    NOT?: LinkedBankTokenScalarWhereWithAggregatesInput | LinkedBankTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LinkedBankToken"> | number
    user_id?: IntWithAggregatesFilter<"LinkedBankToken"> | number
    bankName?: StringWithAggregatesFilter<"LinkedBankToken"> | string
    accessToken?: StringWithAggregatesFilter<"LinkedBankToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"LinkedBankToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LinkedBankToken"> | Date | string
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    txn_id?: IntFilter<"Transactions"> | number
    acc_id?: IntFilter<"Transactions"> | number
    status?: EnumTxn_statusFilter<"Transactions"> | $Enums.Txn_status
    type?: EnumTxn_typeFilter<"Transactions"> | $Enums.Txn_type
    amount?: IntFilter<"Transactions"> | number
    created_At?: DateTimeFilter<"Transactions"> | Date | string
    channel?: EnumTxn_channelFilter<"Transactions"> | $Enums.Txn_channel
    category?: StringFilter<"Transactions"> | string
    accounts?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }

  export type TransactionsOrderByWithRelationInput = {
    txn_id?: SortOrder
    acc_id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    created_At?: SortOrder
    channel?: SortOrder
    category?: SortOrder
    accounts?: AccountsOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    txn_id?: number
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    acc_id?: IntFilter<"Transactions"> | number
    status?: EnumTxn_statusFilter<"Transactions"> | $Enums.Txn_status
    type?: EnumTxn_typeFilter<"Transactions"> | $Enums.Txn_type
    amount?: IntFilter<"Transactions"> | number
    created_At?: DateTimeFilter<"Transactions"> | Date | string
    channel?: EnumTxn_channelFilter<"Transactions"> | $Enums.Txn_channel
    category?: StringFilter<"Transactions"> | string
    accounts?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }, "txn_id">

  export type TransactionsOrderByWithAggregationInput = {
    txn_id?: SortOrder
    acc_id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    created_At?: SortOrder
    channel?: SortOrder
    category?: SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    txn_id?: IntWithAggregatesFilter<"Transactions"> | number
    acc_id?: IntWithAggregatesFilter<"Transactions"> | number
    status?: EnumTxn_statusWithAggregatesFilter<"Transactions"> | $Enums.Txn_status
    type?: EnumTxn_typeWithAggregatesFilter<"Transactions"> | $Enums.Txn_type
    amount?: IntWithAggregatesFilter<"Transactions"> | number
    created_At?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    channel?: EnumTxn_channelWithAggregatesFilter<"Transactions"> | $Enums.Txn_channel
    category?: StringWithAggregatesFilter<"Transactions"> | string
  }

  export type UserCreateInput = {
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    verifications?: VerificationCreateNestedManyWithoutUserInput
    accounts?: AccountsCreateNestedManyWithoutUserInput
    linkedbankedtoken?: LinkedBankTokenCreateNestedManyWithoutUserInput
    defaultAccount?: DefaultAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    linkedbankedtoken?: LinkedBankTokenUncheckedCreateNestedManyWithoutUserInput
    defaultAccount?: DefaultAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    linkedbankedtoken?: LinkedBankTokenUpdateManyWithoutUserNestedInput
    defaultAccount?: DefaultAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    linkedbankedtoken?: LinkedBankTokenUncheckedUpdateManyWithoutUserNestedInput
    defaultAccount?: DefaultAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MerchantCreateInput = {
    email: string
    name?: string | null
    auth_type: $Enums.AuthType
  }

  export type MerchantUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    auth_type: $Enums.AuthType
  }

  export type MerchantUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
  }

  export type MerchantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
  }

  export type MerchantCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    auth_type: $Enums.AuthType
  }

  export type MerchantUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
  }

  export type MerchantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
  }

  export type VerificationCreateInput = {
    otp: string
    type: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutVerificationsInput
  }

  export type VerificationUncheckedCreateInput = {
    id?: number
    user_id: number
    otp: string
    type: string
    expiresAt: Date | string
  }

  export type VerificationUpdateInput = {
    otp?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVerificationsNestedInput
  }

  export type VerificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id?: number
    user_id: number
    otp: string
    type: string
    expiresAt: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    otp?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DefaultAccountCreateInput = {
    bankName: $Enums.Bank_name
    accOrgType: $Enums.Acc_type
    user: UserCreateNestedOneWithoutDefaultAccountInput
  }

  export type DefaultAccountUncheckedCreateInput = {
    id?: number
    user_id: number
    bankName: $Enums.Bank_name
    accOrgType: $Enums.Acc_type
  }

  export type DefaultAccountUpdateInput = {
    bankName?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    accOrgType?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
    user?: UserUpdateOneRequiredWithoutDefaultAccountNestedInput
  }

  export type DefaultAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bankName?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    accOrgType?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
  }

  export type DefaultAccountCreateManyInput = {
    id?: number
    user_id: number
    bankName: $Enums.Bank_name
    accOrgType: $Enums.Acc_type
  }

  export type DefaultAccountUpdateManyMutationInput = {
    bankName?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    accOrgType?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
  }

  export type DefaultAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bankName?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    accOrgType?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
  }

  export type AccountsCreateInput = {
    acc_name: string
    acc_number: string
    status: $Enums.Acc_status
    type: $Enums.Acc_type
    bank: $Enums.Bank_name
    balance: Decimal | DecimalJsLike | number | string
    connectedToMain: boolean
    created_At: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    transactions?: TransactionsCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUncheckedCreateInput = {
    acc_id?: number
    user_id: number
    acc_name: string
    acc_number: string
    status: $Enums.Acc_status
    type: $Enums.Acc_type
    bank: $Enums.Bank_name
    balance: Decimal | DecimalJsLike | number | string
    connectedToMain: boolean
    created_At: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUpdateInput = {
    acc_name?: StringFieldUpdateOperationsInput | string
    acc_number?: StringFieldUpdateOperationsInput | string
    status?: EnumAcc_statusFieldUpdateOperationsInput | $Enums.Acc_status
    type?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
    bank?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolFieldUpdateOperationsInput | boolean
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: TransactionsUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateInput = {
    acc_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    acc_name?: StringFieldUpdateOperationsInput | string
    acc_number?: StringFieldUpdateOperationsInput | string
    status?: EnumAcc_statusFieldUpdateOperationsInput | $Enums.Acc_status
    type?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
    bank?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolFieldUpdateOperationsInput | boolean
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsCreateManyInput = {
    acc_id?: number
    user_id: number
    acc_name: string
    acc_number: string
    status: $Enums.Acc_status
    type: $Enums.Acc_type
    bank: $Enums.Bank_name
    balance: Decimal | DecimalJsLike | number | string
    connectedToMain: boolean
    created_At: Date | string
  }

  export type AccountsUpdateManyMutationInput = {
    acc_name?: StringFieldUpdateOperationsInput | string
    acc_number?: StringFieldUpdateOperationsInput | string
    status?: EnumAcc_statusFieldUpdateOperationsInput | $Enums.Acc_status
    type?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
    bank?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolFieldUpdateOperationsInput | boolean
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsUncheckedUpdateManyInput = {
    acc_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    acc_name?: StringFieldUpdateOperationsInput | string
    acc_number?: StringFieldUpdateOperationsInput | string
    status?: EnumAcc_statusFieldUpdateOperationsInput | $Enums.Acc_status
    type?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
    bank?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolFieldUpdateOperationsInput | boolean
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedBankTokenCreateInput = {
    bankName: string
    accessToken: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLinkedbankedtokenInput
  }

  export type LinkedBankTokenUncheckedCreateInput = {
    id?: number
    user_id: number
    bankName: string
    accessToken: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LinkedBankTokenUpdateInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLinkedbankedtokenNestedInput
  }

  export type LinkedBankTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedBankTokenCreateManyInput = {
    id?: number
    user_id: number
    bankName: string
    accessToken: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LinkedBankTokenUpdateManyMutationInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedBankTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateInput = {
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    amount: number
    created_At: Date | string
    channel: $Enums.Txn_channel
    category: string
    accounts: AccountsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateInput = {
    txn_id?: number
    acc_id: number
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    amount: number
    created_At: Date | string
    channel: $Enums.Txn_channel
    category: string
  }

  export type TransactionsUpdateInput = {
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    amount?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    category?: StringFieldUpdateOperationsInput | string
    accounts?: AccountsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    txn_id?: IntFieldUpdateOperationsInput | number
    acc_id?: IntFieldUpdateOperationsInput | number
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    amount?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    category?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsCreateManyInput = {
    txn_id?: number
    acc_id: number
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    amount: number
    created_At: Date | string
    channel: $Enums.Txn_channel
    category: string
  }

  export type TransactionsUpdateManyMutationInput = {
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    amount?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    category?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsUncheckedUpdateManyInput = {
    txn_id?: IntFieldUpdateOperationsInput | number
    acc_id?: IntFieldUpdateOperationsInput | number
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    amount?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    category?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VerificationListRelationFilter = {
    every?: VerificationWhereInput
    some?: VerificationWhereInput
    none?: VerificationWhereInput
  }

  export type AccountsListRelationFilter = {
    every?: AccountsWhereInput
    some?: AccountsWhereInput
    none?: AccountsWhereInput
  }

  export type LinkedBankTokenListRelationFilter = {
    every?: LinkedBankTokenWhereInput
    some?: LinkedBankTokenWhereInput
    none?: LinkedBankTokenWhereInput
  }

  export type DefaultAccountListRelationFilter = {
    every?: DefaultAccountWhereInput
    some?: DefaultAccountWhereInput
    none?: DefaultAccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkedBankTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DefaultAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    number?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    number?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    number?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAuthTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeFilter<$PrismaModel> | $Enums.AuthType
  }

  export type MerchantCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    auth_type?: SortOrder
  }

  export type MerchantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MerchantMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    auth_type?: SortOrder
  }

  export type MerchantMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    auth_type?: SortOrder
  }

  export type MerchantSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAuthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthTypeFilter<$PrismaModel>
    _max?: NestedEnumAuthTypeFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    otp?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
  }

  export type VerificationAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    otp?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    otp?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
  }

  export type VerificationSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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

  export type EnumBank_nameFilter<$PrismaModel = never> = {
    equals?: $Enums.Bank_name | EnumBank_nameFieldRefInput<$PrismaModel>
    in?: $Enums.Bank_name[] | ListEnumBank_nameFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bank_name[] | ListEnumBank_nameFieldRefInput<$PrismaModel>
    not?: NestedEnumBank_nameFilter<$PrismaModel> | $Enums.Bank_name
  }

  export type EnumAcc_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_type | EnumAcc_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_typeFilter<$PrismaModel> | $Enums.Acc_type
  }

  export type DefaultAccountCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bankName?: SortOrder
    accOrgType?: SortOrder
  }

  export type DefaultAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DefaultAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bankName?: SortOrder
    accOrgType?: SortOrder
  }

  export type DefaultAccountMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bankName?: SortOrder
    accOrgType?: SortOrder
  }

  export type DefaultAccountSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumBank_nameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Bank_name | EnumBank_nameFieldRefInput<$PrismaModel>
    in?: $Enums.Bank_name[] | ListEnumBank_nameFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bank_name[] | ListEnumBank_nameFieldRefInput<$PrismaModel>
    not?: NestedEnumBank_nameWithAggregatesFilter<$PrismaModel> | $Enums.Bank_name
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBank_nameFilter<$PrismaModel>
    _max?: NestedEnumBank_nameFilter<$PrismaModel>
  }

  export type EnumAcc_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_type | EnumAcc_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_typeWithAggregatesFilter<$PrismaModel> | $Enums.Acc_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcc_typeFilter<$PrismaModel>
    _max?: NestedEnumAcc_typeFilter<$PrismaModel>
  }

  export type EnumAcc_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_status | EnumAcc_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_status[] | ListEnumAcc_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_status[] | ListEnumAcc_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_statusFilter<$PrismaModel> | $Enums.Acc_status
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsCountOrderByAggregateInput = {
    acc_id?: SortOrder
    user_id?: SortOrder
    acc_name?: SortOrder
    acc_number?: SortOrder
    status?: SortOrder
    type?: SortOrder
    bank?: SortOrder
    balance?: SortOrder
    connectedToMain?: SortOrder
    created_At?: SortOrder
  }

  export type AccountsAvgOrderByAggregateInput = {
    acc_id?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
  }

  export type AccountsMaxOrderByAggregateInput = {
    acc_id?: SortOrder
    user_id?: SortOrder
    acc_name?: SortOrder
    acc_number?: SortOrder
    status?: SortOrder
    type?: SortOrder
    bank?: SortOrder
    balance?: SortOrder
    connectedToMain?: SortOrder
    created_At?: SortOrder
  }

  export type AccountsMinOrderByAggregateInput = {
    acc_id?: SortOrder
    user_id?: SortOrder
    acc_name?: SortOrder
    acc_number?: SortOrder
    status?: SortOrder
    type?: SortOrder
    bank?: SortOrder
    balance?: SortOrder
    connectedToMain?: SortOrder
    created_At?: SortOrder
  }

  export type AccountsSumOrderByAggregateInput = {
    acc_id?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
  }

  export type EnumAcc_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_status | EnumAcc_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_status[] | ListEnumAcc_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_status[] | ListEnumAcc_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_statusWithAggregatesFilter<$PrismaModel> | $Enums.Acc_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcc_statusFilter<$PrismaModel>
    _max?: NestedEnumAcc_statusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type LinkedBankTokenUser_idBankNameCompoundUniqueInput = {
    user_id: number
    bankName: string
  }

  export type LinkedBankTokenCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bankName?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkedBankTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type LinkedBankTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bankName?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkedBankTokenMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bankName?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkedBankTokenSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumTxn_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_status | EnumTxn_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_status[] | ListEnumTxn_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_status[] | ListEnumTxn_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_statusFilter<$PrismaModel> | $Enums.Txn_status
  }

  export type EnumTxn_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_type | EnumTxn_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_type[] | ListEnumTxn_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_type[] | ListEnumTxn_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_typeFilter<$PrismaModel> | $Enums.Txn_type
  }

  export type EnumTxn_channelFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_channel | EnumTxn_channelFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_channel[] | ListEnumTxn_channelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_channel[] | ListEnumTxn_channelFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_channelFilter<$PrismaModel> | $Enums.Txn_channel
  }

  export type AccountsScalarRelationFilter = {
    is?: AccountsWhereInput
    isNot?: AccountsWhereInput
  }

  export type TransactionsCountOrderByAggregateInput = {
    txn_id?: SortOrder
    acc_id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    created_At?: SortOrder
    channel?: SortOrder
    category?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    txn_id?: SortOrder
    acc_id?: SortOrder
    amount?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    txn_id?: SortOrder
    acc_id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    created_At?: SortOrder
    channel?: SortOrder
    category?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    txn_id?: SortOrder
    acc_id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    created_At?: SortOrder
    channel?: SortOrder
    category?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    txn_id?: SortOrder
    acc_id?: SortOrder
    amount?: SortOrder
  }

  export type EnumTxn_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_status | EnumTxn_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_status[] | ListEnumTxn_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_status[] | ListEnumTxn_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_statusWithAggregatesFilter<$PrismaModel> | $Enums.Txn_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxn_statusFilter<$PrismaModel>
    _max?: NestedEnumTxn_statusFilter<$PrismaModel>
  }

  export type EnumTxn_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_type | EnumTxn_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_type[] | ListEnumTxn_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_type[] | ListEnumTxn_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_typeWithAggregatesFilter<$PrismaModel> | $Enums.Txn_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxn_typeFilter<$PrismaModel>
    _max?: NestedEnumTxn_typeFilter<$PrismaModel>
  }

  export type EnumTxn_channelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_channel | EnumTxn_channelFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_channel[] | ListEnumTxn_channelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_channel[] | ListEnumTxn_channelFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_channelWithAggregatesFilter<$PrismaModel> | $Enums.Txn_channel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxn_channelFilter<$PrismaModel>
    _max?: NestedEnumTxn_channelFilter<$PrismaModel>
  }

  export type VerificationCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
  }

  export type AccountsCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
  }

  export type LinkedBankTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkedBankTokenCreateWithoutUserInput, LinkedBankTokenUncheckedCreateWithoutUserInput> | LinkedBankTokenCreateWithoutUserInput[] | LinkedBankTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedBankTokenCreateOrConnectWithoutUserInput | LinkedBankTokenCreateOrConnectWithoutUserInput[]
    createMany?: LinkedBankTokenCreateManyUserInputEnvelope
    connect?: LinkedBankTokenWhereUniqueInput | LinkedBankTokenWhereUniqueInput[]
  }

  export type DefaultAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<DefaultAccountCreateWithoutUserInput, DefaultAccountUncheckedCreateWithoutUserInput> | DefaultAccountCreateWithoutUserInput[] | DefaultAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DefaultAccountCreateOrConnectWithoutUserInput | DefaultAccountCreateOrConnectWithoutUserInput[]
    createMany?: DefaultAccountCreateManyUserInputEnvelope
    connect?: DefaultAccountWhereUniqueInput | DefaultAccountWhereUniqueInput[]
  }

  export type VerificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
  }

  export type AccountsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
  }

  export type LinkedBankTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkedBankTokenCreateWithoutUserInput, LinkedBankTokenUncheckedCreateWithoutUserInput> | LinkedBankTokenCreateWithoutUserInput[] | LinkedBankTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedBankTokenCreateOrConnectWithoutUserInput | LinkedBankTokenCreateOrConnectWithoutUserInput[]
    createMany?: LinkedBankTokenCreateManyUserInputEnvelope
    connect?: LinkedBankTokenWhereUniqueInput | LinkedBankTokenWhereUniqueInput[]
  }

  export type DefaultAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DefaultAccountCreateWithoutUserInput, DefaultAccountUncheckedCreateWithoutUserInput> | DefaultAccountCreateWithoutUserInput[] | DefaultAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DefaultAccountCreateOrConnectWithoutUserInput | DefaultAccountCreateOrConnectWithoutUserInput[]
    createMany?: DefaultAccountCreateManyUserInputEnvelope
    connect?: DefaultAccountWhereUniqueInput | DefaultAccountWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VerificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    upsert?: VerificationUpsertWithWhereUniqueWithoutUserInput | VerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    set?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    disconnect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    delete?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    update?: VerificationUpdateWithWhereUniqueWithoutUserInput | VerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationUpdateManyWithWhereWithoutUserInput | VerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
  }

  export type AccountsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    upsert?: AccountsUpsertWithWhereUniqueWithoutUserInput | AccountsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    set?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    disconnect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    delete?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    update?: AccountsUpdateWithWhereUniqueWithoutUserInput | AccountsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountsUpdateManyWithWhereWithoutUserInput | AccountsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountsScalarWhereInput | AccountsScalarWhereInput[]
  }

  export type LinkedBankTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkedBankTokenCreateWithoutUserInput, LinkedBankTokenUncheckedCreateWithoutUserInput> | LinkedBankTokenCreateWithoutUserInput[] | LinkedBankTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedBankTokenCreateOrConnectWithoutUserInput | LinkedBankTokenCreateOrConnectWithoutUserInput[]
    upsert?: LinkedBankTokenUpsertWithWhereUniqueWithoutUserInput | LinkedBankTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkedBankTokenCreateManyUserInputEnvelope
    set?: LinkedBankTokenWhereUniqueInput | LinkedBankTokenWhereUniqueInput[]
    disconnect?: LinkedBankTokenWhereUniqueInput | LinkedBankTokenWhereUniqueInput[]
    delete?: LinkedBankTokenWhereUniqueInput | LinkedBankTokenWhereUniqueInput[]
    connect?: LinkedBankTokenWhereUniqueInput | LinkedBankTokenWhereUniqueInput[]
    update?: LinkedBankTokenUpdateWithWhereUniqueWithoutUserInput | LinkedBankTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkedBankTokenUpdateManyWithWhereWithoutUserInput | LinkedBankTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkedBankTokenScalarWhereInput | LinkedBankTokenScalarWhereInput[]
  }

  export type DefaultAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<DefaultAccountCreateWithoutUserInput, DefaultAccountUncheckedCreateWithoutUserInput> | DefaultAccountCreateWithoutUserInput[] | DefaultAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DefaultAccountCreateOrConnectWithoutUserInput | DefaultAccountCreateOrConnectWithoutUserInput[]
    upsert?: DefaultAccountUpsertWithWhereUniqueWithoutUserInput | DefaultAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DefaultAccountCreateManyUserInputEnvelope
    set?: DefaultAccountWhereUniqueInput | DefaultAccountWhereUniqueInput[]
    disconnect?: DefaultAccountWhereUniqueInput | DefaultAccountWhereUniqueInput[]
    delete?: DefaultAccountWhereUniqueInput | DefaultAccountWhereUniqueInput[]
    connect?: DefaultAccountWhereUniqueInput | DefaultAccountWhereUniqueInput[]
    update?: DefaultAccountUpdateWithWhereUniqueWithoutUserInput | DefaultAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DefaultAccountUpdateManyWithWhereWithoutUserInput | DefaultAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DefaultAccountScalarWhereInput | DefaultAccountScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VerificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    upsert?: VerificationUpsertWithWhereUniqueWithoutUserInput | VerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    set?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    disconnect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    delete?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    update?: VerificationUpdateWithWhereUniqueWithoutUserInput | VerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationUpdateManyWithWhereWithoutUserInput | VerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
  }

  export type AccountsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    upsert?: AccountsUpsertWithWhereUniqueWithoutUserInput | AccountsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    set?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    disconnect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    delete?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
    update?: AccountsUpdateWithWhereUniqueWithoutUserInput | AccountsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountsUpdateManyWithWhereWithoutUserInput | AccountsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountsScalarWhereInput | AccountsScalarWhereInput[]
  }

  export type LinkedBankTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkedBankTokenCreateWithoutUserInput, LinkedBankTokenUncheckedCreateWithoutUserInput> | LinkedBankTokenCreateWithoutUserInput[] | LinkedBankTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedBankTokenCreateOrConnectWithoutUserInput | LinkedBankTokenCreateOrConnectWithoutUserInput[]
    upsert?: LinkedBankTokenUpsertWithWhereUniqueWithoutUserInput | LinkedBankTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkedBankTokenCreateManyUserInputEnvelope
    set?: LinkedBankTokenWhereUniqueInput | LinkedBankTokenWhereUniqueInput[]
    disconnect?: LinkedBankTokenWhereUniqueInput | LinkedBankTokenWhereUniqueInput[]
    delete?: LinkedBankTokenWhereUniqueInput | LinkedBankTokenWhereUniqueInput[]
    connect?: LinkedBankTokenWhereUniqueInput | LinkedBankTokenWhereUniqueInput[]
    update?: LinkedBankTokenUpdateWithWhereUniqueWithoutUserInput | LinkedBankTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkedBankTokenUpdateManyWithWhereWithoutUserInput | LinkedBankTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkedBankTokenScalarWhereInput | LinkedBankTokenScalarWhereInput[]
  }

  export type DefaultAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DefaultAccountCreateWithoutUserInput, DefaultAccountUncheckedCreateWithoutUserInput> | DefaultAccountCreateWithoutUserInput[] | DefaultAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DefaultAccountCreateOrConnectWithoutUserInput | DefaultAccountCreateOrConnectWithoutUserInput[]
    upsert?: DefaultAccountUpsertWithWhereUniqueWithoutUserInput | DefaultAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DefaultAccountCreateManyUserInputEnvelope
    set?: DefaultAccountWhereUniqueInput | DefaultAccountWhereUniqueInput[]
    disconnect?: DefaultAccountWhereUniqueInput | DefaultAccountWhereUniqueInput[]
    delete?: DefaultAccountWhereUniqueInput | DefaultAccountWhereUniqueInput[]
    connect?: DefaultAccountWhereUniqueInput | DefaultAccountWhereUniqueInput[]
    update?: DefaultAccountUpdateWithWhereUniqueWithoutUserInput | DefaultAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DefaultAccountUpdateManyWithWhereWithoutUserInput | DefaultAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DefaultAccountScalarWhereInput | DefaultAccountScalarWhereInput[]
  }

  export type EnumAuthTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuthType
  }

  export type UserCreateNestedOneWithoutVerificationsInput = {
    create?: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutVerificationsNestedInput = {
    create?: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationsInput
    upsert?: UserUpsertWithoutVerificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationsInput, UserUpdateWithoutVerificationsInput>, UserUncheckedUpdateWithoutVerificationsInput>
  }

  export type UserCreateNestedOneWithoutDefaultAccountInput = {
    create?: XOR<UserCreateWithoutDefaultAccountInput, UserUncheckedCreateWithoutDefaultAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutDefaultAccountInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBank_nameFieldUpdateOperationsInput = {
    set?: $Enums.Bank_name
  }

  export type EnumAcc_typeFieldUpdateOperationsInput = {
    set?: $Enums.Acc_type
  }

  export type UserUpdateOneRequiredWithoutDefaultAccountNestedInput = {
    create?: XOR<UserCreateWithoutDefaultAccountInput, UserUncheckedCreateWithoutDefaultAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutDefaultAccountInput
    upsert?: UserUpsertWithoutDefaultAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDefaultAccountInput, UserUpdateWithoutDefaultAccountInput>, UserUncheckedUpdateWithoutDefaultAccountInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionsCreateNestedManyWithoutAccountsInput = {
    create?: XOR<TransactionsCreateWithoutAccountsInput, TransactionsUncheckedCreateWithoutAccountsInput> | TransactionsCreateWithoutAccountsInput[] | TransactionsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutAccountsInput | TransactionsCreateOrConnectWithoutAccountsInput[]
    createMany?: TransactionsCreateManyAccountsInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<TransactionsCreateWithoutAccountsInput, TransactionsUncheckedCreateWithoutAccountsInput> | TransactionsCreateWithoutAccountsInput[] | TransactionsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutAccountsInput | TransactionsCreateOrConnectWithoutAccountsInput[]
    createMany?: TransactionsCreateManyAccountsInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type EnumAcc_statusFieldUpdateOperationsInput = {
    set?: $Enums.Acc_status
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type TransactionsUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<TransactionsCreateWithoutAccountsInput, TransactionsUncheckedCreateWithoutAccountsInput> | TransactionsCreateWithoutAccountsInput[] | TransactionsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutAccountsInput | TransactionsCreateOrConnectWithoutAccountsInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutAccountsInput | TransactionsUpsertWithWhereUniqueWithoutAccountsInput[]
    createMany?: TransactionsCreateManyAccountsInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutAccountsInput | TransactionsUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutAccountsInput | TransactionsUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<TransactionsCreateWithoutAccountsInput, TransactionsUncheckedCreateWithoutAccountsInput> | TransactionsCreateWithoutAccountsInput[] | TransactionsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutAccountsInput | TransactionsCreateOrConnectWithoutAccountsInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutAccountsInput | TransactionsUpsertWithWhereUniqueWithoutAccountsInput[]
    createMany?: TransactionsCreateManyAccountsInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutAccountsInput | TransactionsUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutAccountsInput | TransactionsUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLinkedbankedtokenInput = {
    create?: XOR<UserCreateWithoutLinkedbankedtokenInput, UserUncheckedCreateWithoutLinkedbankedtokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkedbankedtokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLinkedbankedtokenNestedInput = {
    create?: XOR<UserCreateWithoutLinkedbankedtokenInput, UserUncheckedCreateWithoutLinkedbankedtokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkedbankedtokenInput
    upsert?: UserUpsertWithoutLinkedbankedtokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinkedbankedtokenInput, UserUpdateWithoutLinkedbankedtokenInput>, UserUncheckedUpdateWithoutLinkedbankedtokenInput>
  }

  export type AccountsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AccountsCreateWithoutTransactionsInput, AccountsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutTransactionsInput
    connect?: AccountsWhereUniqueInput
  }

  export type EnumTxn_statusFieldUpdateOperationsInput = {
    set?: $Enums.Txn_status
  }

  export type EnumTxn_typeFieldUpdateOperationsInput = {
    set?: $Enums.Txn_type
  }

  export type EnumTxn_channelFieldUpdateOperationsInput = {
    set?: $Enums.Txn_channel
  }

  export type AccountsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<AccountsCreateWithoutTransactionsInput, AccountsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutTransactionsInput
    upsert?: AccountsUpsertWithoutTransactionsInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutTransactionsInput, AccountsUpdateWithoutTransactionsInput>, AccountsUncheckedUpdateWithoutTransactionsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAuthTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeFilter<$PrismaModel> | $Enums.AuthType
  }

  export type NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthTypeFilter<$PrismaModel>
    _max?: NestedEnumAuthTypeFilter<$PrismaModel>
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

  export type NestedEnumBank_nameFilter<$PrismaModel = never> = {
    equals?: $Enums.Bank_name | EnumBank_nameFieldRefInput<$PrismaModel>
    in?: $Enums.Bank_name[] | ListEnumBank_nameFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bank_name[] | ListEnumBank_nameFieldRefInput<$PrismaModel>
    not?: NestedEnumBank_nameFilter<$PrismaModel> | $Enums.Bank_name
  }

  export type NestedEnumAcc_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_type | EnumAcc_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_typeFilter<$PrismaModel> | $Enums.Acc_type
  }

  export type NestedEnumBank_nameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Bank_name | EnumBank_nameFieldRefInput<$PrismaModel>
    in?: $Enums.Bank_name[] | ListEnumBank_nameFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bank_name[] | ListEnumBank_nameFieldRefInput<$PrismaModel>
    not?: NestedEnumBank_nameWithAggregatesFilter<$PrismaModel> | $Enums.Bank_name
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBank_nameFilter<$PrismaModel>
    _max?: NestedEnumBank_nameFilter<$PrismaModel>
  }

  export type NestedEnumAcc_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_type | EnumAcc_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_typeWithAggregatesFilter<$PrismaModel> | $Enums.Acc_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcc_typeFilter<$PrismaModel>
    _max?: NestedEnumAcc_typeFilter<$PrismaModel>
  }

  export type NestedEnumAcc_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_status | EnumAcc_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_status[] | ListEnumAcc_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_status[] | ListEnumAcc_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_statusFilter<$PrismaModel> | $Enums.Acc_status
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumAcc_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_status | EnumAcc_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_status[] | ListEnumAcc_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_status[] | ListEnumAcc_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_statusWithAggregatesFilter<$PrismaModel> | $Enums.Acc_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcc_statusFilter<$PrismaModel>
    _max?: NestedEnumAcc_statusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTxn_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_status | EnumTxn_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_status[] | ListEnumTxn_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_status[] | ListEnumTxn_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_statusFilter<$PrismaModel> | $Enums.Txn_status
  }

  export type NestedEnumTxn_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_type | EnumTxn_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_type[] | ListEnumTxn_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_type[] | ListEnumTxn_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_typeFilter<$PrismaModel> | $Enums.Txn_type
  }

  export type NestedEnumTxn_channelFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_channel | EnumTxn_channelFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_channel[] | ListEnumTxn_channelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_channel[] | ListEnumTxn_channelFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_channelFilter<$PrismaModel> | $Enums.Txn_channel
  }

  export type NestedEnumTxn_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_status | EnumTxn_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_status[] | ListEnumTxn_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_status[] | ListEnumTxn_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_statusWithAggregatesFilter<$PrismaModel> | $Enums.Txn_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxn_statusFilter<$PrismaModel>
    _max?: NestedEnumTxn_statusFilter<$PrismaModel>
  }

  export type NestedEnumTxn_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_type | EnumTxn_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_type[] | ListEnumTxn_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_type[] | ListEnumTxn_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_typeWithAggregatesFilter<$PrismaModel> | $Enums.Txn_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxn_typeFilter<$PrismaModel>
    _max?: NestedEnumTxn_typeFilter<$PrismaModel>
  }

  export type NestedEnumTxn_channelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_channel | EnumTxn_channelFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_channel[] | ListEnumTxn_channelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_channel[] | ListEnumTxn_channelFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_channelWithAggregatesFilter<$PrismaModel> | $Enums.Txn_channel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxn_channelFilter<$PrismaModel>
    _max?: NestedEnumTxn_channelFilter<$PrismaModel>
  }

  export type VerificationCreateWithoutUserInput = {
    otp: string
    type: string
    expiresAt: Date | string
  }

  export type VerificationUncheckedCreateWithoutUserInput = {
    id?: number
    otp: string
    type: string
    expiresAt: Date | string
  }

  export type VerificationCreateOrConnectWithoutUserInput = {
    where: VerificationWhereUniqueInput
    create: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
  }

  export type VerificationCreateManyUserInputEnvelope = {
    data: VerificationCreateManyUserInput | VerificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountsCreateWithoutUserInput = {
    acc_name: string
    acc_number: string
    status: $Enums.Acc_status
    type: $Enums.Acc_type
    bank: $Enums.Bank_name
    balance: Decimal | DecimalJsLike | number | string
    connectedToMain: boolean
    created_At: Date | string
    transactions?: TransactionsCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUncheckedCreateWithoutUserInput = {
    acc_id?: number
    acc_name: string
    acc_number: string
    status: $Enums.Acc_status
    type: $Enums.Acc_type
    bank: $Enums.Bank_name
    balance: Decimal | DecimalJsLike | number | string
    connectedToMain: boolean
    created_At: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountsCreateOrConnectWithoutUserInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput>
  }

  export type AccountsCreateManyUserInputEnvelope = {
    data: AccountsCreateManyUserInput | AccountsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LinkedBankTokenCreateWithoutUserInput = {
    bankName: string
    accessToken: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LinkedBankTokenUncheckedCreateWithoutUserInput = {
    id?: number
    bankName: string
    accessToken: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LinkedBankTokenCreateOrConnectWithoutUserInput = {
    where: LinkedBankTokenWhereUniqueInput
    create: XOR<LinkedBankTokenCreateWithoutUserInput, LinkedBankTokenUncheckedCreateWithoutUserInput>
  }

  export type LinkedBankTokenCreateManyUserInputEnvelope = {
    data: LinkedBankTokenCreateManyUserInput | LinkedBankTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DefaultAccountCreateWithoutUserInput = {
    bankName: $Enums.Bank_name
    accOrgType: $Enums.Acc_type
  }

  export type DefaultAccountUncheckedCreateWithoutUserInput = {
    id?: number
    bankName: $Enums.Bank_name
    accOrgType: $Enums.Acc_type
  }

  export type DefaultAccountCreateOrConnectWithoutUserInput = {
    where: DefaultAccountWhereUniqueInput
    create: XOR<DefaultAccountCreateWithoutUserInput, DefaultAccountUncheckedCreateWithoutUserInput>
  }

  export type DefaultAccountCreateManyUserInputEnvelope = {
    data: DefaultAccountCreateManyUserInput | DefaultAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VerificationUpsertWithWhereUniqueWithoutUserInput = {
    where: VerificationWhereUniqueInput
    update: XOR<VerificationUpdateWithoutUserInput, VerificationUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
  }

  export type VerificationUpdateWithWhereUniqueWithoutUserInput = {
    where: VerificationWhereUniqueInput
    data: XOR<VerificationUpdateWithoutUserInput, VerificationUncheckedUpdateWithoutUserInput>
  }

  export type VerificationUpdateManyWithWhereWithoutUserInput = {
    where: VerificationScalarWhereInput
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyWithoutUserInput>
  }

  export type VerificationScalarWhereInput = {
    AND?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
    OR?: VerificationScalarWhereInput[]
    NOT?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
    id?: IntFilter<"Verification"> | number
    user_id?: IntFilter<"Verification"> | number
    otp?: StringFilter<"Verification"> | string
    type?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type AccountsUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountsWhereUniqueInput
    update: XOR<AccountsUpdateWithoutUserInput, AccountsUncheckedUpdateWithoutUserInput>
    create: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput>
  }

  export type AccountsUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountsWhereUniqueInput
    data: XOR<AccountsUpdateWithoutUserInput, AccountsUncheckedUpdateWithoutUserInput>
  }

  export type AccountsUpdateManyWithWhereWithoutUserInput = {
    where: AccountsScalarWhereInput
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountsScalarWhereInput = {
    AND?: AccountsScalarWhereInput | AccountsScalarWhereInput[]
    OR?: AccountsScalarWhereInput[]
    NOT?: AccountsScalarWhereInput | AccountsScalarWhereInput[]
    acc_id?: IntFilter<"Accounts"> | number
    user_id?: IntFilter<"Accounts"> | number
    acc_name?: StringFilter<"Accounts"> | string
    acc_number?: StringFilter<"Accounts"> | string
    status?: EnumAcc_statusFilter<"Accounts"> | $Enums.Acc_status
    type?: EnumAcc_typeFilter<"Accounts"> | $Enums.Acc_type
    bank?: EnumBank_nameFilter<"Accounts"> | $Enums.Bank_name
    balance?: DecimalFilter<"Accounts"> | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolFilter<"Accounts"> | boolean
    created_At?: DateTimeFilter<"Accounts"> | Date | string
  }

  export type LinkedBankTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: LinkedBankTokenWhereUniqueInput
    update: XOR<LinkedBankTokenUpdateWithoutUserInput, LinkedBankTokenUncheckedUpdateWithoutUserInput>
    create: XOR<LinkedBankTokenCreateWithoutUserInput, LinkedBankTokenUncheckedCreateWithoutUserInput>
  }

  export type LinkedBankTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: LinkedBankTokenWhereUniqueInput
    data: XOR<LinkedBankTokenUpdateWithoutUserInput, LinkedBankTokenUncheckedUpdateWithoutUserInput>
  }

  export type LinkedBankTokenUpdateManyWithWhereWithoutUserInput = {
    where: LinkedBankTokenScalarWhereInput
    data: XOR<LinkedBankTokenUpdateManyMutationInput, LinkedBankTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type LinkedBankTokenScalarWhereInput = {
    AND?: LinkedBankTokenScalarWhereInput | LinkedBankTokenScalarWhereInput[]
    OR?: LinkedBankTokenScalarWhereInput[]
    NOT?: LinkedBankTokenScalarWhereInput | LinkedBankTokenScalarWhereInput[]
    id?: IntFilter<"LinkedBankToken"> | number
    user_id?: IntFilter<"LinkedBankToken"> | number
    bankName?: StringFilter<"LinkedBankToken"> | string
    accessToken?: StringFilter<"LinkedBankToken"> | string
    expiresAt?: DateTimeFilter<"LinkedBankToken"> | Date | string
    createdAt?: DateTimeFilter<"LinkedBankToken"> | Date | string
  }

  export type DefaultAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: DefaultAccountWhereUniqueInput
    update: XOR<DefaultAccountUpdateWithoutUserInput, DefaultAccountUncheckedUpdateWithoutUserInput>
    create: XOR<DefaultAccountCreateWithoutUserInput, DefaultAccountUncheckedCreateWithoutUserInput>
  }

  export type DefaultAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: DefaultAccountWhereUniqueInput
    data: XOR<DefaultAccountUpdateWithoutUserInput, DefaultAccountUncheckedUpdateWithoutUserInput>
  }

  export type DefaultAccountUpdateManyWithWhereWithoutUserInput = {
    where: DefaultAccountScalarWhereInput
    data: XOR<DefaultAccountUpdateManyMutationInput, DefaultAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type DefaultAccountScalarWhereInput = {
    AND?: DefaultAccountScalarWhereInput | DefaultAccountScalarWhereInput[]
    OR?: DefaultAccountScalarWhereInput[]
    NOT?: DefaultAccountScalarWhereInput | DefaultAccountScalarWhereInput[]
    id?: IntFilter<"DefaultAccount"> | number
    user_id?: IntFilter<"DefaultAccount"> | number
    bankName?: EnumBank_nameFilter<"DefaultAccount"> | $Enums.Bank_name
    accOrgType?: EnumAcc_typeFilter<"DefaultAccount"> | $Enums.Acc_type
  }

  export type UserCreateWithoutVerificationsInput = {
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    accounts?: AccountsCreateNestedManyWithoutUserInput
    linkedbankedtoken?: LinkedBankTokenCreateNestedManyWithoutUserInput
    defaultAccount?: DefaultAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationsInput = {
    id?: number
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    linkedbankedtoken?: LinkedBankTokenUncheckedCreateNestedManyWithoutUserInput
    defaultAccount?: DefaultAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
  }

  export type UserUpsertWithoutVerificationsInput = {
    update: XOR<UserUpdateWithoutVerificationsInput, UserUncheckedUpdateWithoutVerificationsInput>
    create: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationsInput, UserUncheckedUpdateWithoutVerificationsInput>
  }

  export type UserUpdateWithoutVerificationsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    linkedbankedtoken?: LinkedBankTokenUpdateManyWithoutUserNestedInput
    defaultAccount?: DefaultAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    linkedbankedtoken?: LinkedBankTokenUncheckedUpdateManyWithoutUserNestedInput
    defaultAccount?: DefaultAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDefaultAccountInput = {
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    verifications?: VerificationCreateNestedManyWithoutUserInput
    accounts?: AccountsCreateNestedManyWithoutUserInput
    linkedbankedtoken?: LinkedBankTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDefaultAccountInput = {
    id?: number
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    linkedbankedtoken?: LinkedBankTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDefaultAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDefaultAccountInput, UserUncheckedCreateWithoutDefaultAccountInput>
  }

  export type UserUpsertWithoutDefaultAccountInput = {
    update: XOR<UserUpdateWithoutDefaultAccountInput, UserUncheckedUpdateWithoutDefaultAccountInput>
    create: XOR<UserCreateWithoutDefaultAccountInput, UserUncheckedCreateWithoutDefaultAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDefaultAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDefaultAccountInput, UserUncheckedUpdateWithoutDefaultAccountInput>
  }

  export type UserUpdateWithoutDefaultAccountInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    linkedbankedtoken?: LinkedBankTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDefaultAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    linkedbankedtoken?: LinkedBankTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    verifications?: VerificationCreateNestedManyWithoutUserInput
    linkedbankedtoken?: LinkedBankTokenCreateNestedManyWithoutUserInput
    defaultAccount?: DefaultAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    linkedbankedtoken?: LinkedBankTokenUncheckedCreateNestedManyWithoutUserInput
    defaultAccount?: DefaultAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type TransactionsCreateWithoutAccountsInput = {
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    amount: number
    created_At: Date | string
    channel: $Enums.Txn_channel
    category: string
  }

  export type TransactionsUncheckedCreateWithoutAccountsInput = {
    txn_id?: number
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    amount: number
    created_At: Date | string
    channel: $Enums.Txn_channel
    category: string
  }

  export type TransactionsCreateOrConnectWithoutAccountsInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutAccountsInput, TransactionsUncheckedCreateWithoutAccountsInput>
  }

  export type TransactionsCreateManyAccountsInputEnvelope = {
    data: TransactionsCreateManyAccountsInput | TransactionsCreateManyAccountsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    linkedbankedtoken?: LinkedBankTokenUpdateManyWithoutUserNestedInput
    defaultAccount?: DefaultAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    linkedbankedtoken?: LinkedBankTokenUncheckedUpdateManyWithoutUserNestedInput
    defaultAccount?: DefaultAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionsUpsertWithWhereUniqueWithoutAccountsInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutAccountsInput, TransactionsUncheckedUpdateWithoutAccountsInput>
    create: XOR<TransactionsCreateWithoutAccountsInput, TransactionsUncheckedCreateWithoutAccountsInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutAccountsInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutAccountsInput, TransactionsUncheckedUpdateWithoutAccountsInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutAccountsInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutAccountsInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    txn_id?: IntFilter<"Transactions"> | number
    acc_id?: IntFilter<"Transactions"> | number
    status?: EnumTxn_statusFilter<"Transactions"> | $Enums.Txn_status
    type?: EnumTxn_typeFilter<"Transactions"> | $Enums.Txn_type
    amount?: IntFilter<"Transactions"> | number
    created_At?: DateTimeFilter<"Transactions"> | Date | string
    channel?: EnumTxn_channelFilter<"Transactions"> | $Enums.Txn_channel
    category?: StringFilter<"Transactions"> | string
  }

  export type UserCreateWithoutLinkedbankedtokenInput = {
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    verifications?: VerificationCreateNestedManyWithoutUserInput
    accounts?: AccountsCreateNestedManyWithoutUserInput
    defaultAccount?: DefaultAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinkedbankedtokenInput = {
    id?: number
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    defaultAccount?: DefaultAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinkedbankedtokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinkedbankedtokenInput, UserUncheckedCreateWithoutLinkedbankedtokenInput>
  }

  export type UserUpsertWithoutLinkedbankedtokenInput = {
    update: XOR<UserUpdateWithoutLinkedbankedtokenInput, UserUncheckedUpdateWithoutLinkedbankedtokenInput>
    create: XOR<UserCreateWithoutLinkedbankedtokenInput, UserUncheckedCreateWithoutLinkedbankedtokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinkedbankedtokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinkedbankedtokenInput, UserUncheckedUpdateWithoutLinkedbankedtokenInput>
  }

  export type UserUpdateWithoutLinkedbankedtokenInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    defaultAccount?: DefaultAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinkedbankedtokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    defaultAccount?: DefaultAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountsCreateWithoutTransactionsInput = {
    acc_name: string
    acc_number: string
    status: $Enums.Acc_status
    type: $Enums.Acc_type
    bank: $Enums.Bank_name
    balance: Decimal | DecimalJsLike | number | string
    connectedToMain: boolean
    created_At: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountsUncheckedCreateWithoutTransactionsInput = {
    acc_id?: number
    user_id: number
    acc_name: string
    acc_number: string
    status: $Enums.Acc_status
    type: $Enums.Acc_type
    bank: $Enums.Bank_name
    balance: Decimal | DecimalJsLike | number | string
    connectedToMain: boolean
    created_At: Date | string
  }

  export type AccountsCreateOrConnectWithoutTransactionsInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutTransactionsInput, AccountsUncheckedCreateWithoutTransactionsInput>
  }

  export type AccountsUpsertWithoutTransactionsInput = {
    update: XOR<AccountsUpdateWithoutTransactionsInput, AccountsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AccountsCreateWithoutTransactionsInput, AccountsUncheckedCreateWithoutTransactionsInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutTransactionsInput, AccountsUncheckedUpdateWithoutTransactionsInput>
  }

  export type AccountsUpdateWithoutTransactionsInput = {
    acc_name?: StringFieldUpdateOperationsInput | string
    acc_number?: StringFieldUpdateOperationsInput | string
    status?: EnumAcc_statusFieldUpdateOperationsInput | $Enums.Acc_status
    type?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
    bank?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolFieldUpdateOperationsInput | boolean
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutTransactionsInput = {
    acc_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    acc_name?: StringFieldUpdateOperationsInput | string
    acc_number?: StringFieldUpdateOperationsInput | string
    status?: EnumAcc_statusFieldUpdateOperationsInput | $Enums.Acc_status
    type?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
    bank?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolFieldUpdateOperationsInput | boolean
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyUserInput = {
    id?: number
    otp: string
    type: string
    expiresAt: Date | string
  }

  export type AccountsCreateManyUserInput = {
    acc_id?: number
    acc_name: string
    acc_number: string
    status: $Enums.Acc_status
    type: $Enums.Acc_type
    bank: $Enums.Bank_name
    balance: Decimal | DecimalJsLike | number | string
    connectedToMain: boolean
    created_At: Date | string
  }

  export type LinkedBankTokenCreateManyUserInput = {
    id?: number
    bankName: string
    accessToken: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type DefaultAccountCreateManyUserInput = {
    id?: number
    bankName: $Enums.Bank_name
    accOrgType: $Enums.Acc_type
  }

  export type VerificationUpdateWithoutUserInput = {
    otp?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsUpdateWithoutUserInput = {
    acc_name?: StringFieldUpdateOperationsInput | string
    acc_number?: StringFieldUpdateOperationsInput | string
    status?: EnumAcc_statusFieldUpdateOperationsInput | $Enums.Acc_status
    type?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
    bank?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolFieldUpdateOperationsInput | boolean
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutUserInput = {
    acc_id?: IntFieldUpdateOperationsInput | number
    acc_name?: StringFieldUpdateOperationsInput | string
    acc_number?: StringFieldUpdateOperationsInput | string
    status?: EnumAcc_statusFieldUpdateOperationsInput | $Enums.Acc_status
    type?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
    bank?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolFieldUpdateOperationsInput | boolean
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateManyWithoutUserInput = {
    acc_id?: IntFieldUpdateOperationsInput | number
    acc_name?: StringFieldUpdateOperationsInput | string
    acc_number?: StringFieldUpdateOperationsInput | string
    status?: EnumAcc_statusFieldUpdateOperationsInput | $Enums.Acc_status
    type?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
    bank?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    connectedToMain?: BoolFieldUpdateOperationsInput | boolean
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedBankTokenUpdateWithoutUserInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedBankTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedBankTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DefaultAccountUpdateWithoutUserInput = {
    bankName?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    accOrgType?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
  }

  export type DefaultAccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    accOrgType?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
  }

  export type DefaultAccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: EnumBank_nameFieldUpdateOperationsInput | $Enums.Bank_name
    accOrgType?: EnumAcc_typeFieldUpdateOperationsInput | $Enums.Acc_type
  }

  export type TransactionsCreateManyAccountsInput = {
    txn_id?: number
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    amount: number
    created_At: Date | string
    channel: $Enums.Txn_channel
    category: string
  }

  export type TransactionsUpdateWithoutAccountsInput = {
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    amount?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    category?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsUncheckedUpdateWithoutAccountsInput = {
    txn_id?: IntFieldUpdateOperationsInput | number
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    amount?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    category?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsUncheckedUpdateManyWithoutAccountsInput = {
    txn_id?: IntFieldUpdateOperationsInput | number
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    amount?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    category?: StringFieldUpdateOperationsInput | string
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