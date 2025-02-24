<div>
  <div>   
    <img src="https://github.com/ArkOberon/entrepreneur-directory/blob/e57ef018bcdbf6d51bfe0fffa9a119ef97c6a7a9/project-banner.png?raw=true" alt="banner" />
  <div />

  <div align="center">
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=react&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-react-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Sanity-black?style=for-the-badge&logoColor=white&logo=sanity&color=F03E2F" alt="sanity" />
    <img src="https://img.shields.io/badge/-shadcn_ui-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000" alt="shadcnui" />
    <img src="https://img.shields.io/badge/-sentry-black?style=for-the-badge&logoColor=white&logo=sentry&color=362D59" alt="shadcnui" />
    <img src="https://img.shields.io/badge/-zod-black?style=for-the-badge&logoColor=white&logo=zod&color=3E67B1" alt="zod" />
  </div>

<h3 align="center">Entrepreneur Directory Platform</h3>
  <div align="center">
    Platform to advertise startups and small businesses. Here you can easily promote your company so that others can see your different projects and the added value you bring to the international community.
  </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Installation](#installation)
2. ⚙️ [Environment variables](#env)
3. 🔋 [Features](#features)

## **1.🤖 Performing the Installation** <div id='installation' />

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

The application has been developed with [`ReactJS`](https://react.dev/learn) using the metaframework [`NextJS`](https://nextjs.org/docs). We used [`create-next-app`](https://nextjs.org/docs/getting-started/installation) so it requires NodeJS to be installed. In order to use the repository in a local development environment is required:

Execute package.json package install command:

````bash
npm install

````

Execute command to start server in development mode:

````bash
npm run dev

````

## **2.⚙️ Environment variables** <div id='env' />

For a correct functioning of the APP the environment variables must be used. Create a **.env.local** file in the repository root folder (**IMPORTANT:** It must be at the same level as the package.json or README.md file. Do not insert in /src or any other existing folder).

````bash
# IMPORTANT: These variables are for the local development environment only.
# Do not use for the Master branch or the Dev branch.
````

Copy and paste the following variables inside the **.env.local** file

````env
# .env

AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
SANITY_WRITE_TOKEN=
````
Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the [Sanity website](https://www.sanity.io/).

## **3.🔋 Features** <div id='features' />

👉 **Live Content API**: Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.

👉 **GitHub Authentication**: Allows users to log in easily using their GitHub account.

👉 **Pitch Submission**: Users can submit startup ideas, including title, description, category, and multimedia links (
image or video).

👉 **View Pitches**: Browse through submitted ideas with filtering options by category.

👉 **Pitch Details Page**: Click on any pitch to view its details, with multimedia and description displayed.

👉 **Profile Page**: Users can view the list of pitches they've submitted.

👉 **Editor Picks**: Admins can highlight top startup ideas using the "Editor Picks" feature managed via Sanity Studio.

👉 **Views Counter**: Tracks the number of views for each pitch instead of an upvote system.

👉 **Search**: Search functionality to load and view pitches efficiently.

👉 **Minimalistic Design**: Fresh and simple UI with only the essential pages for ease of use and a clean aesthetic.

and many more, including the latest **React 19**, **Next.js 15** and **Sanity** features alongside code architecture and reusability

