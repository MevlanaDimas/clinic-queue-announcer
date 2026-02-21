# Clinic Queue Announcer and Registration

This is a Next.js project that serves as a patient queue announcement and registration system for a clinic. It includes a real-time display for the waiting area and an admin panel for clinic staff to manage the queue.

## Features

- **Real-time Queue Display**: A screen that shows the current ticket number being served.
- **Voice Announcement**: When a new number is called, a sound notification plays, and a voice announces the ticket number and the assigned counter.
- **Admin Control Panel**: A website for clinic staff to call the next patient in the queue.
- **Patient Registration**: A page for patients to register and receive a queue number.

## Tech Stack

- **Framework**: Next.js
- **Database**: Neon DB
- **ORM**: Prisma
- **Real-time Notifications**: Pusher
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js (version 18.x or later) and a package manager like `npm`, `yarn`, or `pnpm` installed.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd queue-announcer-and-registration
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**

    Create a file named `.env.local` in the project root and add the following variables. You can get these credentials from your Neon and Pusher dashboards.

    ```env
    # Neon DB Connection String (get this from your Neon project)
    DATABASE_URL="your_neon_db_connection_string"

    # Pusher Credentials
    PUSHER_APP_ID="your_pusher_app_id"
    NEXT_PUBLIC_PUSHER_KEY="your_pusher_public_key"
    PUSHER_SECRET="your_pusher_secret"
    NEXT_PUBLIC_PUSHER_CLUSTER="your_pusher_cluster"
    ```

4.  **Run database migrations:**

    Apply the database schema to your Neon database using Prisma Migrate.
    ```bash
    npx prisma migrate dev
    ```

5.  **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
