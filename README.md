# Sukha Education Foundation Website

Welcome to the Sukha Education Foundation website repository! This is a modern, responsive single-page web application built using **React**, **Vite**, and **Vanilla CSS**.

This guide is designed for the project owner and administrators to help set up, run, and update the website content without requiring deep coding knowledge.

---

## 🚀 Setup Guide

Follow these steps to set up and run the project locally on your machine.

### 📋 Prerequisites

Before starting, ensure you have the following installed:
1. **Node.js**: Version 18.0.0 or higher is recommended. Download it from [nodejs.org](https://nodejs.org/).
2. **Git**: To clone the repository and manage changes. Download it from [git-scm.com](https://git-scm.com/).

### 💻 Local Installation

1. **Clone the Repository** (or open the project folder):
   ```bash
   git clone <repository-url>
   cd SUKHA_PRE_FINAL
   ```
2. **Install Dependencies**:
   Run the following command in your terminal at the project root directory:
   ```bash
   npm install
   ```

### 🛠️ Development Server

To run the application locally in development mode:
```bash
npm run dev
```
Once the command starts, open your browser and navigate to the address shown in your terminal (typically **`http://localhost:5173/`**). 
*Note: Any changes you make to the code will immediately update in the browser (Hot Module Replacement).*

### 📦 Building for Production

To compile and optimize the website for production:
```bash
npm run build
```
This command generates a **`dist/`** directory containing the compiled, minified HTML, CSS, and JavaScript files ready for production hosting.

### 🌐 Deployment

This website is configured for hosting on platforms like **Vercel** or **Netlify**.
* **Vercel Routing**: The file `vercel.json` is configured to handle Single Page App (SPA) routing, rewriting all routes to `index.html` to avoid `404 Not Found` errors on page refresh.
* **How to deploy**:
  * If the repository is linked to Vercel, simply push your changes to the `main` branch to trigger an automatic deployment.
  * To deploy manually using the Vercel CLI, run:
    ```bash
    npx vercel --prod
    ```

---

## ✍️ Update Guide

This section explains how to add new content, pictures, or articles to the website. You will only need to save images in the correct folder, import them, and copy-paste data blocks.

> [!IMPORTANT]
> **Image Optimization**: Before adding any images to the project, compress them using online tools like [TinyJPG](https://tinyjpg.com/) or [TinyPNG](https://tinypng.com/) to keep the website loading fast!

---

### 📝 1. How to Add a New Blog Post

All blog posts are configured in the file `src/data/blogs.js`.

#### Step 1: Upload the Cover Image
1. Save your blog cover image in the directory: `src/assets/blog/`
2. Name the image file using lowercase letters and hyphens (e.g., `my-new-story.jpg` or `community-visit.jpeg`).

#### Step 2: Update the Blog Data
1. Open the file `src/data/blogs.js`.
2. At the top of the file, import your image by adding a new line (around line 11):
   ```javascript
   import newBlogCover from '../assets/blog/my-new-story.jpg';
   ```
3. Inside the `blogPosts` array, copy one of the existing objects (the code blocks surrounded by `{ ... }`) and paste it. Fill in your content:
   ```javascript
   {
     id: 'blog-3', // Must be a unique ID (incrementing from the previous one, e.g. blog-3, blog-4)
     slug: 'my-new-story-title', // The URL path for this blog (e.g., website.com/blog/my-new-story-title)
     author: 'Author Name', // Author's name
     title: 'Title of Your Blog Post',
     excerpt: 'A 1-2 sentence short summary of what the blog is about.',
     coverImage: newBlogCover, // Use the name you imported at the top of the file
     date: '2026', // Year or date of posting
     paragraphs: [
       'This is your first paragraph. Write it inside single quotes.',
       'This is your second paragraph. You can add as many paragraphs as you want, separated by commas.',
       'Make sure to wrap each paragraph in single quotes and put a comma at the end of the line.'
     ],
     // Optional: Add a box with a fun fact
     factBox: {
       title: 'Fact Title',
       text: 'Interesting fact content goes here.'
     },
     // Optional: Add reference websites
     referencesIntro: 'Read more about this topic at:',
     references: [
       { label: 'Reference Site 1', url: 'https://example.com' },
       { label: 'Reference Site 2', url: 'https://another-example.com' }
     ]
   }
   ```
4. Save the file. The new blog post will automatically appear on the Blog page!

---

### 🤝 2. How to Add a Volunteer Picture

The volunteer collage gallery is displayed on the Homepage, powered by the file `src/components/VolunteerGallery.jsx`.

#### Step 1: Upload the Volunteer Photo
1. Save the volunteer photo in the directory: `src/assets/Voluntree/`
2. Name the file clearly (e.g., `volunteer-john.jpg`).

#### Step 2: Update the Gallery Component
1. Open the file `src/components/VolunteerGallery.jsx`.
2. Near the top of the file (under `// ── New Untracked Volunteers ──`), import your image:
   ```javascript
   import johnImg from '../assets/Voluntree/volunteer-john.jpg';
   ```
3. Scroll down to the `volunteers` array inside the `VolunteerGallery` component.
4. Add a new row at the bottom of the list:
   ```javascript
   { id: 30, name: 'Volunteer', image: johnImg, pos: 'center 20%' },
   ```
   * **`id`**: Increment the ID number (e.g., if the last volunteer has `id: 29`, use `id: 30`).
   * **`name`**: Keep as `'Volunteer'` or use the person's name.
   * **`image`**: Use the variable name you imported at the top of the file (`johnImg`).
   * **`pos`**: *(Crucial for styling!)* This adjusts the center of the image. For example, `'center 20%'` pulls the image slightly down to ensure the volunteer's face is centered and not cropped. You can tweak this percentage (e.g., `15%`, `20%`, `30%`, `45%`, `75%`) depending on where the face sits in the photo.
   * **`scale`** *(Optional)*: If the image has white borders or needs zoom, add `scale: 1.55`.
5. Save the file. The new picture will automatically integrate into the collage!

---

### 🏫 3. How to Add a Teacher's Corner Story

Teacher's Corner articles are configured in the file `src/data/teacherArticles.js`.

#### Step 1: Upload the Article Cover Image
1. Save the cover image in any assets folder, preferably: `src/assets/Voluntree/` or `src/assets/Gallery/`
2. Name the file clearly (e.g., `teaching-session.jpg`).

#### Step 2: Update the Teacher Articles Data
1. Open the file `src/data/teacherArticles.js`.
2. Near the top of the file, import your image:
   ```javascript
   import teachingCover from '../assets/Voluntree/teaching-session.jpg';
   ```
3. Inside the `teacherArticles` array, copy and paste a template object:
   ```javascript
   {
     id: 'teacher-3', // Unique ID (e.g., teacher-3, teacher-4, etc.)
     slug: 'my-teaching-experience', // The URL path for this article (e.g. website.com/teachers-corner/my-teaching-experience)
     author: 'Teacher Name',
     title: 'Title of the Article',
     excerpt: 'A short one-sentence hook/summary of the article.',
     coverImage: teachingCover, // The imported image variable
     date: '2026', // Year of writing
     paragraphs: [
       'First paragraph content here...',
       'Second paragraph content here...',
       'Third paragraph content here...'
     ],
     references: [] // Leave empty or add links like in blogs
   }
   ```
4. Save the file.

---

### 👥 4. How to Add a Team Member

Team members are displayed on the About page, managed in `src/components/Team.jsx`.

#### Step 1: Upload their Profile Picture
1. Save their portrait image in the directory: `src/assets/Team/`
2. Keep the file name simple (e.g., `John CFO.jpg`).

#### Step 2: Update the Team Component
1. Open the file `src/components/Team.jsx`.
2. At the top of the file, import the image:
   ```javascript
   import johnImg from '../assets/Team/John CFO.jpg';
   ```
3. Inside the `members` array, add a new row at the bottom:
   ```javascript
   { name: 'John Doe', role: 'COO / Volunteer', image: johnImg, objectPosition: 'center 20%' },
   ```
   * **`name`**: The member's full name.
   * **`role`**: Their job title or role in the organization.
   * **`image`**: The imported image variable (`johnImg`).
   * **`objectPosition`**: Used to center their head/shoulders inside the circle. Tweak this value (e.g., `'center 20%'`, `'center 25%'`) so it looks perfect!
4. Save the file.

---

### 🖼️ 5. How to Add a Main Gallery Image

The filtering gallery is displayed in the Gallery section, managed in `src/components/Gallery.jsx`.

#### Step 1: Upload the Photo
1. Save the photo under: `src/assets/Gallery/`
2. Name it clearly (e.g., `EP-13.jpeg` or `BC-8.jpeg`).

#### Step 2: Update the Gallery Component
1. Open the file `src/components/Gallery.jsx`.
2. Import the image at the top of the file under the correct section category:
   ```javascript
   import myNewImage from '../assets/Gallery/EP-13.jpeg';
   ```
3. Locate the `galleryItems` array. Add a new object at the end of the category block:
   ```javascript
   { id: 37, category: 'English Program', label: 'English Program Snapshot', image: myNewImage },
   ```
   * **`id`**: Unique ID number (increment by 1 from the last item).
   * **`category`**: Must match one of these exact categories:
     * `'English Program'`
     * `'D2D'` *(Dare to Dream)*
     * `'Book Club'`
     * `'BTC'` *(Beyond The Chalkboard)*
   * **`label`**: A short description for accessibility (e.g., `'English Program Snapshot'`).
   * **`image`**: Use the imported image variable (`myNewImage`).
4. Save the file.

---

## 📂 Project Structure Directory

Below is an overview of the key folders you will interact with:

```text
SUKHA_PRE_FINAL/
├── src/
│   ├── assets/                <-- Put all your uploaded images here
│   │   ├── blog/              <-- Blog cover images
│   │   ├── Voluntree/         <-- Volunteer images & teacher corner images
│   │   ├── Team/              <-- Team member profile pictures
│   │   └── Gallery/           <-- Main gallery photos (filtered categories)
│   │
│   ├── data/                  <-- Data files where text content resides
│   │   ├── blogs.js           <-- Add new blog posts here
│   │   └── teacherArticles.js <-- Add new teacher stories here
│   │
│   ├── components/            <-- Web page components
│   │   ├── VolunteerGallery.jsx <-- Add volunteer pics here
│   │   ├── Team.jsx           <-- Add team members here
│   │   └── Gallery.jsx        <-- Add main gallery images here
│   │
│   └── pages/                 <-- Main pages of the website
├── package.json               <-- Project commands and setup scripts
└── vercel.json                <-- Web server redirects for clean routing
```

---

## 🔍 Troubleshooting & Common Errors

* **Syntax Errors (`Unexpected token`, `Parse error`)**: Ensure that every property and object inside lists/arrays is separated by a comma (`,`), and all text strings are enclosed in matching single (`'`) or double (`"`) quotes.
* **Broken Image / Build Fails**: Double-check the spelling of the image file name and the file extension (e.g., `.jpg`, `.jpeg`, `.png`, `.PNG`). Git and JavaScript are case-sensitive—`image.JPG` is not the same as `image.jpg`.
* **Missing Page on Refresh (404)**: If hosting on platforms other than Vercel and you receive a 404 when reloading a sub-page, make sure the hosting provider is configured to rewrite all routes to `/index.html` (e.g., using a `_redirects` file for Netlify containing `/* /index.html 200`).
