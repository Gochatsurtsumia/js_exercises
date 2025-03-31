
//3
type MyOmit<T, K extends keyof T> = {
    [p in keyof T as p extends K ? never: p]: T[p];
};
//4
type MyPick<T, K extends keyof T> = {
    [p in K]: T[p]
}
//5
type GetReadonlyKeys<T> = {
    [K in keyof T]: [T] extends [{ readonly [P in K]: T[K] }] ? K : never;
  }[keyof T];

//6
type ComputedReturns<C> = {
    [K in keyof C]: C[K] extends (...args: any[]) => infer R ? R : never
  }
  
  declare function SimpleVue<D, C extends Record<string, () => any>, M>(
    options: {
      data: (this: void) => D
      computed: C
      methods: M
    } & ThisType<D & ComputedReturns<C> & M>
  ): any
//7
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
//8
type MyReadonly2<T, K extends keyof T = keyof T> = 
  Readonly<Pick<T, K>> & 
  Omit<T, K>
  //9
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends Function ? T[K]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
  }
//10
type TupleToUnion<T extends readonly any[]> = T[number];
//11
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};
//14
type First<T extends any[]> = T extends []?never : T[0]

//18
type TupleLength<T extends readonly any[]> = T['length'];
//43
type MyExclude<T, U> = T extends U ? never : T;
//189
type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;
//268
type If<C extends boolean, T, F> = C extends true? T:F
//533
type Concat<T extends unknown[], U extends unknown[]> = [...T,...U]
//898
type Equal<A, B> = 
  (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) 
    ? true 
    : false;

type Includes<T extends readonly any[], U> = 
  T extends [infer First, ...infer Rest]
    ? Equal<First, U> extends true
      ? true
      : Includes<Rest, U>
    : false;
  //3057
  type Push<T extends any[], U> = [...T,U]
//3060
type Unshift<T extends any[], U> = [U,...T]
//3312
type MyParameters<T extends (...args: any) => any> = 
  T extends (...args: infer P) => any 
    ? P 
    : never;
//

