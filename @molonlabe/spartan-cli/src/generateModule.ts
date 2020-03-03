import { execSync } from 'child_process';

const gitBase = `https://github.com/rphansen91/molonlabe/trunk`;

export function generateApi(name: string) {
  execSync(`svn export ${gitBase}/@molonlabe/spartan-api ${name}`);
}

export function generateModule(name: string) {
  execSync(`svn export ${gitBase}/@molonlabe/spartan-module ${name}`);
}

export function generateModuleReact(name: string) {
  execSync(`svn export ${gitBase}/@molonlabe/spartan-module-react ${name}`);
}
