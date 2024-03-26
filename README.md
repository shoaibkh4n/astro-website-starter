# Astro Website Template

Welcome to the Astro Website Template! This template is designed to help you quickly set up a website using Astro, featuring preconfigured nested routing for blogs, centralized configuration, and a structured content system.

## Features

- **Nested Routing for Blogs**: Simplify the management and navigation of your blog or documentation.
- **Centralized Configuration**: Manage site settings like page titles, descriptions, and more from a single location.
- **Content API Integration**: Utilize Astro's Content API with a defined schema for dynamic and easy content updates.

## Getting Started

### Prerequisites

Before you begin, ensure you have installed:

- Node.js
- npm

### Installation

1. Clone the repository or download the zip file.
2. Navigate to the project directory and install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Build your site for production:
   ```
   npm run build
   ```
5. Preview your production build:
   ```
   npm run preview
   ```

> After installing this make sure to visit `/nesting` to see more, nesting routes.

### Configuration

Edit the `src/config/config.json` file to customize global settings for your site. Manage your content by adding or modifying markdown files in the `src/content/` directory, ensuring they adhere to the schema defined in `src/content/config.ts` validated by `zod`.

### Customization

This template is designed to be easily customizable. You can add styles, assets, and components to fit your needs:

- Styles: Customize or add new stylesheets in the `src/assets/css` directory.
- Assets: Place images, icons, and other assets in `src/assets/images` directory.
- Components: Reuse or create new components within the `src/components` directory.
- Content: It is using Astro content api so play with `src/content/` and make sure to add the schema for each in `src/content/config.ts`.
- Layout: Contains the base layout for the project, you can add more or customize accordingly.
- Pages: This directory has configured nesting routes that you can see by visiting `/nesting` after running this project , 404 page, index page, you can customize each accordingly and add more pages according to your project need.
- Lib: It contains all the utility functions and files.

### Deployment

Follow the guidelines provided by your hosting service to deploy your Astro website. Most platforms support Astro out of the box and only require a build command (npm run build) and a publish directory (dist/).

### Contributing

Contributions are welcome! If you'd like to help improve the Astro Website Template, feel free to submit issues, feature requests, or pull requests.

### License

Distributed under the MIT License. See [LICENCE](https://github.com/shoaibkh4n/astro-website-starter/blob/master/LICENSE) for more information.

### Acknowledgments

- Icon and designs from [Quazire.com](https://quazire.com/)
- Backed by [Quazire.com](https://quazire.com/)

- Follow me on [Twitter](https://twitter.com/theshoaibkh4n) and [Linkedin](https://linkedin.com/in/shoaibkh4n)
- Support my work with a [Donation](https://github.com/sponsors/shoaibkh4n) 🔥🚀
