
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
