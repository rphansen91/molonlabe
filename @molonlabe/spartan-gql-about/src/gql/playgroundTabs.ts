import { AboutDocument } from './about/documents';

export default (endpoint: string) => [
  {
    endpoint,
    name: 'About',
    query: AboutDocument.loc.source.body,
  },
];
