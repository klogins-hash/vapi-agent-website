# Vapi AI Agent - Website & ClickFunnels Integration

Complete setup guide for deploying your AI agent on a website and integrating with ClickFunnels.

## 📋 What You Have

✅ **Custom LLM Server**
- Deployed on Railway at: `https://vapi-custom-llm-server-production.up.railway.app`
- Powered by OpenAI GPT-3.5-turbo
- Fully functional `/chat/completions` endpoint

✅ **Vapi Agent**
- Agent ID: `5287ce68-f609-4105-bd2e-d7732062ef74`
- Name: "custom url again"
- Status: Active and Ready

✅ **Website**
- Beautiful responsive design
- Integrated Vapi chat functionality
- Mobile-optimized interface

✅ **ClickFunnels Integration**
- Floating chat widget
- Ready to paste into ClickFunnels pages
- Fully styled and functional

---

## 🚀 Quick Start Setup

### Step 1: Get Your Vapi Public Key

1. Go to [Vapi Dashboard](https://dashboard.vapi.ai)
2. Navigate to **Project Settings** → **API Keys**
3. Copy your **Public Key** (starts with `public_`)
4. Keep this safe - you'll need it for both the website and ClickFunnels

### Step 2: Update the Website

Open `index.html` and replace:
```javascript
apiKey: 'VAPI_PUBLIC_KEY_HERE'
```

With your actual public key:
```javascript
apiKey: 'public_xxxxxxxxxxxxxx'
```

### Step 3: Update ClickFunnels Integration

Open `clickfunnels-integration.html` and replace:
```javascript
publicKey: 'REPLACE_WITH_YOUR_VAPI_PUBLIC_KEY'
```

With your actual public key:
```javascript
publicKey: 'public_xxxxxxxxxxxxxx'
```

---

## 📱 Website Deployment

### Option A: Deploy on Netlify (Recommended - Free & Easy)

1. **Prepare Files**
   - Make sure `index.html` is updated with your Vapi public key
   - Create a folder with just `index.html`

2. **Deploy**
   - Go to [Netlify](https://netlify.com)
   - Sign in with GitHub/Google
   - Drag and drop your folder to deploy
   - Get your live URL instantly

3. **Test**
   - Click "Start Chat Now" button
   - Grant microphone access
   - Have a conversation with your AI agent

### Option B: Deploy on Vercel

1. Create a GitHub repository with your `index.html`
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy automatically
5. Your site goes live instantly

### Option C: Self-Hosted

1. Upload `index.html` to your web server
2. Update DNS to point to your server
3. Access your website
4. The agent will work immediately

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

6. **Update Your Public Key**
   - In the JavaScript section, find:
     ```javascript
     publicKey: 'REPLACE_WITH_YOUR_VAPI_PUBLIC_KEY'
     ```
   - Replace with your actual Vapi public key

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

### Change Agent Instructions

In `index.html` or `clickfunnels-integration.html`, update the assistant message:
```javascript
addVapiMessage('assistant', 'Your custom message here!');
```

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

## 🔌 API Endpoints Reference

Your custom LLM server provides these endpoints:

### Main Endpoint
```
POST https://vapi-custom-llm-server-production.up.railway.app/chat/completions
```

**Request:**
```json
{
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"}
  ],
  "model": "gpt-3.5-turbo",
  "temperature": 0.7,
  "max_tokens": 100
}
```

**Response:**
```json
{
  "choices": [{
    "message": {
      "role": "assistant",
      "content": "Hello! How can I help you?"
    },
    "finish_reason": "stop"
  }],
  "model": "gpt-3.5-turbo-0125",
  "usage": {
    "prompt_tokens": 15,
    "completion_tokens": 10,
    "total_tokens": 25
  }
}
```

### Health Check
```
GET https://vapi-custom-llm-server-production.up.railway.app/health
```

---

## 🛠️ Troubleshooting

### Issue: Chat button doesn't appear

**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)
- Verify your Vapi public key is correct
- Make sure JavaScript is enabled

### Issue: Microphone permission denied

**Solution:**
- Check browser microphone permissions
- Refresh the page
- Try a different browser
- Ensure HTTPS is used (not HTTP)

### Issue: "Failed to initialize AI assistant"

**Solution:**
- Your Vapi public key is incorrect
- Vapi account may have billing issues
- Check your Vapi dashboard for active phone numbers
- Ensure your agent is properly configured

### Issue: Responses are slow

**Solution:**
- Check your OpenAI API key balance
- Verify network connection
- Large requests may take longer
- Use shorter max_tokens if needed

### Issue: Chat works locally but not on production

**Solution:**
- Make sure you're using HTTPS (not HTTP)
- Check CORS settings if accessing from different domain
- Verify Vapi public key is for production
- Clear browser cache and cookies

---

## 📊 Agent Configuration

Your current agent uses these settings:

```json
{
  "id": "5287ce68-f609-4105-bd2e-d7732062ef74",
  "name": "custom url again",
  "model": {
    "provider": "custom-llm",
    "model": "null",
    "url": "https://vapi-custom-llm-server-production.up.railway.app"
  },
  "voice": {
    "provider": "11labs",
    "voiceId": "Elliot",
    "model": "eleven_turbo_v2_5"
  },
  "transcriber": {
    "provider": "deepgram",
    "model": "nova-2"
  }
}
```

### To Modify Agent Settings:

1. Go to [Vapi Dashboard](https://dashboard.vapi.ai)
2. Select your agent
3. Edit settings:
   - Change voice
   - Modify system prompt
   - Adjust transcriber
   - Change model parameters

---

## 🚀 Advanced Features

### Add Custom Instructions

Edit your agent's system prompt in Vapi Dashboard:

```
You are a helpful customer support assistant for [Your Company].
You help customers with:
- Product inquiries
- Technical support
- Billing questions
- Account management

Always be professional and helpful.
If you don't know something, offer to connect them with someone who can help.
```

### Connect to CRM

Your custom LLM server includes database logging:

```
API Endpoint: https://vapi-custom-llm-server-production.up.railway.app/interactions
```

View all conversations and extract leads/data.

### Monitor Usage

Check API stats:
```
GET https://vapi-custom-llm-server-production.up.railway.app/interactions/stats
```

---

## 📞 Support

- **Vapi Docs:** https://docs.vapi.ai
- **Vapi Discord:** https://discord.gg/pUFNcf2WmH
- **Your Custom LLM Server:** `/health` endpoint for status

---

## 📝 Files Included

- `index.html` - Standalone website with embedded chat
- `clickfunnels-integration.html` - ClickFunnels integration code + instructions
- `README.md` - This file

---

## ✨ Next Steps

1. ✅ Get your Vapi Public Key
2. ✅ Update both HTML files with your key
3. ✅ Deploy website (Netlify/Vercel)
4. ✅ Add to ClickFunnels
5. ✅ Test thoroughly
6. ✅ Monitor analytics
7. ✅ Customize as needed

---

**Ready to go live? Start with adding your Vapi Public Key!**
