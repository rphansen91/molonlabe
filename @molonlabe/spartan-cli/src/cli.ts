#!/usr/bin/env node

import commander from 'commander';
import {
  generateApi,
  generateModule,
  generateModuleReact,
} from './generateModule';
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

commander
  .command('generate <type> <name>')
  .description('Generate a sparta type')
  .action((type, name) => {
    switch (type) {
      case 'api':
        return generateApi(name);
      case 'react':
        return generateModuleReact(name);
      case 'module':
        return generateModule(name);
      default:
        throw new Error(`${type} invalid: One of 'api'|'react'|'module'`);
    }
  });

commander.parse(process.argv);
