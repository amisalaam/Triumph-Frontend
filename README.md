
# Triumph Frontend
Triumph-Frontend is a React-based application designed to provide a user-friendly interface for managing authentication, ticketing, and customer support features. It integrates seamlessly with the Triumph-Backend, ensuring smooth and secure interactions for users, including the ability to create, view, and manage tickets, as well as access customer support details. The frontend is built with modern web technologies and follows best practices in design and development to deliver a responsive and intuitive user experience.

## Features

- **Responsive Design**: Built with Tailwind CSS for a responsive and modern UI.
- **Fast Development**: Powered by Vite for a fast development experience.
- **Token Management**: Users can view and register for Token.
- **User Authentication**: Integration with the backend for secure user authentication.

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**
   ```sh
   https://github.com/amisalaam/Triumph-Frontend.git
   cd Triumph-Frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Create a `.env` file:**
   Create a `.env` file in the root directory and add your API URL:
   ```
   VITE_API_URL=http://127.0.0.1:8000
   ```

## Setup

### Tailwind CSS Configuration

Tailwind CSS is already configured in the project. If you need to customize the configuration, you can modify the `tailwind.config.js` file.

### Vite Configuration

Vite is used for development and build. The configuration is set in `vite.config.js`.

## Usage

### Running the Development Server

To start the development server, run:
```sh
npm run dev
```

Visit `http://127.0.0.1:5173` to view the application.


### Preview the Production Build

To preview the production build locally, run:
```sh
npm run dev
```

## Project Structure

```
frontend/
├── public/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .env
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── ...
```


