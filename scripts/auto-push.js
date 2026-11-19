#!/usr/bin/env node
/**
 * Automated Push & CI/CD Trigger Helper
 * Usage:
 *   npm run push
 *   npm run push "feat: add dynamic banner support"
 */
const { execSync } = require('child_process');

function run(cmd, options = {}) {
  try {
    return execSync(cmd, { stdio: options.silent ? 'pipe' : 'inherit', encoding: 'utf-8', ...options });
  } catch (error) {
    if (!options.allowFail) {
      console.error(`\n❌ Command failed: ${cmd}`);
      process.exit(1);
    }
    return null;
  }
}

async function main() {
  console.log('\n🚀 [KD-INFOVISION] Automated Push & CI/CD Trigger\n');

  // 1. Check for uncommitted changes
  const status = run('git status --porcelain', { silent: true });
  if (!status || !status.trim()) {
    console.log('✨ Working tree is already clean. Nothing new to commit.');
    
    // Check if there are unpushed commits
    try {
      const unpushed = run('git log origin/main..HEAD --oneline', { silent: true });
      if (unpushed && unpushed.trim()) {
        console.log('📤 Found unpushed commits. Pushing to origin main...');
        run('git push origin main');
        console.log('\n✅ Successfully pushed to origin main! CI/CD pipeline triggered.');
        return;
      }
    } catch (_) {}

    console.log('Everything is up to date with origin/main.\n');
    return;
  }

  // 2. Validate schema and models before pushing
  console.log('🔍 Running pre-push schema & build verification...');
  try {
    run('node scripts/verify-cms.js');
  } catch (err) {
    console.error('❌ Pre-push verification failed. Please fix errors before pushing.');
    process.exit(1);
  }

  // 3. Determine commit message
  const args = process.argv.slice(2).join(' ').trim();
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const commitMsg = args || `auto: synchronize updates [${timestamp}]`;

  console.log(`\n📦 Staging changes and committing: "${commitMsg}"`);
  run('git add .');
  run(`git commit -m "${commitMsg}"`);

  // 4. Push to remote
  console.log('\n🌐 Pushing to origin main to trigger automated CI/CD pipeline...');
  run('git push origin main');

  console.log('\n✅ Push successful! GitHub Actions CI/CD has been automatically triggered.');
  console.log('   Monitor your pipeline at: https://github.com/Karan-975/KD-INFOVISION/actions\n');
}

main().catch((err) => {
  console.error('❌ Auto-push error:', err);
  process.exit(1);
});
