# Developers Portfolio Builder

## Description
Developers Portfolio Builder is a Next.js application tailored for developers to create and manage their professional portfolios. This app integrates modern web technologies and services, such as real-time database updates, authentication, and interactive components.

## Live Demo
Visit the live demo here: [Portfolio Builder](https://portfolio-builder-blue.vercel.app)

## Features
- **Responsive Design:** Utilizing Tailwind CSS for a mobile-first approach that ensures a seamless experience on all devices.
- **Real-time Database:** Powered by Neon Database for dynamic data management and updates.
- **Interactive Components:** Features like drag-and-drop for portfolio items and notifications using React Beautiful DND and React Toastify enhance user interaction.

## Technologies Used
- **Next.js:** For server-side rendering and static site generation, ensuring fast load times and improved SEO.
- **Firebase:** Handles authentication and authorization to secure user data.
- **Neon Database:** A PostgreSQL-compatible cloud database solution for scalable and efficient data storage.
- **Drizzle ORM:** Manages database interactions seamlessly within the Next.js environment.
- **Recharts and SweetAlert2:** Used for creating dynamic charts and alerting users with beautiful, responsive popups.

## Setup
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Nitagg24/Portfolio-Builder.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file at the root of your project and populate it with your environment variables as described in `.env.sample`.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts
In the project directory, you can run:

- `npm run dev` - Runs the app in development mode on `http://localhost:3000`.
- `npm run build` - Builds the app for production to the `.next` folder.
- `npm run start` - Starts a Node.js production server.
- `npm run lint` - Lints and fixes files.
- `npm run db:push` - Pushes the current database schema to Neon Cloud.
- `npm run db:studio` - Opens Drizzle Kit studio for database management.

## Contributing
Contributions are what make the open-source community thrive. Any contributions you make are **greatly appreciated**. Please ensure to update tests as appropriate.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Nitin Aggarwal
Project Link: [https://github.com/Nitagg24/Portfolio-Builder]