# Railway Deployment Guide - Vapi AI Agent Website

Deploy your Vapi AI Agent website on Railway in parallel with your custom LLM server.

## 📋 Prerequisites

You already have:
- ✅ Custom LLM Server running on Railway: `https://vapi-custom-llm-server-production.up.railway.app`
- ✅ Vapi Agent configured: `5287ce68-f609-4105-bd2e-d7732062ef74`
- ✅ Vapi Public API Key (from Dashboard)

## 🚀 Deploy to Railway (5 minutes)

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**
```bash
cd /Users/franksimpson/CascadeProjects/vapi-agent-website
git remote add origin https://github.com/yourusername/vapi-agent-website.git
git branch -m main
git push -u origin main
```

2. **Connect to Railway**
   - Go to https://railway.app
   - Click "New Project"
   - Select "Deploy from GitHub"
   - Authorize and select `vapi-agent-website`
   - Railway auto-detects the config

3. **Add Environment Variables**
   - Dashboard → Your Project → Variables
   - Add these variables:
     ```
     VITE_VAPI_PUBLIC_KEY=public_xxxxxxxxxxxxxx
     VITE_ASSISTANT_ID=5287ce68-f609-4105-bd2e-d7732062ef74
     VITE_API_BASE_URL=https://vapi-custom-llm-server-production.up.railway.app
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get your Railway URL: `https://vapi-agent-website-production-xxxx.railway.app`

### Option 2: Deploy via Railway CLI

```bash
# Install Railway CLI (if not already)
npm install -g @railway/cli

# Login
railway login

# Create new project
railway init

# Set environment variables
railway variables set VITE_VAPI_PUBLIC_KEY public_xxxxx
railway variables set VITE_ASSISTANT_ID 5287ce68-f609-4105-bd2e-d7732062ef74
railway variables set VITE_API_BASE_URL https://vapi-custom-llm-server-production.up.railway.app

# Deploy
railway up
```

---

## 📦 Architecture on Railway

```
Your Railway Account
├── Service 1: vapi-custom-llm-server
│   └── URL: https://vapi-custom-llm-server-production.up.railway.app
│   └── Technology: Python FastAPI
│   └── Port: 8080
│
└── Service 2: vapi-agent-website (NEW)
    └── URL: https://vapi-agent-website-production-xxxx.railway.app
    └── Technology: Static Site (Vite + http-server)
    └── Build: npm run build
    └── Start: http-server dist -p $PORT
```

---

## 🔧 Railway Build & Deploy Process

Railway automatically:

1. **Detects Node.js project** (via `package.json`)
2. **Installs dependencies** (`npm install`)
3. **Builds site** (`npm run build`)
4. **Serves static files** (via `railway.json` - `http-server dist`)
5. **Exposes on public URL** with HTTPS

### Build Output

```
dist/
├── index.html          (Main site)
├── clickfunnels-integration.html
├── README.md
└── style assets       (CSS/JS bundled)
```

---

## 🌐 Domain Configuration

### Add Custom Domain to Your Website

1. **In Railway Dashboard:**
   - Select your `vapi-agent-website` service
   - Settings → Domains
   - Add custom domain: `ai-assistant.yourdomain.com`

2. **Configure DNS:**
   - Point your domain to Railway's CNAME
   - Railway provides the exact DNS records

