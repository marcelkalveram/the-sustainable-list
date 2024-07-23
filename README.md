# The Sustainable List

This is the README file for the project "The Sustainable List". It provides instructions on how to set up and deploy the project on Vercel.

## Prerequisites

Before getting started, make sure you have the following:

- Vercel account
- Node.js installed
- Git installed

## Environment variables

Create an `.env` file in the root directory of the project and add the necessary environment variables. Using Vercel, this can be simplified, as Vercel allows us to pull the env variables from its configuration (see [Deployment](#deployment) below).

```
CONTENTFUL_ACCESS_TOKEN=""
CONTENTFUL_SPACE_ID=""
SENDGRID_API_KEY=""
```

These don't get loaded unless you use a bash plugin like https://github.com/johnhamelink/env-zsh to automatically load variables from an `.env` file in your project directory.

Using the Vercel CLI simplifies this process.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/marcelkalveram/the-sustainable-list.git
```

2. Navigate to the project directory:

```bash
cd the-sustainable-list
```

3. Install dependencies:

```bash
npm install
```

4. Run the following to pull in the latest content from the Contentful API:

```
npm run contentful:pull
```

IMPORTANT: this requires the two `CONTENTFUL_...` keys above to pull content from this particular Contentful space. Ask the project owner for access.

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and visit `http://localhost:3000` to see the project running locally.

## Deployment

To deploy the project on Vercel, follow these steps:

1. Install the Vercel CLI:

```bash
npm install -g vercel
```

2. Log in to your Vercel account:

```bash
vercel login
```

3. Configure the above [environment variables](#environment-variables) for this project, following this guide: https://vercel.com/docs/projects/environment-variables

4. Deploy the project:

```bash
vercel
```

4. Follow the prompts to configure the deployment settings.

5. Once the deployment is complete, you will receive a unique URL for your project.

## Contributing

If you would like to contribute to this project, please follow the guidelines outlined in the CONTRIBUTING.md file.

## License

This project is licensed under the [MIT License](LICENSE.md).
