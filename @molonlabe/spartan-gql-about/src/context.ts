const debug = require('debug')('gql:about:context');

import { ThenArg } from '@molonlabe/spartan-utils';
import { About } from './types';

export type IContext = ThenArg<
  ReturnType<ThenArg<ReturnType<typeof buildAboutContext>>>
>;

export function buildAboutContext(about: About) {
  return async function(event: any) {
    return {
      about,
    };
  };
}
