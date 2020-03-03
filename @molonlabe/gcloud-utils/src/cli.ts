#!/usr/bin/env node

import commander from 'commander';
import { listTemplates, getTemplate, cloneTemplate } from './';
const pkg = require('../package.json');

commander.version(pkg.version);

commander
  .command('list')
  .description('List gcloud instance templates')
  .action(async () => {
    console.log(await listTemplates());
  });

commander
  .command('get <instanceTemplate>')
  .description('Get gcloud instance templates')
  .action(async instanceTemplate => {
    console.log(await getTemplate(instanceTemplate));
  });

commander
  .command('build')
  .description('Build sparta application')
  .action(() => {
    console.log('BUILD');
  });

commander
  .command('deploy')
  .description('Deploy sparta application')
  .action(() => {
    console.log('DEPLOY');
  });

commander.parse(process.argv);
