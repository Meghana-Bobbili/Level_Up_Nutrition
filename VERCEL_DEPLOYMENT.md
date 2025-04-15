# Deploying Level Up Nutrition to Vercel

## Prerequisites
1. Vercel account (sign up at vercel.com)
2. GitHub account
3. Project repository on GitHub
4. Environment variables ready

## Step 1: Prepare Your Project
1. Ensure your project is pushed to GitHub
2. Verify all dependencies are in `package.json`
3. Check `.gitignore` includes:
   ```
   node_modules
   .next
   .env.local
   ```

## Step 2: Environment Variables
1. Create a `.env.production` file with:
   ```
   AZURE_SUBSCRIPTION_ID=your_subscription_id
   AZURE_TENANT_ID=your_tenant_id
   AZURE_CLIENT_ID=your_client_id
   AZURE_CLIENT_SECRET=your_client_secret
   AZURE_OPENAI_API_KEY=your_api_key
   AZURE_OPENAI_ENDPOINT=your_endpoint
   ```

## Step 3: Deploy to Vercel

### Option 1: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `next build`
   - Output Directory: .next
   - Install Command: `npm install`
5. Add environment variables from Step 2
6. Click "Deploy"

### Option 2: Using Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Login to Vercel:
   ```bash
   vercel login
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Follow prompts to:
   - Set up project
   - Link to GitHub
   - Configure settings
   - Add environment variables

## Step 4: Post-Deployment
1. Verify deployment at your-project.vercel.app
2. Check environment variables are working
3. Test all major functionalities:
   - Navigation
   - Product pages
   - Cart functionality
   - Checkout process
   - AI chatbot
   - Forms

## Step 5: Domain Setup (Optional)
1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Verify domain ownership
5. Enable HTTPS

## Step 6: Monitoring & Maintenance
1. Set up monitoring:
   - Performance monitoring
   - Error tracking
   - Analytics
2. Regular updates:
   - Dependencies
   - Security patches
   - Content updates

## Common Issues & Solutions

### Build Failures
1. Check build logs in Vercel dashboard
2. Common fixes:
   - Update Node.js version
   - Fix dependency conflicts
   - Correct environment variables

### Environment Variables
1. If variables aren't loading:
   - Verify in Vercel dashboard
   - Check casing matches
   - Ensure no typos

### Performance Issues
1. Enable Vercel Analytics
2. Check for:
   - Large images
   - Unoptimized code
   - Excessive dependencies

## Best Practices
1. Use Vercel's preview deployments for testing
2. Set up automatic deployments from main branch
3. Implement proper caching strategies
4. Monitor performance metrics
5. Regular backups of important data

## Support
- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment Guide: https://nextjs.org/docs/deployment
- Vercel Status Page: https://vercel-status.com 