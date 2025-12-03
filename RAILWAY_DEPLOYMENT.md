# Railway Deployment Guide - Vapi AI Agent Website

Deploy your Vapi AI Agent website on Railway in just 5 minutes.

## 📋 Prerequisites

You need:
- ✅ Vapi Account (https://vapi.ai)
- ✅ Vapi Agent created and configured
- ✅ Vapi Public API Key
- ✅ GitHub account (for easy deployment)

## 🚀 Deploy to Railway (5 minutes)

### Step 1: Get Your Vapi Credentials

1. Go to [Vapi Dashboard](https://dashboard.vapi.ai)
2. Create a new Assistant (if not already done)
3. Go to **Project Settings** → **API Keys**
4. Copy your **Public Key** (starts with `public_`)
5. Copy your **Assistant ID** from the assistant settings

### Step 2: Push to GitHub

If not already on GitHub, push your project:

```bash
cd /Users/franksimpson/CascadeProjects/vapi-agent-website
git remote add origin https://github.com/yourusername/vapi-agent-website.git
git branch -m main
git push -u origin main
```

### Step 3: Connect to Railway

1. Go to https://railway.app
2. Click **"New Project"**
3. Select **"Deploy from GitHub"**
4. Authorize Railway to access your GitHub
5. Select `vapi-agent-website` repository
6. Railway auto-detects the configuration

### Step 4: Add Environment Variables

1. In Railway Dashboard, go to your project
2. Click on the `vapi-agent-website` service
3. Go to **Variables** tab
4. Add these environment variables:

```
VITE_VAPI_PUBLIC_KEY=public_xxxxxxxxxxxxxxxxxxxxxx
VITE_ASSISTANT_ID=your-assistant-id-here
VITE_ENVIRONMENT=production
```

### Step 5: Deploy

1. Railway automatically starts building
2. Wait 2-3 minutes for deployment
3. Your live URL appears: `https://vapi-agent-website-production-xxxx.railway.app`
4. Click the link to visit your site!

---

## 📦 What Gets Deployed

```
Railway Service: vapi-agent-website
├── Technology: Node.js + Vite
├── Build: npm run build
├── Server: http-server dist
├── Port: Automatic ($PORT env variable)
└── URL: https://your-railway-url.railway.app
```

### Build Process (Automatic)

Railway automatically:

1. **Installs dependencies** → `npm install`
2. **Builds site** → `npm run build`
3. **Serves files** → `http-server dist -p $PORT`
4. **Exposes on HTTPS** → Public URL with free SSL

### Build Output

```
dist/
├── index.html                 (Main website)
├── assets/index.js            (Bundled JavaScript)
└── assets/[styles]            (CSS and assets)
```

---

## 🌐 Custom Domain Setup

### Add Your Own Domain

1. **In Railway Dashboard:**
   - Select `vapi-agent-website` service
   - Go to **Settings** → **Domains**
   - Click **"Add Custom Domain"**
   - Enter your domain: `ai-chat.yourdomain.com`

2. **Configure DNS:**
   - Railway provides CNAME record
   - Update your domain registrar DNS
   - Wait for DNS propagation (5-30 minutes)

3. **SSL/HTTPS:**
   - Automatic with Let's Encrypt
   - No additional configuration needed
   - Renews automatically

---

## 📊 Configuration Details

### Environment Variables

Railway automatically provides:
- `PORT` - Dynamic port (handled in vite.config.js)
- `NODE_ENV=production`

Your custom variables (set in Dashboard):
```
VITE_VAPI_PUBLIC_KEY=public_xxxxx    # Your Vapi public key
VITE_ASSISTANT_ID=your-id            # Your Vapi agent ID
VITE_ENVIRONMENT=production           # Deployment environment
```

### Build Configuration

**vite.config.js** settings:
- Server port: Uses `process.env.PORT` (Railway provides this)
- Host: `0.0.0.0` (accessible from anywhere)
- Minification: Enabled with terser
- Output: `dist/` folder

**railway.json** settings:
```json
{
  "builder": "nixpacks",
  "startCommand": "npx http-server dist -p $PORT -g"
}
```

---

## 🧪 Testing After Deployment

### Test 1: Website Loads

```bash
curl https://your-railway-url.railway.app
```

Should return your index.html

### Test 2: Chat Functionality

1. Open your Railway URL in a browser
2. Click **"Start Chat Now"** button
3. Grant microphone permission when prompted
4. Try speaking or typing
5. Verify responses from Vapi agent

### Test 3: Check Logs

In Railway Dashboard:
1. Select your service
2. Go to **Logs** tab
3. Look for build success messages
4. Watch real-time requests as you use the chat

### Test 4: Monitor Metrics

In Railway Dashboard:
1. Go to **Metrics** tab
2. View CPU usage, memory, bandwidth
3. Monitor for any errors

---

## 🔄 Continuous Deployment (CI/CD)

Railway automatically deploys when you push to GitHub:

```bash
# Make changes locally
git add .
git commit -m "Update chat features"
git push origin main
```

**Automatic Pipeline:**
1. GitHub detects new push
2. Railway webhook triggered
3. Builds your project
4. Deploys new version (no downtime)
5. Updates live URL

Perfect for continuous updates! ✅

---

## 📈 Scaling for Higher Traffic

### Monitor Usage

1. **Check in Railway Dashboard:**
   - Metrics tab shows CPU, memory, bandwidth
   - Logs tab shows errors and activity

2. **When to upgrade:**
   - Consistently above 80% CPU
   - Memory usage growing
   - Many concurrent users

### Increase Capacity

1. **Add Replicas** (Load Balancing)
   - Dashboard → Service → Scale
   - Set multiple instances
   - Railway distributes traffic

2. **Upgrade Plan**
   - Free tier: $5 credit
   - Hobby: $5+/month
   - Pro: $20+/month
   - Scale as needed

---

## 🛠️ Troubleshooting

### Issue: Build Fails

**Check logs:**
```bash
# Railway Dashboard → Logs tab
# Look for error details
```

**Common causes:**
- Missing npm dependencies → Check `package.json`
- Node version issue → Specify in `package.json` engines
- Terser missing → Already fixed in current version

**Solution:**
```json
{
  "devDependencies": {
    "vite": "^5.0.0",
    "terser": "^5.31.0"  ← Must be present
  }
}
```

### Issue: Website Shows 404

**Check:**
1. Build succeeded in logs
2. `dist/index.html` exists
3. Start command in `railway.json` is correct

**Fix:**
```bash
# Test locally first
npm run build
npm run preview
```

### Issue: Chat Button Not Working

**Verify:**
1. ✅ Environment variables set in Railway
2. ✅ Vapi public key is correct (starts with `public_`)
3. ✅ Assistant ID is valid
4. ✅ Microphone permission granted

**Check browser console:**
- F12 → Console tab
- Look for error messages
- Check Network tab for API calls

### Issue: CORS or Network Errors

**Check:**
- Browser console for specific errors
- Ensure you're using HTTPS (not HTTP)
- Vapi SDK automatically handles CORS

**Solution:**
- Refresh the page
- Clear browser cache
- Try different browser

### Issue: Microphone Not Working

**Check:**
1. Browser microphone permission
2. HTTPS is enabled
3. Device has microphone
4. Other apps don't have exclusive access

**Fix:**
1. Allow microphone prompt
2. Refresh page
3. Try in incognito mode

---

## 📱 ClickFunnels Integration (Alternative)

You can also use Railway website + ClickFunnels simultaneously:

### ClickFunnels Setup:

1. In your ClickFunnels page, add **Custom Code element**
2. Copy code from `clickfunnels-integration.html`
3. Update credentials
4. Chat widget appears on your funnel

### Both Simultaneously:

- **Railway:** Standalone website for SEO, direct traffic
- **ClickFunnels:** Embedded widget in your sales funnel

Works independently!

---

## 🎯 Pre-Launch Checklist

Before going live, verify:

- [ ] Website builds locally: `npm run build`
- [ ] Environment variables added to Railway
- [ ] Vapi Public Key verified (starts with `public_`)
- [ ] Assistant ID is correct
- [ ] Domain configured (if using custom domain)
- [ ] DNS propagated (if custom domain)
- [ ] HTTPS working
- [ ] Chat button appears
- [ ] Microphone permission prompt shows
- [ ] Can have test conversation
- [ ] No errors in logs
- [ ] Performance metrics look good

---

## 💰 Cost Breakdown

### Railway Pricing

**Free Tier:**
- $5 monthly credit
- Covers: Website + moderate API usage
- Best for: Testing, development

**Hobby Plan ($5+/month):**
- Everything from free tier
- Priority support
- Best for: Small projects, low traffic

**Pro Plan ($20+/month):**
- Enterprise features
- Auto-scaling
- Best for: Production, high traffic

### Vapi Costs

- Separate from Railway
- Based on your LLM provider (OpenAI, Claude, etc.)
- Check Vapi dashboard for usage

### Example: Small Project

- Website hosting: Free tier ($5 Railway credit)
- Vapi agent calls: Pay as you use
- **Total: Cost of Vapi usage only**

---

## 🚀 Quick Command Reference

```bash
# Test locally
npm install
npm run dev        # Development server
npm run build      # Build for production
npm run preview    # Test production build

# Deploy (Railway handles automatically from GitHub)
# Just push to main branch:
git push origin main

# View logs
railway logs

# Set environment variable
railway variables set KEY value

# Redeploy
railway up
```

---

## 📞 Support & Resources

- **Railway Docs:** https://docs.railway.app
- **Vapi Docs:** https://docs.vapi.ai
- **Vapi Dashboard:** https://dashboard.vapi.ai
- **GitHub:** https://github.com/klogins-hash/vapi-agent-website

---

## 🎉 You're Ready!

Your Vapi AI Agent website is now ready to deploy on Railway.

**Next steps:**
1. ✅ Create Vapi agent at https://dashboard.vapi.ai
2. ✅ Get API Key and Assistant ID
3. ✅ Set environment variables in Railway
4. ✅ Push to GitHub (auto-deploys)
5. ✅ Share your live URL with users

**Your chat is now live! 🚀**
