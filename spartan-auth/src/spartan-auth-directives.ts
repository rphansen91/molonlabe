import { defaultFieldResolver } from 'graphql';
import { SchemaDirectiveVisitor } from 'apollo-server';
import { ISpartanAuthContext } from './spartan-auth-context';

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(
      p: any,
      a: any,
      c: ISpartanAuthContext,
      i: any
    ) {
      const userId = c.userId;
      if (!userId) throw new Error('Must be authenticated');
      return resolve(p, a, c, i);
    };
  }
}

class PermissionsDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;
    const { creds } = this.args;
    field.resolve = async function(
      p: any,
      a: any,
      c: ISpartanAuthContext,
      i: any
    ) {
      const userId = c.userId;
      if (!userId) throw new Error('Must be authenticated');
      const doc = c.permissions;
      if (!doc) {
        throw new Error('Must have credentials');
      }
      for (const cred of creds) {
        if (!(doc as any)[cred]) {
          throw new Error(`${cred} permissions required`);
        }
      }
      return resolve(p, a, c, i);
    };
  }
}

export const spartaAuthDirectives = {
  permissions: PermissionsDirective,
  auth: AuthDirective,
};
