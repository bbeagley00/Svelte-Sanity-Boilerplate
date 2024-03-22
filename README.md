##A minimal SvelteKit site with Sanity Studio
This starter uses SvelteKit for the frontend and Sanity to handle its content.

Featuring
How to fetch content as data from the Sanity Content Lake
How to render block content with Portable Text
A Sanity Studio to create and edit content
Visual editing with live updates through Presentation
How to crop and render images with Sanity Image URLs
Note

This starter features an /app and a /studio folder. The /app folder contains the frontend code, and the /studio folder contains the Sanity Studio code.

It is configured as a monorepo using pnpm workspaces, but you can treat these directories as separate projects if you prefer.

Prerequisities
Node.js (v14.18 or later)
Sanity CLI (optional)
Getting started
Run the following commands to prepare both applications, each step should be executed from the root directory:

Install dependencies.
pnpm install
Select or create a Sanity project and dataset, and output the details to a .env file.
cd studio && pnpm sanity init --env .env
Generate a token with read permissions for use in the next step.
pnpm sanity manage
Copy the example app .env file and populate it with the required values.
cp ./app/.env.example ./app/.env
Start the development servers:
pnpm dev
Your SvelteKit app should now be running on http://localhost:5173/.
Your Studio should now be running on http://localhost:3333/.
Add content
Visit the Studio and create and publish a new Post document
Visit the App and refresh the page to see your content rendered on the page
The schema for the Post document is defined in the /studio/schemas folder. You can add more documents and schemas to the Studio to suit your needs.

Deployments
The /app and /studio folders are meant to be deployed separately.

Make sure that after /app is deployed the .env file in /studio is updated with its deployment URL under SANITY_STUDIO_PREVIEW_URL.

And /app has a .env file with PUBLIC_SANITY_STUDIO_URL that points to the Studio's deployment URL.
