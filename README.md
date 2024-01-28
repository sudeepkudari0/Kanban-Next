
# Kanban-Next

## Introduction

Welcome to Kanban-Next, a comprehensive task management application built using Next.js. This project leverages the power of Next.js for seamless server-side rendering and efficient client-side navigation. The application uses a MySQL database hosted on Aiven, Prisma as the ORM (Object-Relational Mapping) tool, and Clerk for authentication. Additionally, Kanban-Next features both an admin dashboard and a user dashboard, allowing administrators to assign tasks to other users.

## Getting Started

To get started with the Kanban-Next project, follow these steps:

1. Clone the repository to your local machine:

```bash
  git clone https://github.com/sudeepkudari0/Kanban-Next.git
```

2. Go to the project directory

```bash
  cd Kanban-Next
```

3. Install dependencies

```bash
  npm install
```
4. Set up the MySQL database:

    Visit Aiven and create an account if you don't have one.

    Set up a new MySQL service through Aiven and obtain the connection details     (host, port, username, password, etc.).

    Create a .env file in the project root and configure the database connection:

```bash
    DATABASE_URL=mysql://your-username:your-password@your-host:your-port/your-database

```
5. Setup clerk authentication, grab your keys and paste in .env
```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
```
6. Run the Prisma migration to initialize the database schema:

```bash
    npx prisma migrate dev
```
6. Start the server

```bash
  npm run dev
```

Visit http://localhost:3000 in your browser to see the Kanban-Next application.


## Features
- Task Management: Organize your tasks into different boards (e.g., To-Do, In Progress, Done).
- Admin Dashboard: Admins can access a dedicated dashboard to manage users and assign tasks.
- User Dashboard: Regular users have their dashboard for task management.
- Server-Side Rendering: Benefit from fast initial page loads and SEO optimization through Next.js's server-side rendering capabilities.
- MySQL Database: Store your task data securely in a MySQL database hosted on Aiven.
- Prisma ORM: Use Prisma for efficient and type-safe database access.
- Clerk Authentication: Secure authentication powered by Clerk, with API keys configured for both frontend and backend.

## Screenshots
<img src="https://raw.github.com/sudeepkudari0/Kanban-Next/main/screenshots/web.png"/>
<img src="https://raw.github.com/sudeepkudari0/Kanban-Next/main/screenshots/mobile.png" height="400" width="200"/>
## Contributing
We welcome contributions to the Kanban-Next project! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

