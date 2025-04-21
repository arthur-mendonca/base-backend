
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
 * Model Crianca
 * 
 */
export type Crianca = $Result.DefaultSelection<Prisma.$CriancaPayload>
/**
 * Model Responsavel
 * 
 */
export type Responsavel = $Result.DefaultSelection<Prisma.$ResponsavelPayload>
/**
 * Model Voluntario
 * 
 */
export type Voluntario = $Result.DefaultSelection<Prisma.$VoluntarioPayload>
/**
 * Model Parceiro
 * 
 */
export type Parceiro = $Result.DefaultSelection<Prisma.$ParceiroPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Frequencia
 * 
 */
export type Frequencia = $Result.DefaultSelection<Prisma.$FrequenciaPayload>
/**
 * Model CestaBasica
 * 
 */
export type CestaBasica = $Result.DefaultSelection<Prisma.$CestaBasicaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoUsuario: {
  admin: 'admin',
  usuario: 'usuario'
};

export type TipoUsuario = (typeof TipoUsuario)[keyof typeof TipoUsuario]

}

export type TipoUsuario = $Enums.TipoUsuario

export const TipoUsuario: typeof $Enums.TipoUsuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Criancas
 * const criancas = await prisma.crianca.findMany()
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
   * // Fetch zero or more Criancas
   * const criancas = await prisma.crianca.findMany()
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
   * `prisma.crianca`: Exposes CRUD operations for the **Crianca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Criancas
    * const criancas = await prisma.crianca.findMany()
    * ```
    */
  get crianca(): Prisma.CriancaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.responsavel`: Exposes CRUD operations for the **Responsavel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Responsavels
    * const responsavels = await prisma.responsavel.findMany()
    * ```
    */
  get responsavel(): Prisma.ResponsavelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voluntario`: Exposes CRUD operations for the **Voluntario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voluntarios
    * const voluntarios = await prisma.voluntario.findMany()
    * ```
    */
  get voluntario(): Prisma.VoluntarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parceiro`: Exposes CRUD operations for the **Parceiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parceiros
    * const parceiros = await prisma.parceiro.findMany()
    * ```
    */
  get parceiro(): Prisma.ParceiroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.frequencia`: Exposes CRUD operations for the **Frequencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Frequencias
    * const frequencias = await prisma.frequencia.findMany()
    * ```
    */
  get frequencia(): Prisma.FrequenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cestaBasica`: Exposes CRUD operations for the **CestaBasica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CestaBasicas
    * const cestaBasicas = await prisma.cestaBasica.findMany()
    * ```
    */
  get cestaBasica(): Prisma.CestaBasicaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Crianca: 'Crianca',
    Responsavel: 'Responsavel',
    Voluntario: 'Voluntario',
    Parceiro: 'Parceiro',
    Usuario: 'Usuario',
    Frequencia: 'Frequencia',
    CestaBasica: 'CestaBasica'
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
      modelProps: "crianca" | "responsavel" | "voluntario" | "parceiro" | "usuario" | "frequencia" | "cestaBasica"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Crianca: {
        payload: Prisma.$CriancaPayload<ExtArgs>
        fields: Prisma.CriancaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CriancaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriancaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CriancaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriancaPayload>
          }
          findFirst: {
            args: Prisma.CriancaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriancaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CriancaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriancaPayload>
          }
          findMany: {
            args: Prisma.CriancaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriancaPayload>[]
          }
          create: {
            args: Prisma.CriancaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriancaPayload>
          }
          createMany: {
            args: Prisma.CriancaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CriancaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriancaPayload>[]
          }
          delete: {
            args: Prisma.CriancaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriancaPayload>
          }
          update: {
            args: Prisma.CriancaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriancaPayload>
          }
          deleteMany: {
            args: Prisma.CriancaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CriancaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CriancaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriancaPayload>[]
          }
          upsert: {
            args: Prisma.CriancaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriancaPayload>
          }
          aggregate: {
            args: Prisma.CriancaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrianca>
          }
          groupBy: {
            args: Prisma.CriancaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CriancaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CriancaCountArgs<ExtArgs>
            result: $Utils.Optional<CriancaCountAggregateOutputType> | number
          }
        }
      }
      Responsavel: {
        payload: Prisma.$ResponsavelPayload<ExtArgs>
        fields: Prisma.ResponsavelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponsavelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponsavelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>
          }
          findFirst: {
            args: Prisma.ResponsavelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponsavelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>
          }
          findMany: {
            args: Prisma.ResponsavelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>[]
          }
          create: {
            args: Prisma.ResponsavelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>
          }
          createMany: {
            args: Prisma.ResponsavelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResponsavelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>[]
          }
          delete: {
            args: Prisma.ResponsavelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>
          }
          update: {
            args: Prisma.ResponsavelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>
          }
          deleteMany: {
            args: Prisma.ResponsavelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResponsavelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResponsavelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>[]
          }
          upsert: {
            args: Prisma.ResponsavelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>
          }
          aggregate: {
            args: Prisma.ResponsavelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponsavel>
          }
          groupBy: {
            args: Prisma.ResponsavelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponsavelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResponsavelCountArgs<ExtArgs>
            result: $Utils.Optional<ResponsavelCountAggregateOutputType> | number
          }
        }
      }
      Voluntario: {
        payload: Prisma.$VoluntarioPayload<ExtArgs>
        fields: Prisma.VoluntarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoluntarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoluntarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          findFirst: {
            args: Prisma.VoluntarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoluntarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          findMany: {
            args: Prisma.VoluntarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>[]
          }
          create: {
            args: Prisma.VoluntarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          createMany: {
            args: Prisma.VoluntarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoluntarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>[]
          }
          delete: {
            args: Prisma.VoluntarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          update: {
            args: Prisma.VoluntarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          deleteMany: {
            args: Prisma.VoluntarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoluntarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoluntarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>[]
          }
          upsert: {
            args: Prisma.VoluntarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          aggregate: {
            args: Prisma.VoluntarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoluntario>
          }
          groupBy: {
            args: Prisma.VoluntarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoluntarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoluntarioCountArgs<ExtArgs>
            result: $Utils.Optional<VoluntarioCountAggregateOutputType> | number
          }
        }
      }
      Parceiro: {
        payload: Prisma.$ParceiroPayload<ExtArgs>
        fields: Prisma.ParceiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParceiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParceiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>
          }
          findFirst: {
            args: Prisma.ParceiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParceiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>
          }
          findMany: {
            args: Prisma.ParceiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>[]
          }
          create: {
            args: Prisma.ParceiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>
          }
          createMany: {
            args: Prisma.ParceiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParceiroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>[]
          }
          delete: {
            args: Prisma.ParceiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>
          }
          update: {
            args: Prisma.ParceiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>
          }
          deleteMany: {
            args: Prisma.ParceiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParceiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParceiroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>[]
          }
          upsert: {
            args: Prisma.ParceiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>
          }
          aggregate: {
            args: Prisma.ParceiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParceiro>
          }
          groupBy: {
            args: Prisma.ParceiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParceiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParceiroCountArgs<ExtArgs>
            result: $Utils.Optional<ParceiroCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Frequencia: {
        payload: Prisma.$FrequenciaPayload<ExtArgs>
        fields: Prisma.FrequenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FrequenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FrequenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          findFirst: {
            args: Prisma.FrequenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FrequenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          findMany: {
            args: Prisma.FrequenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>[]
          }
          create: {
            args: Prisma.FrequenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          createMany: {
            args: Prisma.FrequenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FrequenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>[]
          }
          delete: {
            args: Prisma.FrequenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          update: {
            args: Prisma.FrequenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          deleteMany: {
            args: Prisma.FrequenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FrequenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FrequenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>[]
          }
          upsert: {
            args: Prisma.FrequenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          aggregate: {
            args: Prisma.FrequenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFrequencia>
          }
          groupBy: {
            args: Prisma.FrequenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FrequenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FrequenciaCountArgs<ExtArgs>
            result: $Utils.Optional<FrequenciaCountAggregateOutputType> | number
          }
        }
      }
      CestaBasica: {
        payload: Prisma.$CestaBasicaPayload<ExtArgs>
        fields: Prisma.CestaBasicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CestaBasicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CestaBasicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CestaBasicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CestaBasicaPayload>
          }
          findFirst: {
            args: Prisma.CestaBasicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CestaBasicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CestaBasicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CestaBasicaPayload>
          }
          findMany: {
            args: Prisma.CestaBasicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CestaBasicaPayload>[]
          }
          create: {
            args: Prisma.CestaBasicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CestaBasicaPayload>
          }
          createMany: {
            args: Prisma.CestaBasicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CestaBasicaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CestaBasicaPayload>[]
          }
          delete: {
            args: Prisma.CestaBasicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CestaBasicaPayload>
          }
          update: {
            args: Prisma.CestaBasicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CestaBasicaPayload>
          }
          deleteMany: {
            args: Prisma.CestaBasicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CestaBasicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CestaBasicaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CestaBasicaPayload>[]
          }
          upsert: {
            args: Prisma.CestaBasicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CestaBasicaPayload>
          }
          aggregate: {
            args: Prisma.CestaBasicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCestaBasica>
          }
          groupBy: {
            args: Prisma.CestaBasicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CestaBasicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CestaBasicaCountArgs<ExtArgs>
            result: $Utils.Optional<CestaBasicaCountAggregateOutputType> | number
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
    crianca?: CriancaOmit
    responsavel?: ResponsavelOmit
    voluntario?: VoluntarioOmit
    parceiro?: ParceiroOmit
    usuario?: UsuarioOmit
    frequencia?: FrequenciaOmit
    cestaBasica?: CestaBasicaOmit
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
   * Count Type CriancaCountOutputType
   */

  export type CriancaCountOutputType = {
    frequencias: number
  }

  export type CriancaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frequencias?: boolean | CriancaCountOutputTypeCountFrequenciasArgs
  }

  // Custom InputTypes
  /**
   * CriancaCountOutputType without action
   */
  export type CriancaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CriancaCountOutputType
     */
    select?: CriancaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CriancaCountOutputType without action
   */
  export type CriancaCountOutputTypeCountFrequenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequenciaWhereInput
  }


  /**
   * Count Type ResponsavelCountOutputType
   */

  export type ResponsavelCountOutputType = {
    criancas: number
    cestasBasicas: number
  }

  export type ResponsavelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criancas?: boolean | ResponsavelCountOutputTypeCountCriancasArgs
    cestasBasicas?: boolean | ResponsavelCountOutputTypeCountCestasBasicasArgs
  }

  // Custom InputTypes
  /**
   * ResponsavelCountOutputType without action
   */
  export type ResponsavelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponsavelCountOutputType
     */
    select?: ResponsavelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResponsavelCountOutputType without action
   */
  export type ResponsavelCountOutputTypeCountCriancasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CriancaWhereInput
  }

  /**
   * ResponsavelCountOutputType without action
   */
  export type ResponsavelCountOutputTypeCountCestasBasicasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CestaBasicaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Crianca
   */

  export type AggregateCrianca = {
    _count: CriancaCountAggregateOutputType | null
    _avg: CriancaAvgAggregateOutputType | null
    _sum: CriancaSumAggregateOutputType | null
    _min: CriancaMinAggregateOutputType | null
    _max: CriancaMaxAggregateOutputType | null
  }

  export type CriancaAvgAggregateOutputType = {
    id_crianca: number | null
    id_responsavel: number | null
  }

  export type CriancaSumAggregateOutputType = {
    id_crianca: number | null
    id_responsavel: number | null
  }

  export type CriancaMinAggregateOutputType = {
    id_crianca: number | null
    id_responsavel: number | null
    nome: string | null
    data_nascimento: Date | null
    rg: string | null
    cpf: string | null
  }

  export type CriancaMaxAggregateOutputType = {
    id_crianca: number | null
    id_responsavel: number | null
    nome: string | null
    data_nascimento: Date | null
    rg: string | null
    cpf: string | null
  }

  export type CriancaCountAggregateOutputType = {
    id_crianca: number
    id_responsavel: number
    nome: number
    data_nascimento: number
    rg: number
    cpf: number
    _all: number
  }


  export type CriancaAvgAggregateInputType = {
    id_crianca?: true
    id_responsavel?: true
  }

  export type CriancaSumAggregateInputType = {
    id_crianca?: true
    id_responsavel?: true
  }

  export type CriancaMinAggregateInputType = {
    id_crianca?: true
    id_responsavel?: true
    nome?: true
    data_nascimento?: true
    rg?: true
    cpf?: true
  }

  export type CriancaMaxAggregateInputType = {
    id_crianca?: true
    id_responsavel?: true
    nome?: true
    data_nascimento?: true
    rg?: true
    cpf?: true
  }

  export type CriancaCountAggregateInputType = {
    id_crianca?: true
    id_responsavel?: true
    nome?: true
    data_nascimento?: true
    rg?: true
    cpf?: true
    _all?: true
  }

  export type CriancaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crianca to aggregate.
     */
    where?: CriancaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criancas to fetch.
     */
    orderBy?: CriancaOrderByWithRelationInput | CriancaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CriancaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criancas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criancas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Criancas
    **/
    _count?: true | CriancaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CriancaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CriancaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CriancaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CriancaMaxAggregateInputType
  }

  export type GetCriancaAggregateType<T extends CriancaAggregateArgs> = {
        [P in keyof T & keyof AggregateCrianca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrianca[P]>
      : GetScalarType<T[P], AggregateCrianca[P]>
  }




  export type CriancaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CriancaWhereInput
    orderBy?: CriancaOrderByWithAggregationInput | CriancaOrderByWithAggregationInput[]
    by: CriancaScalarFieldEnum[] | CriancaScalarFieldEnum
    having?: CriancaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CriancaCountAggregateInputType | true
    _avg?: CriancaAvgAggregateInputType
    _sum?: CriancaSumAggregateInputType
    _min?: CriancaMinAggregateInputType
    _max?: CriancaMaxAggregateInputType
  }

  export type CriancaGroupByOutputType = {
    id_crianca: number
    id_responsavel: number
    nome: string
    data_nascimento: Date
    rg: string
    cpf: string
    _count: CriancaCountAggregateOutputType | null
    _avg: CriancaAvgAggregateOutputType | null
    _sum: CriancaSumAggregateOutputType | null
    _min: CriancaMinAggregateOutputType | null
    _max: CriancaMaxAggregateOutputType | null
  }

  type GetCriancaGroupByPayload<T extends CriancaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CriancaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CriancaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CriancaGroupByOutputType[P]>
            : GetScalarType<T[P], CriancaGroupByOutputType[P]>
        }
      >
    >


  export type CriancaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_crianca?: boolean
    id_responsavel?: boolean
    nome?: boolean
    data_nascimento?: boolean
    rg?: boolean
    cpf?: boolean
    responsavel?: boolean | ResponsavelDefaultArgs<ExtArgs>
    frequencias?: boolean | Crianca$frequenciasArgs<ExtArgs>
    _count?: boolean | CriancaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crianca"]>

  export type CriancaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_crianca?: boolean
    id_responsavel?: boolean
    nome?: boolean
    data_nascimento?: boolean
    rg?: boolean
    cpf?: boolean
    responsavel?: boolean | ResponsavelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crianca"]>

  export type CriancaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_crianca?: boolean
    id_responsavel?: boolean
    nome?: boolean
    data_nascimento?: boolean
    rg?: boolean
    cpf?: boolean
    responsavel?: boolean | ResponsavelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crianca"]>

  export type CriancaSelectScalar = {
    id_crianca?: boolean
    id_responsavel?: boolean
    nome?: boolean
    data_nascimento?: boolean
    rg?: boolean
    cpf?: boolean
  }

  export type CriancaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_crianca" | "id_responsavel" | "nome" | "data_nascimento" | "rg" | "cpf", ExtArgs["result"]["crianca"]>
  export type CriancaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsavel?: boolean | ResponsavelDefaultArgs<ExtArgs>
    frequencias?: boolean | Crianca$frequenciasArgs<ExtArgs>
    _count?: boolean | CriancaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CriancaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsavel?: boolean | ResponsavelDefaultArgs<ExtArgs>
  }
  export type CriancaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsavel?: boolean | ResponsavelDefaultArgs<ExtArgs>
  }

  export type $CriancaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Crianca"
    objects: {
      responsavel: Prisma.$ResponsavelPayload<ExtArgs>
      frequencias: Prisma.$FrequenciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_crianca: number
      id_responsavel: number
      nome: string
      data_nascimento: Date
      rg: string
      cpf: string
    }, ExtArgs["result"]["crianca"]>
    composites: {}
  }

  type CriancaGetPayload<S extends boolean | null | undefined | CriancaDefaultArgs> = $Result.GetResult<Prisma.$CriancaPayload, S>

  type CriancaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CriancaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CriancaCountAggregateInputType | true
    }

  export interface CriancaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crianca'], meta: { name: 'Crianca' } }
    /**
     * Find zero or one Crianca that matches the filter.
     * @param {CriancaFindUniqueArgs} args - Arguments to find a Crianca
     * @example
     * // Get one Crianca
     * const crianca = await prisma.crianca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CriancaFindUniqueArgs>(args: SelectSubset<T, CriancaFindUniqueArgs<ExtArgs>>): Prisma__CriancaClient<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crianca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CriancaFindUniqueOrThrowArgs} args - Arguments to find a Crianca
     * @example
     * // Get one Crianca
     * const crianca = await prisma.crianca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CriancaFindUniqueOrThrowArgs>(args: SelectSubset<T, CriancaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CriancaClient<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crianca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriancaFindFirstArgs} args - Arguments to find a Crianca
     * @example
     * // Get one Crianca
     * const crianca = await prisma.crianca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CriancaFindFirstArgs>(args?: SelectSubset<T, CriancaFindFirstArgs<ExtArgs>>): Prisma__CriancaClient<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crianca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriancaFindFirstOrThrowArgs} args - Arguments to find a Crianca
     * @example
     * // Get one Crianca
     * const crianca = await prisma.crianca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CriancaFindFirstOrThrowArgs>(args?: SelectSubset<T, CriancaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CriancaClient<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Criancas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriancaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Criancas
     * const criancas = await prisma.crianca.findMany()
     * 
     * // Get first 10 Criancas
     * const criancas = await prisma.crianca.findMany({ take: 10 })
     * 
     * // Only select the `id_crianca`
     * const criancaWithId_criancaOnly = await prisma.crianca.findMany({ select: { id_crianca: true } })
     * 
     */
    findMany<T extends CriancaFindManyArgs>(args?: SelectSubset<T, CriancaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crianca.
     * @param {CriancaCreateArgs} args - Arguments to create a Crianca.
     * @example
     * // Create one Crianca
     * const Crianca = await prisma.crianca.create({
     *   data: {
     *     // ... data to create a Crianca
     *   }
     * })
     * 
     */
    create<T extends CriancaCreateArgs>(args: SelectSubset<T, CriancaCreateArgs<ExtArgs>>): Prisma__CriancaClient<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Criancas.
     * @param {CriancaCreateManyArgs} args - Arguments to create many Criancas.
     * @example
     * // Create many Criancas
     * const crianca = await prisma.crianca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CriancaCreateManyArgs>(args?: SelectSubset<T, CriancaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Criancas and returns the data saved in the database.
     * @param {CriancaCreateManyAndReturnArgs} args - Arguments to create many Criancas.
     * @example
     * // Create many Criancas
     * const crianca = await prisma.crianca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Criancas and only return the `id_crianca`
     * const criancaWithId_criancaOnly = await prisma.crianca.createManyAndReturn({
     *   select: { id_crianca: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CriancaCreateManyAndReturnArgs>(args?: SelectSubset<T, CriancaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crianca.
     * @param {CriancaDeleteArgs} args - Arguments to delete one Crianca.
     * @example
     * // Delete one Crianca
     * const Crianca = await prisma.crianca.delete({
     *   where: {
     *     // ... filter to delete one Crianca
     *   }
     * })
     * 
     */
    delete<T extends CriancaDeleteArgs>(args: SelectSubset<T, CriancaDeleteArgs<ExtArgs>>): Prisma__CriancaClient<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crianca.
     * @param {CriancaUpdateArgs} args - Arguments to update one Crianca.
     * @example
     * // Update one Crianca
     * const crianca = await prisma.crianca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CriancaUpdateArgs>(args: SelectSubset<T, CriancaUpdateArgs<ExtArgs>>): Prisma__CriancaClient<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Criancas.
     * @param {CriancaDeleteManyArgs} args - Arguments to filter Criancas to delete.
     * @example
     * // Delete a few Criancas
     * const { count } = await prisma.crianca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CriancaDeleteManyArgs>(args?: SelectSubset<T, CriancaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criancas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriancaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Criancas
     * const crianca = await prisma.crianca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CriancaUpdateManyArgs>(args: SelectSubset<T, CriancaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criancas and returns the data updated in the database.
     * @param {CriancaUpdateManyAndReturnArgs} args - Arguments to update many Criancas.
     * @example
     * // Update many Criancas
     * const crianca = await prisma.crianca.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Criancas and only return the `id_crianca`
     * const criancaWithId_criancaOnly = await prisma.crianca.updateManyAndReturn({
     *   select: { id_crianca: true },
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
    updateManyAndReturn<T extends CriancaUpdateManyAndReturnArgs>(args: SelectSubset<T, CriancaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crianca.
     * @param {CriancaUpsertArgs} args - Arguments to update or create a Crianca.
     * @example
     * // Update or create a Crianca
     * const crianca = await prisma.crianca.upsert({
     *   create: {
     *     // ... data to create a Crianca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crianca we want to update
     *   }
     * })
     */
    upsert<T extends CriancaUpsertArgs>(args: SelectSubset<T, CriancaUpsertArgs<ExtArgs>>): Prisma__CriancaClient<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Criancas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriancaCountArgs} args - Arguments to filter Criancas to count.
     * @example
     * // Count the number of Criancas
     * const count = await prisma.crianca.count({
     *   where: {
     *     // ... the filter for the Criancas we want to count
     *   }
     * })
    **/
    count<T extends CriancaCountArgs>(
      args?: Subset<T, CriancaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CriancaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crianca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriancaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CriancaAggregateArgs>(args: Subset<T, CriancaAggregateArgs>): Prisma.PrismaPromise<GetCriancaAggregateType<T>>

    /**
     * Group by Crianca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriancaGroupByArgs} args - Group by arguments.
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
      T extends CriancaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CriancaGroupByArgs['orderBy'] }
        : { orderBy?: CriancaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CriancaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCriancaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crianca model
   */
  readonly fields: CriancaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crianca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CriancaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responsavel<T extends ResponsavelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResponsavelDefaultArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    frequencias<T extends Crianca$frequenciasArgs<ExtArgs> = {}>(args?: Subset<T, Crianca$frequenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Crianca model
   */
  interface CriancaFieldRefs {
    readonly id_crianca: FieldRef<"Crianca", 'Int'>
    readonly id_responsavel: FieldRef<"Crianca", 'Int'>
    readonly nome: FieldRef<"Crianca", 'String'>
    readonly data_nascimento: FieldRef<"Crianca", 'DateTime'>
    readonly rg: FieldRef<"Crianca", 'String'>
    readonly cpf: FieldRef<"Crianca", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Crianca findUnique
   */
  export type CriancaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaInclude<ExtArgs> | null
    /**
     * Filter, which Crianca to fetch.
     */
    where: CriancaWhereUniqueInput
  }

  /**
   * Crianca findUniqueOrThrow
   */
  export type CriancaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaInclude<ExtArgs> | null
    /**
     * Filter, which Crianca to fetch.
     */
    where: CriancaWhereUniqueInput
  }

  /**
   * Crianca findFirst
   */
  export type CriancaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaInclude<ExtArgs> | null
    /**
     * Filter, which Crianca to fetch.
     */
    where?: CriancaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criancas to fetch.
     */
    orderBy?: CriancaOrderByWithRelationInput | CriancaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Criancas.
     */
    cursor?: CriancaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criancas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criancas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Criancas.
     */
    distinct?: CriancaScalarFieldEnum | CriancaScalarFieldEnum[]
  }

  /**
   * Crianca findFirstOrThrow
   */
  export type CriancaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaInclude<ExtArgs> | null
    /**
     * Filter, which Crianca to fetch.
     */
    where?: CriancaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criancas to fetch.
     */
    orderBy?: CriancaOrderByWithRelationInput | CriancaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Criancas.
     */
    cursor?: CriancaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criancas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criancas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Criancas.
     */
    distinct?: CriancaScalarFieldEnum | CriancaScalarFieldEnum[]
  }

  /**
   * Crianca findMany
   */
  export type CriancaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaInclude<ExtArgs> | null
    /**
     * Filter, which Criancas to fetch.
     */
    where?: CriancaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criancas to fetch.
     */
    orderBy?: CriancaOrderByWithRelationInput | CriancaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Criancas.
     */
    cursor?: CriancaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criancas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criancas.
     */
    skip?: number
    distinct?: CriancaScalarFieldEnum | CriancaScalarFieldEnum[]
  }

  /**
   * Crianca create
   */
  export type CriancaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaInclude<ExtArgs> | null
    /**
     * The data needed to create a Crianca.
     */
    data: XOR<CriancaCreateInput, CriancaUncheckedCreateInput>
  }

  /**
   * Crianca createMany
   */
  export type CriancaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Criancas.
     */
    data: CriancaCreateManyInput | CriancaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crianca createManyAndReturn
   */
  export type CriancaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * The data used to create many Criancas.
     */
    data: CriancaCreateManyInput | CriancaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crianca update
   */
  export type CriancaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaInclude<ExtArgs> | null
    /**
     * The data needed to update a Crianca.
     */
    data: XOR<CriancaUpdateInput, CriancaUncheckedUpdateInput>
    /**
     * Choose, which Crianca to update.
     */
    where: CriancaWhereUniqueInput
  }

  /**
   * Crianca updateMany
   */
  export type CriancaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Criancas.
     */
    data: XOR<CriancaUpdateManyMutationInput, CriancaUncheckedUpdateManyInput>
    /**
     * Filter which Criancas to update
     */
    where?: CriancaWhereInput
    /**
     * Limit how many Criancas to update.
     */
    limit?: number
  }

  /**
   * Crianca updateManyAndReturn
   */
  export type CriancaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * The data used to update Criancas.
     */
    data: XOR<CriancaUpdateManyMutationInput, CriancaUncheckedUpdateManyInput>
    /**
     * Filter which Criancas to update
     */
    where?: CriancaWhereInput
    /**
     * Limit how many Criancas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crianca upsert
   */
  export type CriancaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaInclude<ExtArgs> | null
    /**
     * The filter to search for the Crianca to update in case it exists.
     */
    where: CriancaWhereUniqueInput
    /**
     * In case the Crianca found by the `where` argument doesn't exist, create a new Crianca with this data.
     */
    create: XOR<CriancaCreateInput, CriancaUncheckedCreateInput>
    /**
     * In case the Crianca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CriancaUpdateInput, CriancaUncheckedUpdateInput>
  }

  /**
   * Crianca delete
   */
  export type CriancaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaInclude<ExtArgs> | null
    /**
     * Filter which Crianca to delete.
     */
    where: CriancaWhereUniqueInput
  }

  /**
   * Crianca deleteMany
   */
  export type CriancaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Criancas to delete
     */
    where?: CriancaWhereInput
    /**
     * Limit how many Criancas to delete.
     */
    limit?: number
  }

  /**
   * Crianca.frequencias
   */
  export type Crianca$frequenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    where?: FrequenciaWhereInput
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    cursor?: FrequenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FrequenciaScalarFieldEnum | FrequenciaScalarFieldEnum[]
  }

  /**
   * Crianca without action
   */
  export type CriancaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaInclude<ExtArgs> | null
  }


  /**
   * Model Responsavel
   */

  export type AggregateResponsavel = {
    _count: ResponsavelCountAggregateOutputType | null
    _avg: ResponsavelAvgAggregateOutputType | null
    _sum: ResponsavelSumAggregateOutputType | null
    _min: ResponsavelMinAggregateOutputType | null
    _max: ResponsavelMaxAggregateOutputType | null
  }

  export type ResponsavelAvgAggregateOutputType = {
    id_responsavel: number | null
  }

  export type ResponsavelSumAggregateOutputType = {
    id_responsavel: number | null
  }

  export type ResponsavelMinAggregateOutputType = {
    id_responsavel: number | null
    nome: string | null
    cpf: string | null
    rg: string | null
    parentesco_com_crianca: string | null
    telefone: string | null
    email: string | null
    ocupacao: string | null
    endereco: string | null
  }

  export type ResponsavelMaxAggregateOutputType = {
    id_responsavel: number | null
    nome: string | null
    cpf: string | null
    rg: string | null
    parentesco_com_crianca: string | null
    telefone: string | null
    email: string | null
    ocupacao: string | null
    endereco: string | null
  }

  export type ResponsavelCountAggregateOutputType = {
    id_responsavel: number
    nome: number
    cpf: number
    rg: number
    parentesco_com_crianca: number
    telefone: number
    email: number
    ocupacao: number
    endereco: number
    _all: number
  }


  export type ResponsavelAvgAggregateInputType = {
    id_responsavel?: true
  }

  export type ResponsavelSumAggregateInputType = {
    id_responsavel?: true
  }

  export type ResponsavelMinAggregateInputType = {
    id_responsavel?: true
    nome?: true
    cpf?: true
    rg?: true
    parentesco_com_crianca?: true
    telefone?: true
    email?: true
    ocupacao?: true
    endereco?: true
  }

  export type ResponsavelMaxAggregateInputType = {
    id_responsavel?: true
    nome?: true
    cpf?: true
    rg?: true
    parentesco_com_crianca?: true
    telefone?: true
    email?: true
    ocupacao?: true
    endereco?: true
  }

  export type ResponsavelCountAggregateInputType = {
    id_responsavel?: true
    nome?: true
    cpf?: true
    rg?: true
    parentesco_com_crianca?: true
    telefone?: true
    email?: true
    ocupacao?: true
    endereco?: true
    _all?: true
  }

  export type ResponsavelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responsavel to aggregate.
     */
    where?: ResponsavelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsavels to fetch.
     */
    orderBy?: ResponsavelOrderByWithRelationInput | ResponsavelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponsavelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsavels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsavels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Responsavels
    **/
    _count?: true | ResponsavelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResponsavelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResponsavelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponsavelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponsavelMaxAggregateInputType
  }

  export type GetResponsavelAggregateType<T extends ResponsavelAggregateArgs> = {
        [P in keyof T & keyof AggregateResponsavel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponsavel[P]>
      : GetScalarType<T[P], AggregateResponsavel[P]>
  }




  export type ResponsavelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponsavelWhereInput
    orderBy?: ResponsavelOrderByWithAggregationInput | ResponsavelOrderByWithAggregationInput[]
    by: ResponsavelScalarFieldEnum[] | ResponsavelScalarFieldEnum
    having?: ResponsavelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponsavelCountAggregateInputType | true
    _avg?: ResponsavelAvgAggregateInputType
    _sum?: ResponsavelSumAggregateInputType
    _min?: ResponsavelMinAggregateInputType
    _max?: ResponsavelMaxAggregateInputType
  }

  export type ResponsavelGroupByOutputType = {
    id_responsavel: number
    nome: string
    cpf: string
    rg: string
    parentesco_com_crianca: string
    telefone: string
    email: string
    ocupacao: string
    endereco: string
    _count: ResponsavelCountAggregateOutputType | null
    _avg: ResponsavelAvgAggregateOutputType | null
    _sum: ResponsavelSumAggregateOutputType | null
    _min: ResponsavelMinAggregateOutputType | null
    _max: ResponsavelMaxAggregateOutputType | null
  }

  type GetResponsavelGroupByPayload<T extends ResponsavelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponsavelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponsavelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponsavelGroupByOutputType[P]>
            : GetScalarType<T[P], ResponsavelGroupByOutputType[P]>
        }
      >
    >


  export type ResponsavelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_responsavel?: boolean
    nome?: boolean
    cpf?: boolean
    rg?: boolean
    parentesco_com_crianca?: boolean
    telefone?: boolean
    email?: boolean
    ocupacao?: boolean
    endereco?: boolean
    criancas?: boolean | Responsavel$criancasArgs<ExtArgs>
    cestasBasicas?: boolean | Responsavel$cestasBasicasArgs<ExtArgs>
    _count?: boolean | ResponsavelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responsavel"]>

  export type ResponsavelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_responsavel?: boolean
    nome?: boolean
    cpf?: boolean
    rg?: boolean
    parentesco_com_crianca?: boolean
    telefone?: boolean
    email?: boolean
    ocupacao?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["responsavel"]>

  export type ResponsavelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_responsavel?: boolean
    nome?: boolean
    cpf?: boolean
    rg?: boolean
    parentesco_com_crianca?: boolean
    telefone?: boolean
    email?: boolean
    ocupacao?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["responsavel"]>

  export type ResponsavelSelectScalar = {
    id_responsavel?: boolean
    nome?: boolean
    cpf?: boolean
    rg?: boolean
    parentesco_com_crianca?: boolean
    telefone?: boolean
    email?: boolean
    ocupacao?: boolean
    endereco?: boolean
  }

  export type ResponsavelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_responsavel" | "nome" | "cpf" | "rg" | "parentesco_com_crianca" | "telefone" | "email" | "ocupacao" | "endereco", ExtArgs["result"]["responsavel"]>
  export type ResponsavelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criancas?: boolean | Responsavel$criancasArgs<ExtArgs>
    cestasBasicas?: boolean | Responsavel$cestasBasicasArgs<ExtArgs>
    _count?: boolean | ResponsavelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResponsavelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResponsavelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResponsavelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Responsavel"
    objects: {
      criancas: Prisma.$CriancaPayload<ExtArgs>[]
      cestasBasicas: Prisma.$CestaBasicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_responsavel: number
      nome: string
      cpf: string
      rg: string
      parentesco_com_crianca: string
      telefone: string
      email: string
      ocupacao: string
      endereco: string
    }, ExtArgs["result"]["responsavel"]>
    composites: {}
  }

  type ResponsavelGetPayload<S extends boolean | null | undefined | ResponsavelDefaultArgs> = $Result.GetResult<Prisma.$ResponsavelPayload, S>

  type ResponsavelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResponsavelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResponsavelCountAggregateInputType | true
    }

  export interface ResponsavelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Responsavel'], meta: { name: 'Responsavel' } }
    /**
     * Find zero or one Responsavel that matches the filter.
     * @param {ResponsavelFindUniqueArgs} args - Arguments to find a Responsavel
     * @example
     * // Get one Responsavel
     * const responsavel = await prisma.responsavel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponsavelFindUniqueArgs>(args: SelectSubset<T, ResponsavelFindUniqueArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Responsavel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResponsavelFindUniqueOrThrowArgs} args - Arguments to find a Responsavel
     * @example
     * // Get one Responsavel
     * const responsavel = await prisma.responsavel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponsavelFindUniqueOrThrowArgs>(args: SelectSubset<T, ResponsavelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Responsavel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelFindFirstArgs} args - Arguments to find a Responsavel
     * @example
     * // Get one Responsavel
     * const responsavel = await prisma.responsavel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponsavelFindFirstArgs>(args?: SelectSubset<T, ResponsavelFindFirstArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Responsavel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelFindFirstOrThrowArgs} args - Arguments to find a Responsavel
     * @example
     * // Get one Responsavel
     * const responsavel = await prisma.responsavel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponsavelFindFirstOrThrowArgs>(args?: SelectSubset<T, ResponsavelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Responsavels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responsavels
     * const responsavels = await prisma.responsavel.findMany()
     * 
     * // Get first 10 Responsavels
     * const responsavels = await prisma.responsavel.findMany({ take: 10 })
     * 
     * // Only select the `id_responsavel`
     * const responsavelWithId_responsavelOnly = await prisma.responsavel.findMany({ select: { id_responsavel: true } })
     * 
     */
    findMany<T extends ResponsavelFindManyArgs>(args?: SelectSubset<T, ResponsavelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Responsavel.
     * @param {ResponsavelCreateArgs} args - Arguments to create a Responsavel.
     * @example
     * // Create one Responsavel
     * const Responsavel = await prisma.responsavel.create({
     *   data: {
     *     // ... data to create a Responsavel
     *   }
     * })
     * 
     */
    create<T extends ResponsavelCreateArgs>(args: SelectSubset<T, ResponsavelCreateArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Responsavels.
     * @param {ResponsavelCreateManyArgs} args - Arguments to create many Responsavels.
     * @example
     * // Create many Responsavels
     * const responsavel = await prisma.responsavel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResponsavelCreateManyArgs>(args?: SelectSubset<T, ResponsavelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Responsavels and returns the data saved in the database.
     * @param {ResponsavelCreateManyAndReturnArgs} args - Arguments to create many Responsavels.
     * @example
     * // Create many Responsavels
     * const responsavel = await prisma.responsavel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Responsavels and only return the `id_responsavel`
     * const responsavelWithId_responsavelOnly = await prisma.responsavel.createManyAndReturn({
     *   select: { id_responsavel: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResponsavelCreateManyAndReturnArgs>(args?: SelectSubset<T, ResponsavelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Responsavel.
     * @param {ResponsavelDeleteArgs} args - Arguments to delete one Responsavel.
     * @example
     * // Delete one Responsavel
     * const Responsavel = await prisma.responsavel.delete({
     *   where: {
     *     // ... filter to delete one Responsavel
     *   }
     * })
     * 
     */
    delete<T extends ResponsavelDeleteArgs>(args: SelectSubset<T, ResponsavelDeleteArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Responsavel.
     * @param {ResponsavelUpdateArgs} args - Arguments to update one Responsavel.
     * @example
     * // Update one Responsavel
     * const responsavel = await prisma.responsavel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResponsavelUpdateArgs>(args: SelectSubset<T, ResponsavelUpdateArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Responsavels.
     * @param {ResponsavelDeleteManyArgs} args - Arguments to filter Responsavels to delete.
     * @example
     * // Delete a few Responsavels
     * const { count } = await prisma.responsavel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResponsavelDeleteManyArgs>(args?: SelectSubset<T, ResponsavelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responsavels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responsavels
     * const responsavel = await prisma.responsavel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResponsavelUpdateManyArgs>(args: SelectSubset<T, ResponsavelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responsavels and returns the data updated in the database.
     * @param {ResponsavelUpdateManyAndReturnArgs} args - Arguments to update many Responsavels.
     * @example
     * // Update many Responsavels
     * const responsavel = await prisma.responsavel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Responsavels and only return the `id_responsavel`
     * const responsavelWithId_responsavelOnly = await prisma.responsavel.updateManyAndReturn({
     *   select: { id_responsavel: true },
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
    updateManyAndReturn<T extends ResponsavelUpdateManyAndReturnArgs>(args: SelectSubset<T, ResponsavelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Responsavel.
     * @param {ResponsavelUpsertArgs} args - Arguments to update or create a Responsavel.
     * @example
     * // Update or create a Responsavel
     * const responsavel = await prisma.responsavel.upsert({
     *   create: {
     *     // ... data to create a Responsavel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Responsavel we want to update
     *   }
     * })
     */
    upsert<T extends ResponsavelUpsertArgs>(args: SelectSubset<T, ResponsavelUpsertArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Responsavels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelCountArgs} args - Arguments to filter Responsavels to count.
     * @example
     * // Count the number of Responsavels
     * const count = await prisma.responsavel.count({
     *   where: {
     *     // ... the filter for the Responsavels we want to count
     *   }
     * })
    **/
    count<T extends ResponsavelCountArgs>(
      args?: Subset<T, ResponsavelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponsavelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Responsavel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResponsavelAggregateArgs>(args: Subset<T, ResponsavelAggregateArgs>): Prisma.PrismaPromise<GetResponsavelAggregateType<T>>

    /**
     * Group by Responsavel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelGroupByArgs} args - Group by arguments.
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
      T extends ResponsavelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponsavelGroupByArgs['orderBy'] }
        : { orderBy?: ResponsavelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResponsavelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponsavelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Responsavel model
   */
  readonly fields: ResponsavelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Responsavel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponsavelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criancas<T extends Responsavel$criancasArgs<ExtArgs> = {}>(args?: Subset<T, Responsavel$criancasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cestasBasicas<T extends Responsavel$cestasBasicasArgs<ExtArgs> = {}>(args?: Subset<T, Responsavel$cestasBasicasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CestaBasicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Responsavel model
   */
  interface ResponsavelFieldRefs {
    readonly id_responsavel: FieldRef<"Responsavel", 'Int'>
    readonly nome: FieldRef<"Responsavel", 'String'>
    readonly cpf: FieldRef<"Responsavel", 'String'>
    readonly rg: FieldRef<"Responsavel", 'String'>
    readonly parentesco_com_crianca: FieldRef<"Responsavel", 'String'>
    readonly telefone: FieldRef<"Responsavel", 'String'>
    readonly email: FieldRef<"Responsavel", 'String'>
    readonly ocupacao: FieldRef<"Responsavel", 'String'>
    readonly endereco: FieldRef<"Responsavel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Responsavel findUnique
   */
  export type ResponsavelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * Filter, which Responsavel to fetch.
     */
    where: ResponsavelWhereUniqueInput
  }

  /**
   * Responsavel findUniqueOrThrow
   */
  export type ResponsavelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * Filter, which Responsavel to fetch.
     */
    where: ResponsavelWhereUniqueInput
  }

  /**
   * Responsavel findFirst
   */
  export type ResponsavelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * Filter, which Responsavel to fetch.
     */
    where?: ResponsavelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsavels to fetch.
     */
    orderBy?: ResponsavelOrderByWithRelationInput | ResponsavelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responsavels.
     */
    cursor?: ResponsavelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsavels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsavels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responsavels.
     */
    distinct?: ResponsavelScalarFieldEnum | ResponsavelScalarFieldEnum[]
  }

  /**
   * Responsavel findFirstOrThrow
   */
  export type ResponsavelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * Filter, which Responsavel to fetch.
     */
    where?: ResponsavelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsavels to fetch.
     */
    orderBy?: ResponsavelOrderByWithRelationInput | ResponsavelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responsavels.
     */
    cursor?: ResponsavelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsavels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsavels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responsavels.
     */
    distinct?: ResponsavelScalarFieldEnum | ResponsavelScalarFieldEnum[]
  }

  /**
   * Responsavel findMany
   */
  export type ResponsavelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * Filter, which Responsavels to fetch.
     */
    where?: ResponsavelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsavels to fetch.
     */
    orderBy?: ResponsavelOrderByWithRelationInput | ResponsavelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Responsavels.
     */
    cursor?: ResponsavelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsavels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsavels.
     */
    skip?: number
    distinct?: ResponsavelScalarFieldEnum | ResponsavelScalarFieldEnum[]
  }

  /**
   * Responsavel create
   */
  export type ResponsavelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * The data needed to create a Responsavel.
     */
    data: XOR<ResponsavelCreateInput, ResponsavelUncheckedCreateInput>
  }

  /**
   * Responsavel createMany
   */
  export type ResponsavelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Responsavels.
     */
    data: ResponsavelCreateManyInput | ResponsavelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Responsavel createManyAndReturn
   */
  export type ResponsavelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * The data used to create many Responsavels.
     */
    data: ResponsavelCreateManyInput | ResponsavelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Responsavel update
   */
  export type ResponsavelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * The data needed to update a Responsavel.
     */
    data: XOR<ResponsavelUpdateInput, ResponsavelUncheckedUpdateInput>
    /**
     * Choose, which Responsavel to update.
     */
    where: ResponsavelWhereUniqueInput
  }

  /**
   * Responsavel updateMany
   */
  export type ResponsavelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Responsavels.
     */
    data: XOR<ResponsavelUpdateManyMutationInput, ResponsavelUncheckedUpdateManyInput>
    /**
     * Filter which Responsavels to update
     */
    where?: ResponsavelWhereInput
    /**
     * Limit how many Responsavels to update.
     */
    limit?: number
  }

  /**
   * Responsavel updateManyAndReturn
   */
  export type ResponsavelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * The data used to update Responsavels.
     */
    data: XOR<ResponsavelUpdateManyMutationInput, ResponsavelUncheckedUpdateManyInput>
    /**
     * Filter which Responsavels to update
     */
    where?: ResponsavelWhereInput
    /**
     * Limit how many Responsavels to update.
     */
    limit?: number
  }

  /**
   * Responsavel upsert
   */
  export type ResponsavelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * The filter to search for the Responsavel to update in case it exists.
     */
    where: ResponsavelWhereUniqueInput
    /**
     * In case the Responsavel found by the `where` argument doesn't exist, create a new Responsavel with this data.
     */
    create: XOR<ResponsavelCreateInput, ResponsavelUncheckedCreateInput>
    /**
     * In case the Responsavel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponsavelUpdateInput, ResponsavelUncheckedUpdateInput>
  }

  /**
   * Responsavel delete
   */
  export type ResponsavelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * Filter which Responsavel to delete.
     */
    where: ResponsavelWhereUniqueInput
  }

  /**
   * Responsavel deleteMany
   */
  export type ResponsavelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responsavels to delete
     */
    where?: ResponsavelWhereInput
    /**
     * Limit how many Responsavels to delete.
     */
    limit?: number
  }

  /**
   * Responsavel.criancas
   */
  export type Responsavel$criancasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crianca
     */
    select?: CriancaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crianca
     */
    omit?: CriancaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriancaInclude<ExtArgs> | null
    where?: CriancaWhereInput
    orderBy?: CriancaOrderByWithRelationInput | CriancaOrderByWithRelationInput[]
    cursor?: CriancaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CriancaScalarFieldEnum | CriancaScalarFieldEnum[]
  }

  /**
   * Responsavel.cestasBasicas
   */
  export type Responsavel$cestasBasicasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaInclude<ExtArgs> | null
    where?: CestaBasicaWhereInput
    orderBy?: CestaBasicaOrderByWithRelationInput | CestaBasicaOrderByWithRelationInput[]
    cursor?: CestaBasicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CestaBasicaScalarFieldEnum | CestaBasicaScalarFieldEnum[]
  }

  /**
   * Responsavel without action
   */
  export type ResponsavelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
  }


  /**
   * Model Voluntario
   */

  export type AggregateVoluntario = {
    _count: VoluntarioCountAggregateOutputType | null
    _avg: VoluntarioAvgAggregateOutputType | null
    _sum: VoluntarioSumAggregateOutputType | null
    _min: VoluntarioMinAggregateOutputType | null
    _max: VoluntarioMaxAggregateOutputType | null
  }

  export type VoluntarioAvgAggregateOutputType = {
    id_voluntario: number | null
  }

  export type VoluntarioSumAggregateOutputType = {
    id_voluntario: number | null
  }

  export type VoluntarioMinAggregateOutputType = {
    id_voluntario: number | null
    nome: string | null
    cpf: string | null
    email: string | null
    telefone: string | null
    disponibilidade: string | null
    area_atuacao: string | null
    respondeu_questionario: boolean | null
    aceitou_termos: boolean | null
  }

  export type VoluntarioMaxAggregateOutputType = {
    id_voluntario: number | null
    nome: string | null
    cpf: string | null
    email: string | null
    telefone: string | null
    disponibilidade: string | null
    area_atuacao: string | null
    respondeu_questionario: boolean | null
    aceitou_termos: boolean | null
  }

  export type VoluntarioCountAggregateOutputType = {
    id_voluntario: number
    nome: number
    cpf: number
    email: number
    telefone: number
    disponibilidade: number
    area_atuacao: number
    respondeu_questionario: number
    aceitou_termos: number
    _all: number
  }


  export type VoluntarioAvgAggregateInputType = {
    id_voluntario?: true
  }

  export type VoluntarioSumAggregateInputType = {
    id_voluntario?: true
  }

  export type VoluntarioMinAggregateInputType = {
    id_voluntario?: true
    nome?: true
    cpf?: true
    email?: true
    telefone?: true
    disponibilidade?: true
    area_atuacao?: true
    respondeu_questionario?: true
    aceitou_termos?: true
  }

  export type VoluntarioMaxAggregateInputType = {
    id_voluntario?: true
    nome?: true
    cpf?: true
    email?: true
    telefone?: true
    disponibilidade?: true
    area_atuacao?: true
    respondeu_questionario?: true
    aceitou_termos?: true
  }

  export type VoluntarioCountAggregateInputType = {
    id_voluntario?: true
    nome?: true
    cpf?: true
    email?: true
    telefone?: true
    disponibilidade?: true
    area_atuacao?: true
    respondeu_questionario?: true
    aceitou_termos?: true
    _all?: true
  }

  export type VoluntarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voluntario to aggregate.
     */
    where?: VoluntarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voluntarios to fetch.
     */
    orderBy?: VoluntarioOrderByWithRelationInput | VoluntarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoluntarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Voluntarios
    **/
    _count?: true | VoluntarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoluntarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoluntarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoluntarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoluntarioMaxAggregateInputType
  }

  export type GetVoluntarioAggregateType<T extends VoluntarioAggregateArgs> = {
        [P in keyof T & keyof AggregateVoluntario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoluntario[P]>
      : GetScalarType<T[P], AggregateVoluntario[P]>
  }




  export type VoluntarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoluntarioWhereInput
    orderBy?: VoluntarioOrderByWithAggregationInput | VoluntarioOrderByWithAggregationInput[]
    by: VoluntarioScalarFieldEnum[] | VoluntarioScalarFieldEnum
    having?: VoluntarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoluntarioCountAggregateInputType | true
    _avg?: VoluntarioAvgAggregateInputType
    _sum?: VoluntarioSumAggregateInputType
    _min?: VoluntarioMinAggregateInputType
    _max?: VoluntarioMaxAggregateInputType
  }

  export type VoluntarioGroupByOutputType = {
    id_voluntario: number
    nome: string
    cpf: string
    email: string
    telefone: string
    disponibilidade: string
    area_atuacao: string
    respondeu_questionario: boolean
    aceitou_termos: boolean
    _count: VoluntarioCountAggregateOutputType | null
    _avg: VoluntarioAvgAggregateOutputType | null
    _sum: VoluntarioSumAggregateOutputType | null
    _min: VoluntarioMinAggregateOutputType | null
    _max: VoluntarioMaxAggregateOutputType | null
  }

  type GetVoluntarioGroupByPayload<T extends VoluntarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoluntarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoluntarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoluntarioGroupByOutputType[P]>
            : GetScalarType<T[P], VoluntarioGroupByOutputType[P]>
        }
      >
    >


  export type VoluntarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_voluntario?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    disponibilidade?: boolean
    area_atuacao?: boolean
    respondeu_questionario?: boolean
    aceitou_termos?: boolean
  }, ExtArgs["result"]["voluntario"]>

  export type VoluntarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_voluntario?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    disponibilidade?: boolean
    area_atuacao?: boolean
    respondeu_questionario?: boolean
    aceitou_termos?: boolean
  }, ExtArgs["result"]["voluntario"]>

  export type VoluntarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_voluntario?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    disponibilidade?: boolean
    area_atuacao?: boolean
    respondeu_questionario?: boolean
    aceitou_termos?: boolean
  }, ExtArgs["result"]["voluntario"]>

  export type VoluntarioSelectScalar = {
    id_voluntario?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    disponibilidade?: boolean
    area_atuacao?: boolean
    respondeu_questionario?: boolean
    aceitou_termos?: boolean
  }

  export type VoluntarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_voluntario" | "nome" | "cpf" | "email" | "telefone" | "disponibilidade" | "area_atuacao" | "respondeu_questionario" | "aceitou_termos", ExtArgs["result"]["voluntario"]>

  export type $VoluntarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voluntario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_voluntario: number
      nome: string
      cpf: string
      email: string
      telefone: string
      disponibilidade: string
      area_atuacao: string
      respondeu_questionario: boolean
      aceitou_termos: boolean
    }, ExtArgs["result"]["voluntario"]>
    composites: {}
  }

  type VoluntarioGetPayload<S extends boolean | null | undefined | VoluntarioDefaultArgs> = $Result.GetResult<Prisma.$VoluntarioPayload, S>

  type VoluntarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoluntarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoluntarioCountAggregateInputType | true
    }

  export interface VoluntarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voluntario'], meta: { name: 'Voluntario' } }
    /**
     * Find zero or one Voluntario that matches the filter.
     * @param {VoluntarioFindUniqueArgs} args - Arguments to find a Voluntario
     * @example
     * // Get one Voluntario
     * const voluntario = await prisma.voluntario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoluntarioFindUniqueArgs>(args: SelectSubset<T, VoluntarioFindUniqueArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voluntario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoluntarioFindUniqueOrThrowArgs} args - Arguments to find a Voluntario
     * @example
     * // Get one Voluntario
     * const voluntario = await prisma.voluntario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoluntarioFindUniqueOrThrowArgs>(args: SelectSubset<T, VoluntarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voluntario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioFindFirstArgs} args - Arguments to find a Voluntario
     * @example
     * // Get one Voluntario
     * const voluntario = await prisma.voluntario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoluntarioFindFirstArgs>(args?: SelectSubset<T, VoluntarioFindFirstArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voluntario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioFindFirstOrThrowArgs} args - Arguments to find a Voluntario
     * @example
     * // Get one Voluntario
     * const voluntario = await prisma.voluntario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoluntarioFindFirstOrThrowArgs>(args?: SelectSubset<T, VoluntarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voluntarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voluntarios
     * const voluntarios = await prisma.voluntario.findMany()
     * 
     * // Get first 10 Voluntarios
     * const voluntarios = await prisma.voluntario.findMany({ take: 10 })
     * 
     * // Only select the `id_voluntario`
     * const voluntarioWithId_voluntarioOnly = await prisma.voluntario.findMany({ select: { id_voluntario: true } })
     * 
     */
    findMany<T extends VoluntarioFindManyArgs>(args?: SelectSubset<T, VoluntarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voluntario.
     * @param {VoluntarioCreateArgs} args - Arguments to create a Voluntario.
     * @example
     * // Create one Voluntario
     * const Voluntario = await prisma.voluntario.create({
     *   data: {
     *     // ... data to create a Voluntario
     *   }
     * })
     * 
     */
    create<T extends VoluntarioCreateArgs>(args: SelectSubset<T, VoluntarioCreateArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voluntarios.
     * @param {VoluntarioCreateManyArgs} args - Arguments to create many Voluntarios.
     * @example
     * // Create many Voluntarios
     * const voluntario = await prisma.voluntario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoluntarioCreateManyArgs>(args?: SelectSubset<T, VoluntarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voluntarios and returns the data saved in the database.
     * @param {VoluntarioCreateManyAndReturnArgs} args - Arguments to create many Voluntarios.
     * @example
     * // Create many Voluntarios
     * const voluntario = await prisma.voluntario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voluntarios and only return the `id_voluntario`
     * const voluntarioWithId_voluntarioOnly = await prisma.voluntario.createManyAndReturn({
     *   select: { id_voluntario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoluntarioCreateManyAndReturnArgs>(args?: SelectSubset<T, VoluntarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voluntario.
     * @param {VoluntarioDeleteArgs} args - Arguments to delete one Voluntario.
     * @example
     * // Delete one Voluntario
     * const Voluntario = await prisma.voluntario.delete({
     *   where: {
     *     // ... filter to delete one Voluntario
     *   }
     * })
     * 
     */
    delete<T extends VoluntarioDeleteArgs>(args: SelectSubset<T, VoluntarioDeleteArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voluntario.
     * @param {VoluntarioUpdateArgs} args - Arguments to update one Voluntario.
     * @example
     * // Update one Voluntario
     * const voluntario = await prisma.voluntario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoluntarioUpdateArgs>(args: SelectSubset<T, VoluntarioUpdateArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voluntarios.
     * @param {VoluntarioDeleteManyArgs} args - Arguments to filter Voluntarios to delete.
     * @example
     * // Delete a few Voluntarios
     * const { count } = await prisma.voluntario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoluntarioDeleteManyArgs>(args?: SelectSubset<T, VoluntarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voluntarios
     * const voluntario = await prisma.voluntario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoluntarioUpdateManyArgs>(args: SelectSubset<T, VoluntarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voluntarios and returns the data updated in the database.
     * @param {VoluntarioUpdateManyAndReturnArgs} args - Arguments to update many Voluntarios.
     * @example
     * // Update many Voluntarios
     * const voluntario = await prisma.voluntario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voluntarios and only return the `id_voluntario`
     * const voluntarioWithId_voluntarioOnly = await prisma.voluntario.updateManyAndReturn({
     *   select: { id_voluntario: true },
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
    updateManyAndReturn<T extends VoluntarioUpdateManyAndReturnArgs>(args: SelectSubset<T, VoluntarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voluntario.
     * @param {VoluntarioUpsertArgs} args - Arguments to update or create a Voluntario.
     * @example
     * // Update or create a Voluntario
     * const voluntario = await prisma.voluntario.upsert({
     *   create: {
     *     // ... data to create a Voluntario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voluntario we want to update
     *   }
     * })
     */
    upsert<T extends VoluntarioUpsertArgs>(args: SelectSubset<T, VoluntarioUpsertArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioCountArgs} args - Arguments to filter Voluntarios to count.
     * @example
     * // Count the number of Voluntarios
     * const count = await prisma.voluntario.count({
     *   where: {
     *     // ... the filter for the Voluntarios we want to count
     *   }
     * })
    **/
    count<T extends VoluntarioCountArgs>(
      args?: Subset<T, VoluntarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoluntarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voluntario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoluntarioAggregateArgs>(args: Subset<T, VoluntarioAggregateArgs>): Prisma.PrismaPromise<GetVoluntarioAggregateType<T>>

    /**
     * Group by Voluntario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioGroupByArgs} args - Group by arguments.
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
      T extends VoluntarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoluntarioGroupByArgs['orderBy'] }
        : { orderBy?: VoluntarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoluntarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoluntarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voluntario model
   */
  readonly fields: VoluntarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voluntario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoluntarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Voluntario model
   */
  interface VoluntarioFieldRefs {
    readonly id_voluntario: FieldRef<"Voluntario", 'Int'>
    readonly nome: FieldRef<"Voluntario", 'String'>
    readonly cpf: FieldRef<"Voluntario", 'String'>
    readonly email: FieldRef<"Voluntario", 'String'>
    readonly telefone: FieldRef<"Voluntario", 'String'>
    readonly disponibilidade: FieldRef<"Voluntario", 'String'>
    readonly area_atuacao: FieldRef<"Voluntario", 'String'>
    readonly respondeu_questionario: FieldRef<"Voluntario", 'Boolean'>
    readonly aceitou_termos: FieldRef<"Voluntario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Voluntario findUnique
   */
  export type VoluntarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Filter, which Voluntario to fetch.
     */
    where: VoluntarioWhereUniqueInput
  }

  /**
   * Voluntario findUniqueOrThrow
   */
  export type VoluntarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Filter, which Voluntario to fetch.
     */
    where: VoluntarioWhereUniqueInput
  }

  /**
   * Voluntario findFirst
   */
  export type VoluntarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Filter, which Voluntario to fetch.
     */
    where?: VoluntarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voluntarios to fetch.
     */
    orderBy?: VoluntarioOrderByWithRelationInput | VoluntarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voluntarios.
     */
    cursor?: VoluntarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voluntarios.
     */
    distinct?: VoluntarioScalarFieldEnum | VoluntarioScalarFieldEnum[]
  }

  /**
   * Voluntario findFirstOrThrow
   */
  export type VoluntarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Filter, which Voluntario to fetch.
     */
    where?: VoluntarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voluntarios to fetch.
     */
    orderBy?: VoluntarioOrderByWithRelationInput | VoluntarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voluntarios.
     */
    cursor?: VoluntarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voluntarios.
     */
    distinct?: VoluntarioScalarFieldEnum | VoluntarioScalarFieldEnum[]
  }

  /**
   * Voluntario findMany
   */
  export type VoluntarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Filter, which Voluntarios to fetch.
     */
    where?: VoluntarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voluntarios to fetch.
     */
    orderBy?: VoluntarioOrderByWithRelationInput | VoluntarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Voluntarios.
     */
    cursor?: VoluntarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voluntarios.
     */
    skip?: number
    distinct?: VoluntarioScalarFieldEnum | VoluntarioScalarFieldEnum[]
  }

  /**
   * Voluntario create
   */
  export type VoluntarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Voluntario.
     */
    data: XOR<VoluntarioCreateInput, VoluntarioUncheckedCreateInput>
  }

  /**
   * Voluntario createMany
   */
  export type VoluntarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Voluntarios.
     */
    data: VoluntarioCreateManyInput | VoluntarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voluntario createManyAndReturn
   */
  export type VoluntarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * The data used to create many Voluntarios.
     */
    data: VoluntarioCreateManyInput | VoluntarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voluntario update
   */
  export type VoluntarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Voluntario.
     */
    data: XOR<VoluntarioUpdateInput, VoluntarioUncheckedUpdateInput>
    /**
     * Choose, which Voluntario to update.
     */
    where: VoluntarioWhereUniqueInput
  }

  /**
   * Voluntario updateMany
   */
  export type VoluntarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Voluntarios.
     */
    data: XOR<VoluntarioUpdateManyMutationInput, VoluntarioUncheckedUpdateManyInput>
    /**
     * Filter which Voluntarios to update
     */
    where?: VoluntarioWhereInput
    /**
     * Limit how many Voluntarios to update.
     */
    limit?: number
  }

  /**
   * Voluntario updateManyAndReturn
   */
  export type VoluntarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * The data used to update Voluntarios.
     */
    data: XOR<VoluntarioUpdateManyMutationInput, VoluntarioUncheckedUpdateManyInput>
    /**
     * Filter which Voluntarios to update
     */
    where?: VoluntarioWhereInput
    /**
     * Limit how many Voluntarios to update.
     */
    limit?: number
  }

  /**
   * Voluntario upsert
   */
  export type VoluntarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Voluntario to update in case it exists.
     */
    where: VoluntarioWhereUniqueInput
    /**
     * In case the Voluntario found by the `where` argument doesn't exist, create a new Voluntario with this data.
     */
    create: XOR<VoluntarioCreateInput, VoluntarioUncheckedCreateInput>
    /**
     * In case the Voluntario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoluntarioUpdateInput, VoluntarioUncheckedUpdateInput>
  }

  /**
   * Voluntario delete
   */
  export type VoluntarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Filter which Voluntario to delete.
     */
    where: VoluntarioWhereUniqueInput
  }

  /**
   * Voluntario deleteMany
   */
  export type VoluntarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voluntarios to delete
     */
    where?: VoluntarioWhereInput
    /**
     * Limit how many Voluntarios to delete.
     */
    limit?: number
  }

  /**
   * Voluntario without action
   */
  export type VoluntarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
  }


  /**
   * Model Parceiro
   */

  export type AggregateParceiro = {
    _count: ParceiroCountAggregateOutputType | null
    _avg: ParceiroAvgAggregateOutputType | null
    _sum: ParceiroSumAggregateOutputType | null
    _min: ParceiroMinAggregateOutputType | null
    _max: ParceiroMaxAggregateOutputType | null
  }

  export type ParceiroAvgAggregateOutputType = {
    id_parceiro: number | null
  }

  export type ParceiroSumAggregateOutputType = {
    id_parceiro: number | null
  }

  export type ParceiroMinAggregateOutputType = {
    id_parceiro: number | null
    nome: string | null
    tipo: string | null
    email: string | null
    telefone: string | null
    contribuicao: string | null
  }

  export type ParceiroMaxAggregateOutputType = {
    id_parceiro: number | null
    nome: string | null
    tipo: string | null
    email: string | null
    telefone: string | null
    contribuicao: string | null
  }

  export type ParceiroCountAggregateOutputType = {
    id_parceiro: number
    nome: number
    tipo: number
    email: number
    telefone: number
    contribuicao: number
    _all: number
  }


  export type ParceiroAvgAggregateInputType = {
    id_parceiro?: true
  }

  export type ParceiroSumAggregateInputType = {
    id_parceiro?: true
  }

  export type ParceiroMinAggregateInputType = {
    id_parceiro?: true
    nome?: true
    tipo?: true
    email?: true
    telefone?: true
    contribuicao?: true
  }

  export type ParceiroMaxAggregateInputType = {
    id_parceiro?: true
    nome?: true
    tipo?: true
    email?: true
    telefone?: true
    contribuicao?: true
  }

  export type ParceiroCountAggregateInputType = {
    id_parceiro?: true
    nome?: true
    tipo?: true
    email?: true
    telefone?: true
    contribuicao?: true
    _all?: true
  }

  export type ParceiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parceiro to aggregate.
     */
    where?: ParceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parceiros to fetch.
     */
    orderBy?: ParceiroOrderByWithRelationInput | ParceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parceiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parceiros
    **/
    _count?: true | ParceiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParceiroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParceiroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParceiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParceiroMaxAggregateInputType
  }

  export type GetParceiroAggregateType<T extends ParceiroAggregateArgs> = {
        [P in keyof T & keyof AggregateParceiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParceiro[P]>
      : GetScalarType<T[P], AggregateParceiro[P]>
  }




  export type ParceiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParceiroWhereInput
    orderBy?: ParceiroOrderByWithAggregationInput | ParceiroOrderByWithAggregationInput[]
    by: ParceiroScalarFieldEnum[] | ParceiroScalarFieldEnum
    having?: ParceiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParceiroCountAggregateInputType | true
    _avg?: ParceiroAvgAggregateInputType
    _sum?: ParceiroSumAggregateInputType
    _min?: ParceiroMinAggregateInputType
    _max?: ParceiroMaxAggregateInputType
  }

  export type ParceiroGroupByOutputType = {
    id_parceiro: number
    nome: string
    tipo: string
    email: string
    telefone: string
    contribuicao: string
    _count: ParceiroCountAggregateOutputType | null
    _avg: ParceiroAvgAggregateOutputType | null
    _sum: ParceiroSumAggregateOutputType | null
    _min: ParceiroMinAggregateOutputType | null
    _max: ParceiroMaxAggregateOutputType | null
  }

  type GetParceiroGroupByPayload<T extends ParceiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParceiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParceiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParceiroGroupByOutputType[P]>
            : GetScalarType<T[P], ParceiroGroupByOutputType[P]>
        }
      >
    >


  export type ParceiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_parceiro?: boolean
    nome?: boolean
    tipo?: boolean
    email?: boolean
    telefone?: boolean
    contribuicao?: boolean
  }, ExtArgs["result"]["parceiro"]>

  export type ParceiroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_parceiro?: boolean
    nome?: boolean
    tipo?: boolean
    email?: boolean
    telefone?: boolean
    contribuicao?: boolean
  }, ExtArgs["result"]["parceiro"]>

  export type ParceiroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_parceiro?: boolean
    nome?: boolean
    tipo?: boolean
    email?: boolean
    telefone?: boolean
    contribuicao?: boolean
  }, ExtArgs["result"]["parceiro"]>

  export type ParceiroSelectScalar = {
    id_parceiro?: boolean
    nome?: boolean
    tipo?: boolean
    email?: boolean
    telefone?: boolean
    contribuicao?: boolean
  }

  export type ParceiroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_parceiro" | "nome" | "tipo" | "email" | "telefone" | "contribuicao", ExtArgs["result"]["parceiro"]>

  export type $ParceiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parceiro"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_parceiro: number
      nome: string
      tipo: string
      email: string
      telefone: string
      contribuicao: string
    }, ExtArgs["result"]["parceiro"]>
    composites: {}
  }

  type ParceiroGetPayload<S extends boolean | null | undefined | ParceiroDefaultArgs> = $Result.GetResult<Prisma.$ParceiroPayload, S>

  type ParceiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParceiroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParceiroCountAggregateInputType | true
    }

  export interface ParceiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parceiro'], meta: { name: 'Parceiro' } }
    /**
     * Find zero or one Parceiro that matches the filter.
     * @param {ParceiroFindUniqueArgs} args - Arguments to find a Parceiro
     * @example
     * // Get one Parceiro
     * const parceiro = await prisma.parceiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParceiroFindUniqueArgs>(args: SelectSubset<T, ParceiroFindUniqueArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parceiro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParceiroFindUniqueOrThrowArgs} args - Arguments to find a Parceiro
     * @example
     * // Get one Parceiro
     * const parceiro = await prisma.parceiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParceiroFindUniqueOrThrowArgs>(args: SelectSubset<T, ParceiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parceiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroFindFirstArgs} args - Arguments to find a Parceiro
     * @example
     * // Get one Parceiro
     * const parceiro = await prisma.parceiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParceiroFindFirstArgs>(args?: SelectSubset<T, ParceiroFindFirstArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parceiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroFindFirstOrThrowArgs} args - Arguments to find a Parceiro
     * @example
     * // Get one Parceiro
     * const parceiro = await prisma.parceiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParceiroFindFirstOrThrowArgs>(args?: SelectSubset<T, ParceiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parceiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parceiros
     * const parceiros = await prisma.parceiro.findMany()
     * 
     * // Get first 10 Parceiros
     * const parceiros = await prisma.parceiro.findMany({ take: 10 })
     * 
     * // Only select the `id_parceiro`
     * const parceiroWithId_parceiroOnly = await prisma.parceiro.findMany({ select: { id_parceiro: true } })
     * 
     */
    findMany<T extends ParceiroFindManyArgs>(args?: SelectSubset<T, ParceiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parceiro.
     * @param {ParceiroCreateArgs} args - Arguments to create a Parceiro.
     * @example
     * // Create one Parceiro
     * const Parceiro = await prisma.parceiro.create({
     *   data: {
     *     // ... data to create a Parceiro
     *   }
     * })
     * 
     */
    create<T extends ParceiroCreateArgs>(args: SelectSubset<T, ParceiroCreateArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parceiros.
     * @param {ParceiroCreateManyArgs} args - Arguments to create many Parceiros.
     * @example
     * // Create many Parceiros
     * const parceiro = await prisma.parceiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParceiroCreateManyArgs>(args?: SelectSubset<T, ParceiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parceiros and returns the data saved in the database.
     * @param {ParceiroCreateManyAndReturnArgs} args - Arguments to create many Parceiros.
     * @example
     * // Create many Parceiros
     * const parceiro = await prisma.parceiro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parceiros and only return the `id_parceiro`
     * const parceiroWithId_parceiroOnly = await prisma.parceiro.createManyAndReturn({
     *   select: { id_parceiro: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParceiroCreateManyAndReturnArgs>(args?: SelectSubset<T, ParceiroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parceiro.
     * @param {ParceiroDeleteArgs} args - Arguments to delete one Parceiro.
     * @example
     * // Delete one Parceiro
     * const Parceiro = await prisma.parceiro.delete({
     *   where: {
     *     // ... filter to delete one Parceiro
     *   }
     * })
     * 
     */
    delete<T extends ParceiroDeleteArgs>(args: SelectSubset<T, ParceiroDeleteArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parceiro.
     * @param {ParceiroUpdateArgs} args - Arguments to update one Parceiro.
     * @example
     * // Update one Parceiro
     * const parceiro = await prisma.parceiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParceiroUpdateArgs>(args: SelectSubset<T, ParceiroUpdateArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parceiros.
     * @param {ParceiroDeleteManyArgs} args - Arguments to filter Parceiros to delete.
     * @example
     * // Delete a few Parceiros
     * const { count } = await prisma.parceiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParceiroDeleteManyArgs>(args?: SelectSubset<T, ParceiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parceiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parceiros
     * const parceiro = await prisma.parceiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParceiroUpdateManyArgs>(args: SelectSubset<T, ParceiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parceiros and returns the data updated in the database.
     * @param {ParceiroUpdateManyAndReturnArgs} args - Arguments to update many Parceiros.
     * @example
     * // Update many Parceiros
     * const parceiro = await prisma.parceiro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parceiros and only return the `id_parceiro`
     * const parceiroWithId_parceiroOnly = await prisma.parceiro.updateManyAndReturn({
     *   select: { id_parceiro: true },
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
    updateManyAndReturn<T extends ParceiroUpdateManyAndReturnArgs>(args: SelectSubset<T, ParceiroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parceiro.
     * @param {ParceiroUpsertArgs} args - Arguments to update or create a Parceiro.
     * @example
     * // Update or create a Parceiro
     * const parceiro = await prisma.parceiro.upsert({
     *   create: {
     *     // ... data to create a Parceiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parceiro we want to update
     *   }
     * })
     */
    upsert<T extends ParceiroUpsertArgs>(args: SelectSubset<T, ParceiroUpsertArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parceiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroCountArgs} args - Arguments to filter Parceiros to count.
     * @example
     * // Count the number of Parceiros
     * const count = await prisma.parceiro.count({
     *   where: {
     *     // ... the filter for the Parceiros we want to count
     *   }
     * })
    **/
    count<T extends ParceiroCountArgs>(
      args?: Subset<T, ParceiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParceiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parceiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParceiroAggregateArgs>(args: Subset<T, ParceiroAggregateArgs>): Prisma.PrismaPromise<GetParceiroAggregateType<T>>

    /**
     * Group by Parceiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroGroupByArgs} args - Group by arguments.
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
      T extends ParceiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParceiroGroupByArgs['orderBy'] }
        : { orderBy?: ParceiroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParceiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParceiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parceiro model
   */
  readonly fields: ParceiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parceiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParceiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Parceiro model
   */
  interface ParceiroFieldRefs {
    readonly id_parceiro: FieldRef<"Parceiro", 'Int'>
    readonly nome: FieldRef<"Parceiro", 'String'>
    readonly tipo: FieldRef<"Parceiro", 'String'>
    readonly email: FieldRef<"Parceiro", 'String'>
    readonly telefone: FieldRef<"Parceiro", 'String'>
    readonly contribuicao: FieldRef<"Parceiro", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Parceiro findUnique
   */
  export type ParceiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceiro
     */
    omit?: ParceiroOmit<ExtArgs> | null
    /**
     * Filter, which Parceiro to fetch.
     */
    where: ParceiroWhereUniqueInput
  }

  /**
   * Parceiro findUniqueOrThrow
   */
  export type ParceiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceiro
     */
    omit?: ParceiroOmit<ExtArgs> | null
    /**
     * Filter, which Parceiro to fetch.
     */
    where: ParceiroWhereUniqueInput
  }

  /**
   * Parceiro findFirst
   */
  export type ParceiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceiro
     */
    omit?: ParceiroOmit<ExtArgs> | null
    /**
     * Filter, which Parceiro to fetch.
     */
    where?: ParceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parceiros to fetch.
     */
    orderBy?: ParceiroOrderByWithRelationInput | ParceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parceiros.
     */
    cursor?: ParceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parceiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parceiros.
     */
    distinct?: ParceiroScalarFieldEnum | ParceiroScalarFieldEnum[]
  }

  /**
   * Parceiro findFirstOrThrow
   */
  export type ParceiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceiro
     */
    omit?: ParceiroOmit<ExtArgs> | null
    /**
     * Filter, which Parceiro to fetch.
     */
    where?: ParceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parceiros to fetch.
     */
    orderBy?: ParceiroOrderByWithRelationInput | ParceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parceiros.
     */
    cursor?: ParceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parceiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parceiros.
     */
    distinct?: ParceiroScalarFieldEnum | ParceiroScalarFieldEnum[]
  }

  /**
   * Parceiro findMany
   */
  export type ParceiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceiro
     */
    omit?: ParceiroOmit<ExtArgs> | null
    /**
     * Filter, which Parceiros to fetch.
     */
    where?: ParceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parceiros to fetch.
     */
    orderBy?: ParceiroOrderByWithRelationInput | ParceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parceiros.
     */
    cursor?: ParceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parceiros.
     */
    skip?: number
    distinct?: ParceiroScalarFieldEnum | ParceiroScalarFieldEnum[]
  }

  /**
   * Parceiro create
   */
  export type ParceiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceiro
     */
    omit?: ParceiroOmit<ExtArgs> | null
    /**
     * The data needed to create a Parceiro.
     */
    data: XOR<ParceiroCreateInput, ParceiroUncheckedCreateInput>
  }

  /**
   * Parceiro createMany
   */
  export type ParceiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parceiros.
     */
    data: ParceiroCreateManyInput | ParceiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parceiro createManyAndReturn
   */
  export type ParceiroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parceiro
     */
    omit?: ParceiroOmit<ExtArgs> | null
    /**
     * The data used to create many Parceiros.
     */
    data: ParceiroCreateManyInput | ParceiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parceiro update
   */
  export type ParceiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceiro
     */
    omit?: ParceiroOmit<ExtArgs> | null
    /**
     * The data needed to update a Parceiro.
     */
    data: XOR<ParceiroUpdateInput, ParceiroUncheckedUpdateInput>
    /**
     * Choose, which Parceiro to update.
     */
    where: ParceiroWhereUniqueInput
  }

  /**
   * Parceiro updateMany
   */
  export type ParceiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parceiros.
     */
    data: XOR<ParceiroUpdateManyMutationInput, ParceiroUncheckedUpdateManyInput>
    /**
     * Filter which Parceiros to update
     */
    where?: ParceiroWhereInput
    /**
     * Limit how many Parceiros to update.
     */
    limit?: number
  }

  /**
   * Parceiro updateManyAndReturn
   */
  export type ParceiroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parceiro
     */
    omit?: ParceiroOmit<ExtArgs> | null
    /**
     * The data used to update Parceiros.
     */
    data: XOR<ParceiroUpdateManyMutationInput, ParceiroUncheckedUpdateManyInput>
    /**
     * Filter which Parceiros to update
     */
    where?: ParceiroWhereInput
    /**
     * Limit how many Parceiros to update.
     */
    limit?: number
  }

  /**
   * Parceiro upsert
   */
  export type ParceiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceiro
     */
    omit?: ParceiroOmit<ExtArgs> | null
    /**
     * The filter to search for the Parceiro to update in case it exists.
     */
    where: ParceiroWhereUniqueInput
    /**
     * In case the Parceiro found by the `where` argument doesn't exist, create a new Parceiro with this data.
     */
    create: XOR<ParceiroCreateInput, ParceiroUncheckedCreateInput>
    /**
     * In case the Parceiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParceiroUpdateInput, ParceiroUncheckedUpdateInput>
  }

  /**
   * Parceiro delete
   */
  export type ParceiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceiro
     */
    omit?: ParceiroOmit<ExtArgs> | null
    /**
     * Filter which Parceiro to delete.
     */
    where: ParceiroWhereUniqueInput
  }

  /**
   * Parceiro deleteMany
   */
  export type ParceiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parceiros to delete
     */
    where?: ParceiroWhereInput
    /**
     * Limit how many Parceiros to delete.
     */
    limit?: number
  }

  /**
   * Parceiro without action
   */
  export type ParceiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceiro
     */
    omit?: ParceiroOmit<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nome: string | null
    email: string | null
    senha: string | null
    perfil: $Enums.TipoUsuario | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nome: string | null
    email: string | null
    senha: string | null
    perfil: $Enums.TipoUsuario | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nome: number
    email: number
    senha: number
    perfil: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha?: true
    perfil?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha?: true
    perfil?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha?: true
    perfil?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nome: string
    email: string
    senha: string
    perfil: $Enums.TipoUsuario
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    perfil?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    perfil?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    perfil?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    perfil?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nome" | "email" | "senha" | "perfil", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nome: string
      email: string
      senha: string
      perfil: $Enums.TipoUsuario
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly perfil: FieldRef<"Usuario", 'TipoUsuario'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Frequencia
   */

  export type AggregateFrequencia = {
    _count: FrequenciaCountAggregateOutputType | null
    _avg: FrequenciaAvgAggregateOutputType | null
    _sum: FrequenciaSumAggregateOutputType | null
    _min: FrequenciaMinAggregateOutputType | null
    _max: FrequenciaMaxAggregateOutputType | null
  }

  export type FrequenciaAvgAggregateOutputType = {
    id_frequencia: number | null
    id_crianca: number | null
  }

  export type FrequenciaSumAggregateOutputType = {
    id_frequencia: number | null
    id_crianca: number | null
  }

  export type FrequenciaMinAggregateOutputType = {
    id_frequencia: number | null
    id_crianca: number | null
    atividade: string | null
    data: Date | null
    presenca: boolean | null
  }

  export type FrequenciaMaxAggregateOutputType = {
    id_frequencia: number | null
    id_crianca: number | null
    atividade: string | null
    data: Date | null
    presenca: boolean | null
  }

  export type FrequenciaCountAggregateOutputType = {
    id_frequencia: number
    id_crianca: number
    atividade: number
    data: number
    presenca: number
    _all: number
  }


  export type FrequenciaAvgAggregateInputType = {
    id_frequencia?: true
    id_crianca?: true
  }

  export type FrequenciaSumAggregateInputType = {
    id_frequencia?: true
    id_crianca?: true
  }

  export type FrequenciaMinAggregateInputType = {
    id_frequencia?: true
    id_crianca?: true
    atividade?: true
    data?: true
    presenca?: true
  }

  export type FrequenciaMaxAggregateInputType = {
    id_frequencia?: true
    id_crianca?: true
    atividade?: true
    data?: true
    presenca?: true
  }

  export type FrequenciaCountAggregateInputType = {
    id_frequencia?: true
    id_crianca?: true
    atividade?: true
    data?: true
    presenca?: true
    _all?: true
  }

  export type FrequenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frequencia to aggregate.
     */
    where?: FrequenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frequencias to fetch.
     */
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FrequenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frequencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frequencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Frequencias
    **/
    _count?: true | FrequenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FrequenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FrequenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FrequenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FrequenciaMaxAggregateInputType
  }

  export type GetFrequenciaAggregateType<T extends FrequenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateFrequencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFrequencia[P]>
      : GetScalarType<T[P], AggregateFrequencia[P]>
  }




  export type FrequenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequenciaWhereInput
    orderBy?: FrequenciaOrderByWithAggregationInput | FrequenciaOrderByWithAggregationInput[]
    by: FrequenciaScalarFieldEnum[] | FrequenciaScalarFieldEnum
    having?: FrequenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FrequenciaCountAggregateInputType | true
    _avg?: FrequenciaAvgAggregateInputType
    _sum?: FrequenciaSumAggregateInputType
    _min?: FrequenciaMinAggregateInputType
    _max?: FrequenciaMaxAggregateInputType
  }

  export type FrequenciaGroupByOutputType = {
    id_frequencia: number
    id_crianca: number
    atividade: string
    data: Date
    presenca: boolean
    _count: FrequenciaCountAggregateOutputType | null
    _avg: FrequenciaAvgAggregateOutputType | null
    _sum: FrequenciaSumAggregateOutputType | null
    _min: FrequenciaMinAggregateOutputType | null
    _max: FrequenciaMaxAggregateOutputType | null
  }

  type GetFrequenciaGroupByPayload<T extends FrequenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FrequenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FrequenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FrequenciaGroupByOutputType[P]>
            : GetScalarType<T[P], FrequenciaGroupByOutputType[P]>
        }
      >
    >


  export type FrequenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_frequencia?: boolean
    id_crianca?: boolean
    atividade?: boolean
    data?: boolean
    presenca?: boolean
    crianca?: boolean | CriancaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frequencia"]>

  export type FrequenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_frequencia?: boolean
    id_crianca?: boolean
    atividade?: boolean
    data?: boolean
    presenca?: boolean
    crianca?: boolean | CriancaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frequencia"]>

  export type FrequenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_frequencia?: boolean
    id_crianca?: boolean
    atividade?: boolean
    data?: boolean
    presenca?: boolean
    crianca?: boolean | CriancaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frequencia"]>

  export type FrequenciaSelectScalar = {
    id_frequencia?: boolean
    id_crianca?: boolean
    atividade?: boolean
    data?: boolean
    presenca?: boolean
  }

  export type FrequenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_frequencia" | "id_crianca" | "atividade" | "data" | "presenca", ExtArgs["result"]["frequencia"]>
  export type FrequenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crianca?: boolean | CriancaDefaultArgs<ExtArgs>
  }
  export type FrequenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crianca?: boolean | CriancaDefaultArgs<ExtArgs>
  }
  export type FrequenciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crianca?: boolean | CriancaDefaultArgs<ExtArgs>
  }

  export type $FrequenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Frequencia"
    objects: {
      crianca: Prisma.$CriancaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_frequencia: number
      id_crianca: number
      atividade: string
      data: Date
      presenca: boolean
    }, ExtArgs["result"]["frequencia"]>
    composites: {}
  }

  type FrequenciaGetPayload<S extends boolean | null | undefined | FrequenciaDefaultArgs> = $Result.GetResult<Prisma.$FrequenciaPayload, S>

  type FrequenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FrequenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FrequenciaCountAggregateInputType | true
    }

  export interface FrequenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Frequencia'], meta: { name: 'Frequencia' } }
    /**
     * Find zero or one Frequencia that matches the filter.
     * @param {FrequenciaFindUniqueArgs} args - Arguments to find a Frequencia
     * @example
     * // Get one Frequencia
     * const frequencia = await prisma.frequencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrequenciaFindUniqueArgs>(args: SelectSubset<T, FrequenciaFindUniqueArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Frequencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FrequenciaFindUniqueOrThrowArgs} args - Arguments to find a Frequencia
     * @example
     * // Get one Frequencia
     * const frequencia = await prisma.frequencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrequenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, FrequenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Frequencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaFindFirstArgs} args - Arguments to find a Frequencia
     * @example
     * // Get one Frequencia
     * const frequencia = await prisma.frequencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrequenciaFindFirstArgs>(args?: SelectSubset<T, FrequenciaFindFirstArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Frequencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaFindFirstOrThrowArgs} args - Arguments to find a Frequencia
     * @example
     * // Get one Frequencia
     * const frequencia = await prisma.frequencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrequenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, FrequenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Frequencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Frequencias
     * const frequencias = await prisma.frequencia.findMany()
     * 
     * // Get first 10 Frequencias
     * const frequencias = await prisma.frequencia.findMany({ take: 10 })
     * 
     * // Only select the `id_frequencia`
     * const frequenciaWithId_frequenciaOnly = await prisma.frequencia.findMany({ select: { id_frequencia: true } })
     * 
     */
    findMany<T extends FrequenciaFindManyArgs>(args?: SelectSubset<T, FrequenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Frequencia.
     * @param {FrequenciaCreateArgs} args - Arguments to create a Frequencia.
     * @example
     * // Create one Frequencia
     * const Frequencia = await prisma.frequencia.create({
     *   data: {
     *     // ... data to create a Frequencia
     *   }
     * })
     * 
     */
    create<T extends FrequenciaCreateArgs>(args: SelectSubset<T, FrequenciaCreateArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Frequencias.
     * @param {FrequenciaCreateManyArgs} args - Arguments to create many Frequencias.
     * @example
     * // Create many Frequencias
     * const frequencia = await prisma.frequencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FrequenciaCreateManyArgs>(args?: SelectSubset<T, FrequenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Frequencias and returns the data saved in the database.
     * @param {FrequenciaCreateManyAndReturnArgs} args - Arguments to create many Frequencias.
     * @example
     * // Create many Frequencias
     * const frequencia = await prisma.frequencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Frequencias and only return the `id_frequencia`
     * const frequenciaWithId_frequenciaOnly = await prisma.frequencia.createManyAndReturn({
     *   select: { id_frequencia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FrequenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, FrequenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Frequencia.
     * @param {FrequenciaDeleteArgs} args - Arguments to delete one Frequencia.
     * @example
     * // Delete one Frequencia
     * const Frequencia = await prisma.frequencia.delete({
     *   where: {
     *     // ... filter to delete one Frequencia
     *   }
     * })
     * 
     */
    delete<T extends FrequenciaDeleteArgs>(args: SelectSubset<T, FrequenciaDeleteArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Frequencia.
     * @param {FrequenciaUpdateArgs} args - Arguments to update one Frequencia.
     * @example
     * // Update one Frequencia
     * const frequencia = await prisma.frequencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FrequenciaUpdateArgs>(args: SelectSubset<T, FrequenciaUpdateArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Frequencias.
     * @param {FrequenciaDeleteManyArgs} args - Arguments to filter Frequencias to delete.
     * @example
     * // Delete a few Frequencias
     * const { count } = await prisma.frequencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FrequenciaDeleteManyArgs>(args?: SelectSubset<T, FrequenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frequencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Frequencias
     * const frequencia = await prisma.frequencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FrequenciaUpdateManyArgs>(args: SelectSubset<T, FrequenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frequencias and returns the data updated in the database.
     * @param {FrequenciaUpdateManyAndReturnArgs} args - Arguments to update many Frequencias.
     * @example
     * // Update many Frequencias
     * const frequencia = await prisma.frequencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Frequencias and only return the `id_frequencia`
     * const frequenciaWithId_frequenciaOnly = await prisma.frequencia.updateManyAndReturn({
     *   select: { id_frequencia: true },
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
    updateManyAndReturn<T extends FrequenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, FrequenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Frequencia.
     * @param {FrequenciaUpsertArgs} args - Arguments to update or create a Frequencia.
     * @example
     * // Update or create a Frequencia
     * const frequencia = await prisma.frequencia.upsert({
     *   create: {
     *     // ... data to create a Frequencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Frequencia we want to update
     *   }
     * })
     */
    upsert<T extends FrequenciaUpsertArgs>(args: SelectSubset<T, FrequenciaUpsertArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Frequencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaCountArgs} args - Arguments to filter Frequencias to count.
     * @example
     * // Count the number of Frequencias
     * const count = await prisma.frequencia.count({
     *   where: {
     *     // ... the filter for the Frequencias we want to count
     *   }
     * })
    **/
    count<T extends FrequenciaCountArgs>(
      args?: Subset<T, FrequenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FrequenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Frequencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FrequenciaAggregateArgs>(args: Subset<T, FrequenciaAggregateArgs>): Prisma.PrismaPromise<GetFrequenciaAggregateType<T>>

    /**
     * Group by Frequencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaGroupByArgs} args - Group by arguments.
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
      T extends FrequenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FrequenciaGroupByArgs['orderBy'] }
        : { orderBy?: FrequenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FrequenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrequenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Frequencia model
   */
  readonly fields: FrequenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Frequencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FrequenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crianca<T extends CriancaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CriancaDefaultArgs<ExtArgs>>): Prisma__CriancaClient<$Result.GetResult<Prisma.$CriancaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Frequencia model
   */
  interface FrequenciaFieldRefs {
    readonly id_frequencia: FieldRef<"Frequencia", 'Int'>
    readonly id_crianca: FieldRef<"Frequencia", 'Int'>
    readonly atividade: FieldRef<"Frequencia", 'String'>
    readonly data: FieldRef<"Frequencia", 'DateTime'>
    readonly presenca: FieldRef<"Frequencia", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Frequencia findUnique
   */
  export type FrequenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frequencia to fetch.
     */
    where: FrequenciaWhereUniqueInput
  }

  /**
   * Frequencia findUniqueOrThrow
   */
  export type FrequenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frequencia to fetch.
     */
    where: FrequenciaWhereUniqueInput
  }

  /**
   * Frequencia findFirst
   */
  export type FrequenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frequencia to fetch.
     */
    where?: FrequenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frequencias to fetch.
     */
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frequencias.
     */
    cursor?: FrequenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frequencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frequencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frequencias.
     */
    distinct?: FrequenciaScalarFieldEnum | FrequenciaScalarFieldEnum[]
  }

  /**
   * Frequencia findFirstOrThrow
   */
  export type FrequenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frequencia to fetch.
     */
    where?: FrequenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frequencias to fetch.
     */
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frequencias.
     */
    cursor?: FrequenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frequencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frequencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frequencias.
     */
    distinct?: FrequenciaScalarFieldEnum | FrequenciaScalarFieldEnum[]
  }

  /**
   * Frequencia findMany
   */
  export type FrequenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frequencias to fetch.
     */
    where?: FrequenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frequencias to fetch.
     */
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Frequencias.
     */
    cursor?: FrequenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frequencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frequencias.
     */
    skip?: number
    distinct?: FrequenciaScalarFieldEnum | FrequenciaScalarFieldEnum[]
  }

  /**
   * Frequencia create
   */
  export type FrequenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Frequencia.
     */
    data: XOR<FrequenciaCreateInput, FrequenciaUncheckedCreateInput>
  }

  /**
   * Frequencia createMany
   */
  export type FrequenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Frequencias.
     */
    data: FrequenciaCreateManyInput | FrequenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Frequencia createManyAndReturn
   */
  export type FrequenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * The data used to create many Frequencias.
     */
    data: FrequenciaCreateManyInput | FrequenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Frequencia update
   */
  export type FrequenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Frequencia.
     */
    data: XOR<FrequenciaUpdateInput, FrequenciaUncheckedUpdateInput>
    /**
     * Choose, which Frequencia to update.
     */
    where: FrequenciaWhereUniqueInput
  }

  /**
   * Frequencia updateMany
   */
  export type FrequenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Frequencias.
     */
    data: XOR<FrequenciaUpdateManyMutationInput, FrequenciaUncheckedUpdateManyInput>
    /**
     * Filter which Frequencias to update
     */
    where?: FrequenciaWhereInput
    /**
     * Limit how many Frequencias to update.
     */
    limit?: number
  }

  /**
   * Frequencia updateManyAndReturn
   */
  export type FrequenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * The data used to update Frequencias.
     */
    data: XOR<FrequenciaUpdateManyMutationInput, FrequenciaUncheckedUpdateManyInput>
    /**
     * Filter which Frequencias to update
     */
    where?: FrequenciaWhereInput
    /**
     * Limit how many Frequencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Frequencia upsert
   */
  export type FrequenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Frequencia to update in case it exists.
     */
    where: FrequenciaWhereUniqueInput
    /**
     * In case the Frequencia found by the `where` argument doesn't exist, create a new Frequencia with this data.
     */
    create: XOR<FrequenciaCreateInput, FrequenciaUncheckedCreateInput>
    /**
     * In case the Frequencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FrequenciaUpdateInput, FrequenciaUncheckedUpdateInput>
  }

  /**
   * Frequencia delete
   */
  export type FrequenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
    /**
     * Filter which Frequencia to delete.
     */
    where: FrequenciaWhereUniqueInput
  }

  /**
   * Frequencia deleteMany
   */
  export type FrequenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frequencias to delete
     */
    where?: FrequenciaWhereInput
    /**
     * Limit how many Frequencias to delete.
     */
    limit?: number
  }

  /**
   * Frequencia without action
   */
  export type FrequenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrequenciaInclude<ExtArgs> | null
  }


  /**
   * Model CestaBasica
   */

  export type AggregateCestaBasica = {
    _count: CestaBasicaCountAggregateOutputType | null
    _avg: CestaBasicaAvgAggregateOutputType | null
    _sum: CestaBasicaSumAggregateOutputType | null
    _min: CestaBasicaMinAggregateOutputType | null
    _max: CestaBasicaMaxAggregateOutputType | null
  }

  export type CestaBasicaAvgAggregateOutputType = {
    id_cesta: number | null
    id_responsavel: number | null
    quantidade: number | null
  }

  export type CestaBasicaSumAggregateOutputType = {
    id_cesta: number | null
    id_responsavel: number | null
    quantidade: number | null
  }

  export type CestaBasicaMinAggregateOutputType = {
    id_cesta: number | null
    id_responsavel: number | null
    data_entrega: Date | null
    quantidade: number | null
    observacoes: string | null
  }

  export type CestaBasicaMaxAggregateOutputType = {
    id_cesta: number | null
    id_responsavel: number | null
    data_entrega: Date | null
    quantidade: number | null
    observacoes: string | null
  }

  export type CestaBasicaCountAggregateOutputType = {
    id_cesta: number
    id_responsavel: number
    data_entrega: number
    quantidade: number
    observacoes: number
    _all: number
  }


  export type CestaBasicaAvgAggregateInputType = {
    id_cesta?: true
    id_responsavel?: true
    quantidade?: true
  }

  export type CestaBasicaSumAggregateInputType = {
    id_cesta?: true
    id_responsavel?: true
    quantidade?: true
  }

  export type CestaBasicaMinAggregateInputType = {
    id_cesta?: true
    id_responsavel?: true
    data_entrega?: true
    quantidade?: true
    observacoes?: true
  }

  export type CestaBasicaMaxAggregateInputType = {
    id_cesta?: true
    id_responsavel?: true
    data_entrega?: true
    quantidade?: true
    observacoes?: true
  }

  export type CestaBasicaCountAggregateInputType = {
    id_cesta?: true
    id_responsavel?: true
    data_entrega?: true
    quantidade?: true
    observacoes?: true
    _all?: true
  }

  export type CestaBasicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CestaBasica to aggregate.
     */
    where?: CestaBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CestaBasicas to fetch.
     */
    orderBy?: CestaBasicaOrderByWithRelationInput | CestaBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CestaBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CestaBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CestaBasicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CestaBasicas
    **/
    _count?: true | CestaBasicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CestaBasicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CestaBasicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CestaBasicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CestaBasicaMaxAggregateInputType
  }

  export type GetCestaBasicaAggregateType<T extends CestaBasicaAggregateArgs> = {
        [P in keyof T & keyof AggregateCestaBasica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCestaBasica[P]>
      : GetScalarType<T[P], AggregateCestaBasica[P]>
  }




  export type CestaBasicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CestaBasicaWhereInput
    orderBy?: CestaBasicaOrderByWithAggregationInput | CestaBasicaOrderByWithAggregationInput[]
    by: CestaBasicaScalarFieldEnum[] | CestaBasicaScalarFieldEnum
    having?: CestaBasicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CestaBasicaCountAggregateInputType | true
    _avg?: CestaBasicaAvgAggregateInputType
    _sum?: CestaBasicaSumAggregateInputType
    _min?: CestaBasicaMinAggregateInputType
    _max?: CestaBasicaMaxAggregateInputType
  }

  export type CestaBasicaGroupByOutputType = {
    id_cesta: number
    id_responsavel: number
    data_entrega: Date
    quantidade: number
    observacoes: string
    _count: CestaBasicaCountAggregateOutputType | null
    _avg: CestaBasicaAvgAggregateOutputType | null
    _sum: CestaBasicaSumAggregateOutputType | null
    _min: CestaBasicaMinAggregateOutputType | null
    _max: CestaBasicaMaxAggregateOutputType | null
  }

  type GetCestaBasicaGroupByPayload<T extends CestaBasicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CestaBasicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CestaBasicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CestaBasicaGroupByOutputType[P]>
            : GetScalarType<T[P], CestaBasicaGroupByOutputType[P]>
        }
      >
    >


  export type CestaBasicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cesta?: boolean
    id_responsavel?: boolean
    data_entrega?: boolean
    quantidade?: boolean
    observacoes?: boolean
    responsavel?: boolean | ResponsavelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cestaBasica"]>

  export type CestaBasicaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cesta?: boolean
    id_responsavel?: boolean
    data_entrega?: boolean
    quantidade?: boolean
    observacoes?: boolean
    responsavel?: boolean | ResponsavelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cestaBasica"]>

  export type CestaBasicaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cesta?: boolean
    id_responsavel?: boolean
    data_entrega?: boolean
    quantidade?: boolean
    observacoes?: boolean
    responsavel?: boolean | ResponsavelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cestaBasica"]>

  export type CestaBasicaSelectScalar = {
    id_cesta?: boolean
    id_responsavel?: boolean
    data_entrega?: boolean
    quantidade?: boolean
    observacoes?: boolean
  }

  export type CestaBasicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cesta" | "id_responsavel" | "data_entrega" | "quantidade" | "observacoes", ExtArgs["result"]["cestaBasica"]>
  export type CestaBasicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsavel?: boolean | ResponsavelDefaultArgs<ExtArgs>
  }
  export type CestaBasicaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsavel?: boolean | ResponsavelDefaultArgs<ExtArgs>
  }
  export type CestaBasicaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsavel?: boolean | ResponsavelDefaultArgs<ExtArgs>
  }

  export type $CestaBasicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CestaBasica"
    objects: {
      responsavel: Prisma.$ResponsavelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cesta: number
      id_responsavel: number
      data_entrega: Date
      quantidade: number
      observacoes: string
    }, ExtArgs["result"]["cestaBasica"]>
    composites: {}
  }

  type CestaBasicaGetPayload<S extends boolean | null | undefined | CestaBasicaDefaultArgs> = $Result.GetResult<Prisma.$CestaBasicaPayload, S>

  type CestaBasicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CestaBasicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CestaBasicaCountAggregateInputType | true
    }

  export interface CestaBasicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CestaBasica'], meta: { name: 'CestaBasica' } }
    /**
     * Find zero or one CestaBasica that matches the filter.
     * @param {CestaBasicaFindUniqueArgs} args - Arguments to find a CestaBasica
     * @example
     * // Get one CestaBasica
     * const cestaBasica = await prisma.cestaBasica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CestaBasicaFindUniqueArgs>(args: SelectSubset<T, CestaBasicaFindUniqueArgs<ExtArgs>>): Prisma__CestaBasicaClient<$Result.GetResult<Prisma.$CestaBasicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CestaBasica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CestaBasicaFindUniqueOrThrowArgs} args - Arguments to find a CestaBasica
     * @example
     * // Get one CestaBasica
     * const cestaBasica = await prisma.cestaBasica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CestaBasicaFindUniqueOrThrowArgs>(args: SelectSubset<T, CestaBasicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CestaBasicaClient<$Result.GetResult<Prisma.$CestaBasicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CestaBasica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CestaBasicaFindFirstArgs} args - Arguments to find a CestaBasica
     * @example
     * // Get one CestaBasica
     * const cestaBasica = await prisma.cestaBasica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CestaBasicaFindFirstArgs>(args?: SelectSubset<T, CestaBasicaFindFirstArgs<ExtArgs>>): Prisma__CestaBasicaClient<$Result.GetResult<Prisma.$CestaBasicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CestaBasica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CestaBasicaFindFirstOrThrowArgs} args - Arguments to find a CestaBasica
     * @example
     * // Get one CestaBasica
     * const cestaBasica = await prisma.cestaBasica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CestaBasicaFindFirstOrThrowArgs>(args?: SelectSubset<T, CestaBasicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CestaBasicaClient<$Result.GetResult<Prisma.$CestaBasicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CestaBasicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CestaBasicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CestaBasicas
     * const cestaBasicas = await prisma.cestaBasica.findMany()
     * 
     * // Get first 10 CestaBasicas
     * const cestaBasicas = await prisma.cestaBasica.findMany({ take: 10 })
     * 
     * // Only select the `id_cesta`
     * const cestaBasicaWithId_cestaOnly = await prisma.cestaBasica.findMany({ select: { id_cesta: true } })
     * 
     */
    findMany<T extends CestaBasicaFindManyArgs>(args?: SelectSubset<T, CestaBasicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CestaBasicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CestaBasica.
     * @param {CestaBasicaCreateArgs} args - Arguments to create a CestaBasica.
     * @example
     * // Create one CestaBasica
     * const CestaBasica = await prisma.cestaBasica.create({
     *   data: {
     *     // ... data to create a CestaBasica
     *   }
     * })
     * 
     */
    create<T extends CestaBasicaCreateArgs>(args: SelectSubset<T, CestaBasicaCreateArgs<ExtArgs>>): Prisma__CestaBasicaClient<$Result.GetResult<Prisma.$CestaBasicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CestaBasicas.
     * @param {CestaBasicaCreateManyArgs} args - Arguments to create many CestaBasicas.
     * @example
     * // Create many CestaBasicas
     * const cestaBasica = await prisma.cestaBasica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CestaBasicaCreateManyArgs>(args?: SelectSubset<T, CestaBasicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CestaBasicas and returns the data saved in the database.
     * @param {CestaBasicaCreateManyAndReturnArgs} args - Arguments to create many CestaBasicas.
     * @example
     * // Create many CestaBasicas
     * const cestaBasica = await prisma.cestaBasica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CestaBasicas and only return the `id_cesta`
     * const cestaBasicaWithId_cestaOnly = await prisma.cestaBasica.createManyAndReturn({
     *   select: { id_cesta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CestaBasicaCreateManyAndReturnArgs>(args?: SelectSubset<T, CestaBasicaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CestaBasicaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CestaBasica.
     * @param {CestaBasicaDeleteArgs} args - Arguments to delete one CestaBasica.
     * @example
     * // Delete one CestaBasica
     * const CestaBasica = await prisma.cestaBasica.delete({
     *   where: {
     *     // ... filter to delete one CestaBasica
     *   }
     * })
     * 
     */
    delete<T extends CestaBasicaDeleteArgs>(args: SelectSubset<T, CestaBasicaDeleteArgs<ExtArgs>>): Prisma__CestaBasicaClient<$Result.GetResult<Prisma.$CestaBasicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CestaBasica.
     * @param {CestaBasicaUpdateArgs} args - Arguments to update one CestaBasica.
     * @example
     * // Update one CestaBasica
     * const cestaBasica = await prisma.cestaBasica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CestaBasicaUpdateArgs>(args: SelectSubset<T, CestaBasicaUpdateArgs<ExtArgs>>): Prisma__CestaBasicaClient<$Result.GetResult<Prisma.$CestaBasicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CestaBasicas.
     * @param {CestaBasicaDeleteManyArgs} args - Arguments to filter CestaBasicas to delete.
     * @example
     * // Delete a few CestaBasicas
     * const { count } = await prisma.cestaBasica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CestaBasicaDeleteManyArgs>(args?: SelectSubset<T, CestaBasicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CestaBasicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CestaBasicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CestaBasicas
     * const cestaBasica = await prisma.cestaBasica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CestaBasicaUpdateManyArgs>(args: SelectSubset<T, CestaBasicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CestaBasicas and returns the data updated in the database.
     * @param {CestaBasicaUpdateManyAndReturnArgs} args - Arguments to update many CestaBasicas.
     * @example
     * // Update many CestaBasicas
     * const cestaBasica = await prisma.cestaBasica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CestaBasicas and only return the `id_cesta`
     * const cestaBasicaWithId_cestaOnly = await prisma.cestaBasica.updateManyAndReturn({
     *   select: { id_cesta: true },
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
    updateManyAndReturn<T extends CestaBasicaUpdateManyAndReturnArgs>(args: SelectSubset<T, CestaBasicaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CestaBasicaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CestaBasica.
     * @param {CestaBasicaUpsertArgs} args - Arguments to update or create a CestaBasica.
     * @example
     * // Update or create a CestaBasica
     * const cestaBasica = await prisma.cestaBasica.upsert({
     *   create: {
     *     // ... data to create a CestaBasica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CestaBasica we want to update
     *   }
     * })
     */
    upsert<T extends CestaBasicaUpsertArgs>(args: SelectSubset<T, CestaBasicaUpsertArgs<ExtArgs>>): Prisma__CestaBasicaClient<$Result.GetResult<Prisma.$CestaBasicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CestaBasicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CestaBasicaCountArgs} args - Arguments to filter CestaBasicas to count.
     * @example
     * // Count the number of CestaBasicas
     * const count = await prisma.cestaBasica.count({
     *   where: {
     *     // ... the filter for the CestaBasicas we want to count
     *   }
     * })
    **/
    count<T extends CestaBasicaCountArgs>(
      args?: Subset<T, CestaBasicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CestaBasicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CestaBasica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CestaBasicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CestaBasicaAggregateArgs>(args: Subset<T, CestaBasicaAggregateArgs>): Prisma.PrismaPromise<GetCestaBasicaAggregateType<T>>

    /**
     * Group by CestaBasica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CestaBasicaGroupByArgs} args - Group by arguments.
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
      T extends CestaBasicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CestaBasicaGroupByArgs['orderBy'] }
        : { orderBy?: CestaBasicaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CestaBasicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCestaBasicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CestaBasica model
   */
  readonly fields: CestaBasicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CestaBasica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CestaBasicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responsavel<T extends ResponsavelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResponsavelDefaultArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CestaBasica model
   */
  interface CestaBasicaFieldRefs {
    readonly id_cesta: FieldRef<"CestaBasica", 'Int'>
    readonly id_responsavel: FieldRef<"CestaBasica", 'Int'>
    readonly data_entrega: FieldRef<"CestaBasica", 'DateTime'>
    readonly quantidade: FieldRef<"CestaBasica", 'Int'>
    readonly observacoes: FieldRef<"CestaBasica", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CestaBasica findUnique
   */
  export type CestaBasicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaInclude<ExtArgs> | null
    /**
     * Filter, which CestaBasica to fetch.
     */
    where: CestaBasicaWhereUniqueInput
  }

  /**
   * CestaBasica findUniqueOrThrow
   */
  export type CestaBasicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaInclude<ExtArgs> | null
    /**
     * Filter, which CestaBasica to fetch.
     */
    where: CestaBasicaWhereUniqueInput
  }

  /**
   * CestaBasica findFirst
   */
  export type CestaBasicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaInclude<ExtArgs> | null
    /**
     * Filter, which CestaBasica to fetch.
     */
    where?: CestaBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CestaBasicas to fetch.
     */
    orderBy?: CestaBasicaOrderByWithRelationInput | CestaBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CestaBasicas.
     */
    cursor?: CestaBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CestaBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CestaBasicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CestaBasicas.
     */
    distinct?: CestaBasicaScalarFieldEnum | CestaBasicaScalarFieldEnum[]
  }

  /**
   * CestaBasica findFirstOrThrow
   */
  export type CestaBasicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaInclude<ExtArgs> | null
    /**
     * Filter, which CestaBasica to fetch.
     */
    where?: CestaBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CestaBasicas to fetch.
     */
    orderBy?: CestaBasicaOrderByWithRelationInput | CestaBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CestaBasicas.
     */
    cursor?: CestaBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CestaBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CestaBasicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CestaBasicas.
     */
    distinct?: CestaBasicaScalarFieldEnum | CestaBasicaScalarFieldEnum[]
  }

  /**
   * CestaBasica findMany
   */
  export type CestaBasicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaInclude<ExtArgs> | null
    /**
     * Filter, which CestaBasicas to fetch.
     */
    where?: CestaBasicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CestaBasicas to fetch.
     */
    orderBy?: CestaBasicaOrderByWithRelationInput | CestaBasicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CestaBasicas.
     */
    cursor?: CestaBasicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CestaBasicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CestaBasicas.
     */
    skip?: number
    distinct?: CestaBasicaScalarFieldEnum | CestaBasicaScalarFieldEnum[]
  }

  /**
   * CestaBasica create
   */
  export type CestaBasicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaInclude<ExtArgs> | null
    /**
     * The data needed to create a CestaBasica.
     */
    data: XOR<CestaBasicaCreateInput, CestaBasicaUncheckedCreateInput>
  }

  /**
   * CestaBasica createMany
   */
  export type CestaBasicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CestaBasicas.
     */
    data: CestaBasicaCreateManyInput | CestaBasicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CestaBasica createManyAndReturn
   */
  export type CestaBasicaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * The data used to create many CestaBasicas.
     */
    data: CestaBasicaCreateManyInput | CestaBasicaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CestaBasica update
   */
  export type CestaBasicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaInclude<ExtArgs> | null
    /**
     * The data needed to update a CestaBasica.
     */
    data: XOR<CestaBasicaUpdateInput, CestaBasicaUncheckedUpdateInput>
    /**
     * Choose, which CestaBasica to update.
     */
    where: CestaBasicaWhereUniqueInput
  }

  /**
   * CestaBasica updateMany
   */
  export type CestaBasicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CestaBasicas.
     */
    data: XOR<CestaBasicaUpdateManyMutationInput, CestaBasicaUncheckedUpdateManyInput>
    /**
     * Filter which CestaBasicas to update
     */
    where?: CestaBasicaWhereInput
    /**
     * Limit how many CestaBasicas to update.
     */
    limit?: number
  }

  /**
   * CestaBasica updateManyAndReturn
   */
  export type CestaBasicaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * The data used to update CestaBasicas.
     */
    data: XOR<CestaBasicaUpdateManyMutationInput, CestaBasicaUncheckedUpdateManyInput>
    /**
     * Filter which CestaBasicas to update
     */
    where?: CestaBasicaWhereInput
    /**
     * Limit how many CestaBasicas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CestaBasica upsert
   */
  export type CestaBasicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaInclude<ExtArgs> | null
    /**
     * The filter to search for the CestaBasica to update in case it exists.
     */
    where: CestaBasicaWhereUniqueInput
    /**
     * In case the CestaBasica found by the `where` argument doesn't exist, create a new CestaBasica with this data.
     */
    create: XOR<CestaBasicaCreateInput, CestaBasicaUncheckedCreateInput>
    /**
     * In case the CestaBasica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CestaBasicaUpdateInput, CestaBasicaUncheckedUpdateInput>
  }

  /**
   * CestaBasica delete
   */
  export type CestaBasicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaInclude<ExtArgs> | null
    /**
     * Filter which CestaBasica to delete.
     */
    where: CestaBasicaWhereUniqueInput
  }

  /**
   * CestaBasica deleteMany
   */
  export type CestaBasicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CestaBasicas to delete
     */
    where?: CestaBasicaWhereInput
    /**
     * Limit how many CestaBasicas to delete.
     */
    limit?: number
  }

  /**
   * CestaBasica without action
   */
  export type CestaBasicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CestaBasica
     */
    select?: CestaBasicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CestaBasica
     */
    omit?: CestaBasicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CestaBasicaInclude<ExtArgs> | null
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


  export const CriancaScalarFieldEnum: {
    id_crianca: 'id_crianca',
    id_responsavel: 'id_responsavel',
    nome: 'nome',
    data_nascimento: 'data_nascimento',
    rg: 'rg',
    cpf: 'cpf'
  };

  export type CriancaScalarFieldEnum = (typeof CriancaScalarFieldEnum)[keyof typeof CriancaScalarFieldEnum]


  export const ResponsavelScalarFieldEnum: {
    id_responsavel: 'id_responsavel',
    nome: 'nome',
    cpf: 'cpf',
    rg: 'rg',
    parentesco_com_crianca: 'parentesco_com_crianca',
    telefone: 'telefone',
    email: 'email',
    ocupacao: 'ocupacao',
    endereco: 'endereco'
  };

  export type ResponsavelScalarFieldEnum = (typeof ResponsavelScalarFieldEnum)[keyof typeof ResponsavelScalarFieldEnum]


  export const VoluntarioScalarFieldEnum: {
    id_voluntario: 'id_voluntario',
    nome: 'nome',
    cpf: 'cpf',
    email: 'email',
    telefone: 'telefone',
    disponibilidade: 'disponibilidade',
    area_atuacao: 'area_atuacao',
    respondeu_questionario: 'respondeu_questionario',
    aceitou_termos: 'aceitou_termos'
  };

  export type VoluntarioScalarFieldEnum = (typeof VoluntarioScalarFieldEnum)[keyof typeof VoluntarioScalarFieldEnum]


  export const ParceiroScalarFieldEnum: {
    id_parceiro: 'id_parceiro',
    nome: 'nome',
    tipo: 'tipo',
    email: 'email',
    telefone: 'telefone',
    contribuicao: 'contribuicao'
  };

  export type ParceiroScalarFieldEnum = (typeof ParceiroScalarFieldEnum)[keyof typeof ParceiroScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    perfil: 'perfil'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const FrequenciaScalarFieldEnum: {
    id_frequencia: 'id_frequencia',
    id_crianca: 'id_crianca',
    atividade: 'atividade',
    data: 'data',
    presenca: 'presenca'
  };

  export type FrequenciaScalarFieldEnum = (typeof FrequenciaScalarFieldEnum)[keyof typeof FrequenciaScalarFieldEnum]


  export const CestaBasicaScalarFieldEnum: {
    id_cesta: 'id_cesta',
    id_responsavel: 'id_responsavel',
    data_entrega: 'data_entrega',
    quantidade: 'quantidade',
    observacoes: 'observacoes'
  };

  export type CestaBasicaScalarFieldEnum = (typeof CestaBasicaScalarFieldEnum)[keyof typeof CestaBasicaScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TipoUsuario'
   */
  export type EnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario'>
    


  /**
   * Reference to a field of type 'TipoUsuario[]'
   */
  export type ListEnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario[]'>
    


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


  export type CriancaWhereInput = {
    AND?: CriancaWhereInput | CriancaWhereInput[]
    OR?: CriancaWhereInput[]
    NOT?: CriancaWhereInput | CriancaWhereInput[]
    id_crianca?: IntFilter<"Crianca"> | number
    id_responsavel?: IntFilter<"Crianca"> | number
    nome?: StringFilter<"Crianca"> | string
    data_nascimento?: DateTimeFilter<"Crianca"> | Date | string
    rg?: StringFilter<"Crianca"> | string
    cpf?: StringFilter<"Crianca"> | string
    responsavel?: XOR<ResponsavelScalarRelationFilter, ResponsavelWhereInput>
    frequencias?: FrequenciaListRelationFilter
  }

  export type CriancaOrderByWithRelationInput = {
    id_crianca?: SortOrder
    id_responsavel?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    responsavel?: ResponsavelOrderByWithRelationInput
    frequencias?: FrequenciaOrderByRelationAggregateInput
  }

  export type CriancaWhereUniqueInput = Prisma.AtLeast<{
    id_crianca?: number
    cpf?: string
    AND?: CriancaWhereInput | CriancaWhereInput[]
    OR?: CriancaWhereInput[]
    NOT?: CriancaWhereInput | CriancaWhereInput[]
    id_responsavel?: IntFilter<"Crianca"> | number
    nome?: StringFilter<"Crianca"> | string
    data_nascimento?: DateTimeFilter<"Crianca"> | Date | string
    rg?: StringFilter<"Crianca"> | string
    responsavel?: XOR<ResponsavelScalarRelationFilter, ResponsavelWhereInput>
    frequencias?: FrequenciaListRelationFilter
  }, "id_crianca" | "cpf">

  export type CriancaOrderByWithAggregationInput = {
    id_crianca?: SortOrder
    id_responsavel?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    _count?: CriancaCountOrderByAggregateInput
    _avg?: CriancaAvgOrderByAggregateInput
    _max?: CriancaMaxOrderByAggregateInput
    _min?: CriancaMinOrderByAggregateInput
    _sum?: CriancaSumOrderByAggregateInput
  }

  export type CriancaScalarWhereWithAggregatesInput = {
    AND?: CriancaScalarWhereWithAggregatesInput | CriancaScalarWhereWithAggregatesInput[]
    OR?: CriancaScalarWhereWithAggregatesInput[]
    NOT?: CriancaScalarWhereWithAggregatesInput | CriancaScalarWhereWithAggregatesInput[]
    id_crianca?: IntWithAggregatesFilter<"Crianca"> | number
    id_responsavel?: IntWithAggregatesFilter<"Crianca"> | number
    nome?: StringWithAggregatesFilter<"Crianca"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"Crianca"> | Date | string
    rg?: StringWithAggregatesFilter<"Crianca"> | string
    cpf?: StringWithAggregatesFilter<"Crianca"> | string
  }

  export type ResponsavelWhereInput = {
    AND?: ResponsavelWhereInput | ResponsavelWhereInput[]
    OR?: ResponsavelWhereInput[]
    NOT?: ResponsavelWhereInput | ResponsavelWhereInput[]
    id_responsavel?: IntFilter<"Responsavel"> | number
    nome?: StringFilter<"Responsavel"> | string
    cpf?: StringFilter<"Responsavel"> | string
    rg?: StringFilter<"Responsavel"> | string
    parentesco_com_crianca?: StringFilter<"Responsavel"> | string
    telefone?: StringFilter<"Responsavel"> | string
    email?: StringFilter<"Responsavel"> | string
    ocupacao?: StringFilter<"Responsavel"> | string
    endereco?: StringFilter<"Responsavel"> | string
    criancas?: CriancaListRelationFilter
    cestasBasicas?: CestaBasicaListRelationFilter
  }

  export type ResponsavelOrderByWithRelationInput = {
    id_responsavel?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    parentesco_com_crianca?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    ocupacao?: SortOrder
    endereco?: SortOrder
    criancas?: CriancaOrderByRelationAggregateInput
    cestasBasicas?: CestaBasicaOrderByRelationAggregateInput
  }

  export type ResponsavelWhereUniqueInput = Prisma.AtLeast<{
    id_responsavel?: number
    cpf?: string
    AND?: ResponsavelWhereInput | ResponsavelWhereInput[]
    OR?: ResponsavelWhereInput[]
    NOT?: ResponsavelWhereInput | ResponsavelWhereInput[]
    nome?: StringFilter<"Responsavel"> | string
    rg?: StringFilter<"Responsavel"> | string
    parentesco_com_crianca?: StringFilter<"Responsavel"> | string
    telefone?: StringFilter<"Responsavel"> | string
    email?: StringFilter<"Responsavel"> | string
    ocupacao?: StringFilter<"Responsavel"> | string
    endereco?: StringFilter<"Responsavel"> | string
    criancas?: CriancaListRelationFilter
    cestasBasicas?: CestaBasicaListRelationFilter
  }, "id_responsavel" | "cpf">

  export type ResponsavelOrderByWithAggregationInput = {
    id_responsavel?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    parentesco_com_crianca?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    ocupacao?: SortOrder
    endereco?: SortOrder
    _count?: ResponsavelCountOrderByAggregateInput
    _avg?: ResponsavelAvgOrderByAggregateInput
    _max?: ResponsavelMaxOrderByAggregateInput
    _min?: ResponsavelMinOrderByAggregateInput
    _sum?: ResponsavelSumOrderByAggregateInput
  }

  export type ResponsavelScalarWhereWithAggregatesInput = {
    AND?: ResponsavelScalarWhereWithAggregatesInput | ResponsavelScalarWhereWithAggregatesInput[]
    OR?: ResponsavelScalarWhereWithAggregatesInput[]
    NOT?: ResponsavelScalarWhereWithAggregatesInput | ResponsavelScalarWhereWithAggregatesInput[]
    id_responsavel?: IntWithAggregatesFilter<"Responsavel"> | number
    nome?: StringWithAggregatesFilter<"Responsavel"> | string
    cpf?: StringWithAggregatesFilter<"Responsavel"> | string
    rg?: StringWithAggregatesFilter<"Responsavel"> | string
    parentesco_com_crianca?: StringWithAggregatesFilter<"Responsavel"> | string
    telefone?: StringWithAggregatesFilter<"Responsavel"> | string
    email?: StringWithAggregatesFilter<"Responsavel"> | string
    ocupacao?: StringWithAggregatesFilter<"Responsavel"> | string
    endereco?: StringWithAggregatesFilter<"Responsavel"> | string
  }

  export type VoluntarioWhereInput = {
    AND?: VoluntarioWhereInput | VoluntarioWhereInput[]
    OR?: VoluntarioWhereInput[]
    NOT?: VoluntarioWhereInput | VoluntarioWhereInput[]
    id_voluntario?: IntFilter<"Voluntario"> | number
    nome?: StringFilter<"Voluntario"> | string
    cpf?: StringFilter<"Voluntario"> | string
    email?: StringFilter<"Voluntario"> | string
    telefone?: StringFilter<"Voluntario"> | string
    disponibilidade?: StringFilter<"Voluntario"> | string
    area_atuacao?: StringFilter<"Voluntario"> | string
    respondeu_questionario?: BoolFilter<"Voluntario"> | boolean
    aceitou_termos?: BoolFilter<"Voluntario"> | boolean
  }

  export type VoluntarioOrderByWithRelationInput = {
    id_voluntario?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    disponibilidade?: SortOrder
    area_atuacao?: SortOrder
    respondeu_questionario?: SortOrder
    aceitou_termos?: SortOrder
  }

  export type VoluntarioWhereUniqueInput = Prisma.AtLeast<{
    id_voluntario?: number
    cpf?: string
    AND?: VoluntarioWhereInput | VoluntarioWhereInput[]
    OR?: VoluntarioWhereInput[]
    NOT?: VoluntarioWhereInput | VoluntarioWhereInput[]
    nome?: StringFilter<"Voluntario"> | string
    email?: StringFilter<"Voluntario"> | string
    telefone?: StringFilter<"Voluntario"> | string
    disponibilidade?: StringFilter<"Voluntario"> | string
    area_atuacao?: StringFilter<"Voluntario"> | string
    respondeu_questionario?: BoolFilter<"Voluntario"> | boolean
    aceitou_termos?: BoolFilter<"Voluntario"> | boolean
  }, "id_voluntario" | "cpf">

  export type VoluntarioOrderByWithAggregationInput = {
    id_voluntario?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    disponibilidade?: SortOrder
    area_atuacao?: SortOrder
    respondeu_questionario?: SortOrder
    aceitou_termos?: SortOrder
    _count?: VoluntarioCountOrderByAggregateInput
    _avg?: VoluntarioAvgOrderByAggregateInput
    _max?: VoluntarioMaxOrderByAggregateInput
    _min?: VoluntarioMinOrderByAggregateInput
    _sum?: VoluntarioSumOrderByAggregateInput
  }

  export type VoluntarioScalarWhereWithAggregatesInput = {
    AND?: VoluntarioScalarWhereWithAggregatesInput | VoluntarioScalarWhereWithAggregatesInput[]
    OR?: VoluntarioScalarWhereWithAggregatesInput[]
    NOT?: VoluntarioScalarWhereWithAggregatesInput | VoluntarioScalarWhereWithAggregatesInput[]
    id_voluntario?: IntWithAggregatesFilter<"Voluntario"> | number
    nome?: StringWithAggregatesFilter<"Voluntario"> | string
    cpf?: StringWithAggregatesFilter<"Voluntario"> | string
    email?: StringWithAggregatesFilter<"Voluntario"> | string
    telefone?: StringWithAggregatesFilter<"Voluntario"> | string
    disponibilidade?: StringWithAggregatesFilter<"Voluntario"> | string
    area_atuacao?: StringWithAggregatesFilter<"Voluntario"> | string
    respondeu_questionario?: BoolWithAggregatesFilter<"Voluntario"> | boolean
    aceitou_termos?: BoolWithAggregatesFilter<"Voluntario"> | boolean
  }

  export type ParceiroWhereInput = {
    AND?: ParceiroWhereInput | ParceiroWhereInput[]
    OR?: ParceiroWhereInput[]
    NOT?: ParceiroWhereInput | ParceiroWhereInput[]
    id_parceiro?: IntFilter<"Parceiro"> | number
    nome?: StringFilter<"Parceiro"> | string
    tipo?: StringFilter<"Parceiro"> | string
    email?: StringFilter<"Parceiro"> | string
    telefone?: StringFilter<"Parceiro"> | string
    contribuicao?: StringFilter<"Parceiro"> | string
  }

  export type ParceiroOrderByWithRelationInput = {
    id_parceiro?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    contribuicao?: SortOrder
  }

  export type ParceiroWhereUniqueInput = Prisma.AtLeast<{
    id_parceiro?: number
    AND?: ParceiroWhereInput | ParceiroWhereInput[]
    OR?: ParceiroWhereInput[]
    NOT?: ParceiroWhereInput | ParceiroWhereInput[]
    nome?: StringFilter<"Parceiro"> | string
    tipo?: StringFilter<"Parceiro"> | string
    email?: StringFilter<"Parceiro"> | string
    telefone?: StringFilter<"Parceiro"> | string
    contribuicao?: StringFilter<"Parceiro"> | string
  }, "id_parceiro">

  export type ParceiroOrderByWithAggregationInput = {
    id_parceiro?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    contribuicao?: SortOrder
    _count?: ParceiroCountOrderByAggregateInput
    _avg?: ParceiroAvgOrderByAggregateInput
    _max?: ParceiroMaxOrderByAggregateInput
    _min?: ParceiroMinOrderByAggregateInput
    _sum?: ParceiroSumOrderByAggregateInput
  }

  export type ParceiroScalarWhereWithAggregatesInput = {
    AND?: ParceiroScalarWhereWithAggregatesInput | ParceiroScalarWhereWithAggregatesInput[]
    OR?: ParceiroScalarWhereWithAggregatesInput[]
    NOT?: ParceiroScalarWhereWithAggregatesInput | ParceiroScalarWhereWithAggregatesInput[]
    id_parceiro?: IntWithAggregatesFilter<"Parceiro"> | number
    nome?: StringWithAggregatesFilter<"Parceiro"> | string
    tipo?: StringWithAggregatesFilter<"Parceiro"> | string
    email?: StringWithAggregatesFilter<"Parceiro"> | string
    telefone?: StringWithAggregatesFilter<"Parceiro"> | string
    contribuicao?: StringWithAggregatesFilter<"Parceiro"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    perfil?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    perfil?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
  }, "id_usuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    perfil?: EnumTipoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.TipoUsuario
  }

  export type FrequenciaWhereInput = {
    AND?: FrequenciaWhereInput | FrequenciaWhereInput[]
    OR?: FrequenciaWhereInput[]
    NOT?: FrequenciaWhereInput | FrequenciaWhereInput[]
    id_frequencia?: IntFilter<"Frequencia"> | number
    id_crianca?: IntFilter<"Frequencia"> | number
    atividade?: StringFilter<"Frequencia"> | string
    data?: DateTimeFilter<"Frequencia"> | Date | string
    presenca?: BoolFilter<"Frequencia"> | boolean
    crianca?: XOR<CriancaScalarRelationFilter, CriancaWhereInput>
  }

  export type FrequenciaOrderByWithRelationInput = {
    id_frequencia?: SortOrder
    id_crianca?: SortOrder
    atividade?: SortOrder
    data?: SortOrder
    presenca?: SortOrder
    crianca?: CriancaOrderByWithRelationInput
  }

  export type FrequenciaWhereUniqueInput = Prisma.AtLeast<{
    id_frequencia?: number
    AND?: FrequenciaWhereInput | FrequenciaWhereInput[]
    OR?: FrequenciaWhereInput[]
    NOT?: FrequenciaWhereInput | FrequenciaWhereInput[]
    id_crianca?: IntFilter<"Frequencia"> | number
    atividade?: StringFilter<"Frequencia"> | string
    data?: DateTimeFilter<"Frequencia"> | Date | string
    presenca?: BoolFilter<"Frequencia"> | boolean
    crianca?: XOR<CriancaScalarRelationFilter, CriancaWhereInput>
  }, "id_frequencia">

  export type FrequenciaOrderByWithAggregationInput = {
    id_frequencia?: SortOrder
    id_crianca?: SortOrder
    atividade?: SortOrder
    data?: SortOrder
    presenca?: SortOrder
    _count?: FrequenciaCountOrderByAggregateInput
    _avg?: FrequenciaAvgOrderByAggregateInput
    _max?: FrequenciaMaxOrderByAggregateInput
    _min?: FrequenciaMinOrderByAggregateInput
    _sum?: FrequenciaSumOrderByAggregateInput
  }

  export type FrequenciaScalarWhereWithAggregatesInput = {
    AND?: FrequenciaScalarWhereWithAggregatesInput | FrequenciaScalarWhereWithAggregatesInput[]
    OR?: FrequenciaScalarWhereWithAggregatesInput[]
    NOT?: FrequenciaScalarWhereWithAggregatesInput | FrequenciaScalarWhereWithAggregatesInput[]
    id_frequencia?: IntWithAggregatesFilter<"Frequencia"> | number
    id_crianca?: IntWithAggregatesFilter<"Frequencia"> | number
    atividade?: StringWithAggregatesFilter<"Frequencia"> | string
    data?: DateTimeWithAggregatesFilter<"Frequencia"> | Date | string
    presenca?: BoolWithAggregatesFilter<"Frequencia"> | boolean
  }

  export type CestaBasicaWhereInput = {
    AND?: CestaBasicaWhereInput | CestaBasicaWhereInput[]
    OR?: CestaBasicaWhereInput[]
    NOT?: CestaBasicaWhereInput | CestaBasicaWhereInput[]
    id_cesta?: IntFilter<"CestaBasica"> | number
    id_responsavel?: IntFilter<"CestaBasica"> | number
    data_entrega?: DateTimeFilter<"CestaBasica"> | Date | string
    quantidade?: IntFilter<"CestaBasica"> | number
    observacoes?: StringFilter<"CestaBasica"> | string
    responsavel?: XOR<ResponsavelScalarRelationFilter, ResponsavelWhereInput>
  }

  export type CestaBasicaOrderByWithRelationInput = {
    id_cesta?: SortOrder
    id_responsavel?: SortOrder
    data_entrega?: SortOrder
    quantidade?: SortOrder
    observacoes?: SortOrder
    responsavel?: ResponsavelOrderByWithRelationInput
  }

  export type CestaBasicaWhereUniqueInput = Prisma.AtLeast<{
    id_cesta?: number
    AND?: CestaBasicaWhereInput | CestaBasicaWhereInput[]
    OR?: CestaBasicaWhereInput[]
    NOT?: CestaBasicaWhereInput | CestaBasicaWhereInput[]
    id_responsavel?: IntFilter<"CestaBasica"> | number
    data_entrega?: DateTimeFilter<"CestaBasica"> | Date | string
    quantidade?: IntFilter<"CestaBasica"> | number
    observacoes?: StringFilter<"CestaBasica"> | string
    responsavel?: XOR<ResponsavelScalarRelationFilter, ResponsavelWhereInput>
  }, "id_cesta">

  export type CestaBasicaOrderByWithAggregationInput = {
    id_cesta?: SortOrder
    id_responsavel?: SortOrder
    data_entrega?: SortOrder
    quantidade?: SortOrder
    observacoes?: SortOrder
    _count?: CestaBasicaCountOrderByAggregateInput
    _avg?: CestaBasicaAvgOrderByAggregateInput
    _max?: CestaBasicaMaxOrderByAggregateInput
    _min?: CestaBasicaMinOrderByAggregateInput
    _sum?: CestaBasicaSumOrderByAggregateInput
  }

  export type CestaBasicaScalarWhereWithAggregatesInput = {
    AND?: CestaBasicaScalarWhereWithAggregatesInput | CestaBasicaScalarWhereWithAggregatesInput[]
    OR?: CestaBasicaScalarWhereWithAggregatesInput[]
    NOT?: CestaBasicaScalarWhereWithAggregatesInput | CestaBasicaScalarWhereWithAggregatesInput[]
    id_cesta?: IntWithAggregatesFilter<"CestaBasica"> | number
    id_responsavel?: IntWithAggregatesFilter<"CestaBasica"> | number
    data_entrega?: DateTimeWithAggregatesFilter<"CestaBasica"> | Date | string
    quantidade?: IntWithAggregatesFilter<"CestaBasica"> | number
    observacoes?: StringWithAggregatesFilter<"CestaBasica"> | string
  }

  export type CriancaCreateInput = {
    nome: string
    data_nascimento: Date | string
    rg: string
    cpf: string
    responsavel: ResponsavelCreateNestedOneWithoutCriancasInput
    frequencias?: FrequenciaCreateNestedManyWithoutCriancaInput
  }

  export type CriancaUncheckedCreateInput = {
    id_crianca?: number
    id_responsavel: number
    nome: string
    data_nascimento: Date | string
    rg: string
    cpf: string
    frequencias?: FrequenciaUncheckedCreateNestedManyWithoutCriancaInput
  }

  export type CriancaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsavel?: ResponsavelUpdateOneRequiredWithoutCriancasNestedInput
    frequencias?: FrequenciaUpdateManyWithoutCriancaNestedInput
  }

  export type CriancaUncheckedUpdateInput = {
    id_crianca?: IntFieldUpdateOperationsInput | number
    id_responsavel?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    frequencias?: FrequenciaUncheckedUpdateManyWithoutCriancaNestedInput
  }

  export type CriancaCreateManyInput = {
    id_crianca?: number
    id_responsavel: number
    nome: string
    data_nascimento: Date | string
    rg: string
    cpf: string
  }

  export type CriancaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type CriancaUncheckedUpdateManyInput = {
    id_crianca?: IntFieldUpdateOperationsInput | number
    id_responsavel?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsavelCreateInput = {
    nome: string
    cpf: string
    rg: string
    parentesco_com_crianca: string
    telefone: string
    email: string
    ocupacao: string
    endereco: string
    criancas?: CriancaCreateNestedManyWithoutResponsavelInput
    cestasBasicas?: CestaBasicaCreateNestedManyWithoutResponsavelInput
  }

  export type ResponsavelUncheckedCreateInput = {
    id_responsavel?: number
    nome: string
    cpf: string
    rg: string
    parentesco_com_crianca: string
    telefone: string
    email: string
    ocupacao: string
    endereco: string
    criancas?: CriancaUncheckedCreateNestedManyWithoutResponsavelInput
    cestasBasicas?: CestaBasicaUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type ResponsavelUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    parentesco_com_crianca?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criancas?: CriancaUpdateManyWithoutResponsavelNestedInput
    cestasBasicas?: CestaBasicaUpdateManyWithoutResponsavelNestedInput
  }

  export type ResponsavelUncheckedUpdateInput = {
    id_responsavel?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    parentesco_com_crianca?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criancas?: CriancaUncheckedUpdateManyWithoutResponsavelNestedInput
    cestasBasicas?: CestaBasicaUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type ResponsavelCreateManyInput = {
    id_responsavel?: number
    nome: string
    cpf: string
    rg: string
    parentesco_com_crianca: string
    telefone: string
    email: string
    ocupacao: string
    endereco: string
  }

  export type ResponsavelUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    parentesco_com_crianca?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsavelUncheckedUpdateManyInput = {
    id_responsavel?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    parentesco_com_crianca?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type VoluntarioCreateInput = {
    nome: string
    cpf: string
    email: string
    telefone: string
    disponibilidade: string
    area_atuacao: string
    respondeu_questionario: boolean
    aceitou_termos: boolean
  }

  export type VoluntarioUncheckedCreateInput = {
    id_voluntario?: number
    nome: string
    cpf: string
    email: string
    telefone: string
    disponibilidade: string
    area_atuacao: string
    respondeu_questionario: boolean
    aceitou_termos: boolean
  }

  export type VoluntarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    respondeu_questionario?: BoolFieldUpdateOperationsInput | boolean
    aceitou_termos?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoluntarioUncheckedUpdateInput = {
    id_voluntario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    respondeu_questionario?: BoolFieldUpdateOperationsInput | boolean
    aceitou_termos?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoluntarioCreateManyInput = {
    id_voluntario?: number
    nome: string
    cpf: string
    email: string
    telefone: string
    disponibilidade: string
    area_atuacao: string
    respondeu_questionario: boolean
    aceitou_termos: boolean
  }

  export type VoluntarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    respondeu_questionario?: BoolFieldUpdateOperationsInput | boolean
    aceitou_termos?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoluntarioUncheckedUpdateManyInput = {
    id_voluntario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    area_atuacao?: StringFieldUpdateOperationsInput | string
    respondeu_questionario?: BoolFieldUpdateOperationsInput | boolean
    aceitou_termos?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ParceiroCreateInput = {
    nome: string
    tipo: string
    email: string
    telefone: string
    contribuicao: string
  }

  export type ParceiroUncheckedCreateInput = {
    id_parceiro?: number
    nome: string
    tipo: string
    email: string
    telefone: string
    contribuicao: string
  }

  export type ParceiroUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    contribuicao?: StringFieldUpdateOperationsInput | string
  }

  export type ParceiroUncheckedUpdateInput = {
    id_parceiro?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    contribuicao?: StringFieldUpdateOperationsInput | string
  }

  export type ParceiroCreateManyInput = {
    id_parceiro?: number
    nome: string
    tipo: string
    email: string
    telefone: string
    contribuicao: string
  }

  export type ParceiroUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    contribuicao?: StringFieldUpdateOperationsInput | string
  }

  export type ParceiroUncheckedUpdateManyInput = {
    id_parceiro?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    contribuicao?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    perfil: $Enums.TipoUsuario
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    nome: string
    email: string
    senha: string
    perfil: $Enums.TipoUsuario
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    nome: string
    email: string
    senha: string
    perfil: $Enums.TipoUsuario
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
  }

  export type FrequenciaCreateInput = {
    atividade: string
    data: Date | string
    presenca: boolean
    crianca: CriancaCreateNestedOneWithoutFrequenciasInput
  }

  export type FrequenciaUncheckedCreateInput = {
    id_frequencia?: number
    id_crianca: number
    atividade: string
    data: Date | string
    presenca: boolean
  }

  export type FrequenciaUpdateInput = {
    atividade?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presenca?: BoolFieldUpdateOperationsInput | boolean
    crianca?: CriancaUpdateOneRequiredWithoutFrequenciasNestedInput
  }

  export type FrequenciaUncheckedUpdateInput = {
    id_frequencia?: IntFieldUpdateOperationsInput | number
    id_crianca?: IntFieldUpdateOperationsInput | number
    atividade?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presenca?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FrequenciaCreateManyInput = {
    id_frequencia?: number
    id_crianca: number
    atividade: string
    data: Date | string
    presenca: boolean
  }

  export type FrequenciaUpdateManyMutationInput = {
    atividade?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presenca?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FrequenciaUncheckedUpdateManyInput = {
    id_frequencia?: IntFieldUpdateOperationsInput | number
    id_crianca?: IntFieldUpdateOperationsInput | number
    atividade?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presenca?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CestaBasicaCreateInput = {
    data_entrega: Date | string
    quantidade: number
    observacoes: string
    responsavel: ResponsavelCreateNestedOneWithoutCestasBasicasInput
  }

  export type CestaBasicaUncheckedCreateInput = {
    id_cesta?: number
    id_responsavel: number
    data_entrega: Date | string
    quantidade: number
    observacoes: string
  }

  export type CestaBasicaUpdateInput = {
    data_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
    responsavel?: ResponsavelUpdateOneRequiredWithoutCestasBasicasNestedInput
  }

  export type CestaBasicaUncheckedUpdateInput = {
    id_cesta?: IntFieldUpdateOperationsInput | number
    id_responsavel?: IntFieldUpdateOperationsInput | number
    data_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type CestaBasicaCreateManyInput = {
    id_cesta?: number
    id_responsavel: number
    data_entrega: Date | string
    quantidade: number
    observacoes: string
  }

  export type CestaBasicaUpdateManyMutationInput = {
    data_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type CestaBasicaUncheckedUpdateManyInput = {
    id_cesta?: IntFieldUpdateOperationsInput | number
    id_responsavel?: IntFieldUpdateOperationsInput | number
    data_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
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

  export type ResponsavelScalarRelationFilter = {
    is?: ResponsavelWhereInput
    isNot?: ResponsavelWhereInput
  }

  export type FrequenciaListRelationFilter = {
    every?: FrequenciaWhereInput
    some?: FrequenciaWhereInput
    none?: FrequenciaWhereInput
  }

  export type FrequenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CriancaCountOrderByAggregateInput = {
    id_crianca?: SortOrder
    id_responsavel?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
  }

  export type CriancaAvgOrderByAggregateInput = {
    id_crianca?: SortOrder
    id_responsavel?: SortOrder
  }

  export type CriancaMaxOrderByAggregateInput = {
    id_crianca?: SortOrder
    id_responsavel?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
  }

  export type CriancaMinOrderByAggregateInput = {
    id_crianca?: SortOrder
    id_responsavel?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
  }

  export type CriancaSumOrderByAggregateInput = {
    id_crianca?: SortOrder
    id_responsavel?: SortOrder
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

  export type CriancaListRelationFilter = {
    every?: CriancaWhereInput
    some?: CriancaWhereInput
    none?: CriancaWhereInput
  }

  export type CestaBasicaListRelationFilter = {
    every?: CestaBasicaWhereInput
    some?: CestaBasicaWhereInput
    none?: CestaBasicaWhereInput
  }

  export type CriancaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CestaBasicaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResponsavelCountOrderByAggregateInput = {
    id_responsavel?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    parentesco_com_crianca?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    ocupacao?: SortOrder
    endereco?: SortOrder
  }

  export type ResponsavelAvgOrderByAggregateInput = {
    id_responsavel?: SortOrder
  }

  export type ResponsavelMaxOrderByAggregateInput = {
    id_responsavel?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    parentesco_com_crianca?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    ocupacao?: SortOrder
    endereco?: SortOrder
  }

  export type ResponsavelMinOrderByAggregateInput = {
    id_responsavel?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    parentesco_com_crianca?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    ocupacao?: SortOrder
    endereco?: SortOrder
  }

  export type ResponsavelSumOrderByAggregateInput = {
    id_responsavel?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VoluntarioCountOrderByAggregateInput = {
    id_voluntario?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    disponibilidade?: SortOrder
    area_atuacao?: SortOrder
    respondeu_questionario?: SortOrder
    aceitou_termos?: SortOrder
  }

  export type VoluntarioAvgOrderByAggregateInput = {
    id_voluntario?: SortOrder
  }

  export type VoluntarioMaxOrderByAggregateInput = {
    id_voluntario?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    disponibilidade?: SortOrder
    area_atuacao?: SortOrder
    respondeu_questionario?: SortOrder
    aceitou_termos?: SortOrder
  }

  export type VoluntarioMinOrderByAggregateInput = {
    id_voluntario?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    disponibilidade?: SortOrder
    area_atuacao?: SortOrder
    respondeu_questionario?: SortOrder
    aceitou_termos?: SortOrder
  }

  export type VoluntarioSumOrderByAggregateInput = {
    id_voluntario?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParceiroCountOrderByAggregateInput = {
    id_parceiro?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    contribuicao?: SortOrder
  }

  export type ParceiroAvgOrderByAggregateInput = {
    id_parceiro?: SortOrder
  }

  export type ParceiroMaxOrderByAggregateInput = {
    id_parceiro?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    contribuicao?: SortOrder
  }

  export type ParceiroMinOrderByAggregateInput = {
    id_parceiro?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    contribuicao?: SortOrder
  }

  export type ParceiroSumOrderByAggregateInput = {
    id_parceiro?: SortOrder
  }

  export type EnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type EnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type CriancaScalarRelationFilter = {
    is?: CriancaWhereInput
    isNot?: CriancaWhereInput
  }

  export type FrequenciaCountOrderByAggregateInput = {
    id_frequencia?: SortOrder
    id_crianca?: SortOrder
    atividade?: SortOrder
    data?: SortOrder
    presenca?: SortOrder
  }

  export type FrequenciaAvgOrderByAggregateInput = {
    id_frequencia?: SortOrder
    id_crianca?: SortOrder
  }

  export type FrequenciaMaxOrderByAggregateInput = {
    id_frequencia?: SortOrder
    id_crianca?: SortOrder
    atividade?: SortOrder
    data?: SortOrder
    presenca?: SortOrder
  }

  export type FrequenciaMinOrderByAggregateInput = {
    id_frequencia?: SortOrder
    id_crianca?: SortOrder
    atividade?: SortOrder
    data?: SortOrder
    presenca?: SortOrder
  }

  export type FrequenciaSumOrderByAggregateInput = {
    id_frequencia?: SortOrder
    id_crianca?: SortOrder
  }

  export type CestaBasicaCountOrderByAggregateInput = {
    id_cesta?: SortOrder
    id_responsavel?: SortOrder
    data_entrega?: SortOrder
    quantidade?: SortOrder
    observacoes?: SortOrder
  }

  export type CestaBasicaAvgOrderByAggregateInput = {
    id_cesta?: SortOrder
    id_responsavel?: SortOrder
    quantidade?: SortOrder
  }

  export type CestaBasicaMaxOrderByAggregateInput = {
    id_cesta?: SortOrder
    id_responsavel?: SortOrder
    data_entrega?: SortOrder
    quantidade?: SortOrder
    observacoes?: SortOrder
  }

  export type CestaBasicaMinOrderByAggregateInput = {
    id_cesta?: SortOrder
    id_responsavel?: SortOrder
    data_entrega?: SortOrder
    quantidade?: SortOrder
    observacoes?: SortOrder
  }

  export type CestaBasicaSumOrderByAggregateInput = {
    id_cesta?: SortOrder
    id_responsavel?: SortOrder
    quantidade?: SortOrder
  }

  export type ResponsavelCreateNestedOneWithoutCriancasInput = {
    create?: XOR<ResponsavelCreateWithoutCriancasInput, ResponsavelUncheckedCreateWithoutCriancasInput>
    connectOrCreate?: ResponsavelCreateOrConnectWithoutCriancasInput
    connect?: ResponsavelWhereUniqueInput
  }

  export type FrequenciaCreateNestedManyWithoutCriancaInput = {
    create?: XOR<FrequenciaCreateWithoutCriancaInput, FrequenciaUncheckedCreateWithoutCriancaInput> | FrequenciaCreateWithoutCriancaInput[] | FrequenciaUncheckedCreateWithoutCriancaInput[]
    connectOrCreate?: FrequenciaCreateOrConnectWithoutCriancaInput | FrequenciaCreateOrConnectWithoutCriancaInput[]
    createMany?: FrequenciaCreateManyCriancaInputEnvelope
    connect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
  }

  export type FrequenciaUncheckedCreateNestedManyWithoutCriancaInput = {
    create?: XOR<FrequenciaCreateWithoutCriancaInput, FrequenciaUncheckedCreateWithoutCriancaInput> | FrequenciaCreateWithoutCriancaInput[] | FrequenciaUncheckedCreateWithoutCriancaInput[]
    connectOrCreate?: FrequenciaCreateOrConnectWithoutCriancaInput | FrequenciaCreateOrConnectWithoutCriancaInput[]
    createMany?: FrequenciaCreateManyCriancaInputEnvelope
    connect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResponsavelUpdateOneRequiredWithoutCriancasNestedInput = {
    create?: XOR<ResponsavelCreateWithoutCriancasInput, ResponsavelUncheckedCreateWithoutCriancasInput>
    connectOrCreate?: ResponsavelCreateOrConnectWithoutCriancasInput
    upsert?: ResponsavelUpsertWithoutCriancasInput
    connect?: ResponsavelWhereUniqueInput
    update?: XOR<XOR<ResponsavelUpdateToOneWithWhereWithoutCriancasInput, ResponsavelUpdateWithoutCriancasInput>, ResponsavelUncheckedUpdateWithoutCriancasInput>
  }

  export type FrequenciaUpdateManyWithoutCriancaNestedInput = {
    create?: XOR<FrequenciaCreateWithoutCriancaInput, FrequenciaUncheckedCreateWithoutCriancaInput> | FrequenciaCreateWithoutCriancaInput[] | FrequenciaUncheckedCreateWithoutCriancaInput[]
    connectOrCreate?: FrequenciaCreateOrConnectWithoutCriancaInput | FrequenciaCreateOrConnectWithoutCriancaInput[]
    upsert?: FrequenciaUpsertWithWhereUniqueWithoutCriancaInput | FrequenciaUpsertWithWhereUniqueWithoutCriancaInput[]
    createMany?: FrequenciaCreateManyCriancaInputEnvelope
    set?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    disconnect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    delete?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    connect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    update?: FrequenciaUpdateWithWhereUniqueWithoutCriancaInput | FrequenciaUpdateWithWhereUniqueWithoutCriancaInput[]
    updateMany?: FrequenciaUpdateManyWithWhereWithoutCriancaInput | FrequenciaUpdateManyWithWhereWithoutCriancaInput[]
    deleteMany?: FrequenciaScalarWhereInput | FrequenciaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FrequenciaUncheckedUpdateManyWithoutCriancaNestedInput = {
    create?: XOR<FrequenciaCreateWithoutCriancaInput, FrequenciaUncheckedCreateWithoutCriancaInput> | FrequenciaCreateWithoutCriancaInput[] | FrequenciaUncheckedCreateWithoutCriancaInput[]
    connectOrCreate?: FrequenciaCreateOrConnectWithoutCriancaInput | FrequenciaCreateOrConnectWithoutCriancaInput[]
    upsert?: FrequenciaUpsertWithWhereUniqueWithoutCriancaInput | FrequenciaUpsertWithWhereUniqueWithoutCriancaInput[]
    createMany?: FrequenciaCreateManyCriancaInputEnvelope
    set?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    disconnect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    delete?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    connect?: FrequenciaWhereUniqueInput | FrequenciaWhereUniqueInput[]
    update?: FrequenciaUpdateWithWhereUniqueWithoutCriancaInput | FrequenciaUpdateWithWhereUniqueWithoutCriancaInput[]
    updateMany?: FrequenciaUpdateManyWithWhereWithoutCriancaInput | FrequenciaUpdateManyWithWhereWithoutCriancaInput[]
    deleteMany?: FrequenciaScalarWhereInput | FrequenciaScalarWhereInput[]
  }

  export type CriancaCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<CriancaCreateWithoutResponsavelInput, CriancaUncheckedCreateWithoutResponsavelInput> | CriancaCreateWithoutResponsavelInput[] | CriancaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: CriancaCreateOrConnectWithoutResponsavelInput | CriancaCreateOrConnectWithoutResponsavelInput[]
    createMany?: CriancaCreateManyResponsavelInputEnvelope
    connect?: CriancaWhereUniqueInput | CriancaWhereUniqueInput[]
  }

  export type CestaBasicaCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<CestaBasicaCreateWithoutResponsavelInput, CestaBasicaUncheckedCreateWithoutResponsavelInput> | CestaBasicaCreateWithoutResponsavelInput[] | CestaBasicaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: CestaBasicaCreateOrConnectWithoutResponsavelInput | CestaBasicaCreateOrConnectWithoutResponsavelInput[]
    createMany?: CestaBasicaCreateManyResponsavelInputEnvelope
    connect?: CestaBasicaWhereUniqueInput | CestaBasicaWhereUniqueInput[]
  }

  export type CriancaUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<CriancaCreateWithoutResponsavelInput, CriancaUncheckedCreateWithoutResponsavelInput> | CriancaCreateWithoutResponsavelInput[] | CriancaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: CriancaCreateOrConnectWithoutResponsavelInput | CriancaCreateOrConnectWithoutResponsavelInput[]
    createMany?: CriancaCreateManyResponsavelInputEnvelope
    connect?: CriancaWhereUniqueInput | CriancaWhereUniqueInput[]
  }

  export type CestaBasicaUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<CestaBasicaCreateWithoutResponsavelInput, CestaBasicaUncheckedCreateWithoutResponsavelInput> | CestaBasicaCreateWithoutResponsavelInput[] | CestaBasicaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: CestaBasicaCreateOrConnectWithoutResponsavelInput | CestaBasicaCreateOrConnectWithoutResponsavelInput[]
    createMany?: CestaBasicaCreateManyResponsavelInputEnvelope
    connect?: CestaBasicaWhereUniqueInput | CestaBasicaWhereUniqueInput[]
  }

  export type CriancaUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<CriancaCreateWithoutResponsavelInput, CriancaUncheckedCreateWithoutResponsavelInput> | CriancaCreateWithoutResponsavelInput[] | CriancaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: CriancaCreateOrConnectWithoutResponsavelInput | CriancaCreateOrConnectWithoutResponsavelInput[]
    upsert?: CriancaUpsertWithWhereUniqueWithoutResponsavelInput | CriancaUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: CriancaCreateManyResponsavelInputEnvelope
    set?: CriancaWhereUniqueInput | CriancaWhereUniqueInput[]
    disconnect?: CriancaWhereUniqueInput | CriancaWhereUniqueInput[]
    delete?: CriancaWhereUniqueInput | CriancaWhereUniqueInput[]
    connect?: CriancaWhereUniqueInput | CriancaWhereUniqueInput[]
    update?: CriancaUpdateWithWhereUniqueWithoutResponsavelInput | CriancaUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: CriancaUpdateManyWithWhereWithoutResponsavelInput | CriancaUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: CriancaScalarWhereInput | CriancaScalarWhereInput[]
  }

  export type CestaBasicaUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<CestaBasicaCreateWithoutResponsavelInput, CestaBasicaUncheckedCreateWithoutResponsavelInput> | CestaBasicaCreateWithoutResponsavelInput[] | CestaBasicaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: CestaBasicaCreateOrConnectWithoutResponsavelInput | CestaBasicaCreateOrConnectWithoutResponsavelInput[]
    upsert?: CestaBasicaUpsertWithWhereUniqueWithoutResponsavelInput | CestaBasicaUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: CestaBasicaCreateManyResponsavelInputEnvelope
    set?: CestaBasicaWhereUniqueInput | CestaBasicaWhereUniqueInput[]
    disconnect?: CestaBasicaWhereUniqueInput | CestaBasicaWhereUniqueInput[]
    delete?: CestaBasicaWhereUniqueInput | CestaBasicaWhereUniqueInput[]
    connect?: CestaBasicaWhereUniqueInput | CestaBasicaWhereUniqueInput[]
    update?: CestaBasicaUpdateWithWhereUniqueWithoutResponsavelInput | CestaBasicaUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: CestaBasicaUpdateManyWithWhereWithoutResponsavelInput | CestaBasicaUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: CestaBasicaScalarWhereInput | CestaBasicaScalarWhereInput[]
  }

  export type CriancaUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<CriancaCreateWithoutResponsavelInput, CriancaUncheckedCreateWithoutResponsavelInput> | CriancaCreateWithoutResponsavelInput[] | CriancaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: CriancaCreateOrConnectWithoutResponsavelInput | CriancaCreateOrConnectWithoutResponsavelInput[]
    upsert?: CriancaUpsertWithWhereUniqueWithoutResponsavelInput | CriancaUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: CriancaCreateManyResponsavelInputEnvelope
    set?: CriancaWhereUniqueInput | CriancaWhereUniqueInput[]
    disconnect?: CriancaWhereUniqueInput | CriancaWhereUniqueInput[]
    delete?: CriancaWhereUniqueInput | CriancaWhereUniqueInput[]
    connect?: CriancaWhereUniqueInput | CriancaWhereUniqueInput[]
    update?: CriancaUpdateWithWhereUniqueWithoutResponsavelInput | CriancaUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: CriancaUpdateManyWithWhereWithoutResponsavelInput | CriancaUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: CriancaScalarWhereInput | CriancaScalarWhereInput[]
  }

  export type CestaBasicaUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<CestaBasicaCreateWithoutResponsavelInput, CestaBasicaUncheckedCreateWithoutResponsavelInput> | CestaBasicaCreateWithoutResponsavelInput[] | CestaBasicaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: CestaBasicaCreateOrConnectWithoutResponsavelInput | CestaBasicaCreateOrConnectWithoutResponsavelInput[]
    upsert?: CestaBasicaUpsertWithWhereUniqueWithoutResponsavelInput | CestaBasicaUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: CestaBasicaCreateManyResponsavelInputEnvelope
    set?: CestaBasicaWhereUniqueInput | CestaBasicaWhereUniqueInput[]
    disconnect?: CestaBasicaWhereUniqueInput | CestaBasicaWhereUniqueInput[]
    delete?: CestaBasicaWhereUniqueInput | CestaBasicaWhereUniqueInput[]
    connect?: CestaBasicaWhereUniqueInput | CestaBasicaWhereUniqueInput[]
    update?: CestaBasicaUpdateWithWhereUniqueWithoutResponsavelInput | CestaBasicaUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: CestaBasicaUpdateManyWithWhereWithoutResponsavelInput | CestaBasicaUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: CestaBasicaScalarWhereInput | CestaBasicaScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuario
  }

  export type CriancaCreateNestedOneWithoutFrequenciasInput = {
    create?: XOR<CriancaCreateWithoutFrequenciasInput, CriancaUncheckedCreateWithoutFrequenciasInput>
    connectOrCreate?: CriancaCreateOrConnectWithoutFrequenciasInput
    connect?: CriancaWhereUniqueInput
  }

  export type CriancaUpdateOneRequiredWithoutFrequenciasNestedInput = {
    create?: XOR<CriancaCreateWithoutFrequenciasInput, CriancaUncheckedCreateWithoutFrequenciasInput>
    connectOrCreate?: CriancaCreateOrConnectWithoutFrequenciasInput
    upsert?: CriancaUpsertWithoutFrequenciasInput
    connect?: CriancaWhereUniqueInput
    update?: XOR<XOR<CriancaUpdateToOneWithWhereWithoutFrequenciasInput, CriancaUpdateWithoutFrequenciasInput>, CriancaUncheckedUpdateWithoutFrequenciasInput>
  }

  export type ResponsavelCreateNestedOneWithoutCestasBasicasInput = {
    create?: XOR<ResponsavelCreateWithoutCestasBasicasInput, ResponsavelUncheckedCreateWithoutCestasBasicasInput>
    connectOrCreate?: ResponsavelCreateOrConnectWithoutCestasBasicasInput
    connect?: ResponsavelWhereUniqueInput
  }

  export type ResponsavelUpdateOneRequiredWithoutCestasBasicasNestedInput = {
    create?: XOR<ResponsavelCreateWithoutCestasBasicasInput, ResponsavelUncheckedCreateWithoutCestasBasicasInput>
    connectOrCreate?: ResponsavelCreateOrConnectWithoutCestasBasicasInput
    upsert?: ResponsavelUpsertWithoutCestasBasicasInput
    connect?: ResponsavelWhereUniqueInput
    update?: XOR<XOR<ResponsavelUpdateToOneWithWhereWithoutCestasBasicasInput, ResponsavelUpdateWithoutCestasBasicasInput>, ResponsavelUncheckedUpdateWithoutCestasBasicasInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type ResponsavelCreateWithoutCriancasInput = {
    nome: string
    cpf: string
    rg: string
    parentesco_com_crianca: string
    telefone: string
    email: string
    ocupacao: string
    endereco: string
    cestasBasicas?: CestaBasicaCreateNestedManyWithoutResponsavelInput
  }

  export type ResponsavelUncheckedCreateWithoutCriancasInput = {
    id_responsavel?: number
    nome: string
    cpf: string
    rg: string
    parentesco_com_crianca: string
    telefone: string
    email: string
    ocupacao: string
    endereco: string
    cestasBasicas?: CestaBasicaUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type ResponsavelCreateOrConnectWithoutCriancasInput = {
    where: ResponsavelWhereUniqueInput
    create: XOR<ResponsavelCreateWithoutCriancasInput, ResponsavelUncheckedCreateWithoutCriancasInput>
  }

  export type FrequenciaCreateWithoutCriancaInput = {
    atividade: string
    data: Date | string
    presenca: boolean
  }

  export type FrequenciaUncheckedCreateWithoutCriancaInput = {
    id_frequencia?: number
    atividade: string
    data: Date | string
    presenca: boolean
  }

  export type FrequenciaCreateOrConnectWithoutCriancaInput = {
    where: FrequenciaWhereUniqueInput
    create: XOR<FrequenciaCreateWithoutCriancaInput, FrequenciaUncheckedCreateWithoutCriancaInput>
  }

  export type FrequenciaCreateManyCriancaInputEnvelope = {
    data: FrequenciaCreateManyCriancaInput | FrequenciaCreateManyCriancaInput[]
    skipDuplicates?: boolean
  }

  export type ResponsavelUpsertWithoutCriancasInput = {
    update: XOR<ResponsavelUpdateWithoutCriancasInput, ResponsavelUncheckedUpdateWithoutCriancasInput>
    create: XOR<ResponsavelCreateWithoutCriancasInput, ResponsavelUncheckedCreateWithoutCriancasInput>
    where?: ResponsavelWhereInput
  }

  export type ResponsavelUpdateToOneWithWhereWithoutCriancasInput = {
    where?: ResponsavelWhereInput
    data: XOR<ResponsavelUpdateWithoutCriancasInput, ResponsavelUncheckedUpdateWithoutCriancasInput>
  }

  export type ResponsavelUpdateWithoutCriancasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    parentesco_com_crianca?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cestasBasicas?: CestaBasicaUpdateManyWithoutResponsavelNestedInput
  }

  export type ResponsavelUncheckedUpdateWithoutCriancasInput = {
    id_responsavel?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    parentesco_com_crianca?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cestasBasicas?: CestaBasicaUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type FrequenciaUpsertWithWhereUniqueWithoutCriancaInput = {
    where: FrequenciaWhereUniqueInput
    update: XOR<FrequenciaUpdateWithoutCriancaInput, FrequenciaUncheckedUpdateWithoutCriancaInput>
    create: XOR<FrequenciaCreateWithoutCriancaInput, FrequenciaUncheckedCreateWithoutCriancaInput>
  }

  export type FrequenciaUpdateWithWhereUniqueWithoutCriancaInput = {
    where: FrequenciaWhereUniqueInput
    data: XOR<FrequenciaUpdateWithoutCriancaInput, FrequenciaUncheckedUpdateWithoutCriancaInput>
  }

  export type FrequenciaUpdateManyWithWhereWithoutCriancaInput = {
    where: FrequenciaScalarWhereInput
    data: XOR<FrequenciaUpdateManyMutationInput, FrequenciaUncheckedUpdateManyWithoutCriancaInput>
  }

  export type FrequenciaScalarWhereInput = {
    AND?: FrequenciaScalarWhereInput | FrequenciaScalarWhereInput[]
    OR?: FrequenciaScalarWhereInput[]
    NOT?: FrequenciaScalarWhereInput | FrequenciaScalarWhereInput[]
    id_frequencia?: IntFilter<"Frequencia"> | number
    id_crianca?: IntFilter<"Frequencia"> | number
    atividade?: StringFilter<"Frequencia"> | string
    data?: DateTimeFilter<"Frequencia"> | Date | string
    presenca?: BoolFilter<"Frequencia"> | boolean
  }

  export type CriancaCreateWithoutResponsavelInput = {
    nome: string
    data_nascimento: Date | string
    rg: string
    cpf: string
    frequencias?: FrequenciaCreateNestedManyWithoutCriancaInput
  }

  export type CriancaUncheckedCreateWithoutResponsavelInput = {
    id_crianca?: number
    nome: string
    data_nascimento: Date | string
    rg: string
    cpf: string
    frequencias?: FrequenciaUncheckedCreateNestedManyWithoutCriancaInput
  }

  export type CriancaCreateOrConnectWithoutResponsavelInput = {
    where: CriancaWhereUniqueInput
    create: XOR<CriancaCreateWithoutResponsavelInput, CriancaUncheckedCreateWithoutResponsavelInput>
  }

  export type CriancaCreateManyResponsavelInputEnvelope = {
    data: CriancaCreateManyResponsavelInput | CriancaCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type CestaBasicaCreateWithoutResponsavelInput = {
    data_entrega: Date | string
    quantidade: number
    observacoes: string
  }

  export type CestaBasicaUncheckedCreateWithoutResponsavelInput = {
    id_cesta?: number
    data_entrega: Date | string
    quantidade: number
    observacoes: string
  }

  export type CestaBasicaCreateOrConnectWithoutResponsavelInput = {
    where: CestaBasicaWhereUniqueInput
    create: XOR<CestaBasicaCreateWithoutResponsavelInput, CestaBasicaUncheckedCreateWithoutResponsavelInput>
  }

  export type CestaBasicaCreateManyResponsavelInputEnvelope = {
    data: CestaBasicaCreateManyResponsavelInput | CestaBasicaCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type CriancaUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: CriancaWhereUniqueInput
    update: XOR<CriancaUpdateWithoutResponsavelInput, CriancaUncheckedUpdateWithoutResponsavelInput>
    create: XOR<CriancaCreateWithoutResponsavelInput, CriancaUncheckedCreateWithoutResponsavelInput>
  }

  export type CriancaUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: CriancaWhereUniqueInput
    data: XOR<CriancaUpdateWithoutResponsavelInput, CriancaUncheckedUpdateWithoutResponsavelInput>
  }

  export type CriancaUpdateManyWithWhereWithoutResponsavelInput = {
    where: CriancaScalarWhereInput
    data: XOR<CriancaUpdateManyMutationInput, CriancaUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type CriancaScalarWhereInput = {
    AND?: CriancaScalarWhereInput | CriancaScalarWhereInput[]
    OR?: CriancaScalarWhereInput[]
    NOT?: CriancaScalarWhereInput | CriancaScalarWhereInput[]
    id_crianca?: IntFilter<"Crianca"> | number
    id_responsavel?: IntFilter<"Crianca"> | number
    nome?: StringFilter<"Crianca"> | string
    data_nascimento?: DateTimeFilter<"Crianca"> | Date | string
    rg?: StringFilter<"Crianca"> | string
    cpf?: StringFilter<"Crianca"> | string
  }

  export type CestaBasicaUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: CestaBasicaWhereUniqueInput
    update: XOR<CestaBasicaUpdateWithoutResponsavelInput, CestaBasicaUncheckedUpdateWithoutResponsavelInput>
    create: XOR<CestaBasicaCreateWithoutResponsavelInput, CestaBasicaUncheckedCreateWithoutResponsavelInput>
  }

  export type CestaBasicaUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: CestaBasicaWhereUniqueInput
    data: XOR<CestaBasicaUpdateWithoutResponsavelInput, CestaBasicaUncheckedUpdateWithoutResponsavelInput>
  }

  export type CestaBasicaUpdateManyWithWhereWithoutResponsavelInput = {
    where: CestaBasicaScalarWhereInput
    data: XOR<CestaBasicaUpdateManyMutationInput, CestaBasicaUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type CestaBasicaScalarWhereInput = {
    AND?: CestaBasicaScalarWhereInput | CestaBasicaScalarWhereInput[]
    OR?: CestaBasicaScalarWhereInput[]
    NOT?: CestaBasicaScalarWhereInput | CestaBasicaScalarWhereInput[]
    id_cesta?: IntFilter<"CestaBasica"> | number
    id_responsavel?: IntFilter<"CestaBasica"> | number
    data_entrega?: DateTimeFilter<"CestaBasica"> | Date | string
    quantidade?: IntFilter<"CestaBasica"> | number
    observacoes?: StringFilter<"CestaBasica"> | string
  }

  export type CriancaCreateWithoutFrequenciasInput = {
    nome: string
    data_nascimento: Date | string
    rg: string
    cpf: string
    responsavel: ResponsavelCreateNestedOneWithoutCriancasInput
  }

  export type CriancaUncheckedCreateWithoutFrequenciasInput = {
    id_crianca?: number
    id_responsavel: number
    nome: string
    data_nascimento: Date | string
    rg: string
    cpf: string
  }

  export type CriancaCreateOrConnectWithoutFrequenciasInput = {
    where: CriancaWhereUniqueInput
    create: XOR<CriancaCreateWithoutFrequenciasInput, CriancaUncheckedCreateWithoutFrequenciasInput>
  }

  export type CriancaUpsertWithoutFrequenciasInput = {
    update: XOR<CriancaUpdateWithoutFrequenciasInput, CriancaUncheckedUpdateWithoutFrequenciasInput>
    create: XOR<CriancaCreateWithoutFrequenciasInput, CriancaUncheckedCreateWithoutFrequenciasInput>
    where?: CriancaWhereInput
  }

  export type CriancaUpdateToOneWithWhereWithoutFrequenciasInput = {
    where?: CriancaWhereInput
    data: XOR<CriancaUpdateWithoutFrequenciasInput, CriancaUncheckedUpdateWithoutFrequenciasInput>
  }

  export type CriancaUpdateWithoutFrequenciasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsavel?: ResponsavelUpdateOneRequiredWithoutCriancasNestedInput
  }

  export type CriancaUncheckedUpdateWithoutFrequenciasInput = {
    id_crianca?: IntFieldUpdateOperationsInput | number
    id_responsavel?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsavelCreateWithoutCestasBasicasInput = {
    nome: string
    cpf: string
    rg: string
    parentesco_com_crianca: string
    telefone: string
    email: string
    ocupacao: string
    endereco: string
    criancas?: CriancaCreateNestedManyWithoutResponsavelInput
  }

  export type ResponsavelUncheckedCreateWithoutCestasBasicasInput = {
    id_responsavel?: number
    nome: string
    cpf: string
    rg: string
    parentesco_com_crianca: string
    telefone: string
    email: string
    ocupacao: string
    endereco: string
    criancas?: CriancaUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type ResponsavelCreateOrConnectWithoutCestasBasicasInput = {
    where: ResponsavelWhereUniqueInput
    create: XOR<ResponsavelCreateWithoutCestasBasicasInput, ResponsavelUncheckedCreateWithoutCestasBasicasInput>
  }

  export type ResponsavelUpsertWithoutCestasBasicasInput = {
    update: XOR<ResponsavelUpdateWithoutCestasBasicasInput, ResponsavelUncheckedUpdateWithoutCestasBasicasInput>
    create: XOR<ResponsavelCreateWithoutCestasBasicasInput, ResponsavelUncheckedCreateWithoutCestasBasicasInput>
    where?: ResponsavelWhereInput
  }

  export type ResponsavelUpdateToOneWithWhereWithoutCestasBasicasInput = {
    where?: ResponsavelWhereInput
    data: XOR<ResponsavelUpdateWithoutCestasBasicasInput, ResponsavelUncheckedUpdateWithoutCestasBasicasInput>
  }

  export type ResponsavelUpdateWithoutCestasBasicasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    parentesco_com_crianca?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criancas?: CriancaUpdateManyWithoutResponsavelNestedInput
  }

  export type ResponsavelUncheckedUpdateWithoutCestasBasicasInput = {
    id_responsavel?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    parentesco_com_crianca?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    criancas?: CriancaUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type FrequenciaCreateManyCriancaInput = {
    id_frequencia?: number
    atividade: string
    data: Date | string
    presenca: boolean
  }

  export type FrequenciaUpdateWithoutCriancaInput = {
    atividade?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presenca?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FrequenciaUncheckedUpdateWithoutCriancaInput = {
    id_frequencia?: IntFieldUpdateOperationsInput | number
    atividade?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presenca?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FrequenciaUncheckedUpdateManyWithoutCriancaInput = {
    id_frequencia?: IntFieldUpdateOperationsInput | number
    atividade?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    presenca?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CriancaCreateManyResponsavelInput = {
    id_crianca?: number
    nome: string
    data_nascimento: Date | string
    rg: string
    cpf: string
  }

  export type CestaBasicaCreateManyResponsavelInput = {
    id_cesta?: number
    data_entrega: Date | string
    quantidade: number
    observacoes: string
  }

  export type CriancaUpdateWithoutResponsavelInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    frequencias?: FrequenciaUpdateManyWithoutCriancaNestedInput
  }

  export type CriancaUncheckedUpdateWithoutResponsavelInput = {
    id_crianca?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    frequencias?: FrequenciaUncheckedUpdateManyWithoutCriancaNestedInput
  }

  export type CriancaUncheckedUpdateManyWithoutResponsavelInput = {
    id_crianca?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type CestaBasicaUpdateWithoutResponsavelInput = {
    data_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type CestaBasicaUncheckedUpdateWithoutResponsavelInput = {
    id_cesta?: IntFieldUpdateOperationsInput | number
    data_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type CestaBasicaUncheckedUpdateManyWithoutResponsavelInput = {
    id_cesta?: IntFieldUpdateOperationsInput | number
    data_entrega?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
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