# 💼 **My Portfolio v1.0**
Welcome to my portfolio's repository! This project is more than just a collection of links; it's a complete web application built from scratch, designed to be a reflection of my skills, my development philosophy, and my attention to detail.

## 💡 **Project Reflection**
The main goal was to create a site that not only looks good but is also exceptionally fast, fully accessible, and easy to maintain. Every technological and design decision was made with these three pillars in mind.

### 🎨 **Design Choices**
* **Mobile-First and Responsive:** The design was conceived for mobile devices first and then adapted to larger screens. This ensures a seamless user experience for the majority of visitors, who nowadays browse from their phones.

* **Accessible Color Palette:** The combination of beige (stone), purple, and green was carefully selected and tested to meet WCAG contrast standards in both light and dark modes, ensuring the content is readable for everyone.

* **Fluid Typography:** Instead of fixed font sizes, CSS's clamp() function was used so that the typography scales smoothly with the screen size. This improves readability and aesthetics across a wide range of devices, from a small phone to a 4K monitor.

### 👥 **User Considerations**
* **Extreme Performance:** Astro was chosen for its "zero JavaScript by default" architecture. This means the site loads almost instantly, offering a superior user experience and improving search engine optimization (SEO).

* **Comprehensive Accessibility (a11y):** Accessibility wasn't an afterthought but a core part of the development process. This includes everything from the semantic HTML structure and ARIA roles to keyboard navigation and a "Skip to content" link for screen reader users.

* **Internationalization (i18n):** The site is available in English and Spanish. A content management system was implemented that separates text from logic, making it easy to add more languages in the future.

### 🏆 **Challenges I Overcame**
Developing this portfolio was an incredible learning experience, especially when facing and solving technical challenges:

1. **The Theme Toggle:** Initially, the button to switch between light and dark mode had a race condition, where the script would run before the button was available in the DOM. After several attempts, the definitive solution was to turn it into an Astro Island, isolating its logic and ensuring it worked correctly. This challenge reinforced the importance of understanding the framework's architecture on a deep level.

2. **Deployment Configuration:** Deploying to GitHub Pages for a "User Site" presented several obstacles, including git conflicts and build errors. The solution was to implement a professional and automated workflow with GitHub Actions, separating the source code (on the main branch) from the deployed site. This process taught me CI/CD best practices.

### ⚙️ **Tech Stack**
* **Framework:** Astro
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Deployment:** GitHub Actions