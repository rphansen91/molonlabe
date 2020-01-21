import { getSpartanAuthPlaygroundTabs } from '@molonlabe/spartan-gql-auth';
import { getSpartanAboutPlaygroundTabs } from '@molonlabe/spartan-gql-about';

export default endpoint =>
  [].concat(
    getSpartanAuthPlaygroundTabs(endpoint),
    getSpartanAboutPlaygroundTabs(endpoint)
  );
