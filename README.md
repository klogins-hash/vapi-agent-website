# Vapi AI Agent - Website & ClickFunnels Integration

Complete setup guide for deploying your AI agent on a website and integrating with ClickFunnels.

## 📋 What You Have

✅ **Vapi Agent**
- Configure at: https://dashboard.vapi.ai/assistants
- Status: Ready to deploy
- Works with any LLM provider (OpenAI, Anthropic, etc.)

✅ **Website**
- Beautiful responsive design
- Integrated Vapi chat functionality
- Mobile-optimized interface
- Environment variable configuration

✅ **ClickFunnels Integration**
- Floating chat widget
- Ready to paste into ClickFunnels pages
- Fully styled and functional

---

## 🚀 Quick Start Setup

### Step 1: Create Your Vapi Agent

1. Go to [Vapi Dashboard](https://dashboard.vapi.ai)
2. Create a new assistant
3. Configure your LLM provider (OpenAI, Claude, etc.)
4. Set up voice (11Labs, Azure, etc.)
5. Copy your **Assistant ID**

### Step 2: Get Your Vapi Public Key

1. Navigate to **Project Settings** → **API Keys**
2. Copy your **Public Key** (starts with `public_`)
3. Keep this safe - you'll need it for both the website and ClickFunnels

### Step 3: Configure the Website

1. Copy `.env.example` to `.env.local`
2. Update with your values:
   ```
   VITE_VAPI_PUBLIC_KEY=public_xxxxxxxxxxxxxxxxxxxxx
   VITE_ASSISTANT_ID=your-assistant-id-here
   ```

3. Deploy or test locally:
   ```bash
   npm install
   npm run dev      # Local testing
   npm run build    # Production build
   ```

### Step 4: Update ClickFunnels Integration

Open `clickfunnels-integration.html` and replace:
```javascript
publicKey: 'REPLACE_WITH_YOUR_VAPI_PUBLIC_KEY'
assistantId: 'REPLACE_WITH_YOUR_ASSISTANT_ID'
```

With your actual values from Vapi.

---

## 📱 Website Deployment

### Deploy on Railway (Recommended)

Railway automatically deploys from GitHub:

1. **Push to GitHub**
   - Repository: https://github.com/klogins-hash/vapi-agent-website
   - Push your `.env.local` values to Railway environment

2. **Create Railway Project**
   - Connect your GitHub repo
   - Set environment variables in Railway dashboard
   - Auto-deploys on each push

3. **Get Your Live URL**
   - Railway provides a live URL instantly
   - Your agent is now live!

### Deploy on Netlify (Free Alternative)

1. Create `.env.local` with your Vapi keys
2. Go to [Netlify](https://netlify.com)
3. Connect GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy!

### Deploy on Vercel

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Set environment variables
4. Deploy automatically
5. Your site goes live instantly

---

## 🔗 ClickFunnels Integration Setup

### Detailed Steps:

1. **Open Your ClickFunnels Page**
   - Go to your funnel
   - Edit the page where you want the chat

2. **Add Custom Code Block**
   - Click "Add Element" → "More" → "Custom Code"
   - Or find the Custom HTML section

3. **Copy the Code**
   - Open `clickfunnels-integration.html`
   - Copy the entire `<style>` section
   - Paste into the **CSS** section of your custom code

4. **Copy HTML**
   - Copy the `<div id="vapi-widget-container">` section
   - Paste into the **HTML** section of your custom code

5. **Copy JavaScript**
   - Copy all `<script>` sections
   - Paste into the **JavaScript** section of your custom code

6. **Update Your Configuration**
   - In the JavaScript section, find:
     ```javascript
     publicKey: 'REPLACE_WITH_YOUR_VAPI_PUBLIC_KEY'
     assistantId: 'REPLACE_WITH_YOUR_ASSISTANT_ID'
     ```
   - Replace with your actual Vapi values

7. **Save & Publish**
   - Save your page
   - Publish your funnel
   - The chat widget will appear in the bottom-right corner

### ClickFunnels Chat Widget Features:

- 💬 Floating chat button (bottom-right)
- 🎯 Modal chat window that opens/closes
- 📱 Fully responsive (works on mobile)
- 🎨 Customizable colors (edit gradient colors in CSS)
- 🔊 Voice and text support
- ✨ Pulse animation to draw attention

---

## 🎨 Customization Guide

### Change Colors

In the CSS section, find:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Change to your preferred colors:
- `#667eea` (purple-blue)
- `#764ba2` (dark purple)

### Change Chat Button Emoji

Find in the HTML:
```html
<button class="vapi-chat-widget" id="vapi-chat-btn" onclick="toggleVapiModal()">
    💬
```

Replace `💬` with any emoji you prefer:
- 🤖 Robot
- 🎯 Target
- 🎤 Microphone
- 💡 Lightbulb
- ⚡ Lightning
- 🔮 Crystal Ball

### Customize Chat Window Size

In CSS, modify:
```css
.vapi-modal {
    width: 380px;    /* Change width */
    height: 500px;   /* Change height */
}
```

---

## ✅ Testing Checklist

- [ ] Website loads without errors
- [ ] Chat button appears in correct position
- [ ] Click button opens chat modal
- [ ] Microphone permission prompt appears
- [ ] Can have a conversation with AI
- [ ] Chat displays messages correctly
- [ ] Close button works
- [ ] Mobile responsive on small screens
- [ ] ClickFunnels integration appears on page
- [ ] Chat widget works in ClickFunnels

---

## 🛠️ Troubleshooting

### Issue: Chat button doesn't appear

**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)
- Verify your Vapi API keys are correct
- Make sure JavaScript is enabled

### Issue: Microphone permission denied

**Solution:**
- Check browser microphone permissions
- Refresh the page
- Try a different browser
- Ensure HTTPS is used (not HTTP)

### Issue: "Failed to initialize AI assistant"

**Solution:**
- Your Vapi public key is incorrect (should start with `public_`)
- Check your Vapi dashboard for active assistants
- Verify agent is properly configured
- Ensure assistant ID matches your created agent

### Issue: Responses are slow

**Solution:**
- Check your LLM provider credits/balance
- Verify network connection
- Try reloading the page
- Some LLMs take longer to respond

### Issue: Chat works locally but not on production

**Solution:**
- Make sure you're using HTTPS (not HTTP)
- Check CORS settings if accessing from different domain
- Verify Vapi keys are correctly set in deployment environment
- Clear browser cache and cookies

---

## 🚀 Advanced Features

### Customize Agent Instructions

1. Go to [Vapi Dashboard](https://dashboard.vapi.ai)
2. Select your agent
3. Edit system prompt:

```
You are a helpful customer support assistant for [Your Company].
You help customers with:
- Product inquiries
- Technical support
- Billing questions
- Account management

Always be professional and helpful.
```

### Switch LLM Providers

In Vapi Dashboard, you can easily switch between:
- OpenAI (GPT-4, GPT-3.5-turbo)
- Anthropic (Claude)
- Google (Gemini)
- Others

### Change Voice Provider

Options include:
- 11Labs (most natural)
- Azure (enterprise)
- Google (cloud)
- PlayHT
- Others

---

## 📞 Resources

- **Vapi Docs:** https://docs.vapi.ai
- **Vapi Dashboard:** https://dashboard.vapi.ai
- **Vapi Discord:** https://discord.gg/pUFNcf2WmH

---

## 📝 Files Included

- `index.html` - Main website with embedded chat
- `main.js` - Vapi initialization and controls
- `clickfunnels-integration.html` - ClickFunnels widget code + instructions
- `.env.example` - Environment variable template
- `vite.config.js` - Build configuration
- `package.json` - Dependencies and scripts
- `railway.json` - Railway deployment config
- `README.md` - This file

---

## ✨ Next Steps

1. ✅ Create a Vapi agent at https://dashboard.vapi.ai
2. ✅ Get your Vapi Public Key and Assistant ID
3. ✅ Update `.env.local` with your credentials
4. ✅ Deploy website (Railway/Netlify/Vercel)
5. ✅ Add to ClickFunnels
6. ✅ Test thoroughly
7. ✅ Customize as needed

---

**Ready to go live? Create your Vapi agent and add your credentials!**
