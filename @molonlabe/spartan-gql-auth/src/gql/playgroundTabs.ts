import MeDocument from './auth/documents/me';
import UserByIdDocument from './auth/documents/userById';
import UserByEmailDocument from './auth/documents/userByEmail';

export default (endpoint: string) => [
  {
    endpoint,
    name: 'Me',
    query: MeDocument!.loc!.source.body,
  },
  {
    endpoint,
    name: 'UserById',
    query: UserByIdDocument!.loc!.source.body,
  },
  {
    endpoint,
    name: 'UserByEmail',
    query: UserByEmailDocument!.loc!.source.body,
  },
];
