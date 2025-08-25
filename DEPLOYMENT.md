# Deployment Guide for Clever Fund Search

This guide will walk you through deploying your Clever Fund Search application to Vercel.

## Prerequisites

- A GitHub account with your project repository
- A Vercel account (free at [vercel.com](https://vercel.com))
- Your Supabase project credentials

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Connect Your Repository

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Select the `clever-fund-search` repository

### Step 2: Configure Project

1. **Project Name**: `clever-fund-search` (or your preferred name)
2. **Framework Preset**: Vite
3. **Root Directory**: `./` (leave as default)
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. **Install Command**: `npm install`

### Step 3: Set Environment Variables

Add these environment variables in the Vercel dashboard:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**To find your Supabase credentials:**
1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy the Project URL and anon/public key

### Step 4: Deploy

1. Click "Deploy"
2. Wait for the build to complete
3. Your app will be available at the provided URL

## Method 2: Deploy via CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
# Or use npx (recommended)
npx vercel
```

### Step 2: Deploy

```bash
# From your project directory
npx vercel --prod
```

Follow the prompts to:
- Link to your Vercel account
- Select your project
- Set environment variables

## Method 3: Use the Deployment Script

We've included a deployment script for convenience:

```bash
./deploy.sh
```

This script will:
1. Build your project
2. Deploy to Vercel
3. Provide next steps

## Post-Deployment Configuration

### Custom Domain (Optional)

1. In your Vercel dashboard, go to your project
2. Navigate to Settings > Domains
3. Add your custom domain
4. Follow the DNS configuration instructions

### Environment Variables

If you need to add or modify environment variables after deployment:

1. Go to your project in Vercel dashboard
2. Navigate to Settings > Environment Variables
3. Add or edit variables
4. Redeploy if necessary

## Troubleshooting

### Build Errors

- Check that all dependencies are properly installed
- Verify your Node.js version (18+ recommended)
- Check the build logs in Vercel dashboard

### Environment Variable Issues

- Ensure variables start with `VITE_` for client-side access
- Check that Supabase credentials are correct
- Verify your Supabase project is active

### Routing Issues

- The `vercel.json` file handles React Router configuration
- All routes should redirect to `index.html` for SPA behavior

## Monitoring and Analytics

### Vercel Analytics

- Enable Vercel Analytics in your project settings
- Monitor performance and user behavior
- Track Core Web Vitals

### Error Tracking

- Consider integrating error tracking services
- Monitor build and runtime errors
- Set up alerts for critical issues

## Cost and Limits

### Free Tier Limits

- 100GB bandwidth per month
- 100 serverless function executions per day
- Unlimited deployments
- Custom domains supported

### Upgrading

- Upgrade to Pro ($20/month) for more resources
- Enterprise plans available for larger teams

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Supabase Documentation](https://supabase.com/docs)

---

**Happy Deploying! 🚀**
