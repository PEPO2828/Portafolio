# Portfolio

This is a personal portfolio website to showcase projects and skills. It is a single-page application built with vanilla JavaScript, HTML, and Tailwind CSS, using Vite as a build tool.

## Live Demo

[Link to your live portfolio]

## Keywords

JavaScript, Vanilla JS, Tailwind CSS, Vite, HTML5, CSS3, Single-Page Application (SPA), Portfolio, Frontend, Responsive Design, ES6+, Chart.js, Iconify.

## Features

*   **Project Showcase:** Display projects with titles, descriptions, tags, and links.
*   **Filtering:** Filter projects by technology tags.
*   **Responsive Design:** The layout is optimized for different screen sizes.
*   **Animations:** Subtle animations and effects to improve user experience.

## Tech Stack

*   **HTML5**
*   **CSS3**
*   **JavaScript (ES6+)**
*   **Vite:** Frontend build tool for development and production builds.
*   **Tailwind CSS:** Utility-first CSS framework.
*   **Chart.js:** For creating charts and data visualizations.
*   **Iconify:** For using icons from various icon sets.

## Project Structure

```
/
├── src/
│   ├── assets/         # Images and other static assets
│   ├── components/     # Reusable UI components (e.g., ProjectCard, Button)
│   ├── data/           # Project data and settings (projects.js, settings.js)
│   ├── lib/            # Helper functions and libraries
│   ├── sections/       # Page sections (e.g., Header, Hero, Work)
│   ├── styles/         # CSS styles
│   ├── app.js          # Main application logic
│   ├── index.html      # Main HTML file
│   └── main.js         # Entry point for the application
├── public/             # Static assets that are copied directly to the build output
├── docs/               # Build output directory for production
├── .gitignore
├── index.html          # Main entry point for Vite
├── package.json
├── README.md
└── vite.config.js
```

## Development

To run the project in a local development environment, you need to have Node.js and npm installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start a local development server, and you can view the project in your browser at the URL provided in the console.

## Build for Production

To build the project for production, run the following command:

```bash
npm run build
```

This will create a `docs` directory with the optimized and minified files for production.

## Deployment to GitHub Pages

This project is configured to be deployed to GitHub Pages.

1.  **Update `vite.config.js`:**
    Make sure the `base` property in `vite.config.js` is set to the name of your repository (e.g., `/My-Portfolio/`).

2.  **Build the project:**
    Run `npm run build` to generate the production files in the `docs` directory.

3.  **Push to GitHub:**
    Commit and push the `docs` directory (and any other changes) to your GitHub repository.

4.  **Configure GitHub Pages:**
    In your repository's settings, go to the "Pages" section and configure it to deploy from the `docs` directory of your main branch.

## Customization

To add or modify projects, edit the `src/data/projects.js` file. The `projects` array contains a list of project objects. Each project object has the following structure:

```javascript
{
  title: 'Project Title',
  year: '2025',
  tags: ['Tag1', 'Tag2'],
  summary: 'Project summary.',
  links: [
    { label: 'Demo', url: '...' },
    { label: 'Code', url: '...' }
  ]
}
```