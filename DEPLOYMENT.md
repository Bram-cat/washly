# Deployment Guide

This guide will help you deploy the Washly Washing Services website to production.

## Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

### Steps:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Washly Washing Services website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to your project
   - Go to Settings → Domains
   - Add your custom domain (e.g., washlywashing.com)
   - Follow DNS configuration instructions
   - SSL certificate is automatically provided

### Vercel Benefits:
- ✅ Free for personal/small business use
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN
- ✅ Auto-deploy on Git push
- ✅ Zero configuration needed
- ✅ Built-in analytics

---

## Option 2: Netlify

### Steps:

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Drag and drop the `.next` folder OR connect GitHub
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Deploy!

3. **Custom Domain**
   - Go to Domain Settings
   - Add your custom domain
   - Update DNS records as instructed

---

## Option 3: Self-Hosted (VPS/Server)

For hosting on your own server or VPS (DigitalOcean, Linode, AWS EC2, etc.)

### Prerequisites:
- Node.js 18+ installed on server
- PM2 or similar process manager
- Nginx or Apache for reverse proxy
- SSL certificate (Let's Encrypt recommended)

### Steps:

1. **Transfer files to server**
   ```bash
   # On your local machine
   scp -r washly-washing-services user@your-server:/var/www/
   ```

2. **Install dependencies on server**
   ```bash
   ssh user@your-server
   cd /var/www/washly-washing-services
   npm install
   npm run build
   ```

3. **Install PM2**
   ```bash
   npm install -g pm2
   ```

4. **Start the application**
   ```bash
   pm2 start npm --name "washly-website" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx**
   Create `/etc/nginx/sites-available/washly`:
   ```nginx
   server {
       listen 80;
       server_name washlywashing.com www.washlywashing.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Enable the site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/washly /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

7. **Set up SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d washlywashing.com -d www.washlywashing.com
   ```

---

## Option 4: DigitalOcean App Platform

### Steps:

1. **Connect GitHub**
   - Go to [DigitalOcean](https://digitalocean.com)
   - Navigate to App Platform
   - Create new app from GitHub repo

2. **Configure Build**
   - Build command: `npm run build`
   - Run command: `npm start`
   - Port: 3000

3. **Deploy**
   - Click "Deploy"
   - App will be live in a few minutes
   - Custom domain can be added in settings

**Cost**: Starting at $5/month

---

## Option 5: AWS Amplify

### Steps:

1. **Push to GitHub** (if not already done)

2. **Deploy to Amplify**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "Host web app"
   - Connect GitHub repository
   - AWS will auto-detect Next.js
   - Click "Save and deploy"

3. **Custom Domain**
   - Add domain in Amplify console
   - Update DNS records
   - SSL is automatic

---

## Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Test the build locally (`npm run build && npm start`)
- [ ] Update contact information if needed
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Verify form submissions (add backend if needed)
- [ ] Set up error monitoring (optional: Sentry, LogRocket)
- [ ] Configure analytics (optional: Google Analytics, Vercel Analytics)
- [ ] Test SEO with tools like Google Search Console
- [ ] Set up email for contact form (if using backend)

---

## Environment Variables (If Needed)

If you add backend functionality later, create a `.env.local` file:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://washlywashing.com
CONTACT_EMAIL=contact@washlywashing.com
# Add API keys, database URLs, etc.
```

**Important**: Never commit `.env.local` to Git!

---

## Post-Deployment Steps

1. **Verify the site works**
   - Visit your URL
   - Test all sections
   - Check mobile responsiveness
   - Test forms and buttons

2. **Set up monitoring**
   - Google Search Console
   - Google Analytics (optional)
   - Uptime monitoring (UptimeRobot, Pingdom)

3. **SEO Setup**
   - Submit sitemap to Google
   - Verify Open Graph tags work
   - Test with Google's Rich Results Test

4. **Share with client**
   - Send URL to Pathik and Atmiya
   - Provide admin credentials if applicable
   - Share documentation (README.md)

---

## Updating the Site

### For Vercel/Netlify (Git-based):
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Site auto-deploys!

### For Self-Hosted:
1. Make changes locally
2. Build: `npm run build`
3. Upload to server
4. Restart PM2: `pm2 restart washly-website`

---

## Domain Setup

### Buying a Domain

Recommended registrars:
- Namecheap
- Google Domains
- Cloudflare Registrar
- GoDaddy

**Suggested domains:**
- washlywashing.com
- washlywashingservices.com
- washlypei.com

### DNS Configuration

For Vercel (example):
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

For Netlify (example):
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

---

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## Troubleshooting

### Build fails on deployment
- Check Node.js version (needs 18+)
- Verify all dependencies are in `package.json`
- Check for TypeScript errors locally

### Site loads slowly
- Enable Next.js Image Optimization
- Use a CDN (Vercel/Netlify include this)
- Compress images

### Forms don't work
- Add backend API route or use service like Formspree
- Configure email service (SendGrid, AWS SES)

---

**Need Help?**

Contact the development team or refer to:
- [README.md](README.md) - Full documentation
- [QUICKSTART.md](QUICKSTART.md) - Getting started
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Technical overview

---

**Good luck with your deployment!** 🚀
