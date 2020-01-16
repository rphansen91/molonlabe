import { IConfig } from './config';
import { ormFactory, cacheFactory, IOrm } from './stores';
import { getXAuthToken, ISpartanPermissions } from '@molonlabe/spartan-auth';
import { ThenArg } from '@molonlabe/spartan-utils';

export type IContext = ThenArg<
  ReturnType<ThenArg<ReturnType<typeof buildServerContext>>>
>;

export default async function buildServerContext(config: IConfig) {
  const cache = await cacheFactory(config);
  return async function(event: any) {
    const orm = await ormFactory(config);
    const token = await getXAuthToken(event);
    const userId = await getUserId(token);
    const permissions = await getPermissions(orm, userId);
    return {
      config,
      permissions,
      userId,
      cache,
      orm,
    };
  };
}

async function getUserId(token: string) {
  return '';
}

async function getPermissions(
  orm: IOrm,
  userId: string
): Promise<ISpartanPermissions> {
  if (!userId) return null;
  return {};
}
