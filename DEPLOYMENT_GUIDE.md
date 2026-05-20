# 🚀 FutureStack Portfolio - Netlify Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ Step 1: Clean Up Junk Files

**DELETE THESE FILES IMMEDIATELY** (they are old/unused):

```bash
# Root level junk files
index.js                    # Old translations (now in app/context/LanguageContext.tsx)
LanguageContext.js          # Old language context (now in app/context/LanguageContext.tsx)
globals.css                 # Old CSS (now in app/globals.css)
logo.jpg                    # Duplicate logo (use public/images/logo.jpg)

# Components folder (entire folder is unused)
components/                 # DELETE ENTIRE FOLDER
  ├── _app.js              # Old Next.js pages router file
  ├── Header.js            # Old header component
  └── index.js             # Old exports

# Documentation files (optional - keep if you want)
FIXES_SUMMARY.md           # Optional: can delete after reading
SECURITY_AUDIT_AND_RECOMMENDATIONS.md  # Optional: keep for reference
```

**Commands to clean up:**
```bash
# Delete junk files
rm index.js
rm LanguageContext.js
rm globals.css
rm logo.jpg
rm -rf components/

# Optional: delete documentation
rm FIXES_SUMMARY.md
# Keep SECURITY_AUDIT_AND_RECOMMENDATIONS.md for reference
```

### ✅ Step 2: Environment Variables Setup

**CRITICAL: Remove .env from repository**
```bash
# Remove .env from git tracking (don't delete the file yet)
git rm --cached .env
git commit -m "Remove .env from repository for security"
```

**Set up Netlify Environment Variables:**
1. Go to Netlify Dashboard
2. Select your site (or create new one)
3. Go to **Site Settings** → **Environment Variables**
4. Add these variables:

```
EMAILJS_SERVICE_ID=service_xuon6so
EMAILJS_TEMPLATE_ID=template_m1veqc3
EMAILJS_PUBLIC_KEY=-yLpQMKJzGDYfgWCD
GA_ID=your-google-analytics-id
CONTACT_EMAIL=futurestack59@gmail.com
SITE_URL=https://your-domain.com
```

**⚠️ SECURITY WARNING:** 
- Your EmailJS keys are currently exposed in `.env`
- After deploying to Netlify, rotate these keys in EmailJS dashboard
- Update the environment variables in Netlify with new keys

### ✅ Step 3: Build and Test Locally

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test the build locally
npm run start
```

Visit `http://localhost:3000` and test:
- All pages load correctly
- Contact form works
- Language switcher functions
- Mobile responsiveness
- No console errors

### ✅ Step 4: Git Cleanup

```bash
# Add all changes
git add .

# Commit cleanup
git commit -m "Clean up junk files and prepare for Netlify deployment"

# Push to GitHub/GitLab
git push origin main
```

---

## 🚀 Deployment Methods

### Method 1: Drag and Drop (Simplest)

**⚠️ NOT RECOMMENDED** - This method has limitations:
- No automatic builds on push
- No environment variables support
- Manual updates required

**If you must use drag and drop:**

1. **Build your project first:**
```bash
npm run build
```

2. **Create a `publish` folder:**
```bash
mkdir publish
cp -r .next publish/
cp -r public publish/
cp netlify.toml publish/
```

3. **Drag the `publish` folder to Netlify**

### Method 2: Connect to Git (RECOMMENDED)

**This is the proper way to deploy:**

1. **Push your code to GitHub/GitLab/Bitbucket**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/futurestack.git
git push -u origin main
```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose your Git provider (GitHub, GitLab, etc.)
   - Select your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
   - Click **"Deploy site"**

3. **Add Environment Variables:**
   - Go to **Site Settings** → **Environment Variables**
   - Add all required variables (see Step 2)
   - Trigger a new deploy

---

## ⚙️ Build Configuration

Your `netlify.toml` is already configured correctly:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**No changes needed!**

---

## 🔧 Post-Deployment Tasks

### 1. Set Up Custom Domain (Optional)
- Go to **Domain Settings** in Netlify
- Add your custom domain
- Update DNS records as instructed

### 2. Enable HTTPS
- Automatic with Netlify
- Force HTTPS in **Domain Settings**

### 3. Set Up Form Notifications
- Go to **Site Settings** → **Forms**
- Configure form notifications
- Set up form builder if needed

### 4. Add Google Analytics
- Add your GA4 measurement ID to environment variables
- Update `app/components/Analytics.tsx` if needed

### 5. Monitor Performance
- Check **Site Overview** for build status
- Use **Lighthouse** to test performance
- Monitor **Function logs** for errors

---

## 🛡️ Security Reminders

### Immediate Actions:
1. **Rotate EmailJS keys** (they're exposed in .env)
2. **Remove .env from repository** (already in .gitignore)
3. **Set up Netlify Environment Variables**
4. **Enable HTTPS** (automatic with Netlify)

### Ongoing:
- Monitor form submissions for spam
- Update dependencies regularly
- Review security headers
- Test forms monthly

---

## 📊 Expected Performance

With proper deployment, you should achieve:

- **Lighthouse Score:** 90+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Core Web Vitals:** All green

---

## 🆘 Troubleshooting

### Build Fails:
```bash
# Clear cache and rebuild
rm -rf node_modules .next package-lock.json
npm install
npm run build
```

### Environment Variables Not Working:
- Check variable names match exactly
- Restart the build
- Check Netlify logs for errors

### Site Not Updating:
- Clear browser cache (Ctrl+Shift+R)
- Trigger new deploy in Netlify
- Check build logs for errors

### Forms Not Working:
- Verify environment variables are set
- Check EmailJS dashboard for errors
- Test form submission manually

---

## 📞 Support Resources

- **Netlify Docs:** https://docs.netlify.com
- **Next.js Docs:** https://nextjs.org/docs
- **Netlify Community:** https://answers.netlify.com
- **Security Audit:** See `SECURITY_AUDIT_AND_RECOMMENDATIONS.md`

---

## ✅ Final Checklist Before Deploying

- [ ] Deleted all junk files
- [ ] Removed .env from git tracking
- [ ] Set up Netlify environment variables
- [ ] Tested build locally (`npm run build`)
- [ ] Tested all pages and features
- [ ] Pushed code to GitHub
- [ ] Connected repository to Netlify
- [ ] Configured build settings
- [ ] Added custom domain (if applicable)
- [ ] Enabled HTTPS
- [ ] Tested contact form
- [ ] Verified language switcher works
- [ ] Checked mobile responsiveness
- [ ] Reviewed security headers

---

## 🎉 You're Ready!

After completing these steps, your portfolio will be:
- ✅ Live on Netlify
- ✅ Secure with environment variables
- ✅ Fast and optimized
- ✅ Mobile responsive
- ✅ Multi-language support
- ✅ Production-ready

**Good luck with your deployment! 🚀**

---

**Need help?** Check `SECURITY_AUDIT_AND_RECOMMENDATIONS.md` for detailed security information.