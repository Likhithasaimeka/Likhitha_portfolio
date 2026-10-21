# 🌟 Meka Likhitha Sai - Personal Portfolio Website

A complete, modern, responsive personal portfolio website designed and developed for **Meka Likhitha Sai**, an Information Technology undergraduate at **Sagi Ramakrishnam Raju Engineering College (SRKREC)**, Bhimavaram.

Built purely using **HTML5, CSS3, and Vanilla JavaScript** with zero external framework dependencies (no React, Bootstrap, or Tailwind CSS).

---

## 🚀 Live Preview & Demo

- **Theme:** Dark navy background with purple & blue gradients and neon accents
- **Typography & UI:** Glassmorphism card surfaces, smooth scrolling, dynamic typing animation, mobile-friendly navigation drawer, and interactive contact form validation.

---

## 📁 Project Directory Structure

```text
portfolio/
├── index.html              # Main HTML5 document with all 10 portfolio sections
├── css/
│   └── style.css           # Clean, responsive CSS with CSS variables & animations
├── js/
│   └── script.js           # Vanilla JavaScript for typing effect, mobile nav, & form logic
├── assets/
│   ├── images/
│   │   ├── avatar.svg      # Modern developer illustration avatar
│   │   ├── favicon.svg     # Website tab favicon
│   │   ├── project1.svg    # Online Food Delivery System preview banner
│   │   └── project2.svg    # Personal Portfolio Website preview banner
│   └── likhitha_resume_updated.pdf  # Official PDF resume
└── README.md               # Documentation and setup instructions
```

---

## 📑 Website Sections Included

1. **Navigation Bar:** Fixed glassmorphic navigation bar with brand logo, smooth-scroll links, resume download action, and a mobile hamburger menu toggle.
2. **Hero Section:** Greeting, name, dynamic animated title ("Aspiring Software Developer"), short tagline, quick badges (Location, College, CGPA), and quick action CTA buttons.
3. **About Me:** Bio narrative based on resume, highlighting academic background, degree details, and core interests.
4. **Technical Skills:** Visually categorized cards featuring badges for:
   - **Programming:** Python, Java, C, SQL
   - **Web Development:** HTML, CSS, JavaScript
   - **Databases:** MySQL, SQLite
   - **AI:** Artificial Intelligence, Generative AI (learning)
   - **Tools:** Git, GitHub, Visual Studio Code
   - **Core Subjects:** DSA, Object-Oriented Programming, DBMS
5. **Projects:** Detailed project cards with technology tags, features, and buttons for GitHub and Live Demo:
   - *Online Food Delivery System* (React, Node.js, SQLite)
   - *Personal Portfolio Website* (HTML, CSS, JavaScript)
6. **Experience:** Professional timeline displaying:
   - *Google AIML Virtual Internship* (Cohort 17, Eduskills supported by Google, June–August 2026)
   - *Full Stack Developer Experience* (October–December 2025)
7. **Education:** College details (SRKREC Bhimavaram), Degree (B.Tech in Information Technology), Graduation Year (2028), and CGPA (8.80/10).
8. **Achievements:** Card highlighting 2nd place in the Vedic Vision 24-hour hackathon conducted at SRKR Engineering College (14 August 2025).
9. **Contact Section:** Direct email address (`sailikhitha68@gmail.com`), location, social links for GitHub and LinkedIn, and an interactive contact form with client-side validation and mail client launcher.
10. **Footer:** Copyright notice with dynamic year calculation and a quick back-to-top button.

---

## 💻 How to Run the Project Locally in VS Code

### Option 1: Using VS Code "Live Server" Extension (Recommended)

1. Open **Visual Studio Code**.
2. Go to **File** &rarr; **Open Folder...** and select the `Likhitha_Portfolio` or `portfolio` folder.
3. If you don't already have the **Live Server** extension installed:
   - Click the **Extensions** icon in the left activity bar (or press `Ctrl+Shift+X`).
   - Search for **Live Server** (by *Ritwick Dey*).
   - Click **Install**.
4. In the VS Code file explorer, right-click on `index.html`.
5. Select **"Open with Live Server"** (or press `Alt+L, Alt+O`).
6. Your default web browser will automatically open and display the portfolio at `http://127.0.0.1:5500/index.html`.

### Option 2: Opening Directly in Any Web Browser

1. Navigate to the `portfolio/` folder on your computer.
2. Double-click `index.html` (or right-click &rarr; **Open with** &rarr; choose **Google Chrome**, **Microsoft Edge**, **Firefox**, or **Brave**).
3. The website will load immediately with all styling, animations, and local PDF assets working offline.

---

## ✏️ Customization Guide

### 1. Updating Social Media Links
In `index.html`, locate the social links under `#contact` and `#projects`:
- Replace `https://github.com/yourusername` with your real GitHub profile link.
- Replace `https://linkedin.com/in/yourusername` with your real LinkedIn profile link.

### 2. Replacing the Resume PDF
- The current resume is `portfolio/assets/likhitha_resume_updated.pdf`. Update the resume links in `index.html` if you replace this file.

### 3. Contact Form Delivery
The form uses [FormSubmit](https://formsubmit.co/) to deliver messages to `sailikhitha68@gmail.com`.

Before messages can be delivered, submit the form once after deployment and click the
activation link sent by FormSubmit. Check Gmail's Spam, Promotions, and All Mail folders
if the activation email is not visible. FormSubmit only delivers submissions after the
recipient address has been activated.

---

## 📜 License & Copyright

© 2026 **Meka Likhitha Sai**. All rights reserved.
Designed for internship and career placement applications.
