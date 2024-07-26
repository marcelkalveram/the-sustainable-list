# The Sustainable List

![Vercel](https://vercelbadge.vercel.app/api/marcelkalveram/the-sustainable-list)

This is the README file for the project "The Sustainable List". It provides instructions on how to set up and deploy the project on Vercel.

This project runs on the React framework [Next.js](https://nextjs.org/) and gets deployed on [Vercel](https://vercel.com/) for maximum performance and infrastructure efficiency.

## Prerequisites

Before getting started, make sure you have the following:

- Vercel account
- Node.js installed
- Git installed

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

## Environment variables

Create an `.env.local` file in the root directory of the project and add the necessary environment variables:

```bash
CONTENTFUL_ACCESS_TOKEN=""
CONTENTFUL_SPACE_ID=""
SENDGRID_API_KEY=""
```

After logging in to Vercel (see [Deployment](#deployment) below), these can be pulled directly from there using the following command:

```
vercel env pull .env.local
```

## Pulling content from Contentful

Run the following to pull in the latest content from the Contentful API:

```
npm run contentful:pull:local
```

IMPORTANT: this requires the two `CONTENTFUL_...` keys above to be set to pull content from the Contentful space. Ask the project owner for access.

This script saves the data consumed by the app in the public folder at `/public/data/index.json` so it can be access by the app at runtime.

### Running this locally vs. Vercel

The `contentful:pull:local` script only works on localhost and sets the environment variables for Contentful for local dev environments before running the node script.

On Vercel, the `build` command runs the non-local version of this script (`contentful:pull`) since the environment variables are already available at build time.

## Development

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and visit `http://localhost:3000` to see the project running locally.

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
