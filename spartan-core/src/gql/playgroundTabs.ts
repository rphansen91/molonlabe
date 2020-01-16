import { AboutDocument } from './about/documents';

export default endpoint => [
  {
    endpoint,
    name: 'About',
    query: AboutDocument.loc.source.body,
  },
];
