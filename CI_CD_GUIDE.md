# KD-INFOVISION — CI/CD & Automated Deployment Guide

This repository is equipped with a complete **Continuous Integration & Continuous Deployment (CI/CD)** pipeline powered by **GitHub Actions**, **Docker**, and **Turbopack Next.js 16 Standalone**.

---

## 🚀 How It Works (Zero Manual Effort)

Every time code is pushed to `main` (either through standard Git or via the automated `npm run push` command):

```
Local Code Changes ──► npm run push ──► GitHub (origin/main)
                                              │
                      ┌───────────────────────┴───────────────────────┐
                      ▼                                               ▼
               1. CI Pipeline                                  2. CD Pipeline
         • npm ci                                      • Automated GHCR Docker Container
         • Prisma Model Validation (npm test)          • Optional Vercel Live Deployment
         • Next.js Production Build                    • Optional VPS / SSH Auto-Deploy
```

---

## 🛠️ 1. Quick 1-Command Push (`npm run push`)

Instead of running `git add`, `git commit`, and `git push` manually every time, you can now push with a single command:

```bash
# Push with automatic timestamped commit message:
npm run push

# Push with a custom message:
npm run push "feat: update hero section and cms banner"
```

### What `npm run push` does automatically:
1. Checks for uncommitted changes.
2. Runs pre-push CMS model verification (`npm test`).
3. Stages modified and new files (`git add .`).
4. Commits with your custom message or a timestamped auto-tag.
5. Pushes directly to `origin/main`.
6. Triggers the automated GitHub Actions CI/CD pipeline.

---

## ⚙️ 2. GitHub Actions Workflows

Located in `.github/workflows/`:

### A. Main CI/CD Pipeline (`.github/workflows/ci-cd.yml`)
- **Triggers:** Push to `main`, Pull Requests to `main`, or Manual Trigger from GitHub UI (`workflow_dispatch`).
- **Job 1 (CI: Build & Test):**
  - Sets up Node.js 20 with npm caching.
  - Installs dependencies using `npm ci`.
  - Generates Prisma client.
  - Runs `npm test` (`scripts/verify-cms.js`).
  - Compiles the Next.js production build (`npm run build`).
- **Job 2 (CD: Automated Deployment):**
  - **Docker GHCR (Automatic):** Builds a lightweight multi-stage Docker container and publishes to GitHub Container Registry `ghcr.io/karan-975/kd-infovision:latest`.
  - **Vercel (Automatic if configured):** If `VERCEL_TOKEN` secret is added in GitHub repository settings, deploys directly to Vercel production.
  - **VPS / Cloud Server (Automatic if configured):** If `DEPLOY_HOST` & `DEPLOY_KEY` secrets are added, connects over SSH, pulls latest changes, and reloads PM2.

### B. Pull Request Quality Gate (`.github/workflows/pr-check.yml`)
- Automatically validates any incoming PR before merging to keep `main` stable.

---

## 🐳 3. Docker Deployment (`docker-compose.yml`)

To run the complete production stack (MySQL + Standalone Next.js) on any server:

```bash
docker compose up -d --build
```

---

## 🔐 4. Adding Secrets in GitHub (Optional for Vercel/VPS)

Go to **GitHub Repo** ➔ **Settings** ➔ **Secrets and variables** ➔ **Actions** ➔ **New repository secret**:

| Secret Name | Purpose | Required For |
|---|---|---|
| `GITHUB_TOKEN` | Automatic package registry push | *Built-in (no setup needed)* |
| `VERCEL_TOKEN` | Vercel personal access token | Vercel auto-deploy |
| `VERCEL_ORG_ID` | Vercel organization ID | Vercel auto-deploy |
| `VERCEL_PROJECT_ID`| Vercel project ID | Vercel auto-deploy |
| `DEPLOY_HOST` | VPS / Server IP or hostname | SSH auto-deploy |
| `DEPLOY_KEY` | Private SSH Key | SSH auto-deploy |
| `DEPLOY_USER` | Server username (e.g. `ubuntu`, `root`) | SSH auto-deploy |
