# 🌱 SecondLife AI — Creative Reuse & Upcycling Assistant

SecondLife AI is a responsive, modern sustainability web application that empowers individuals to transform unwanted, broken, or discarded objects into useful, creative, decorative, or storage items instead of throwing them away.

---

## 🎯 Main Objective

Reduce household and landfill waste through creative reuse by providing tailored upcycling instructions based on the user's available materials, tools, budget, and skill level.

---

## 💰 Strict ₹0 Budget Architecture

This project is built from the ground up to have a total development and hosting cost of **₹0**:
- **Frontend:** Pure HTML5, CSS3, and modern vanilla JavaScript (ES6+).
- **Offline Decision & Suggestion Engine:** Client-side rule-based recommendation logic and verified upcycling recipes.
- **Zero API Fees:** No paid OpenAI, AWS Bedrock, or cloud API keys are required to run the site.
- **Hosting:** Ready for 100% free hosting using **GitHub Pages**.
- **Transparency:** All suggestions in this phase are clearly badged as *Demo Suggestion Mode* so reviewers and users understand they run via local logic without hidden charges.

---

## 🚀 Key Features

1. **Intelligent Material & Tool Matching:** Users input item description, condition, available household tools, budget, and skill level.
2. **Category Selection:** Target practical tools, decorative art, home storage, or general best matches.
3. **Safety & Hazard Interception:** Automatically screens for hazardous, toxic, or dangerous materials (such as lithium-ion batteries, CFL bulbs, aerosol cans, and toxic chemicals), preventing unsafe DIY procedures and redirecting users to certified municipal recycling programs.
4. **Variations On Demand:**
   - 💡 **Cheaper Idea (₹0):** Replaces craft supplies with free household substitutes (e.g., flour paste, scrap cardboard).
   - ⚡ **Simpler Idea:** Shortens instructions into quick 10-minute beginner projects.
   - 🛡️ **Extra Safe Idea:** Eliminates sharp blades, drills, and hot glue for child-safe crafting.
   - 🔄 **Alternative Idea:** Explores other creative categories for the same object.
5. **Dynamic Fallback Synthesis:** If an unlisted or novel item is entered (e.g. *guitar strings*, *old umbrella*), the engine dynamically generates a structured upcycling plan.
6. **Quick Inspiration Chips:** One-click presets for instant testing (Glass Jars, Denim Jeans, Shipping Boxes, Plastic Bottles, Tin Cans, Wood Scraps).
7. **Responsive & Accessible Design:** Crafted with an eco-conscious palette (sage greens, earthy neutrals, terracotta accents), clean typography, generous touch targets, and keyboard accessibility.

---

## 📁 Project Structure

```text
secondlife/
├── index.html               # Main semantic HTML5 interface
├── README.md                # Project documentation and beginner setup guide
├── css/
│   └── styles.css           # Complete responsive stylesheet & design system
├── js/
│   ├── projects-data.js     # Catalog of upcycling recipes, categories & safety hazard rules
│   ├── suggestion-engine.js # Intelligent rule-based matching & variation engine
│   └── app.js               # Application controller, DOM manipulation & live validation
└── assets/                  # Icons and media assets
```

---

## 💻 How to Run and Test on Your MacBook

You can run SecondLife AI immediately on your Mac without installing any node modules or external packages.

### Method 1: Direct File Opening (Simplest)
1. Open the Finder on your Mac.
2. Navigate to your `Downloads` folder, then open `secondlife`.
3. Double-click **`index.html`** to open it directly in Safari, Chrome, or your default browser.

Or run this one-line command in your Mac Terminal:
```bash
open /Users/afna/Downloads/secondlife/index.html
```

---

### Method 2: Local Python Server (Recommended for CSE Students)
Macs come with Python 3 pre-installed. Running a lightweight local web server mimics how websites work on the real internet:

1. Open your **Terminal** app.
2. Navigate to your project directory:
   ```bash
   cd ~/Downloads/secondlife
   ```
3. Start the local web server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your web browser and go to:
   ```text
   http://localhost:8000
   ```
5. When you are finished testing, press `Ctrl + C` in the Terminal to stop the server.

---

## 🧪 Testing Checklist

Try these tests to verify every feature:

1. **Quick Preset Test:** Click on the `🫙 Glass Jar` or `👖 Denim Jeans` chip at the top. The form will auto-fill and smoothly reveal verified upcycling suggestions.
2. **Explore Variations:** On any project card, click `💡 Cheaper (₹0)`, `⚡ Simpler`, or `🛡️ Extra Safe`. Notice how the card dynamically adapts materials, safety precautions, and steps.
3. **Safety Hazard Interception:** Enter `car battery` or `fluorescent light` into the item input and submit. Notice how the safety system intercepts the request and provides certified hazardous disposal guidance instead of DIY instructions.
4. **Custom Item Fallback:** Enter an unusual item like `broken guitar` or `bicycle wheel`. The dynamic recipe synthesizer will compose custom, safe instructions.
5. **Mobile Responsiveness:** Resize your browser window or inspect in mobile mode (Cmd + Option + I in Chrome/Safari) to verify the flexible layout.

---

## 🗺️ Future Roadmap & Phase 4 AI Integrations

Once Phase 1 & 2 are finalized and hosted for free on GitHub Pages:
- **Phase 3 (Free Hosting):** Push this repository to GitHub and enable **GitHub Pages** from repository settings (free static hosting with zero maintenance).
- **Phase 4 (Optional AI Integration):** Evaluate Strands Agents SDK, Strands Decider 2B, and Amazon Bedrock.
  > ⚠️ **Important Cost Note:** Cloud AI services (like Amazon Bedrock) usually require an active AWS account, credit card verification, and incur per-token inference charges. Never connect paid cloud APIs until pricing tiers and usage limits are verified.
