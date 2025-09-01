# Vercel Deployment & Troubleshooting Guide

## Overview
This document provides comprehensive guidance for Vercel deployments, common issues, and resolution strategies using the sub-agent approach for complex debugging scenarios.

## Quick Reference

### Essential Vercel Commands
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment logs
vercel logs [deployment-url]

# List deployments
vercel ls

# Remove deployment
vercel rm [deployment-name]
```

## Common Deployment Issues & Solutions

### 1. Build Failures

#### Symptom
```
Error: Command "npm run build" exited with 1
```

#### Immediate Fixes
```bash
# Check build locally first
npm run build

# Clear cache and rebuild
rm -rf .next
npm run build

# Check for TypeScript errors
npm run type-check
```

#### Root Cause Investigation
- **Dependencies**: Missing production dependencies in package.json
- **Environment Variables**: Missing required env vars in Vercel dashboard
- **Build Script**: Incorrect build command in package.json or vercel.json
- **Node Version**: Mismatched Node.js versions between local and Vercel

### 2. Runtime Errors

#### API Route Issues
```javascript
// ❌ Common mistake
export default function handler(req, res) {
  // Missing error handling
  const result = someOperation()
  res.json(result)
}

// ✅ Proper error handling
export default async function handler(req, res) {
  try {
    const result = await someOperation()
    res.status(200).json(result)
  } catch (error) {
    console.error('API Error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
```

#### Environment Variables
```bash
# Local development (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=postgresql://localhost:5432/mydb

# Vercel Environment Variables
# Add via: Vercel Dashboard → Settings → Environment Variables
```

### 3. Static Generation Issues

#### ISR Problems
```javascript
// ❌ Problematic
export async function getStaticProps() {
  const data = await fetchData()
  return {
    props: { data },
    revalidate: 60 // This might cause issues with large datasets
  }
}

// ✅ Better approach
export async function getStaticProps() {
  try {
    const data = await fetchData()
    return {
      props: { data },
      revalidate: 3600, // 1 hour
      // Add fallback handling
    }
  } catch (error) {
    return {
      notFound: true,
      revalidate: 300 // Retry in 5 minutes
    }
  }
}
```

## Configuration Files

### vercel.json Template
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  },
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 10
    }
  },
  "crons": [
    {
      "path": "/api/cron",
      "schedule": "0 0 * * *"
    }
  ]
}
```

### next.config.js for Vercel
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // Image optimization for Vercel
  images: {
    domains: ['example.com'],
    formats: ['image/webp']
  },
  
  // Environment variables validation
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Webpack config for Vercel compatibility
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  }
}

module.exports = nextConfig
```

## Sub-Agent Approach for Complex Issues

When facing complex Vercel deployment issues, use this systematic approach:

### 1. Context Documentation
Create `docs/deployment-context.md`:
```markdown
# Current Deployment Context

## Issue Description
- Error message: [exact error]
- Deployment URL: [vercel deployment url]
- Last successful deployment: [timestamp]

## Environment Details
- Node.js version: 
- Next.js version:
- Key dependencies:

## Recent Changes
- Files modified:
- New dependencies added:
- Configuration changes:
```

### 2. Specialized Sub-Agents

#### Vercel Expert Agent
**Role**: Research Vercel-specific solutions and best practices
**Context**: Must read deployment-context.md before analysis
**Output**: Detailed investigation report in `docs/vercel-analysis.md`
**No Implementation**: Only research and recommendations

#### Build Expert Agent  
**Role**: Analyze build processes and dependency issues
**Context**: Review package.json, next.config.js, and build logs
**Output**: Build optimization plan in `docs/build-analysis.md`

#### Environment Expert Agent
**Role**: Investigate environment variable and configuration issues
**Context**: Review .env files, vercel.json, and Vercel dashboard settings
**Output**: Environment setup guide in `docs/env-analysis.md`

### 3. Implementation Process
1. **Context Creation**: Document current state and issues
2. **Sub-Agent Research**: Deploy specialized agents to investigate
3. **Plan Consolidation**: Review all research reports
4. **Systematic Implementation**: Apply fixes with full context
5. **Verification**: Test deployment and document resolution

## Performance Optimization

### Bundle Analysis
```bash
# Analyze bundle size
npm install @next/bundle-analyzer
ANALYZE=true npm run build
```

### Edge Functions
```javascript
// app/api/edge-example/route.ts
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: 'Hello from Edge!',
    region: process.env.VERCEL_REGION 
  })
}
```

### Caching Strategies
```javascript
// Static caching
export const revalidate = 3600 // 1 hour

// Dynamic caching with tags
import { unstable_cache } from 'next/cache'

const getCachedData = unstable_cache(
  async () => fetchData(),
  ['data-key'],
  { revalidate: 60, tags: ['data'] }
)
```

## Monitoring & Debugging

### Vercel Analytics Setup
```javascript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Error Tracking
```javascript
// lib/error-tracking.ts
export function trackError(error: Error, context?: any) {
  console.error('Tracked Error:', {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
    deployment: process.env.VERCEL_URL
  })
}
```

## Emergency Checklist

When deployment fails:

- [ ] Check Vercel dashboard for detailed error logs
- [ ] Verify all environment variables are set
- [ ] Test build locally with `npm run build`
- [ ] Check Node.js version compatibility
- [ ] Review recent code changes
- [ ] Verify API routes return proper responses
- [ ] Check for TypeScript errors
- [ ] Validate external service connections
- [ ] Test with minimal reproduction case
- [ ] Document issue for sub-agent analysis if needed

## Useful Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)

---

**Last Updated**: [Current Date]  
**Sub-Agent Integration**: Ready for specialized debugging workflow