3. **SSL/HTTPS:**
   - Automatic via Railway (Let's Encrypt)
   - No additional setup needed

---

## 📊 Configuration on Railway

### Environment Variables (What Railway Provides)

Railway automatically injects:
- `PORT` - The port to run on (handled by Vite config)
- `NODE_ENV=production`

### Your Custom Variables

Set in Railway Dashboard → Variables:
```
VITE_VAPI_PUBLIC_KEY=your_public_key
VITE_ASSISTANT_ID=5287ce68-f609-4105-bd2e-d7732062ef74
VITE_API_BASE_URL=https://vapi-custom-llm-server-production.up.railway.app
VITE_ENVIRONMENT=production
```

---

## 🧪 Testing After Deployment

1. **Test Website**
   ```bash
   curl https://your-railway-url.railway.app
   ```

2. **Verify Chat Works**
   - Open your Railway URL
   - Click "Start Chat Now"
   - Grant microphone permission
   - Test conversation

3. **Check Logs**
   - Railway Dashboard → Select Service → Logs
   - Look for success messages

4. **Monitor Performance**
   - Railway Dashboard → Metrics
   - View CPU, Memory, Bandwidth usage

---

## 🔄 CI/CD Pipeline on Railway

Every push to main branch:

1. GitHub detects new code
2. Railway automatically triggers build
3. Runs: `npm run build`
4. Deploys new version (zero downtime)
5. Updates live URL

No manual deployment needed! 🎉

---

## 📈 Scaling on Railway

### For Higher Traffic

1. **Increase Replicas**
   - Dashboard → Service → Scale
   - Set multiple replicas for load balancing

2. **Add Database** (Optional)
   - PostgreSQL for tracking conversations
   - Redis for caching

3. **Monitor Usage**
   - Dashboard → Metrics
   - Upgrade plan if needed

---

## 💾 Backup & Recovery

### Automatic Backups
Railway provides:
- Deployment history (rollback)
- Environment snapshots
- Build logs (30-day retention)

### Manual Backup
```bash
# Export your repo
git clone https://github.com/yourusername/vapi-agent-website.git backup/
```

---

## 🛠️ Troubleshooting

### Issue: Build Fails

**Check:**
```bash
# Verify locally first
npm install
npm run build
```

**Common Issues:**
- Missing dependencies → Add to `package.json`
- Node version mismatch → Set in `package.json` engines
- Environment variables → Verify in Railway Dashboard

### Issue: Website Shows 404

**Solution:**
- Ensure `railway.json` startCommand is correct
- Verify `dist/` folder is being built
- Check logs: Railway Dashboard → Logs

### Issue: Chat Not Working

**Check:**
1. Vapi public key is set in environment variables
2. Microphone permission granted in browser
3. Network tab shows requests to `/chat/completions`
4. Custom LLM server is running

### Issue: CORS Issues

**Solution:**
- Your custom LLM server needs CORS headers
- Currently configured in `main.py` of custom server
- Should work automatically

---

## 📱 ClickFunnels (Alternative Deployment)

If you want ClickFunnels INSTEAD of Railway:

1. Open ClickFunnels editor
2. Add Custom Code element
3. Paste code from `clickfunnels-integration.html`
4. Your chat widget appears in ClickFunnels page
5. No separate deployment needed!

Both can work simultaneously:
- Railway: Standalone website
- ClickFunnels: Embedded widget on funnel pages

---

## 🎯 Final Checklist Before Going Live

- [ ] Website builds locally: `npm run build`
- [ ] Environment variables set in Railway
- [ ] Vapi public key verified
- [ ] Custom LLM server is running
- [ ] Chat functionality tested
- [ ] Domain configured (optional)
- [ ] HTTPS working (automatic)
- [ ] Logs show no errors
- [ ] Microphone permission popup appears
- [ ] Calls connect successfully

---

## 📊 Cost Estimate

**Railway Free Tier Includes:**
- $5 monthly credit
- Covers: Simple website + API calls
- Suitable for: Testing, low traffic

**When to Upgrade:**
- If you exceed $5/month
- Higher traffic sites → Hobby plan ($5+/month)
- Production traffic → Professional plan ($20+/month)

---

## 🚀 Quick Commands

```bash
# Local development
npm run dev

# Local build test
npm run build
npm run preview

# Deploy to Railway (via CLI)
railway up

# View logs
railway logs

# Set variable
railway variables set KEY value
```

---

## 📞 Support Resources

- **Railway Docs:** https://docs.railway.app
- **Vapi Docs:** https://docs.vapi.ai
- **Railway Help:** https://railway.app/support

---

## Next: Deploy Now!

1. Get your Vapi Public Key
2. Push to GitHub
3. Connect to Railway
4. Add environment variables
5. Click Deploy
6. Done! ✅

Your entire AI agent system will be live on Railway! 🎉
