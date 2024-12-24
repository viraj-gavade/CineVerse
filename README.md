# CineVerse 🎬
Your Gateway to the World of Movies


## 🌐 Live Demo

**[View Live Application](https://project-2-lxrh.onrender.com/)**


## Description
**CineVerse** is my second TypeScript project, built as part of my learning journey with Node.js and TypeScript. This project serves as a simple movie-related application, where users can explore movie information and reviews. As a beginner, I built this project in under an hour to apply what I have learned so far. It's a great starting point for me to dive deeper into backend development with TypeScript.

## Features
- **Movie Search**: Allows users to search for movies
- **API Integration**: Fetches data from a movie API to display movie details
- **TypeScript**: Utilizes TypeScript to improve code quality and understanding of types
- **Express.js**: Fast web framework for building the server-side logic

## Prerequisites
- Node.js (version 14 or above)
- npm (Node package manager)

## Installation

1. **Clone the repository**:
```bash
git clone https://github.com/viraj-gavade/Project-2.git
cd Project-2
```

2. **Install dependencies**:
```bash
npm install
```

3. **Compile TypeScript**:
```bash
npm run build
```

## Running the Application

1. **Start the development server**:
```bash
npm run dev
```
The server will start, and you can access the application at `http://localhost:3000`.

2. **Build and run for production**:
```bash
npm run build
npm start
```

## Project Structure
```
CineVerse/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.ts
│   └── server.ts
├── tests/
├── dist/
├── node_modules/
├── .eslintrc.js
├── .prettierrc
├── jest.config.js
├── package.json
└── tsconfig.json
```

### Directory Overview
- `src/`: Contains the source code
  - `controllers/`: Handles incoming requests and returns responses
  - `models/`: Defines data models and schemas
  - `routes/`: Defines application routes
  - `services/`: Contains business logic
  - `app.ts`: Initializes the Express application
  - `server.ts`: Starts the server
- `tests/`: Contains test cases
- `dist/`: Contains the compiled JavaScript code
- `.eslintrc.js`: ESLint configuration
- `.prettierrc`: Prettier configuration
- `jest.config.js`: Jest configuration
- `package.json`: Project metadata and dependencies
- `tsconfig.json`: TypeScript configuration

## Contributing
Since this is my learning project, contributions are currently not accepted. However, feel free to fork the repository and create your own improvements!

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or suggestions, feel free to reach out to Viraj Gavade.
