import { IConfig } from '../config';
import { ThenArg } from '@molonlabe/spartan-utils';

export type ICache = ThenArg<ReturnType<typeof cacheFactory>>;

export async function cacheFactory(config: IConfig) {
  return {};
}
