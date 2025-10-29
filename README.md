# Portfolio

This is a personal portfolio website to showcase projects and skills. It is a single-page application built with vanilla JavaScript, HTML, and Tailwind CSS.

## Features

*   **Project Showcase:** Display projects with titles, descriptions, tags, and links.
*   **Filtering:** Filter projects by technology tags.
*   **Responsive Design:** The layout is optimized for different screen sizes.
*   **Animations:** Subtle animations and effects to improve user experience.

## Tech Stack

*   **HTML5**
*   **CSS3**
*   **JavaScript (ES6+)**
*   **Tailwind CSS**
*   **Chart.js**
*   **Iconify**

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
└── README.md
```

## How to Run

1.  Clone the repository.
2.  Open the `src/index.html` file in your web browser.

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
