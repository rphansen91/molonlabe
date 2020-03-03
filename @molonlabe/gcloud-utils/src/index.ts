export * from './spartan-utils-types';

const { google } = require('googleapis');
const compute = google.compute('v1');
const scopes = ['https://www.googleapis.com/auth/compute'];

export async function listTemplates() {
  const auth = new google.auth.GoogleAuth({ scopes });
  const authClient = await auth.getClient();
  const project = await auth.getProjectId();
  console.log(project);
  const result = await compute.instanceTemplates.list({
    project,
    auth: authClient,
  });
  return result;
}

export async function getTemplate(instanceTemplate: string) {
  const auth = new google.auth.GoogleAuth({ scopes });
  const authClient = await auth.getClient();
  const project = await auth.getProjectId();
  const result = await compute.instanceTemplates.get({
    project,
    instanceTemplate,
    auth: authClient,
  });
  return result;
}

export async function cloneTemplate(instanceTemplate: string) {
  const template = await getTemplate(instanceTemplate);
  console.log(template);
  return template;
}
