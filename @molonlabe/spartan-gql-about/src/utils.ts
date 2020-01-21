import { execSync } from 'child_process';
import replace from 'lodash/fp/replace';
import flow from 'lodash/flow';
import trim from 'lodash/trim';

const fromBuffer = (buffer: Buffer) => buffer.toString('utf8');
const parseResult = flow(fromBuffer, replace(/\n/g, ''), trim);

export function getCurrentGitUrl() {
  const buffer = execSync('git remote get-url origin');
  const revision = parseResult(buffer);
  return revision;
}

export function getCurrentGitSha() {
  const buffer = execSync('git rev-parse --short HEAD');
  const revision = parseResult(buffer);
  return revision;
}
