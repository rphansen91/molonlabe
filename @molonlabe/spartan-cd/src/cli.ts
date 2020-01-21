#!/usr/bin/env node

import commander from 'commander';
const pkg = require('../package.json');

commander.version(pkg.version);

commander
  .command('init')
  .description('Initialize a new sparta app')
  .action(() => {
    console.log('INIT');
  });

commander
  .command('start')
  .description('Start sparta application')
  .action(() => {
    console.log('START');
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
