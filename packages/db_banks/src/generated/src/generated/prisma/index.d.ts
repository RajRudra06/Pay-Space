
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
 * Model CommercialClients
 * 
 */
export type CommercialClients = $Result.DefaultSelection<Prisma.$CommercialClientsPayload>
/**
 * Model Accounts
 * 
 */
export type Accounts = $Result.DefaultSelection<Prisma.$AccountsPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Auth_codes
 * 
 */
export type Auth_codes = $Result.DefaultSelection<Prisma.$Auth_codesPayload>
/**
 * Model Tokens
 * 
 */
export type Tokens = $Result.DefaultSelection<Prisma.$TokensPayload>

/**
 * Enums
 */
export namespace $Enums {
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
  card: 'card',
  cheque: 'cheque',
  cheque_DD: 'cheque_DD',
  RTGS: 'RTGS',
  NEFT: 'NEFT'
};

export type Txn_channel = (typeof Txn_channel)[keyof typeof Txn_channel]


export const Bank_name: {
  icici: 'icici',
  sbi: 'sbi',
  hdfc: 'hdfc',
  ubi: 'ubi'
};

export type Bank_name = (typeof Bank_name)[keyof typeof Bank_name]


export const Txn_Cat: {
  Utilities: 'Utilities',
  Insurance: 'Insurance',
  Dine: 'Dine',
  Shopping: 'Shopping',
  Entertainment: 'Entertainment',
  Travel: 'Travel',
  Load_EMI: 'Load_EMI',
  Savings_Transfers: 'Savings_Transfers',
  Investments: 'Investments',
  Education: 'Education',
  Health: 'Health',
  Income: 'Income',
  Taxes: 'Taxes'
};

export type Txn_Cat = (typeof Txn_Cat)[keyof typeof Txn_Cat]

}

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

export type Txn_Cat = $Enums.Txn_Cat

