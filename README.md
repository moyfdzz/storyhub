# StoryHub

StoryHub is a modern web application designed to help users search, organize, and manage their favorite media. Built using React, Node.js, Tailwind CSS, and other modern web technologies, StoryHub provides an intuitive and visually appealing interface.

## Features

- **Search Functionality**: Quickly find anime, movies, series, or books with a responsive and intuitive search bar.
- **Media Organization**: Navigate between Anime, Movies, Series, and Books with categorized tabs for easy browsing.
- **Personalized Experience**: Save and manage your favorite media with user authentication.
- **Dynamic UI**: Modern and responsive design powered by Tailwind CSS.
- **API Integration**: Fetch detailed data from external APIs for comprehensive media information.

## Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for user and media data management)
- **Icons**: React Icons

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/storyhub.git
   ```

2. Navigate to the project directory:

   ```bash
   cd storyhub
   ```

3. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

4. Create a `.env` file in the backend folder and configure the following variables:

   ```bash
   MONGO_URI=<your_mongodb_connection_string>
   UPSTASH_REDIS_URL=<your_redis_connection_string>
   ```

5. Install dependencies for the frontend:

   ```bash
   cd ../frontend
   npm install
   ```

6. Start the backend server:

   ```bash
   cd ../backend
   npm run dev
   ```

7. In a new terminal, start the frontend development server:

   ```bash
   cd frontend
   npm run dev
   ```

8. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Project Structure

```
.
storyhub/
├── backend/                    # Backend Node.js API
│   ├── config/                 # Configuration files for external APIs
│   │   └── anilistClient.js    # Sets up the AniList API client for connection
│   ├── controllers/            # Controller logic for API methods
│   ├── lib/                    # Utility files for database and Redis setup
│   │   ├── db.js               # MongoDB connection setup with Mongoose
│   │   └── redis.js            # Redis connection setup
│   ├── middleware/             # Middleware for authentication and more
│   ├── models/                 # Mongoose database models
│   ├── routes/                 # API route handlers
│   ├── services/               # API client connections and request handling
│   │   └── exampleService.js   # Example API request handler
│   ├── tests/                  # Tests to validate the backend code
│   ├── package-lock.json       # Lock file for backend dependencies
│   ├── package.json            # Backend dependencies and scripts
│   └── server.js               # Backend entry point
├── frontend/                   # Frontend React application
│   ├── public/                 # Static files (e.g., favicon, index.html)
│   ├── src/                    # Main source code for the frontend
│   │   ├── components/         # Reusable UI components (e.g., Navbar, Spinner)
│   │   ├── lib/                # Setup for libraries (e.g., Axios configuration)
│   │   ├── pages/              # Page-level components (e.g., HomePage, SignUpPage)
│   │   ├── stores/             # State management and API request logic using Axios and Zustand
│   │   ├── App.jsx             # Main application component
│   │   ├── index.css           # Global CSS styles
│   │   └── main.jsx            # Frontend entry point
│   ├── eslint.config.js        # ESLint configuration
│   ├── index.html              # HTML template
│   ├── package-lock.json       # Lock file for frontend dependencies
│   ├── package.json            # Frontend dependencies and scripts
│   ├── postcss.config.js       # PostCSS configuration
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   └── vite.config.js          # Vite configuration
├── LICENSE                     # License file for the repository
└── README.md                   # Project documentation

```

## Contribution Guidelines

We welcome contributions to improve StoryHub! Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a detailed description of your changes"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request with a detailed explanation of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Screenshots (Upcoming)

## Future Plans

- **Media Page**: Implement a detailed view for selected media, showcasing its image, description, and other relevant information.
- **User Profiles**: Save and manage personalized collections of media.
- **API Integration**: Enhance the application with external API support for media details.
- **Dark/Light Mode**: Add theme toggle functionality.

## Contact

For any questions, suggestions, or feedback, feel free to contact:

- **Name**: Moisés Fernández
- **Email**: [moyfdzz@gmail.com](mailto:moyfdzz@gmail.com)
- **GitHub**: [moyfdzz](https://github.com/moyfdzz)

---

Thank you for exploring StoryHub!
