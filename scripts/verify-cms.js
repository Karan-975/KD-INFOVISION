/**
 * CI Health & Schema Verification Script
 * Validates Prisma models and project configurations during CI
 */
const { PrismaClient } = require('@prisma/client');

async function verify() {
  console.log('--- CI Schema & Build Verification ---');
  
  // 1. Verify Prisma Client initialization
  const prisma = new PrismaClient();
  console.log('✓ Prisma Client initialized successfully.');

  // Check required models
  const requiredModels = [
    'adminUser',
    'siteSetting',
    'heroSlide',
    'service',
    'statCounter',
    'industry',
    'whyUsPillar',
    'caseStudy',
    'partner',
    'inquiry'
  ];

  for (const model of requiredModels) {
    if (typeof prisma[model] === 'undefined') {
      throw new Error(`Prisma model '${model}' is missing from generated client!`);
    }
  }
  console.log(`✓ All ${requiredModels.length} Prisma schema models validated.`);

  console.log('✓ CI Verification completed successfully.\n');
  process.exit(0);
}

verify().catch((err) => {
  console.error('Verification failed:', err.message);
  process.exit(1);
});
