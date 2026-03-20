import { spawnSync } from 'node:child_process';

const pushArgs = ['push'];

if (process.argv.includes('--dry-run')) {
  pushArgs.push('--dry-run');
}

const runGit = (args) => {
  const result = spawnSync('git', args, { stdio: 'inherit' });

  if (result.error) {
    throw result.error;
  }

  return result.status ?? 1;
};

const pullStatus = runGit(['pull', '--ff-only']);

if (pullStatus !== 0) {
  process.exit(pullStatus);
}

process.exit(runGit(pushArgs));