export const Txn_Cat: typeof $Enums.Txn_Cat

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
   * `prisma.commercialClients`: Exposes CRUD operations for the **CommercialClients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommercialClients
    * const commercialClients = await prisma.commercialClients.findMany()
    * ```
    */
  get commercialClients(): Prisma.CommercialClientsDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.auth_codes`: Exposes CRUD operations for the **Auth_codes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_codes
    * const auth_codes = await prisma.auth_codes.findMany()
    * ```
    */
  get auth_codes(): Prisma.Auth_codesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **Tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.TokensDelegate<ExtArgs, ClientOptions>;
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
    CommercialClients: 'CommercialClients',
    Accounts: 'Accounts',
    Transactions: 'Transactions',
    Verification: 'Verification',
    Auth_codes: 'Auth_codes',
    Tokens: 'Tokens'
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
      modelProps: "user" | "commercialClients" | "accounts" | "transactions" | "verification" | "auth_codes" | "tokens"
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
      CommercialClients: {
        payload: Prisma.$CommercialClientsPayload<ExtArgs>
        fields: Prisma.CommercialClientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommercialClientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercialClientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommercialClientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercialClientsPayload>
          }
          findFirst: {
            args: Prisma.CommercialClientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercialClientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommercialClientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercialClientsPayload>
          }
          findMany: {
            args: Prisma.CommercialClientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercialClientsPayload>[]
          }
          create: {
            args: Prisma.CommercialClientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercialClientsPayload>
          }
          createMany: {
            args: Prisma.CommercialClientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommercialClientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercialClientsPayload>[]
          }
          delete: {
            args: Prisma.CommercialClientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercialClientsPayload>
          }
          update: {
            args: Prisma.CommercialClientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercialClientsPayload>
          }
          deleteMany: {
            args: Prisma.CommercialClientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommercialClientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommercialClientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercialClientsPayload>[]
          }
          upsert: {
            args: Prisma.CommercialClientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercialClientsPayload>
          }
          aggregate: {
            args: Prisma.CommercialClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommercialClients>
          }
          groupBy: {
            args: Prisma.CommercialClientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommercialClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommercialClientsCountArgs<ExtArgs>
            result: $Utils.Optional<CommercialClientsCountAggregateOutputType> | number
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
      Auth_codes: {
        payload: Prisma.$Auth_codesPayload<ExtArgs>
        fields: Prisma.Auth_codesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Auth_codesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auth_codesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Auth_codesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auth_codesPayload>
          }
          findFirst: {
            args: Prisma.Auth_codesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auth_codesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Auth_codesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auth_codesPayload>
          }
          findMany: {
            args: Prisma.Auth_codesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auth_codesPayload>[]
          }
          create: {
            args: Prisma.Auth_codesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auth_codesPayload>
          }
          createMany: {
            args: Prisma.Auth_codesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Auth_codesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auth_codesPayload>[]
          }
          delete: {
            args: Prisma.Auth_codesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auth_codesPayload>
          }
          update: {
            args: Prisma.Auth_codesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auth_codesPayload>
          }
          deleteMany: {
            args: Prisma.Auth_codesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Auth_codesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Auth_codesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auth_codesPayload>[]
          }
          upsert: {
            args: Prisma.Auth_codesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auth_codesPayload>
          }
          aggregate: {
            args: Prisma.Auth_codesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_codes>
          }
          groupBy: {
            args: Prisma.Auth_codesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_codesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Auth_codesCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_codesCountAggregateOutputType> | number
          }
        }
      }
      Tokens: {
        payload: Prisma.$TokensPayload<ExtArgs>
        fields: Prisma.TokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findFirst: {
            args: Prisma.TokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findMany: {
            args: Prisma.TokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          create: {
            args: Prisma.TokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          createMany: {
            args: Prisma.TokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          delete: {
            args: Prisma.TokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          update: {
            args: Prisma.TokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          deleteMany: {
            args: Prisma.TokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          upsert: {
            args: Prisma.TokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.TokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
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
    commercialClients?: CommercialClientsOmit
    accounts?: AccountsOmit
    transactions?: TransactionsOmit
    verification?: VerificationOmit
    auth_codes?: Auth_codesOmit
    tokens?: TokensOmit
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
    accounts: number
    verification: number
    auth_code: number
    tokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    verification?: boolean | UserCountOutputTypeCountVerificationArgs
    auth_code?: boolean | UserCountOutputTypeCountAuth_codeArgs
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuth_codeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Auth_codesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
  }


  /**
   * Count Type CommercialClientsCountOutputType
   */

  export type CommercialClientsCountOutputType = {
    tokens: number
  }

  export type CommercialClientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | CommercialClientsCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * CommercialClientsCountOutputType without action
   */
  export type CommercialClientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClientsCountOutputType
     */
    select?: CommercialClientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommercialClientsCountOutputType without action
   */
  export type CommercialClientsCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
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
    accounts?: boolean | User$accountsArgs<ExtArgs>
    verification?: boolean | User$verificationArgs<ExtArgs>
    auth_code?: boolean | User$auth_codeArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
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
    accounts?: boolean | User$accountsArgs<ExtArgs>
    verification?: boolean | User$verificationArgs<ExtArgs>
    auth_code?: boolean | User$auth_codeArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountsPayload<ExtArgs>[]
      verification: Prisma.$VerificationPayload<ExtArgs>[]
      auth_code: Prisma.$Auth_codesPayload<ExtArgs>[]
      tokens: Prisma.$TokensPayload<ExtArgs>[]
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verification<T extends User$verificationArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auth_code<T extends User$auth_codeArgs<ExtArgs> = {}>(args?: Subset<T, User$auth_codeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Auth_codesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.verification
   */
  export type User$verificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.auth_code
   */
  export type User$auth_codeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesInclude<ExtArgs> | null
    where?: Auth_codesWhereInput
    orderBy?: Auth_codesOrderByWithRelationInput | Auth_codesOrderByWithRelationInput[]
    cursor?: Auth_codesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auth_codesScalarFieldEnum | Auth_codesScalarFieldEnum[]
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    cursor?: TokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
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
   * Model CommercialClients
   */

  export type AggregateCommercialClients = {
    _count: CommercialClientsCountAggregateOutputType | null
    _avg: CommercialClientsAvgAggregateOutputType | null
    _sum: CommercialClientsSumAggregateOutputType | null
    _min: CommercialClientsMinAggregateOutputType | null
    _max: CommercialClientsMaxAggregateOutputType | null
  }

  export type CommercialClientsAvgAggregateOutputType = {
    id: number | null
  }

  export type CommercialClientsSumAggregateOutputType = {
    id: number | null
  }

  export type CommercialClientsMinAggregateOutputType = {
    id: number | null
    client_id: string | null
    assigned_date: Date | null
    sharedSecret: string | null
    expiresAt: Date | null
  }

  export type CommercialClientsMaxAggregateOutputType = {
    id: number | null
    client_id: string | null
    assigned_date: Date | null
    sharedSecret: string | null
    expiresAt: Date | null
  }

  export type CommercialClientsCountAggregateOutputType = {
    id: number
    client_id: number
    assigned_date: number
    sharedSecret: number
    expiresAt: number
    _all: number
  }


  export type CommercialClientsAvgAggregateInputType = {
    id?: true
  }

  export type CommercialClientsSumAggregateInputType = {
    id?: true
  }

  export type CommercialClientsMinAggregateInputType = {
    id?: true
    client_id?: true
    assigned_date?: true
    sharedSecret?: true
    expiresAt?: true
  }

  export type CommercialClientsMaxAggregateInputType = {
    id?: true
    client_id?: true
    assigned_date?: true
    sharedSecret?: true
    expiresAt?: true
  }

  export type CommercialClientsCountAggregateInputType = {
    id?: true
    client_id?: true
    assigned_date?: true
    sharedSecret?: true
    expiresAt?: true
    _all?: true
  }

  export type CommercialClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommercialClients to aggregate.
     */
    where?: CommercialClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommercialClients to fetch.
     */
    orderBy?: CommercialClientsOrderByWithRelationInput | CommercialClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommercialClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommercialClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommercialClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommercialClients
    **/
    _count?: true | CommercialClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommercialClientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommercialClientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommercialClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommercialClientsMaxAggregateInputType
  }

  export type GetCommercialClientsAggregateType<T extends CommercialClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateCommercialClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommercialClients[P]>
      : GetScalarType<T[P], AggregateCommercialClients[P]>
  }




  export type CommercialClientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommercialClientsWhereInput
    orderBy?: CommercialClientsOrderByWithAggregationInput | CommercialClientsOrderByWithAggregationInput[]
    by: CommercialClientsScalarFieldEnum[] | CommercialClientsScalarFieldEnum
    having?: CommercialClientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommercialClientsCountAggregateInputType | true
    _avg?: CommercialClientsAvgAggregateInputType
    _sum?: CommercialClientsSumAggregateInputType
    _min?: CommercialClientsMinAggregateInputType
    _max?: CommercialClientsMaxAggregateInputType
  }

  export type CommercialClientsGroupByOutputType = {
    id: number
    client_id: string
    assigned_date: Date
    sharedSecret: string
    expiresAt: Date
    _count: CommercialClientsCountAggregateOutputType | null
    _avg: CommercialClientsAvgAggregateOutputType | null
    _sum: CommercialClientsSumAggregateOutputType | null
    _min: CommercialClientsMinAggregateOutputType | null
    _max: CommercialClientsMaxAggregateOutputType | null
  }

  type GetCommercialClientsGroupByPayload<T extends CommercialClientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommercialClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommercialClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommercialClientsGroupByOutputType[P]>
            : GetScalarType<T[P], CommercialClientsGroupByOutputType[P]>
        }
      >
    >


  export type CommercialClientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    assigned_date?: boolean
    sharedSecret?: boolean
    expiresAt?: boolean
    tokens?: boolean | CommercialClients$tokensArgs<ExtArgs>
    _count?: boolean | CommercialClientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commercialClients"]>

  export type CommercialClientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    assigned_date?: boolean
    sharedSecret?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["commercialClients"]>

  export type CommercialClientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    assigned_date?: boolean
    sharedSecret?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["commercialClients"]>

  export type CommercialClientsSelectScalar = {
    id?: boolean
    client_id?: boolean
    assigned_date?: boolean
    sharedSecret?: boolean
    expiresAt?: boolean
  }

  export type CommercialClientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_id" | "assigned_date" | "sharedSecret" | "expiresAt", ExtArgs["result"]["commercialClients"]>
  export type CommercialClientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | CommercialClients$tokensArgs<ExtArgs>
    _count?: boolean | CommercialClientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommercialClientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommercialClientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommercialClientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommercialClients"
    objects: {
      tokens: Prisma.$TokensPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      client_id: string
      assigned_date: Date
      sharedSecret: string
      expiresAt: Date
    }, ExtArgs["result"]["commercialClients"]>
    composites: {}
  }

  type CommercialClientsGetPayload<S extends boolean | null | undefined | CommercialClientsDefaultArgs> = $Result.GetResult<Prisma.$CommercialClientsPayload, S>

  type CommercialClientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommercialClientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommercialClientsCountAggregateInputType | true
    }

  export interface CommercialClientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommercialClients'], meta: { name: 'CommercialClients' } }
    /**
     * Find zero or one CommercialClients that matches the filter.
     * @param {CommercialClientsFindUniqueArgs} args - Arguments to find a CommercialClients
     * @example
     * // Get one CommercialClients
     * const commercialClients = await prisma.commercialClients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommercialClientsFindUniqueArgs>(args: SelectSubset<T, CommercialClientsFindUniqueArgs<ExtArgs>>): Prisma__CommercialClientsClient<$Result.GetResult<Prisma.$CommercialClientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommercialClients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommercialClientsFindUniqueOrThrowArgs} args - Arguments to find a CommercialClients
     * @example
     * // Get one CommercialClients
     * const commercialClients = await prisma.commercialClients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommercialClientsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommercialClientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommercialClientsClient<$Result.GetResult<Prisma.$CommercialClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommercialClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialClientsFindFirstArgs} args - Arguments to find a CommercialClients
     * @example
     * // Get one CommercialClients
     * const commercialClients = await prisma.commercialClients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommercialClientsFindFirstArgs>(args?: SelectSubset<T, CommercialClientsFindFirstArgs<ExtArgs>>): Prisma__CommercialClientsClient<$Result.GetResult<Prisma.$CommercialClientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommercialClients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialClientsFindFirstOrThrowArgs} args - Arguments to find a CommercialClients
     * @example
     * // Get one CommercialClients
     * const commercialClients = await prisma.commercialClients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommercialClientsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommercialClientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommercialClientsClient<$Result.GetResult<Prisma.$CommercialClientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommercialClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialClientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommercialClients
     * const commercialClients = await prisma.commercialClients.findMany()
     * 
     * // Get first 10 CommercialClients
     * const commercialClients = await prisma.commercialClients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commercialClientsWithIdOnly = await prisma.commercialClients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommercialClientsFindManyArgs>(args?: SelectSubset<T, CommercialClientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommercialClientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommercialClients.
     * @param {CommercialClientsCreateArgs} args - Arguments to create a CommercialClients.
     * @example
     * // Create one CommercialClients
     * const CommercialClients = await prisma.commercialClients.create({
     *   data: {
     *     // ... data to create a CommercialClients
     *   }
     * })
     * 
     */
    create<T extends CommercialClientsCreateArgs>(args: SelectSubset<T, CommercialClientsCreateArgs<ExtArgs>>): Prisma__CommercialClientsClient<$Result.GetResult<Prisma.$CommercialClientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommercialClients.
     * @param {CommercialClientsCreateManyArgs} args - Arguments to create many CommercialClients.
     * @example
     * // Create many CommercialClients
     * const commercialClients = await prisma.commercialClients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommercialClientsCreateManyArgs>(args?: SelectSubset<T, CommercialClientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommercialClients and returns the data saved in the database.
     * @param {CommercialClientsCreateManyAndReturnArgs} args - Arguments to create many CommercialClients.
     * @example
     * // Create many CommercialClients
     * const commercialClients = await prisma.commercialClients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommercialClients and only return the `id`
     * const commercialClientsWithIdOnly = await prisma.commercialClients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommercialClientsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommercialClientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommercialClientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommercialClients.
     * @param {CommercialClientsDeleteArgs} args - Arguments to delete one CommercialClients.
     * @example
     * // Delete one CommercialClients
     * const CommercialClients = await prisma.commercialClients.delete({
     *   where: {
     *     // ... filter to delete one CommercialClients
     *   }
     * })
     * 
     */
    delete<T extends CommercialClientsDeleteArgs>(args: SelectSubset<T, CommercialClientsDeleteArgs<ExtArgs>>): Prisma__CommercialClientsClient<$Result.GetResult<Prisma.$CommercialClientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommercialClients.
     * @param {CommercialClientsUpdateArgs} args - Arguments to update one CommercialClients.
     * @example
     * // Update one CommercialClients
     * const commercialClients = await prisma.commercialClients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommercialClientsUpdateArgs>(args: SelectSubset<T, CommercialClientsUpdateArgs<ExtArgs>>): Prisma__CommercialClientsClient<$Result.GetResult<Prisma.$CommercialClientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommercialClients.
     * @param {CommercialClientsDeleteManyArgs} args - Arguments to filter CommercialClients to delete.
     * @example
     * // Delete a few CommercialClients
     * const { count } = await prisma.commercialClients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommercialClientsDeleteManyArgs>(args?: SelectSubset<T, CommercialClientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommercialClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialClientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommercialClients
     * const commercialClients = await prisma.commercialClients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommercialClientsUpdateManyArgs>(args: SelectSubset<T, CommercialClientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommercialClients and returns the data updated in the database.
     * @param {CommercialClientsUpdateManyAndReturnArgs} args - Arguments to update many CommercialClients.
     * @example
     * // Update many CommercialClients
     * const commercialClients = await prisma.commercialClients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommercialClients and only return the `id`
     * const commercialClientsWithIdOnly = await prisma.commercialClients.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommercialClientsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommercialClientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommercialClientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommercialClients.
     * @param {CommercialClientsUpsertArgs} args - Arguments to update or create a CommercialClients.
     * @example
     * // Update or create a CommercialClients
     * const commercialClients = await prisma.commercialClients.upsert({
     *   create: {
     *     // ... data to create a CommercialClients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommercialClients we want to update
     *   }
     * })
     */
    upsert<T extends CommercialClientsUpsertArgs>(args: SelectSubset<T, CommercialClientsUpsertArgs<ExtArgs>>): Prisma__CommercialClientsClient<$Result.GetResult<Prisma.$CommercialClientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommercialClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialClientsCountArgs} args - Arguments to filter CommercialClients to count.
     * @example
     * // Count the number of CommercialClients
     * const count = await prisma.commercialClients.count({
     *   where: {
     *     // ... the filter for the CommercialClients we want to count
     *   }
     * })
    **/
    count<T extends CommercialClientsCountArgs>(
      args?: Subset<T, CommercialClientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommercialClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommercialClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommercialClientsAggregateArgs>(args: Subset<T, CommercialClientsAggregateArgs>): Prisma.PrismaPromise<GetCommercialClientsAggregateType<T>>

    /**
     * Group by CommercialClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialClientsGroupByArgs} args - Group by arguments.
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
      T extends CommercialClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommercialClientsGroupByArgs['orderBy'] }
        : { orderBy?: CommercialClientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommercialClientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommercialClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommercialClients model
   */
  readonly fields: CommercialClientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommercialClients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommercialClientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends CommercialClients$tokensArgs<ExtArgs> = {}>(args?: Subset<T, CommercialClients$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CommercialClients model
   */
  interface CommercialClientsFieldRefs {
    readonly id: FieldRef<"CommercialClients", 'Int'>
    readonly client_id: FieldRef<"CommercialClients", 'String'>
    readonly assigned_date: FieldRef<"CommercialClients", 'DateTime'>
    readonly sharedSecret: FieldRef<"CommercialClients", 'String'>
    readonly expiresAt: FieldRef<"CommercialClients", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommercialClients findUnique
   */
  export type CommercialClientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClients
     */
    select?: CommercialClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommercialClients
     */
    omit?: CommercialClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommercialClientsInclude<ExtArgs> | null
    /**
     * Filter, which CommercialClients to fetch.
     */
    where: CommercialClientsWhereUniqueInput
  }

  /**
   * CommercialClients findUniqueOrThrow
   */
  export type CommercialClientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClients
     */
    select?: CommercialClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommercialClients
     */
    omit?: CommercialClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommercialClientsInclude<ExtArgs> | null
    /**
     * Filter, which CommercialClients to fetch.
     */
    where: CommercialClientsWhereUniqueInput
  }

  /**
   * CommercialClients findFirst
   */
  export type CommercialClientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClients
     */
    select?: CommercialClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommercialClients
     */
    omit?: CommercialClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommercialClientsInclude<ExtArgs> | null
    /**
     * Filter, which CommercialClients to fetch.
     */
    where?: CommercialClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommercialClients to fetch.
     */
    orderBy?: CommercialClientsOrderByWithRelationInput | CommercialClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommercialClients.
     */
    cursor?: CommercialClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommercialClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommercialClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommercialClients.
     */
    distinct?: CommercialClientsScalarFieldEnum | CommercialClientsScalarFieldEnum[]
  }

  /**
   * CommercialClients findFirstOrThrow
   */
  export type CommercialClientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClients
     */
    select?: CommercialClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommercialClients
     */
    omit?: CommercialClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommercialClientsInclude<ExtArgs> | null
    /**
     * Filter, which CommercialClients to fetch.
     */
    where?: CommercialClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommercialClients to fetch.
     */
    orderBy?: CommercialClientsOrderByWithRelationInput | CommercialClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommercialClients.
     */
    cursor?: CommercialClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommercialClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommercialClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommercialClients.
     */
    distinct?: CommercialClientsScalarFieldEnum | CommercialClientsScalarFieldEnum[]
  }

  /**
   * CommercialClients findMany
   */
  export type CommercialClientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClients
     */
    select?: CommercialClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommercialClients
     */
    omit?: CommercialClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommercialClientsInclude<ExtArgs> | null
    /**
     * Filter, which CommercialClients to fetch.
     */
    where?: CommercialClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommercialClients to fetch.
     */
    orderBy?: CommercialClientsOrderByWithRelationInput | CommercialClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommercialClients.
     */
    cursor?: CommercialClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommercialClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommercialClients.
     */
    skip?: number
    distinct?: CommercialClientsScalarFieldEnum | CommercialClientsScalarFieldEnum[]
  }

  /**
   * CommercialClients create
   */
  export type CommercialClientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClients
     */
    select?: CommercialClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommercialClients
     */
    omit?: CommercialClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommercialClientsInclude<ExtArgs> | null
    /**
     * The data needed to create a CommercialClients.
     */
    data: XOR<CommercialClientsCreateInput, CommercialClientsUncheckedCreateInput>
  }

  /**
   * CommercialClients createMany
   */
  export type CommercialClientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommercialClients.
     */
    data: CommercialClientsCreateManyInput | CommercialClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommercialClients createManyAndReturn
   */
  export type CommercialClientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClients
     */
    select?: CommercialClientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommercialClients
     */
    omit?: CommercialClientsOmit<ExtArgs> | null
    /**
     * The data used to create many CommercialClients.
     */
    data: CommercialClientsCreateManyInput | CommercialClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommercialClients update
   */
  export type CommercialClientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClients
     */
    select?: CommercialClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommercialClients
     */
    omit?: CommercialClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommercialClientsInclude<ExtArgs> | null
    /**
     * The data needed to update a CommercialClients.
     */
    data: XOR<CommercialClientsUpdateInput, CommercialClientsUncheckedUpdateInput>
    /**
     * Choose, which CommercialClients to update.
     */
    where: CommercialClientsWhereUniqueInput
  }

  /**
   * CommercialClients updateMany
   */
  export type CommercialClientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommercialClients.
     */
    data: XOR<CommercialClientsUpdateManyMutationInput, CommercialClientsUncheckedUpdateManyInput>
    /**
     * Filter which CommercialClients to update
     */
    where?: CommercialClientsWhereInput
    /**
     * Limit how many CommercialClients to update.
     */
    limit?: number
  }

  /**
   * CommercialClients updateManyAndReturn
   */
  export type CommercialClientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClients
     */
    select?: CommercialClientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommercialClients
     */
    omit?: CommercialClientsOmit<ExtArgs> | null
    /**
     * The data used to update CommercialClients.
     */
    data: XOR<CommercialClientsUpdateManyMutationInput, CommercialClientsUncheckedUpdateManyInput>
    /**
     * Filter which CommercialClients to update
     */
    where?: CommercialClientsWhereInput
    /**
     * Limit how many CommercialClients to update.
     */
    limit?: number
  }

  /**
   * CommercialClients upsert
   */
  export type CommercialClientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClients
     */
    select?: CommercialClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommercialClients
     */
    omit?: CommercialClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommercialClientsInclude<ExtArgs> | null
    /**
     * The filter to search for the CommercialClients to update in case it exists.
     */
    where: CommercialClientsWhereUniqueInput
    /**
     * In case the CommercialClients found by the `where` argument doesn't exist, create a new CommercialClients with this data.
     */
    create: XOR<CommercialClientsCreateInput, CommercialClientsUncheckedCreateInput>
    /**
     * In case the CommercialClients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommercialClientsUpdateInput, CommercialClientsUncheckedUpdateInput>
  }

  /**
   * CommercialClients delete
   */
  export type CommercialClientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClients
     */
    select?: CommercialClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommercialClients
     */
    omit?: CommercialClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommercialClientsInclude<ExtArgs> | null
    /**
     * Filter which CommercialClients to delete.
     */
    where: CommercialClientsWhereUniqueInput
  }

  /**
   * CommercialClients deleteMany
   */
  export type CommercialClientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommercialClients to delete
     */
    where?: CommercialClientsWhereInput
    /**
     * Limit how many CommercialClients to delete.
     */
    limit?: number
  }

  /**
   * CommercialClients.tokens
   */
  export type CommercialClients$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    cursor?: TokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * CommercialClients without action
   */
  export type CommercialClientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialClients
     */
    select?: CommercialClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommercialClients
     */
    omit?: CommercialClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommercialClientsInclude<ExtArgs> | null
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
    created_At: Date | null
    channel: $Enums.Txn_channel | null
    amount: number | null
    category: $Enums.Txn_Cat | null
    counterPartyID: string | null
    counterPartyType: string | null
  }

  export type TransactionsMaxAggregateOutputType = {
    txn_id: number | null
    acc_id: number | null
    status: $Enums.Txn_status | null
    type: $Enums.Txn_type | null
    created_At: Date | null
    channel: $Enums.Txn_channel | null
    amount: number | null
    category: $Enums.Txn_Cat | null
    counterPartyID: string | null
    counterPartyType: string | null
  }

  export type TransactionsCountAggregateOutputType = {
    txn_id: number
    acc_id: number
    status: number
    type: number
    created_At: number
    channel: number
    amount: number
    category: number
    counterPartyID: number
    counterPartyType: number
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
    created_At?: true
    channel?: true
    amount?: true
    category?: true
    counterPartyID?: true
    counterPartyType?: true
  }

  export type TransactionsMaxAggregateInputType = {
    txn_id?: true
    acc_id?: true
    status?: true
    type?: true
    created_At?: true
    channel?: true
    amount?: true
    category?: true
    counterPartyID?: true
    counterPartyType?: true
  }

  export type TransactionsCountAggregateInputType = {
    txn_id?: true
    acc_id?: true
    status?: true
    type?: true
    created_At?: true
    channel?: true
    amount?: true
    category?: true
    counterPartyID?: true
    counterPartyType?: true
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
    created_At: Date
    channel: $Enums.Txn_channel
    amount: number
    category: $Enums.Txn_Cat
    counterPartyID: string
    counterPartyType: string
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
    created_At?: boolean
    channel?: boolean
    amount?: boolean
    category?: boolean
    counterPartyID?: boolean
    counterPartyType?: boolean
    accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    txn_id?: boolean
    acc_id?: boolean
    status?: boolean
    type?: boolean
    created_At?: boolean
    channel?: boolean
    amount?: boolean
    category?: boolean
    counterPartyID?: boolean
    counterPartyType?: boolean
    accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    txn_id?: boolean
    acc_id?: boolean
    status?: boolean
    type?: boolean
    created_At?: boolean
    channel?: boolean
    amount?: boolean
    category?: boolean
    counterPartyID?: boolean
    counterPartyType?: boolean
    accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    txn_id?: boolean
    acc_id?: boolean
    status?: boolean
    type?: boolean
    created_At?: boolean
    channel?: boolean
    amount?: boolean
    category?: boolean
    counterPartyID?: boolean
    counterPartyType?: boolean
  }

  export type TransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"txn_id" | "acc_id" | "status" | "type" | "created_At" | "channel" | "amount" | "category" | "counterPartyID" | "counterPartyType", ExtArgs["result"]["transactions"]>
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
      created_At: Date
      channel: $Enums.Txn_channel
      amount: number
      category: $Enums.Txn_Cat
      counterPartyID: string
      counterPartyType: string
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
    readonly created_At: FieldRef<"Transactions", 'DateTime'>
    readonly channel: FieldRef<"Transactions", 'Txn_channel'>
    readonly amount: FieldRef<"Transactions", 'Int'>
    readonly category: FieldRef<"Transactions", 'Txn_Cat'>
    readonly counterPartyID: FieldRef<"Transactions", 'String'>
    readonly counterPartyType: FieldRef<"Transactions", 'String'>
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
   * Model Auth_codes
   */

  export type AggregateAuth_codes = {
    _count: Auth_codesCountAggregateOutputType | null
    _avg: Auth_codesAvgAggregateOutputType | null
    _sum: Auth_codesSumAggregateOutputType | null
    _min: Auth_codesMinAggregateOutputType | null
    _max: Auth_codesMaxAggregateOutputType | null
  }

  export type Auth_codesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Auth_codesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Auth_codesMinAggregateOutputType = {
    id: number | null
    code: string | null
    user_id: number | null
    client_id: string | null
    redirect_uri: string | null
    createdAt: Date | null
    expiresAt: Date | null
    used: boolean | null
  }

  export type Auth_codesMaxAggregateOutputType = {
    id: number | null
    code: string | null
    user_id: number | null
    client_id: string | null
    redirect_uri: string | null
    createdAt: Date | null
    expiresAt: Date | null
    used: boolean | null
  }

  export type Auth_codesCountAggregateOutputType = {
    id: number
    code: number
    user_id: number
    client_id: number
    redirect_uri: number
    createdAt: number
    expiresAt: number
    used: number
    _all: number
  }


  export type Auth_codesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Auth_codesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Auth_codesMinAggregateInputType = {
    id?: true
    code?: true
    user_id?: true
    client_id?: true
    redirect_uri?: true
    createdAt?: true
    expiresAt?: true
    used?: true
  }

  export type Auth_codesMaxAggregateInputType = {
    id?: true
    code?: true
    user_id?: true
    client_id?: true
    redirect_uri?: true
    createdAt?: true
    expiresAt?: true
    used?: true
  }

  export type Auth_codesCountAggregateInputType = {
    id?: true
    code?: true
    user_id?: true
    client_id?: true
    redirect_uri?: true
    createdAt?: true
    expiresAt?: true
    used?: true
    _all?: true
  }

  export type Auth_codesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auth_codes to aggregate.
     */
    where?: Auth_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auth_codes to fetch.
     */
    orderBy?: Auth_codesOrderByWithRelationInput | Auth_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Auth_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auth_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auth_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auth_codes
    **/
    _count?: true | Auth_codesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_codesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_codesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_codesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_codesMaxAggregateInputType
  }

  export type GetAuth_codesAggregateType<T extends Auth_codesAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_codes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_codes[P]>
      : GetScalarType<T[P], AggregateAuth_codes[P]>
  }




  export type Auth_codesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Auth_codesWhereInput
    orderBy?: Auth_codesOrderByWithAggregationInput | Auth_codesOrderByWithAggregationInput[]
    by: Auth_codesScalarFieldEnum[] | Auth_codesScalarFieldEnum
    having?: Auth_codesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_codesCountAggregateInputType | true
    _avg?: Auth_codesAvgAggregateInputType
    _sum?: Auth_codesSumAggregateInputType
    _min?: Auth_codesMinAggregateInputType
    _max?: Auth_codesMaxAggregateInputType
  }

  export type Auth_codesGroupByOutputType = {
    id: number
    code: string
    user_id: number
    client_id: string
    redirect_uri: string
    createdAt: Date
    expiresAt: Date
    used: boolean
    _count: Auth_codesCountAggregateOutputType | null
    _avg: Auth_codesAvgAggregateOutputType | null
    _sum: Auth_codesSumAggregateOutputType | null
    _min: Auth_codesMinAggregateOutputType | null
    _max: Auth_codesMaxAggregateOutputType | null
  }

  type GetAuth_codesGroupByPayload<T extends Auth_codesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_codesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_codesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_codesGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_codesGroupByOutputType[P]>
        }
      >
    >


  export type Auth_codesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    user_id?: boolean
    client_id?: boolean
    redirect_uri?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_codes"]>

  export type Auth_codesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    user_id?: boolean
    client_id?: boolean
    redirect_uri?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_codes"]>

  export type Auth_codesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    user_id?: boolean
    client_id?: boolean
    redirect_uri?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_codes"]>

  export type Auth_codesSelectScalar = {
    id?: boolean
    code?: boolean
    user_id?: boolean
    client_id?: boolean
    redirect_uri?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    used?: boolean
  }

  export type Auth_codesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "user_id" | "client_id" | "redirect_uri" | "createdAt" | "expiresAt" | "used", ExtArgs["result"]["auth_codes"]>
  export type Auth_codesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Auth_codesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Auth_codesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Auth_codesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auth_codes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      user_id: number
      client_id: string
      redirect_uri: string
      createdAt: Date
      expiresAt: Date
      used: boolean
    }, ExtArgs["result"]["auth_codes"]>
    composites: {}
  }

  type Auth_codesGetPayload<S extends boolean | null | undefined | Auth_codesDefaultArgs> = $Result.GetResult<Prisma.$Auth_codesPayload, S>

  type Auth_codesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Auth_codesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_codesCountAggregateInputType | true
    }

  export interface Auth_codesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auth_codes'], meta: { name: 'Auth_codes' } }
    /**
     * Find zero or one Auth_codes that matches the filter.
     * @param {Auth_codesFindUniqueArgs} args - Arguments to find a Auth_codes
     * @example
     * // Get one Auth_codes
     * const auth_codes = await prisma.auth_codes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Auth_codesFindUniqueArgs>(args: SelectSubset<T, Auth_codesFindUniqueArgs<ExtArgs>>): Prisma__Auth_codesClient<$Result.GetResult<Prisma.$Auth_codesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_codes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Auth_codesFindUniqueOrThrowArgs} args - Arguments to find a Auth_codes
     * @example
     * // Get one Auth_codes
     * const auth_codes = await prisma.auth_codes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Auth_codesFindUniqueOrThrowArgs>(args: SelectSubset<T, Auth_codesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Auth_codesClient<$Result.GetResult<Prisma.$Auth_codesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_codesFindFirstArgs} args - Arguments to find a Auth_codes
     * @example
     * // Get one Auth_codes
     * const auth_codes = await prisma.auth_codes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Auth_codesFindFirstArgs>(args?: SelectSubset<T, Auth_codesFindFirstArgs<ExtArgs>>): Prisma__Auth_codesClient<$Result.GetResult<Prisma.$Auth_codesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_codes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_codesFindFirstOrThrowArgs} args - Arguments to find a Auth_codes
     * @example
     * // Get one Auth_codes
     * const auth_codes = await prisma.auth_codes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Auth_codesFindFirstOrThrowArgs>(args?: SelectSubset<T, Auth_codesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Auth_codesClient<$Result.GetResult<Prisma.$Auth_codesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_codesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_codes
     * const auth_codes = await prisma.auth_codes.findMany()
     * 
     * // Get first 10 Auth_codes
     * const auth_codes = await prisma.auth_codes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_codesWithIdOnly = await prisma.auth_codes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Auth_codesFindManyArgs>(args?: SelectSubset<T, Auth_codesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Auth_codesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_codes.
     * @param {Auth_codesCreateArgs} args - Arguments to create a Auth_codes.
     * @example
     * // Create one Auth_codes
     * const Auth_codes = await prisma.auth_codes.create({
     *   data: {
     *     // ... data to create a Auth_codes
     *   }
     * })
     * 
     */
    create<T extends Auth_codesCreateArgs>(args: SelectSubset<T, Auth_codesCreateArgs<ExtArgs>>): Prisma__Auth_codesClient<$Result.GetResult<Prisma.$Auth_codesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_codes.
     * @param {Auth_codesCreateManyArgs} args - Arguments to create many Auth_codes.
     * @example
     * // Create many Auth_codes
     * const auth_codes = await prisma.auth_codes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Auth_codesCreateManyArgs>(args?: SelectSubset<T, Auth_codesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auth_codes and returns the data saved in the database.
     * @param {Auth_codesCreateManyAndReturnArgs} args - Arguments to create many Auth_codes.
     * @example
     * // Create many Auth_codes
     * const auth_codes = await prisma.auth_codes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auth_codes and only return the `id`
     * const auth_codesWithIdOnly = await prisma.auth_codes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Auth_codesCreateManyAndReturnArgs>(args?: SelectSubset<T, Auth_codesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Auth_codesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth_codes.
     * @param {Auth_codesDeleteArgs} args - Arguments to delete one Auth_codes.
     * @example
     * // Delete one Auth_codes
     * const Auth_codes = await prisma.auth_codes.delete({
     *   where: {
     *     // ... filter to delete one Auth_codes
     *   }
     * })
     * 
     */
    delete<T extends Auth_codesDeleteArgs>(args: SelectSubset<T, Auth_codesDeleteArgs<ExtArgs>>): Prisma__Auth_codesClient<$Result.GetResult<Prisma.$Auth_codesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_codes.
     * @param {Auth_codesUpdateArgs} args - Arguments to update one Auth_codes.
     * @example
     * // Update one Auth_codes
     * const auth_codes = await prisma.auth_codes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Auth_codesUpdateArgs>(args: SelectSubset<T, Auth_codesUpdateArgs<ExtArgs>>): Prisma__Auth_codesClient<$Result.GetResult<Prisma.$Auth_codesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_codes.
     * @param {Auth_codesDeleteManyArgs} args - Arguments to filter Auth_codes to delete.
     * @example
     * // Delete a few Auth_codes
     * const { count } = await prisma.auth_codes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Auth_codesDeleteManyArgs>(args?: SelectSubset<T, Auth_codesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_codesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_codes
     * const auth_codes = await prisma.auth_codes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Auth_codesUpdateManyArgs>(args: SelectSubset<T, Auth_codesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_codes and returns the data updated in the database.
     * @param {Auth_codesUpdateManyAndReturnArgs} args - Arguments to update many Auth_codes.
     * @example
     * // Update many Auth_codes
     * const auth_codes = await prisma.auth_codes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auth_codes and only return the `id`
     * const auth_codesWithIdOnly = await prisma.auth_codes.updateManyAndReturn({
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
    updateManyAndReturn<T extends Auth_codesUpdateManyAndReturnArgs>(args: SelectSubset<T, Auth_codesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Auth_codesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth_codes.
     * @param {Auth_codesUpsertArgs} args - Arguments to update or create a Auth_codes.
     * @example
     * // Update or create a Auth_codes
     * const auth_codes = await prisma.auth_codes.upsert({
     *   create: {
     *     // ... data to create a Auth_codes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_codes we want to update
     *   }
     * })
     */
    upsert<T extends Auth_codesUpsertArgs>(args: SelectSubset<T, Auth_codesUpsertArgs<ExtArgs>>): Prisma__Auth_codesClient<$Result.GetResult<Prisma.$Auth_codesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_codesCountArgs} args - Arguments to filter Auth_codes to count.
     * @example
     * // Count the number of Auth_codes
     * const count = await prisma.auth_codes.count({
     *   where: {
     *     // ... the filter for the Auth_codes we want to count
     *   }
     * })
    **/
    count<T extends Auth_codesCountArgs>(
      args?: Subset<T, Auth_codesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_codesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_codesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auth_codesAggregateArgs>(args: Subset<T, Auth_codesAggregateArgs>): Prisma.PrismaPromise<GetAuth_codesAggregateType<T>>

    /**
     * Group by Auth_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_codesGroupByArgs} args - Group by arguments.
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
      T extends Auth_codesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Auth_codesGroupByArgs['orderBy'] }
        : { orderBy?: Auth_codesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Auth_codesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_codesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auth_codes model
   */
  readonly fields: Auth_codesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auth_codes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Auth_codesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Auth_codes model
   */
  interface Auth_codesFieldRefs {
    readonly id: FieldRef<"Auth_codes", 'Int'>
    readonly code: FieldRef<"Auth_codes", 'String'>
    readonly user_id: FieldRef<"Auth_codes", 'Int'>
    readonly client_id: FieldRef<"Auth_codes", 'String'>
    readonly redirect_uri: FieldRef<"Auth_codes", 'String'>
    readonly createdAt: FieldRef<"Auth_codes", 'DateTime'>
    readonly expiresAt: FieldRef<"Auth_codes", 'DateTime'>
    readonly used: FieldRef<"Auth_codes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Auth_codes findUnique
   */
  export type Auth_codesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesInclude<ExtArgs> | null
    /**
     * Filter, which Auth_codes to fetch.
     */
    where: Auth_codesWhereUniqueInput
  }

  /**
   * Auth_codes findUniqueOrThrow
   */
  export type Auth_codesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesInclude<ExtArgs> | null
    /**
     * Filter, which Auth_codes to fetch.
     */
    where: Auth_codesWhereUniqueInput
  }

  /**
   * Auth_codes findFirst
   */
  export type Auth_codesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesInclude<ExtArgs> | null
    /**
     * Filter, which Auth_codes to fetch.
     */
    where?: Auth_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auth_codes to fetch.
     */
    orderBy?: Auth_codesOrderByWithRelationInput | Auth_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auth_codes.
     */
    cursor?: Auth_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auth_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auth_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auth_codes.
     */
    distinct?: Auth_codesScalarFieldEnum | Auth_codesScalarFieldEnum[]
  }

  /**
   * Auth_codes findFirstOrThrow
   */
  export type Auth_codesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesInclude<ExtArgs> | null
    /**
     * Filter, which Auth_codes to fetch.
     */
    where?: Auth_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auth_codes to fetch.
     */
    orderBy?: Auth_codesOrderByWithRelationInput | Auth_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auth_codes.
     */
    cursor?: Auth_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auth_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auth_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auth_codes.
     */
    distinct?: Auth_codesScalarFieldEnum | Auth_codesScalarFieldEnum[]
  }

  /**
   * Auth_codes findMany
   */
  export type Auth_codesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesInclude<ExtArgs> | null
    /**
     * Filter, which Auth_codes to fetch.
     */
    where?: Auth_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auth_codes to fetch.
     */
    orderBy?: Auth_codesOrderByWithRelationInput | Auth_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auth_codes.
     */
    cursor?: Auth_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auth_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auth_codes.
     */
    skip?: number
    distinct?: Auth_codesScalarFieldEnum | Auth_codesScalarFieldEnum[]
  }

  /**
   * Auth_codes create
   */
  export type Auth_codesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesInclude<ExtArgs> | null
    /**
     * The data needed to create a Auth_codes.
     */
    data: XOR<Auth_codesCreateInput, Auth_codesUncheckedCreateInput>
  }

  /**
   * Auth_codes createMany
   */
  export type Auth_codesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auth_codes.
     */
    data: Auth_codesCreateManyInput | Auth_codesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auth_codes createManyAndReturn
   */
  export type Auth_codesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * The data used to create many Auth_codes.
     */
    data: Auth_codesCreateManyInput | Auth_codesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auth_codes update
   */
  export type Auth_codesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesInclude<ExtArgs> | null
    /**
     * The data needed to update a Auth_codes.
     */
    data: XOR<Auth_codesUpdateInput, Auth_codesUncheckedUpdateInput>
    /**
     * Choose, which Auth_codes to update.
     */
    where: Auth_codesWhereUniqueInput
  }

  /**
   * Auth_codes updateMany
   */
  export type Auth_codesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auth_codes.
     */
    data: XOR<Auth_codesUpdateManyMutationInput, Auth_codesUncheckedUpdateManyInput>
    /**
     * Filter which Auth_codes to update
     */
    where?: Auth_codesWhereInput
    /**
     * Limit how many Auth_codes to update.
     */
    limit?: number
  }

  /**
   * Auth_codes updateManyAndReturn
   */
  export type Auth_codesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * The data used to update Auth_codes.
     */
    data: XOR<Auth_codesUpdateManyMutationInput, Auth_codesUncheckedUpdateManyInput>
    /**
     * Filter which Auth_codes to update
     */
    where?: Auth_codesWhereInput
    /**
     * Limit how many Auth_codes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auth_codes upsert
   */
  export type Auth_codesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesInclude<ExtArgs> | null
    /**
     * The filter to search for the Auth_codes to update in case it exists.
     */
    where: Auth_codesWhereUniqueInput
    /**
     * In case the Auth_codes found by the `where` argument doesn't exist, create a new Auth_codes with this data.
     */
    create: XOR<Auth_codesCreateInput, Auth_codesUncheckedCreateInput>
    /**
     * In case the Auth_codes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Auth_codesUpdateInput, Auth_codesUncheckedUpdateInput>
  }

  /**
   * Auth_codes delete
   */
  export type Auth_codesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesInclude<ExtArgs> | null
    /**
     * Filter which Auth_codes to delete.
     */
    where: Auth_codesWhereUniqueInput
  }

  /**
   * Auth_codes deleteMany
   */
  export type Auth_codesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auth_codes to delete
     */
    where?: Auth_codesWhereInput
    /**
     * Limit how many Auth_codes to delete.
     */
    limit?: number
  }

  /**
   * Auth_codes without action
   */
  export type Auth_codesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_codes
     */
    select?: Auth_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth_codes
     */
    omit?: Auth_codesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auth_codesInclude<ExtArgs> | null
  }


  /**
   * Model Tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TokensSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TokensMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: string | null
    hashedToken: string | null
    bankName: string | null
    created_At: Date | null
    expiresAt: Date | null
    revoked: boolean | null
  }

  export type TokensMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: string | null
    hashedToken: string | null
    bankName: string | null
    created_At: Date | null
    expiresAt: Date | null
    revoked: boolean | null
  }

  export type TokensCountAggregateOutputType = {
    id: number
    user_id: number
    client_id: number
    hashedToken: number
    bankName: number
    created_At: number
    expiresAt: number
    revoked: number
    _all: number
  }


  export type TokensAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TokensSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TokensMinAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    hashedToken?: true
    bankName?: true
    created_At?: true
    expiresAt?: true
    revoked?: true
  }

  export type TokensMaxAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    hashedToken?: true
    bankName?: true
    created_At?: true
    expiresAt?: true
    revoked?: true
  }

  export type TokensCountAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    hashedToken?: true
    bankName?: true
    created_At?: true
    expiresAt?: true
    revoked?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to aggregate.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type TokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithAggregationInput | TokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: TokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _avg?: TokensAvgAggregateInputType
    _sum?: TokensSumAggregateInputType
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    id: number
    user_id: number
    client_id: string
    hashedToken: string
    bankName: string
    created_At: Date
    expiresAt: Date
    revoked: boolean
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends TokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type TokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    hashedToken?: boolean
    bankName?: boolean
    created_At?: boolean
    expiresAt?: boolean
    revoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    commercialClients?: boolean | CommercialClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    hashedToken?: boolean
    bankName?: boolean
    created_At?: boolean
    expiresAt?: boolean
    revoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    commercialClients?: boolean | CommercialClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    hashedToken?: boolean
    bankName?: boolean
    created_At?: boolean
    expiresAt?: boolean
    revoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    commercialClients?: boolean | CommercialClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectScalar = {
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    hashedToken?: boolean
    bankName?: boolean
    created_At?: boolean
    expiresAt?: boolean
    revoked?: boolean
  }

  export type TokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "client_id" | "hashedToken" | "bankName" | "created_At" | "expiresAt" | "revoked", ExtArgs["result"]["tokens"]>
  export type TokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    commercialClients?: boolean | CommercialClientsDefaultArgs<ExtArgs>
  }
  export type TokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    commercialClients?: boolean | CommercialClientsDefaultArgs<ExtArgs>
  }
  export type TokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    commercialClients?: boolean | CommercialClientsDefaultArgs<ExtArgs>
  }

  export type $TokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tokens"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      commercialClients: Prisma.$CommercialClientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      client_id: string
      hashedToken: string
      bankName: string
      created_At: Date
      expiresAt: Date
      revoked: boolean
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type TokensGetPayload<S extends boolean | null | undefined | TokensDefaultArgs> = $Result.GetResult<Prisma.$TokensPayload, S>

  type TokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface TokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tokens'], meta: { name: 'Tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {TokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokensFindUniqueArgs>(args: SelectSubset<T, TokensFindUniqueArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokensFindUniqueOrThrowArgs>(args: SelectSubset<T, TokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokensFindFirstArgs>(args?: SelectSubset<T, TokensFindFirstArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokensFindFirstOrThrowArgs>(args?: SelectSubset<T, TokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokensWithIdOnly = await prisma.tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokensFindManyArgs>(args?: SelectSubset<T, TokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokens.
     * @param {TokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends TokensCreateArgs>(args: SelectSubset<T, TokensCreateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokensCreateManyArgs>(args?: SelectSubset<T, TokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokensCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokensWithIdOnly = await prisma.tokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokensCreateManyAndReturnArgs>(args?: SelectSubset<T, TokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tokens.
     * @param {TokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends TokensDeleteArgs>(args: SelectSubset<T, TokensDeleteArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokens.
     * @param {TokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokensUpdateArgs>(args: SelectSubset<T, TokensUpdateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokensDeleteManyArgs>(args?: SelectSubset<T, TokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokensUpdateManyArgs>(args: SelectSubset<T, TokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokensUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokensWithIdOnly = await prisma.tokens.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokensUpdateManyAndReturnArgs>(args: SelectSubset<T, TokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tokens.
     * @param {TokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends TokensUpsertArgs>(args: SelectSubset<T, TokensUpsertArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokensCountArgs>(
      args?: Subset<T, TokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensGroupByArgs} args - Group by arguments.
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
      T extends TokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokensGroupByArgs['orderBy'] }
        : { orderBy?: TokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tokens model
   */
  readonly fields: TokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    commercialClients<T extends CommercialClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommercialClientsDefaultArgs<ExtArgs>>): Prisma__CommercialClientsClient<$Result.GetResult<Prisma.$CommercialClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tokens model
   */
  interface TokensFieldRefs {
    readonly id: FieldRef<"Tokens", 'Int'>
    readonly user_id: FieldRef<"Tokens", 'Int'>
    readonly client_id: FieldRef<"Tokens", 'String'>
    readonly hashedToken: FieldRef<"Tokens", 'String'>
    readonly bankName: FieldRef<"Tokens", 'String'>
    readonly created_At: FieldRef<"Tokens", 'DateTime'>
    readonly expiresAt: FieldRef<"Tokens", 'DateTime'>
    readonly revoked: FieldRef<"Tokens", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Tokens findUnique
   */
  export type TokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findUniqueOrThrow
   */
  export type TokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findFirst
   */
  export type TokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findFirstOrThrow
   */
  export type TokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findMany
   */
  export type TokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens create
   */
  export type TokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The data needed to create a Tokens.
     */
    data: XOR<TokensCreateInput, TokensUncheckedCreateInput>
  }

  /**
   * Tokens createMany
   */
  export type TokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokens createManyAndReturn
   */
  export type TokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tokens update
   */
  export type TokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The data needed to update a Tokens.
     */
    data: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
    /**
     * Choose, which Tokens to update.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens updateMany
   */
  export type TokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Tokens updateManyAndReturn
   */
  export type TokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tokens upsert
   */
  export type TokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The filter to search for the Tokens to update in case it exists.
     */
    where: TokensWhereUniqueInput
    /**
     * In case the Tokens found by the `where` argument doesn't exist, create a new Tokens with this data.
     */
    create: XOR<TokensCreateInput, TokensUncheckedCreateInput>
    /**
     * In case the Tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
  }

  /**
   * Tokens delete
   */
  export type TokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter which Tokens to delete.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens deleteMany
   */
  export type TokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Tokens without action
   */
  export type TokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
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


  export const CommercialClientsScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    assigned_date: 'assigned_date',
    sharedSecret: 'sharedSecret',
    expiresAt: 'expiresAt'
  };

  export type CommercialClientsScalarFieldEnum = (typeof CommercialClientsScalarFieldEnum)[keyof typeof CommercialClientsScalarFieldEnum]


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


  export const TransactionsScalarFieldEnum: {
    txn_id: 'txn_id',
    acc_id: 'acc_id',
    status: 'status',
    type: 'type',
    created_At: 'created_At',
    channel: 'channel',
    amount: 'amount',
    category: 'category',
    counterPartyID: 'counterPartyID',
    counterPartyType: 'counterPartyType'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    otp: 'otp',
    type: 'type',
    expiresAt: 'expiresAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const Auth_codesScalarFieldEnum: {
    id: 'id',
    code: 'code',
    user_id: 'user_id',
    client_id: 'client_id',
    redirect_uri: 'redirect_uri',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    used: 'used'
  };

  export type Auth_codesScalarFieldEnum = (typeof Auth_codesScalarFieldEnum)[keyof typeof Auth_codesScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    client_id: 'client_id',
    hashedToken: 'hashedToken',
    bankName: 'bankName',
    created_At: 'created_At',
    expiresAt: 'expiresAt',
    revoked: 'revoked'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Acc_status'
   */
  export type EnumAcc_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Acc_status'>
    


  /**
   * Reference to a field of type 'Acc_status[]'
   */
  export type ListEnumAcc_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Acc_status[]'>
    


  /**
   * Reference to a field of type 'Acc_type'
   */
  export type EnumAcc_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Acc_type'>
    


  /**
   * Reference to a field of type 'Acc_type[]'
   */
  export type ListEnumAcc_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Acc_type[]'>
    


  /**
   * Reference to a field of type 'Bank_name'
   */
  export type EnumBank_nameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bank_name'>
    


  /**
   * Reference to a field of type 'Bank_name[]'
   */
  export type ListEnumBank_nameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bank_name[]'>
    


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
   * Reference to a field of type 'Txn_Cat'
   */
  export type EnumTxn_CatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Txn_Cat'>
    


  /**
   * Reference to a field of type 'Txn_Cat[]'
   */
  export type ListEnumTxn_CatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Txn_Cat[]'>
    


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
    accounts?: AccountsListRelationFilter
    verification?: VerificationListRelationFilter
    auth_code?: Auth_codesListRelationFilter
    tokens?: TokensListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    number?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    accounts?: AccountsOrderByRelationAggregateInput
    verification?: VerificationOrderByRelationAggregateInput
    auth_code?: Auth_codesOrderByRelationAggregateInput
    tokens?: TokensOrderByRelationAggregateInput
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
    accounts?: AccountsListRelationFilter
    verification?: VerificationListRelationFilter
    auth_code?: Auth_codesListRelationFilter
    tokens?: TokensListRelationFilter
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

  export type CommercialClientsWhereInput = {
    AND?: CommercialClientsWhereInput | CommercialClientsWhereInput[]
    OR?: CommercialClientsWhereInput[]
    NOT?: CommercialClientsWhereInput | CommercialClientsWhereInput[]
    id?: IntFilter<"CommercialClients"> | number
    client_id?: StringFilter<"CommercialClients"> | string
    assigned_date?: DateTimeFilter<"CommercialClients"> | Date | string
    sharedSecret?: StringFilter<"CommercialClients"> | string
    expiresAt?: DateTimeFilter<"CommercialClients"> | Date | string
    tokens?: TokensListRelationFilter
  }

  export type CommercialClientsOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    assigned_date?: SortOrder
    sharedSecret?: SortOrder
    expiresAt?: SortOrder
    tokens?: TokensOrderByRelationAggregateInput
  }

  export type CommercialClientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    client_id?: string
    sharedSecret?: string
    AND?: CommercialClientsWhereInput | CommercialClientsWhereInput[]
    OR?: CommercialClientsWhereInput[]
    NOT?: CommercialClientsWhereInput | CommercialClientsWhereInput[]
    assigned_date?: DateTimeFilter<"CommercialClients"> | Date | string
    expiresAt?: DateTimeFilter<"CommercialClients"> | Date | string
    tokens?: TokensListRelationFilter
  }, "id" | "client_id" | "sharedSecret">

  export type CommercialClientsOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    assigned_date?: SortOrder
    sharedSecret?: SortOrder
    expiresAt?: SortOrder
    _count?: CommercialClientsCountOrderByAggregateInput
    _avg?: CommercialClientsAvgOrderByAggregateInput
    _max?: CommercialClientsMaxOrderByAggregateInput
    _min?: CommercialClientsMinOrderByAggregateInput
    _sum?: CommercialClientsSumOrderByAggregateInput
  }

  export type CommercialClientsScalarWhereWithAggregatesInput = {
    AND?: CommercialClientsScalarWhereWithAggregatesInput | CommercialClientsScalarWhereWithAggregatesInput[]
    OR?: CommercialClientsScalarWhereWithAggregatesInput[]
    NOT?: CommercialClientsScalarWhereWithAggregatesInput | CommercialClientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommercialClients"> | number
    client_id?: StringWithAggregatesFilter<"CommercialClients"> | string
    assigned_date?: DateTimeWithAggregatesFilter<"CommercialClients"> | Date | string
    sharedSecret?: StringWithAggregatesFilter<"CommercialClients"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"CommercialClients"> | Date | string
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
    user_id_bank_acc_name_type?: AccountsUser_idBankAcc_nameTypeCompoundUniqueInput
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
  }, "acc_id" | "user_id_bank_acc_name_type">

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

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    txn_id?: IntFilter<"Transactions"> | number
    acc_id?: IntFilter<"Transactions"> | number
    status?: EnumTxn_statusFilter<"Transactions"> | $Enums.Txn_status
    type?: EnumTxn_typeFilter<"Transactions"> | $Enums.Txn_type
    created_At?: DateTimeFilter<"Transactions"> | Date | string
    channel?: EnumTxn_channelFilter<"Transactions"> | $Enums.Txn_channel
    amount?: IntFilter<"Transactions"> | number
    category?: EnumTxn_CatFilter<"Transactions"> | $Enums.Txn_Cat
    counterPartyID?: StringFilter<"Transactions"> | string
    counterPartyType?: StringFilter<"Transactions"> | string
    accounts?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }

  export type TransactionsOrderByWithRelationInput = {
    txn_id?: SortOrder
    acc_id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    created_At?: SortOrder
    channel?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    counterPartyID?: SortOrder
    counterPartyType?: SortOrder
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
    created_At?: DateTimeFilter<"Transactions"> | Date | string
    channel?: EnumTxn_channelFilter<"Transactions"> | $Enums.Txn_channel
    amount?: IntFilter<"Transactions"> | number
    category?: EnumTxn_CatFilter<"Transactions"> | $Enums.Txn_Cat
    counterPartyID?: StringFilter<"Transactions"> | string
    counterPartyType?: StringFilter<"Transactions"> | string
    accounts?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }, "txn_id">

  export type TransactionsOrderByWithAggregationInput = {
    txn_id?: SortOrder
    acc_id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    created_At?: SortOrder
    channel?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    counterPartyID?: SortOrder
    counterPartyType?: SortOrder
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
    created_At?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    channel?: EnumTxn_channelWithAggregatesFilter<"Transactions"> | $Enums.Txn_channel
    amount?: IntWithAggregatesFilter<"Transactions"> | number
    category?: EnumTxn_CatWithAggregatesFilter<"Transactions"> | $Enums.Txn_Cat
    counterPartyID?: StringWithAggregatesFilter<"Transactions"> | string
    counterPartyType?: StringWithAggregatesFilter<"Transactions"> | string
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

  export type Auth_codesWhereInput = {
    AND?: Auth_codesWhereInput | Auth_codesWhereInput[]
    OR?: Auth_codesWhereInput[]
    NOT?: Auth_codesWhereInput | Auth_codesWhereInput[]
    id?: IntFilter<"Auth_codes"> | number
    code?: StringFilter<"Auth_codes"> | string
    user_id?: IntFilter<"Auth_codes"> | number
    client_id?: StringFilter<"Auth_codes"> | string
    redirect_uri?: StringFilter<"Auth_codes"> | string
    createdAt?: DateTimeFilter<"Auth_codes"> | Date | string
    expiresAt?: DateTimeFilter<"Auth_codes"> | Date | string
    used?: BoolFilter<"Auth_codes"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Auth_codesOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    redirect_uri?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type Auth_codesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Auth_codesWhereInput | Auth_codesWhereInput[]
    OR?: Auth_codesWhereInput[]
    NOT?: Auth_codesWhereInput | Auth_codesWhereInput[]
    code?: StringFilter<"Auth_codes"> | string
    user_id?: IntFilter<"Auth_codes"> | number
    client_id?: StringFilter<"Auth_codes"> | string
    redirect_uri?: StringFilter<"Auth_codes"> | string
    createdAt?: DateTimeFilter<"Auth_codes"> | Date | string
    expiresAt?: DateTimeFilter<"Auth_codes"> | Date | string
    used?: BoolFilter<"Auth_codes"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type Auth_codesOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    redirect_uri?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    _count?: Auth_codesCountOrderByAggregateInput
    _avg?: Auth_codesAvgOrderByAggregateInput
    _max?: Auth_codesMaxOrderByAggregateInput
    _min?: Auth_codesMinOrderByAggregateInput
    _sum?: Auth_codesSumOrderByAggregateInput
  }

  export type Auth_codesScalarWhereWithAggregatesInput = {
    AND?: Auth_codesScalarWhereWithAggregatesInput | Auth_codesScalarWhereWithAggregatesInput[]
    OR?: Auth_codesScalarWhereWithAggregatesInput[]
    NOT?: Auth_codesScalarWhereWithAggregatesInput | Auth_codesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Auth_codes"> | number
    code?: StringWithAggregatesFilter<"Auth_codes"> | string
    user_id?: IntWithAggregatesFilter<"Auth_codes"> | number
    client_id?: StringWithAggregatesFilter<"Auth_codes"> | string
    redirect_uri?: StringWithAggregatesFilter<"Auth_codes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Auth_codes"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Auth_codes"> | Date | string
    used?: BoolWithAggregatesFilter<"Auth_codes"> | boolean
  }

  export type TokensWhereInput = {
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    id?: IntFilter<"Tokens"> | number
    user_id?: IntFilter<"Tokens"> | number
    client_id?: StringFilter<"Tokens"> | string
    hashedToken?: StringFilter<"Tokens"> | string
    bankName?: StringFilter<"Tokens"> | string
    created_At?: DateTimeFilter<"Tokens"> | Date | string
    expiresAt?: DateTimeFilter<"Tokens"> | Date | string
    revoked?: BoolFilter<"Tokens"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    commercialClients?: XOR<CommercialClientsScalarRelationFilter, CommercialClientsWhereInput>
  }

  export type TokensOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    hashedToken?: SortOrder
    bankName?: SortOrder
    created_At?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    user?: UserOrderByWithRelationInput
    commercialClients?: CommercialClientsOrderByWithRelationInput
  }

  export type TokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_bankName?: TokensUser_idBankNameCompoundUniqueInput
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    user_id?: IntFilter<"Tokens"> | number
    client_id?: StringFilter<"Tokens"> | string
    hashedToken?: StringFilter<"Tokens"> | string
    bankName?: StringFilter<"Tokens"> | string
    created_At?: DateTimeFilter<"Tokens"> | Date | string
    expiresAt?: DateTimeFilter<"Tokens"> | Date | string
    revoked?: BoolFilter<"Tokens"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    commercialClients?: XOR<CommercialClientsScalarRelationFilter, CommercialClientsWhereInput>
  }, "id" | "user_id_bankName">

  export type TokensOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    hashedToken?: SortOrder
    bankName?: SortOrder
    created_At?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    _count?: TokensCountOrderByAggregateInput
    _avg?: TokensAvgOrderByAggregateInput
    _max?: TokensMaxOrderByAggregateInput
    _min?: TokensMinOrderByAggregateInput
    _sum?: TokensSumOrderByAggregateInput
  }

  export type TokensScalarWhereWithAggregatesInput = {
    AND?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    OR?: TokensScalarWhereWithAggregatesInput[]
    NOT?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tokens"> | number
    user_id?: IntWithAggregatesFilter<"Tokens"> | number
    client_id?: StringWithAggregatesFilter<"Tokens"> | string
    hashedToken?: StringWithAggregatesFilter<"Tokens"> | string
    bankName?: StringWithAggregatesFilter<"Tokens"> | string
    created_At?: DateTimeWithAggregatesFilter<"Tokens"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Tokens"> | Date | string
    revoked?: BoolWithAggregatesFilter<"Tokens"> | boolean
  }

  export type UserCreateInput = {
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    accounts?: AccountsCreateNestedManyWithoutUserInput
    verification?: VerificationCreateNestedManyWithoutUserInput
    auth_code?: Auth_codesCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    verification?: VerificationUncheckedCreateNestedManyWithoutUserInput
    auth_code?: Auth_codesUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    verification?: VerificationUpdateManyWithoutUserNestedInput
    auth_code?: Auth_codesUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    verification?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    auth_code?: Auth_codesUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
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

  export type CommercialClientsCreateInput = {
    client_id: string
    assigned_date: Date | string
    sharedSecret: string
    expiresAt: Date | string
    tokens?: TokensCreateNestedManyWithoutCommercialClientsInput
  }

  export type CommercialClientsUncheckedCreateInput = {
    id?: number
    client_id: string
    assigned_date: Date | string
    sharedSecret: string
    expiresAt: Date | string
    tokens?: TokensUncheckedCreateNestedManyWithoutCommercialClientsInput
  }

  export type CommercialClientsUpdateInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    assigned_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedSecret?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokensUpdateManyWithoutCommercialClientsNestedInput
  }

  export type CommercialClientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: StringFieldUpdateOperationsInput | string
    assigned_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedSecret?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokensUncheckedUpdateManyWithoutCommercialClientsNestedInput
  }

  export type CommercialClientsCreateManyInput = {
    id?: number
    client_id: string
    assigned_date: Date | string
    sharedSecret: string
    expiresAt: Date | string
  }

  export type CommercialClientsUpdateManyMutationInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    assigned_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedSecret?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommercialClientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: StringFieldUpdateOperationsInput | string
    assigned_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedSecret?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type TransactionsCreateInput = {
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    created_At: Date | string
    channel: $Enums.Txn_channel
    amount: number
    category: $Enums.Txn_Cat
    counterPartyID: string
    counterPartyType: string
    accounts: AccountsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateInput = {
    txn_id?: number
    acc_id: number
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    created_At: Date | string
    channel: $Enums.Txn_channel
    amount: number
    category: $Enums.Txn_Cat
    counterPartyID: string
    counterPartyType: string
  }

  export type TransactionsUpdateInput = {
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumTxn_CatFieldUpdateOperationsInput | $Enums.Txn_Cat
    counterPartyID?: StringFieldUpdateOperationsInput | string
    counterPartyType?: StringFieldUpdateOperationsInput | string
    accounts?: AccountsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    txn_id?: IntFieldUpdateOperationsInput | number
    acc_id?: IntFieldUpdateOperationsInput | number
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumTxn_CatFieldUpdateOperationsInput | $Enums.Txn_Cat
    counterPartyID?: StringFieldUpdateOperationsInput | string
    counterPartyType?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsCreateManyInput = {
    txn_id?: number
    acc_id: number
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    created_At: Date | string
    channel: $Enums.Txn_channel
    amount: number
    category: $Enums.Txn_Cat
    counterPartyID: string
    counterPartyType: string
  }

  export type TransactionsUpdateManyMutationInput = {
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumTxn_CatFieldUpdateOperationsInput | $Enums.Txn_Cat
    counterPartyID?: StringFieldUpdateOperationsInput | string
    counterPartyType?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsUncheckedUpdateManyInput = {
    txn_id?: IntFieldUpdateOperationsInput | number
    acc_id?: IntFieldUpdateOperationsInput | number
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumTxn_CatFieldUpdateOperationsInput | $Enums.Txn_Cat
    counterPartyID?: StringFieldUpdateOperationsInput | string
    counterPartyType?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationCreateInput = {
    otp: string
    type: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutVerificationInput
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
    user?: UserUpdateOneRequiredWithoutVerificationNestedInput
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

  export type Auth_codesCreateInput = {
    code: string
    client_id: string
    redirect_uri: string
    createdAt: Date | string
    expiresAt: Date | string
    used?: boolean
    user: UserCreateNestedOneWithoutAuth_codeInput
  }

  export type Auth_codesUncheckedCreateInput = {
    id?: number
    code: string
    user_id: number
    client_id: string
    redirect_uri: string
    createdAt: Date | string
    expiresAt: Date | string
    used?: boolean
  }

  export type Auth_codesUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    redirect_uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAuth_codeNestedInput
  }

  export type Auth_codesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: StringFieldUpdateOperationsInput | string
    redirect_uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Auth_codesCreateManyInput = {
    id?: number
    code: string
    user_id: number
    client_id: string
    redirect_uri: string
    createdAt: Date | string
    expiresAt: Date | string
    used?: boolean
  }

  export type Auth_codesUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    redirect_uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Auth_codesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: StringFieldUpdateOperationsInput | string
    redirect_uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokensCreateInput = {
    hashedToken: string
    bankName: string
    created_At?: Date | string
    expiresAt: Date | string
    revoked?: boolean
    user: UserCreateNestedOneWithoutTokensInput
    commercialClients: CommercialClientsCreateNestedOneWithoutTokensInput
  }

  export type TokensUncheckedCreateInput = {
    id?: number
    user_id: number
    client_id: string
    hashedToken: string
    bankName: string
    created_At?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type TokensUpdateInput = {
    hashedToken?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
    commercialClients?: CommercialClientsUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: StringFieldUpdateOperationsInput | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokensCreateManyInput = {
    id?: number
    user_id: number
    client_id: string
    hashedToken: string
    bankName: string
    created_At?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type TokensUpdateManyMutationInput = {
    hashedToken?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: StringFieldUpdateOperationsInput | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
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

  export type AccountsListRelationFilter = {
    every?: AccountsWhereInput
    some?: AccountsWhereInput
    none?: AccountsWhereInput
  }

  export type VerificationListRelationFilter = {
    every?: VerificationWhereInput
    some?: VerificationWhereInput
    none?: VerificationWhereInput
  }

  export type Auth_codesListRelationFilter = {
    every?: Auth_codesWhereInput
    some?: Auth_codesWhereInput
    none?: Auth_codesWhereInput
  }

  export type TokensListRelationFilter = {
    every?: TokensWhereInput
    some?: TokensWhereInput
    none?: TokensWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Auth_codesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokensOrderByRelationAggregateInput = {
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

  export type CommercialClientsCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    assigned_date?: SortOrder
    sharedSecret?: SortOrder
    expiresAt?: SortOrder
  }

  export type CommercialClientsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommercialClientsMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    assigned_date?: SortOrder
    sharedSecret?: SortOrder
    expiresAt?: SortOrder
  }

  export type CommercialClientsMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    assigned_date?: SortOrder
    sharedSecret?: SortOrder
    expiresAt?: SortOrder
  }

  export type CommercialClientsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumAcc_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_status | EnumAcc_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_status[] | ListEnumAcc_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_status[] | ListEnumAcc_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_statusFilter<$PrismaModel> | $Enums.Acc_status
  }

  export type EnumAcc_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_type | EnumAcc_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_typeFilter<$PrismaModel> | $Enums.Acc_type
  }

  export type EnumBank_nameFilter<$PrismaModel = never> = {
    equals?: $Enums.Bank_name | EnumBank_nameFieldRefInput<$PrismaModel>
    in?: $Enums.Bank_name[] | ListEnumBank_nameFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bank_name[] | ListEnumBank_nameFieldRefInput<$PrismaModel>
    not?: NestedEnumBank_nameFilter<$PrismaModel> | $Enums.Bank_name
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsUser_idBankAcc_nameTypeCompoundUniqueInput = {
    user_id: number
    bank: $Enums.Bank_name
    acc_name: string
    type: $Enums.Acc_type
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

  export type EnumAcc_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_type | EnumAcc_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_typeWithAggregatesFilter<$PrismaModel> | $Enums.Acc_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcc_typeFilter<$PrismaModel>
    _max?: NestedEnumAcc_typeFilter<$PrismaModel>
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

  export type EnumTxn_CatFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_Cat | EnumTxn_CatFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_Cat[] | ListEnumTxn_CatFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_Cat[] | ListEnumTxn_CatFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_CatFilter<$PrismaModel> | $Enums.Txn_Cat
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
    created_At?: SortOrder
    channel?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    counterPartyID?: SortOrder
    counterPartyType?: SortOrder
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
    created_At?: SortOrder
    channel?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    counterPartyID?: SortOrder
    counterPartyType?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    txn_id?: SortOrder
    acc_id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    created_At?: SortOrder
    channel?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    counterPartyID?: SortOrder
    counterPartyType?: SortOrder
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

  export type EnumTxn_CatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_Cat | EnumTxn_CatFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_Cat[] | ListEnumTxn_CatFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_Cat[] | ListEnumTxn_CatFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_CatWithAggregatesFilter<$PrismaModel> | $Enums.Txn_Cat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxn_CatFilter<$PrismaModel>
    _max?: NestedEnumTxn_CatFilter<$PrismaModel>
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

  export type Auth_codesCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    redirect_uri?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type Auth_codesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Auth_codesMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    redirect_uri?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type Auth_codesMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    redirect_uri?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type Auth_codesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CommercialClientsScalarRelationFilter = {
    is?: CommercialClientsWhereInput
    isNot?: CommercialClientsWhereInput
  }

  export type TokensUser_idBankNameCompoundUniqueInput = {
    user_id: number
    bankName: string
  }

  export type TokensCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    hashedToken?: SortOrder
    bankName?: SortOrder
    created_At?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
  }

  export type TokensAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type TokensMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    hashedToken?: SortOrder
    bankName?: SortOrder
    created_At?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
  }

  export type TokensMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    hashedToken?: SortOrder
    bankName?: SortOrder
    created_At?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
  }

  export type TokensSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type AccountsCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
  }

  export type VerificationCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
  }

  export type Auth_codesCreateNestedManyWithoutUserInput = {
    create?: XOR<Auth_codesCreateWithoutUserInput, Auth_codesUncheckedCreateWithoutUserInput> | Auth_codesCreateWithoutUserInput[] | Auth_codesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Auth_codesCreateOrConnectWithoutUserInput | Auth_codesCreateOrConnectWithoutUserInput[]
    createMany?: Auth_codesCreateManyUserInputEnvelope
    connect?: Auth_codesWhereUniqueInput | Auth_codesWhereUniqueInput[]
  }

  export type TokensCreateNestedManyWithoutUserInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
  }

  export type AccountsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountsCreateWithoutUserInput, AccountsUncheckedCreateWithoutUserInput> | AccountsCreateWithoutUserInput[] | AccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountsCreateOrConnectWithoutUserInput | AccountsCreateOrConnectWithoutUserInput[]
    createMany?: AccountsCreateManyUserInputEnvelope
    connect?: AccountsWhereUniqueInput | AccountsWhereUniqueInput[]
  }

  export type VerificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
  }

  export type Auth_codesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Auth_codesCreateWithoutUserInput, Auth_codesUncheckedCreateWithoutUserInput> | Auth_codesCreateWithoutUserInput[] | Auth_codesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Auth_codesCreateOrConnectWithoutUserInput | Auth_codesCreateOrConnectWithoutUserInput[]
    createMany?: Auth_codesCreateManyUserInputEnvelope
    connect?: Auth_codesWhereUniqueInput | Auth_codesWhereUniqueInput[]
  }

  export type TokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
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

  export type Auth_codesUpdateManyWithoutUserNestedInput = {
    create?: XOR<Auth_codesCreateWithoutUserInput, Auth_codesUncheckedCreateWithoutUserInput> | Auth_codesCreateWithoutUserInput[] | Auth_codesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Auth_codesCreateOrConnectWithoutUserInput | Auth_codesCreateOrConnectWithoutUserInput[]
    upsert?: Auth_codesUpsertWithWhereUniqueWithoutUserInput | Auth_codesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Auth_codesCreateManyUserInputEnvelope
    set?: Auth_codesWhereUniqueInput | Auth_codesWhereUniqueInput[]
    disconnect?: Auth_codesWhereUniqueInput | Auth_codesWhereUniqueInput[]
    delete?: Auth_codesWhereUniqueInput | Auth_codesWhereUniqueInput[]
    connect?: Auth_codesWhereUniqueInput | Auth_codesWhereUniqueInput[]
    update?: Auth_codesUpdateWithWhereUniqueWithoutUserInput | Auth_codesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Auth_codesUpdateManyWithWhereWithoutUserInput | Auth_codesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Auth_codesScalarWhereInput | Auth_codesScalarWhereInput[]
  }

  export type TokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    upsert?: TokensUpsertWithWhereUniqueWithoutUserInput | TokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    set?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    disconnect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    delete?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    update?: TokensUpdateWithWhereUniqueWithoutUserInput | TokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokensUpdateManyWithWhereWithoutUserInput | TokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokensScalarWhereInput | TokensScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type Auth_codesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Auth_codesCreateWithoutUserInput, Auth_codesUncheckedCreateWithoutUserInput> | Auth_codesCreateWithoutUserInput[] | Auth_codesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Auth_codesCreateOrConnectWithoutUserInput | Auth_codesCreateOrConnectWithoutUserInput[]
    upsert?: Auth_codesUpsertWithWhereUniqueWithoutUserInput | Auth_codesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Auth_codesCreateManyUserInputEnvelope
    set?: Auth_codesWhereUniqueInput | Auth_codesWhereUniqueInput[]
    disconnect?: Auth_codesWhereUniqueInput | Auth_codesWhereUniqueInput[]
    delete?: Auth_codesWhereUniqueInput | Auth_codesWhereUniqueInput[]
    connect?: Auth_codesWhereUniqueInput | Auth_codesWhereUniqueInput[]
    update?: Auth_codesUpdateWithWhereUniqueWithoutUserInput | Auth_codesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Auth_codesUpdateManyWithWhereWithoutUserInput | Auth_codesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Auth_codesScalarWhereInput | Auth_codesScalarWhereInput[]
  }

  export type TokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    upsert?: TokensUpsertWithWhereUniqueWithoutUserInput | TokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    set?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    disconnect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    delete?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    update?: TokensUpdateWithWhereUniqueWithoutUserInput | TokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokensUpdateManyWithWhereWithoutUserInput | TokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokensScalarWhereInput | TokensScalarWhereInput[]
  }

  export type TokensCreateNestedManyWithoutCommercialClientsInput = {
    create?: XOR<TokensCreateWithoutCommercialClientsInput, TokensUncheckedCreateWithoutCommercialClientsInput> | TokensCreateWithoutCommercialClientsInput[] | TokensUncheckedCreateWithoutCommercialClientsInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutCommercialClientsInput | TokensCreateOrConnectWithoutCommercialClientsInput[]
    createMany?: TokensCreateManyCommercialClientsInputEnvelope
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
  }

  export type TokensUncheckedCreateNestedManyWithoutCommercialClientsInput = {
    create?: XOR<TokensCreateWithoutCommercialClientsInput, TokensUncheckedCreateWithoutCommercialClientsInput> | TokensCreateWithoutCommercialClientsInput[] | TokensUncheckedCreateWithoutCommercialClientsInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutCommercialClientsInput | TokensCreateOrConnectWithoutCommercialClientsInput[]
    createMany?: TokensCreateManyCommercialClientsInputEnvelope
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TokensUpdateManyWithoutCommercialClientsNestedInput = {
    create?: XOR<TokensCreateWithoutCommercialClientsInput, TokensUncheckedCreateWithoutCommercialClientsInput> | TokensCreateWithoutCommercialClientsInput[] | TokensUncheckedCreateWithoutCommercialClientsInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutCommercialClientsInput | TokensCreateOrConnectWithoutCommercialClientsInput[]
    upsert?: TokensUpsertWithWhereUniqueWithoutCommercialClientsInput | TokensUpsertWithWhereUniqueWithoutCommercialClientsInput[]
    createMany?: TokensCreateManyCommercialClientsInputEnvelope
    set?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    disconnect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    delete?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    update?: TokensUpdateWithWhereUniqueWithoutCommercialClientsInput | TokensUpdateWithWhereUniqueWithoutCommercialClientsInput[]
    updateMany?: TokensUpdateManyWithWhereWithoutCommercialClientsInput | TokensUpdateManyWithWhereWithoutCommercialClientsInput[]
    deleteMany?: TokensScalarWhereInput | TokensScalarWhereInput[]
  }

  export type TokensUncheckedUpdateManyWithoutCommercialClientsNestedInput = {
    create?: XOR<TokensCreateWithoutCommercialClientsInput, TokensUncheckedCreateWithoutCommercialClientsInput> | TokensCreateWithoutCommercialClientsInput[] | TokensUncheckedCreateWithoutCommercialClientsInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutCommercialClientsInput | TokensCreateOrConnectWithoutCommercialClientsInput[]
    upsert?: TokensUpsertWithWhereUniqueWithoutCommercialClientsInput | TokensUpsertWithWhereUniqueWithoutCommercialClientsInput[]
    createMany?: TokensCreateManyCommercialClientsInputEnvelope
    set?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    disconnect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    delete?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    update?: TokensUpdateWithWhereUniqueWithoutCommercialClientsInput | TokensUpdateWithWhereUniqueWithoutCommercialClientsInput[]
    updateMany?: TokensUpdateManyWithWhereWithoutCommercialClientsInput | TokensUpdateManyWithWhereWithoutCommercialClientsInput[]
    deleteMany?: TokensScalarWhereInput | TokensScalarWhereInput[]
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

  export type EnumAcc_typeFieldUpdateOperationsInput = {
    set?: $Enums.Acc_type
  }

  export type EnumBank_nameFieldUpdateOperationsInput = {
    set?: $Enums.Bank_name
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

  export type EnumTxn_CatFieldUpdateOperationsInput = {
    set?: $Enums.Txn_Cat
  }

  export type AccountsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<AccountsCreateWithoutTransactionsInput, AccountsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutTransactionsInput
    upsert?: AccountsUpsertWithoutTransactionsInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutTransactionsInput, AccountsUpdateWithoutTransactionsInput>, AccountsUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutVerificationInput = {
    create?: XOR<UserCreateWithoutVerificationInput, UserUncheckedCreateWithoutVerificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVerificationNestedInput = {
    create?: XOR<UserCreateWithoutVerificationInput, UserUncheckedCreateWithoutVerificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationInput
    upsert?: UserUpsertWithoutVerificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationInput, UserUpdateWithoutVerificationInput>, UserUncheckedUpdateWithoutVerificationInput>
  }

  export type UserCreateNestedOneWithoutAuth_codeInput = {
    create?: XOR<UserCreateWithoutAuth_codeInput, UserUncheckedCreateWithoutAuth_codeInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuth_codeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuth_codeNestedInput = {
    create?: XOR<UserCreateWithoutAuth_codeInput, UserUncheckedCreateWithoutAuth_codeInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuth_codeInput
    upsert?: UserUpsertWithoutAuth_codeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuth_codeInput, UserUpdateWithoutAuth_codeInput>, UserUncheckedUpdateWithoutAuth_codeInput>
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type CommercialClientsCreateNestedOneWithoutTokensInput = {
    create?: XOR<CommercialClientsCreateWithoutTokensInput, CommercialClientsUncheckedCreateWithoutTokensInput>
    connectOrCreate?: CommercialClientsCreateOrConnectWithoutTokensInput
    connect?: CommercialClientsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type CommercialClientsUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<CommercialClientsCreateWithoutTokensInput, CommercialClientsUncheckedCreateWithoutTokensInput>
    connectOrCreate?: CommercialClientsCreateOrConnectWithoutTokensInput
    upsert?: CommercialClientsUpsertWithoutTokensInput
    connect?: CommercialClientsWhereUniqueInput
    update?: XOR<XOR<CommercialClientsUpdateToOneWithWhereWithoutTokensInput, CommercialClientsUpdateWithoutTokensInput>, CommercialClientsUncheckedUpdateWithoutTokensInput>
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

  export type NestedEnumAcc_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_status | EnumAcc_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_status[] | ListEnumAcc_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_status[] | ListEnumAcc_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_statusFilter<$PrismaModel> | $Enums.Acc_status
  }

  export type NestedEnumAcc_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_type | EnumAcc_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_typeFilter<$PrismaModel> | $Enums.Acc_type
  }

  export type NestedEnumBank_nameFilter<$PrismaModel = never> = {
    equals?: $Enums.Bank_name | EnumBank_nameFieldRefInput<$PrismaModel>
    in?: $Enums.Bank_name[] | ListEnumBank_nameFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bank_name[] | ListEnumBank_nameFieldRefInput<$PrismaModel>
    not?: NestedEnumBank_nameFilter<$PrismaModel> | $Enums.Bank_name
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

  export type NestedEnumAcc_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Acc_type | EnumAcc_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Acc_type[] | ListEnumAcc_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumAcc_typeWithAggregatesFilter<$PrismaModel> | $Enums.Acc_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcc_typeFilter<$PrismaModel>
    _max?: NestedEnumAcc_typeFilter<$PrismaModel>
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

  export type NestedEnumTxn_CatFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_Cat | EnumTxn_CatFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_Cat[] | ListEnumTxn_CatFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_Cat[] | ListEnumTxn_CatFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_CatFilter<$PrismaModel> | $Enums.Txn_Cat
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

  export type NestedEnumTxn_CatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Txn_Cat | EnumTxn_CatFieldRefInput<$PrismaModel>
    in?: $Enums.Txn_Cat[] | ListEnumTxn_CatFieldRefInput<$PrismaModel>
    notIn?: $Enums.Txn_Cat[] | ListEnumTxn_CatFieldRefInput<$PrismaModel>
    not?: NestedEnumTxn_CatWithAggregatesFilter<$PrismaModel> | $Enums.Txn_Cat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxn_CatFilter<$PrismaModel>
    _max?: NestedEnumTxn_CatFilter<$PrismaModel>
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

  export type Auth_codesCreateWithoutUserInput = {
    code: string
    client_id: string
    redirect_uri: string
    createdAt: Date | string
    expiresAt: Date | string
    used?: boolean
  }

  export type Auth_codesUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    client_id: string
    redirect_uri: string
    createdAt: Date | string
    expiresAt: Date | string
    used?: boolean
  }

  export type Auth_codesCreateOrConnectWithoutUserInput = {
    where: Auth_codesWhereUniqueInput
    create: XOR<Auth_codesCreateWithoutUserInput, Auth_codesUncheckedCreateWithoutUserInput>
  }

  export type Auth_codesCreateManyUserInputEnvelope = {
    data: Auth_codesCreateManyUserInput | Auth_codesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokensCreateWithoutUserInput = {
    hashedToken: string
    bankName: string
    created_At?: Date | string
    expiresAt: Date | string
    revoked?: boolean
    commercialClients: CommercialClientsCreateNestedOneWithoutTokensInput
  }

  export type TokensUncheckedCreateWithoutUserInput = {
    id?: number
    client_id: string
    hashedToken: string
    bankName: string
    created_At?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type TokensCreateOrConnectWithoutUserInput = {
    where: TokensWhereUniqueInput
    create: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput>
  }

  export type TokensCreateManyUserInputEnvelope = {
    data: TokensCreateManyUserInput | TokensCreateManyUserInput[]
    skipDuplicates?: boolean
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

  export type Auth_codesUpsertWithWhereUniqueWithoutUserInput = {
    where: Auth_codesWhereUniqueInput
    update: XOR<Auth_codesUpdateWithoutUserInput, Auth_codesUncheckedUpdateWithoutUserInput>
    create: XOR<Auth_codesCreateWithoutUserInput, Auth_codesUncheckedCreateWithoutUserInput>
  }

  export type Auth_codesUpdateWithWhereUniqueWithoutUserInput = {
    where: Auth_codesWhereUniqueInput
    data: XOR<Auth_codesUpdateWithoutUserInput, Auth_codesUncheckedUpdateWithoutUserInput>
  }

  export type Auth_codesUpdateManyWithWhereWithoutUserInput = {
    where: Auth_codesScalarWhereInput
    data: XOR<Auth_codesUpdateManyMutationInput, Auth_codesUncheckedUpdateManyWithoutUserInput>
  }

  export type Auth_codesScalarWhereInput = {
    AND?: Auth_codesScalarWhereInput | Auth_codesScalarWhereInput[]
    OR?: Auth_codesScalarWhereInput[]
    NOT?: Auth_codesScalarWhereInput | Auth_codesScalarWhereInput[]
    id?: IntFilter<"Auth_codes"> | number
    code?: StringFilter<"Auth_codes"> | string
    user_id?: IntFilter<"Auth_codes"> | number
    client_id?: StringFilter<"Auth_codes"> | string
    redirect_uri?: StringFilter<"Auth_codes"> | string
    createdAt?: DateTimeFilter<"Auth_codes"> | Date | string
    expiresAt?: DateTimeFilter<"Auth_codes"> | Date | string
    used?: BoolFilter<"Auth_codes"> | boolean
  }

  export type TokensUpsertWithWhereUniqueWithoutUserInput = {
    where: TokensWhereUniqueInput
    update: XOR<TokensUpdateWithoutUserInput, TokensUncheckedUpdateWithoutUserInput>
    create: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput>
  }

  export type TokensUpdateWithWhereUniqueWithoutUserInput = {
    where: TokensWhereUniqueInput
    data: XOR<TokensUpdateWithoutUserInput, TokensUncheckedUpdateWithoutUserInput>
  }

  export type TokensUpdateManyWithWhereWithoutUserInput = {
    where: TokensScalarWhereInput
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyWithoutUserInput>
  }

  export type TokensScalarWhereInput = {
    AND?: TokensScalarWhereInput | TokensScalarWhereInput[]
    OR?: TokensScalarWhereInput[]
    NOT?: TokensScalarWhereInput | TokensScalarWhereInput[]
    id?: IntFilter<"Tokens"> | number
    user_id?: IntFilter<"Tokens"> | number
    client_id?: StringFilter<"Tokens"> | string
    hashedToken?: StringFilter<"Tokens"> | string
    bankName?: StringFilter<"Tokens"> | string
    created_At?: DateTimeFilter<"Tokens"> | Date | string
    expiresAt?: DateTimeFilter<"Tokens"> | Date | string
    revoked?: BoolFilter<"Tokens"> | boolean
  }

  export type TokensCreateWithoutCommercialClientsInput = {
    hashedToken: string
    bankName: string
    created_At?: Date | string
    expiresAt: Date | string
    revoked?: boolean
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokensUncheckedCreateWithoutCommercialClientsInput = {
    id?: number
    user_id: number
    hashedToken: string
    bankName: string
    created_At?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type TokensCreateOrConnectWithoutCommercialClientsInput = {
    where: TokensWhereUniqueInput
    create: XOR<TokensCreateWithoutCommercialClientsInput, TokensUncheckedCreateWithoutCommercialClientsInput>
  }

  export type TokensCreateManyCommercialClientsInputEnvelope = {
    data: TokensCreateManyCommercialClientsInput | TokensCreateManyCommercialClientsInput[]
    skipDuplicates?: boolean
  }

  export type TokensUpsertWithWhereUniqueWithoutCommercialClientsInput = {
    where: TokensWhereUniqueInput
    update: XOR<TokensUpdateWithoutCommercialClientsInput, TokensUncheckedUpdateWithoutCommercialClientsInput>
    create: XOR<TokensCreateWithoutCommercialClientsInput, TokensUncheckedCreateWithoutCommercialClientsInput>
  }

  export type TokensUpdateWithWhereUniqueWithoutCommercialClientsInput = {
    where: TokensWhereUniqueInput
    data: XOR<TokensUpdateWithoutCommercialClientsInput, TokensUncheckedUpdateWithoutCommercialClientsInput>
  }

  export type TokensUpdateManyWithWhereWithoutCommercialClientsInput = {
    where: TokensScalarWhereInput
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyWithoutCommercialClientsInput>
  }

  export type UserCreateWithoutAccountsInput = {
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    verification?: VerificationCreateNestedManyWithoutUserInput
    auth_code?: Auth_codesCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    verification?: VerificationUncheckedCreateNestedManyWithoutUserInput
    auth_code?: Auth_codesUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type TransactionsCreateWithoutAccountsInput = {
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    created_At: Date | string
    channel: $Enums.Txn_channel
    amount: number
    category: $Enums.Txn_Cat
    counterPartyID: string
    counterPartyType: string
  }

  export type TransactionsUncheckedCreateWithoutAccountsInput = {
    txn_id?: number
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    created_At: Date | string
    channel: $Enums.Txn_channel
    amount: number
    category: $Enums.Txn_Cat
    counterPartyID: string
    counterPartyType: string
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
    verification?: VerificationUpdateManyWithoutUserNestedInput
    auth_code?: Auth_codesUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verification?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    auth_code?: Auth_codesUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
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
    created_At?: DateTimeFilter<"Transactions"> | Date | string
    channel?: EnumTxn_channelFilter<"Transactions"> | $Enums.Txn_channel
    amount?: IntFilter<"Transactions"> | number
    category?: EnumTxn_CatFilter<"Transactions"> | $Enums.Txn_Cat
    counterPartyID?: StringFilter<"Transactions"> | string
    counterPartyType?: StringFilter<"Transactions"> | string
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

  export type UserCreateWithoutVerificationInput = {
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    accounts?: AccountsCreateNestedManyWithoutUserInput
    auth_code?: Auth_codesCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationInput = {
    id?: number
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    auth_code?: Auth_codesUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationInput, UserUncheckedCreateWithoutVerificationInput>
  }

  export type UserUpsertWithoutVerificationInput = {
    update: XOR<UserUpdateWithoutVerificationInput, UserUncheckedUpdateWithoutVerificationInput>
    create: XOR<UserCreateWithoutVerificationInput, UserUncheckedCreateWithoutVerificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationInput, UserUncheckedUpdateWithoutVerificationInput>
  }

  export type UserUpdateWithoutVerificationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    auth_code?: Auth_codesUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    auth_code?: Auth_codesUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuth_codeInput = {
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    accounts?: AccountsCreateNestedManyWithoutUserInput
    verification?: VerificationCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuth_codeInput = {
    id?: number
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    verification?: VerificationUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuth_codeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuth_codeInput, UserUncheckedCreateWithoutAuth_codeInput>
  }

  export type UserUpsertWithoutAuth_codeInput = {
    update: XOR<UserUpdateWithoutAuth_codeInput, UserUncheckedUpdateWithoutAuth_codeInput>
    create: XOR<UserCreateWithoutAuth_codeInput, UserUncheckedCreateWithoutAuth_codeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuth_codeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuth_codeInput, UserUncheckedUpdateWithoutAuth_codeInput>
  }

  export type UserUpdateWithoutAuth_codeInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    verification?: VerificationUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuth_codeInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    verification?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTokensInput = {
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    accounts?: AccountsCreateNestedManyWithoutUserInput
    verification?: VerificationCreateNestedManyWithoutUserInput
    auth_code?: Auth_codesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: number
    email?: string | null
    username?: string | null
    number: string
    password: string
    isVerified?: boolean
    accounts?: AccountsUncheckedCreateNestedManyWithoutUserInput
    verification?: VerificationUncheckedCreateNestedManyWithoutUserInput
    auth_code?: Auth_codesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type CommercialClientsCreateWithoutTokensInput = {
    client_id: string
    assigned_date: Date | string
    sharedSecret: string
    expiresAt: Date | string
  }

  export type CommercialClientsUncheckedCreateWithoutTokensInput = {
    id?: number
    client_id: string
    assigned_date: Date | string
    sharedSecret: string
    expiresAt: Date | string
  }

  export type CommercialClientsCreateOrConnectWithoutTokensInput = {
    where: CommercialClientsWhereUniqueInput
    create: XOR<CommercialClientsCreateWithoutTokensInput, CommercialClientsUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountsUpdateManyWithoutUserNestedInput
    verification?: VerificationUpdateManyWithoutUserNestedInput
    auth_code?: Auth_codesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountsUncheckedUpdateManyWithoutUserNestedInput
    verification?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    auth_code?: Auth_codesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommercialClientsUpsertWithoutTokensInput = {
    update: XOR<CommercialClientsUpdateWithoutTokensInput, CommercialClientsUncheckedUpdateWithoutTokensInput>
    create: XOR<CommercialClientsCreateWithoutTokensInput, CommercialClientsUncheckedCreateWithoutTokensInput>
    where?: CommercialClientsWhereInput
  }

  export type CommercialClientsUpdateToOneWithWhereWithoutTokensInput = {
    where?: CommercialClientsWhereInput
    data: XOR<CommercialClientsUpdateWithoutTokensInput, CommercialClientsUncheckedUpdateWithoutTokensInput>
  }

  export type CommercialClientsUpdateWithoutTokensInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    assigned_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedSecret?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommercialClientsUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: StringFieldUpdateOperationsInput | string
    assigned_date?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedSecret?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type VerificationCreateManyUserInput = {
    id?: number
    otp: string
    type: string
    expiresAt: Date | string
  }

  export type Auth_codesCreateManyUserInput = {
    id?: number
    code: string
    client_id: string
    redirect_uri: string
    createdAt: Date | string
    expiresAt: Date | string
    used?: boolean
  }

  export type TokensCreateManyUserInput = {
    id?: number
    client_id: string
    hashedToken: string
    bankName: string
    created_At?: Date | string
    expiresAt: Date | string
    revoked?: boolean
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

  export type Auth_codesUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    redirect_uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Auth_codesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    redirect_uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Auth_codesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    redirect_uri?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokensUpdateWithoutUserInput = {
    hashedToken?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    commercialClients?: CommercialClientsUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokensUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: StringFieldUpdateOperationsInput | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokensUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: StringFieldUpdateOperationsInput | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokensCreateManyCommercialClientsInput = {
    id?: number
    user_id: number
    hashedToken: string
    bankName: string
    created_At?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type TokensUpdateWithoutCommercialClientsInput = {
    hashedToken?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokensUncheckedUpdateWithoutCommercialClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    hashedToken?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokensUncheckedUpdateManyWithoutCommercialClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    hashedToken?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionsCreateManyAccountsInput = {
    txn_id?: number
    status: $Enums.Txn_status
    type: $Enums.Txn_type
    created_At: Date | string
    channel: $Enums.Txn_channel
    amount: number
    category: $Enums.Txn_Cat
    counterPartyID: string
    counterPartyType: string
  }

  export type TransactionsUpdateWithoutAccountsInput = {
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumTxn_CatFieldUpdateOperationsInput | $Enums.Txn_Cat
    counterPartyID?: StringFieldUpdateOperationsInput | string
    counterPartyType?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsUncheckedUpdateWithoutAccountsInput = {
    txn_id?: IntFieldUpdateOperationsInput | number
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumTxn_CatFieldUpdateOperationsInput | $Enums.Txn_Cat
    counterPartyID?: StringFieldUpdateOperationsInput | string
    counterPartyType?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsUncheckedUpdateManyWithoutAccountsInput = {
    txn_id?: IntFieldUpdateOperationsInput | number
    status?: EnumTxn_statusFieldUpdateOperationsInput | $Enums.Txn_status
    type?: EnumTxn_typeFieldUpdateOperationsInput | $Enums.Txn_type
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: EnumTxn_channelFieldUpdateOperationsInput | $Enums.Txn_channel
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumTxn_CatFieldUpdateOperationsInput | $Enums.Txn_Cat
    counterPartyID?: StringFieldUpdateOperationsInput | string
    counterPartyType?: StringFieldUpdateOperationsInput | string
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