# 🚀 AdBlocker Chrome Extension  

![Version](https://img.shields.io/badge/version-1.0-blue)  
![MIT License](https://img.shields.io/badge/license-MIT-green)  

An advanced **AdBlocker Chrome Extension** that removes ads from all websites, including **Google, Facebook, YouTube (landing page only), and MX Player**. It enhances browser performance by using **declarativeNetRequest & MutationObserver**.

---

## 📌 Features  

✅ **Blocks ads** from all websites (Google Ads, Facebook, etc.).  
✅ **Removes YouTube ads** (Landing page only, does not interfere with video playback).  
✅ **Auto-skips video ads on YouTube**.  
✅ **Blocks MX Player Ads** (Pre-video & Display ads).  
✅ **Faster Performance** (Using declarativeNetRequest & MutationObserver).  

---

## 📸 Preview  


![AdBlocker Preview](icons\icon128.png)

---

## 📂 Folder Structure  

```plaintext
AdBlocker/
│── icons/
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
│── background.js
│── content.js
│── manifest.json
│── rules.json
│── popup.html
│── popup.js
│── styles.css


🔧 Installation Guide
Method 1: Load as an Unpacked Extension
1. Download the Repository (git clone or manually).
2. Open Google Chrome and go to chrome://extensions/.
3. Enable Developer Mode (Toggle switch at the top-right).
4. Click "Load unpacked" and select the AdBlocker folder.
5. Extension is now active! 🎉



⚙️  How It Works:-
1️⃣ Background Script (background.js)
1. Uses declarativeNetRequest to block ad scripts from known ad networks.
2. Excludes YouTube from strict ad-blocking to avoid black screen issues.
2️⃣ Content Script (content.js)
1. Detects & removes ad elements (Google Ads, Facebook Ads, etc.).
2. Auto-clicks "Skip Ad" on YouTube videos to reduce ad interruptions.
2. Uses MutationObserver for real-time ad removal.
3️⃣ Popup UI (popup.html & popup.js)
1. Simple toggle switch to enable/disable ad blocking.

🚀 Future Enhancements
✅ Add more custom blocking rules.
✅ Improve UI for better control over ad blocking.
✅ Optimize for better YouTube experience.



📜 License
This project is licensed under the MIT License.
