import { IConfig } from '../config';
import { ThenArg } from '@molonlabe/spartan-utils';

export type IOrm = ThenArg<ReturnType<typeof ormFactory>>;

export async function ormFactory(config: IConfig) {
  return {};
}
