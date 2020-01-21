import lodash from 'lodash';
import { ThenArg } from '@molonlabe/spartan-utils';

export interface IFlow {
  <A extends any[], R1, R2, R3, R4, R5, R6, R7>(
    f1: (...args: A) => R1,
    f2: (a: ThenArg<R1>) => R2,
    f3: (a: ThenArg<R1> & ThenArg<R2>) => R3,
    f4: (a: ThenArg<R1> & ThenArg<R2> & ThenArg<R3>) => R4,
    f5: (a: ThenArg<R1> & ThenArg<R2> & ThenArg<R3> & ThenArg<R4>) => R5,
    f6: (
      a: ThenArg<R1> & ThenArg<R2> & ThenArg<R3> & ThenArg<R4> & ThenArg<R5>
    ) => R6,
    f7: (
      a: ThenArg<R1> &
        ThenArg<R2> &
        ThenArg<R3> &
        ThenArg<R4> &
        ThenArg<R5> &
        ThenArg<R6>
    ) => R7
  ): (
    ...args: A
  ) => Promise<
    ThenArg<R1> &
      ThenArg<R2> &
      ThenArg<R3> &
      ThenArg<R4> &
      ThenArg<R5> &
      ThenArg<R6> &
      ThenArg<R7>
  >;
  <A extends any[], R1, R2, R3, R4, R5, R6, R7>(
    f1: (...args: A) => R1,
    f2: (a: ThenArg<R1>) => R2,
    f3: (a: ThenArg<R1> & ThenArg<R2>) => R3,
    f4: (a: ThenArg<R1> & ThenArg<R2> & ThenArg<R3>) => R4,
    f5: (a: ThenArg<R1> & ThenArg<R2> & ThenArg<R3> & ThenArg<R4>) => R5,
    f6: (
      a: ThenArg<R1> & ThenArg<R2> & ThenArg<R3> & ThenArg<R4> & ThenArg<R5>
    ) => R6,
    f7: (
      a: ThenArg<R1> &
        ThenArg<R2> &
        ThenArg<R3> &
        ThenArg<R4> &
        ThenArg<R5> &
        ThenArg<R6>
    ) => R7,
    ...func: Array<lodash.Many<(a: any) => any>>
  ): (...args: A) => any;
  <A extends any[], R1, R2, R3, R4, R5, R6>(
    f1: (...args: A) => R1,
    f2: (a: ThenArg<R1>) => R2,
    f3: (a: ThenArg<R1> & ThenArg<R2>) => R3,
    f4: (a: ThenArg<R1> & ThenArg<R2> & ThenArg<R3>) => R4,
    f5: (a: ThenArg<R1> & ThenArg<R2> & ThenArg<R3> & ThenArg<R4>) => R5,
    f6: (
      a: ThenArg<R1> & ThenArg<R2> & ThenArg<R3> & ThenArg<R4> & ThenArg<R5>
    ) => R6
  ): (
    ...args: A
  ) => Promise<
    ThenArg<R1> &
      ThenArg<R2> &
      ThenArg<R3> &
      ThenArg<R4> &
      ThenArg<R5> &
      ThenArg<R6>
  >;
  <A extends any[], R1, R2, R3, R4, R5>(
    f1: (...args: A) => R1,
    f2: (a: ThenArg<R1>) => R2,
    f3: (a: ThenArg<R1> & ThenArg<R2>) => R3,
    f4: (a: ThenArg<R1> & ThenArg<R2> & ThenArg<R3>) => R4,
    f5: (a: ThenArg<R1> & ThenArg<R2> & ThenArg<R3> & ThenArg<R4>) => R5
  ): (
    ...args: A
  ) => Promise<
    ThenArg<R1> & ThenArg<R2> & ThenArg<R3> & ThenArg<R4> & ThenArg<R5>
  >;
  <A extends any[], R1, R2, R3, R4>(
    f1: (...args: A) => R1,
    f2: (a: ThenArg<R1>) => R2,
    f3: (a: ThenArg<R1> & ThenArg<R2>) => R3,
    f4: (a: ThenArg<R1> & ThenArg<R2> & ThenArg<R3>) => R4
  ): (
    ...args: A
  ) => Promise<ThenArg<R1> & ThenArg<R2> & ThenArg<R3> & ThenArg<R4>>;
  <A extends any[], R1, R2, R3>(
    f1: (...args: A) => R1,
    f2: (a: ThenArg<R1>) => R2,
    f3: (a: ThenArg<R1> & ThenArg<R2>) => R3
  ): (...args: A) => Promise<ThenArg<R1> & ThenArg<R2> & ThenArg<R3>>;
  <A extends any[], R1, R2>(f1: (...args: A) => R1, f2: (a: R1) => R2): (
    ...args: A
  ) => R2;
  (...func: Array<lodash.Many<(...args: any[]) => any>>): (
    ...args: any[]
  ) => any;
}
