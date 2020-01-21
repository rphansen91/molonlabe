import get from 'lodash/fp/get';
import flow from 'lodash/flow';
import curry from 'lodash/curry';
import toLower from 'lodash/toLower';
import toUpper from 'lodash/toUpper';
import { IncomingHttpHeaders } from 'http';

export type ISpartanPermissions = { [permission: string]: boolean } | null;

export type ISpartanHeaders = {
  ip: string;
  token: string;
};

export type ISpartanAuthContext = ISpartanHeaders & {
  userId: string;
  permissions: ISpartanPermissions;
};

export function spartanAuthDefaultContext(): ISpartanAuthContext {
  return {
    ip: '',
    token: '',
    userId: '',
    permissions: null,
  };
}

export function spartanHeaders(event: any): ISpartanHeaders {
  const ip = getXForwardedFor(event) || getRemoteAddress(event);
  const token = getXAuthToken(event);
  return {
    ip,
    token,
  };
}

export const getXForwardedFor = getRequestHeader('X-Forwarded-For');
export const getXAuthToken = getRequestHeader('X-Auth-Token');

export function getRemoteAddress(event: any): string {
  return (
    get('connection.remoteAddress', event) ||
    get('req.connection.remoteAddress', event)
  );
}

export function getHeaders(event: any): IncomingHttpHeaders {
  return get('headers', event) || get('req.headers', event);
}

export function getHeader(name: string, headers: IncomingHttpHeaders): string {
  return ([] as string[])
    .concat(
      get(name, headers) ||
        get(toUpper(name), headers) ||
        get(toLower(name), headers) ||
        ''
    )
    .join('');
}

export function getRequestHeader(name: string): (event: any) => string {
  return flow(getHeaders, curry(getHeader)(name));
}
