# Bausan Website Deployment Setup

This document describes the complete deployment architecture copied from kafeine-website.

## Architecture Overview

The bausan-website now has the exact same deployment architecture as kafeine-website, including:

- Docker builds for both development and production
- GitHub Actions CI/CD pipeline
- Static site generation with Next.js
- Automated deployment to GitHub Pages

## Files Added/Modified

### Docker Configuration
- `docker-compose.yml` - Multi-service Docker setup (dev + prod)
- `Dockerfile` - Production build with static file serving
- `Dockerfile.dev` - Development build with hot reload
- `.dockerignore` - Docker build exclusions

### GitHub Actions
- `.github/workflows/deploy.yml` - Complete CI/CD pipeline for GitHub Pages

### Configuration Files
- `next.config.mjs` - Updated with static export settings
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS 4.x
- `tailwind.config.ts` - Tailwind CSS configuration
- `.gitignore` - Git exclusions
- `package.json` - Updated with Docker scripts and proper naming

### Generated Files
- `next-env.d.ts` - TypeScript Next.js definitions
- `pnpm-lock.yaml` - Package manager lock file

## Docker Usage

### Production Build
```bash
# Build and run production container
pnpm run docker:prod

# Or manually
docker compose up app --build -d
```
Access at: http://localhost:8902

### Development Build
```bash
# Build and run development container with hot reload
pnpm run docker:dev

# Or manually
docker compose up dev --build -d
```
Access at: http://localhost:8903

### Management Commands
```bash
# Stop all containers
pnpm run docker:stop

# View logs
pnpm run docker:logs

# Build Docker image
pnpm run docker:build

# Run Docker container
pnpm run docker:run
```

## Port Configuration

- **Production**: Port 8902 (different from kafeine-website's 8900)
- **Development**: Port 8903 (different from kafeine-website's 8901)

This ensures no port conflicts when running both projects simultaneously.

## GitHub Pages Deployment

The project is configured for automatic deployment to GitHub Pages:

1. **Trigger**: Push to `main` branch or manual trigger
2. **Build**: Uses Node.js 18 with pnpm
3. **Process**: 
   - Install dependencies
   - Build static site with `pnpm run build`
   - Create `.nojekyll` file
   - Deploy to GitHub Pages

### Required GitHub Settings

To enable automatic deployment:

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will handle the rest automatically

## Environment Variables

The Docker setup supports these environment variables:

- `PROJECT_NAME`: Override container names (default: bausan-website)
- `PROD_PORT`: Override production port (default: 8902)
- `DEV_PORT`: Override development port (default: 8903)

## Next Steps

1. **Initialize Git repository** (if not already done)
2. **Push to GitHub** to trigger first deployment
3. **Configure GitHub Pages** in repository settings
4. **Add custom domain** (optional) - create `CNAME` file in public folder

## Content Preservation

All original bausan-website content has been preserved:
- Components and UI elements
- Images and assets
- Styling and branding
- 3D models and interactive elements

The architecture changes are purely for deployment and development workflow - no content was modified.
