import get from 'lodash/fp/get';
import flow from 'lodash/flow';
import curry from 'lodash/curry';
import toLower from 'lodash/toLower';
import toUpper from 'lodash/toUpper';
import { IncomingHttpHeaders } from 'http';

export type ISpartanPermissions = { [permission: string]: boolean } | null;

export type ISpartanAuthContext = {
  token: string;
  userId: string;
  permissions: ISpartanPermissions;
};

export const getXAuthToken = getRequestHeader('X-Auth-Token');

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
