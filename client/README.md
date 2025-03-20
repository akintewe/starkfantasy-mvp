<h1>FRONTEND</h1>
<h1>Frontend Project in Vite</h1> 

This project is a frontend application built with Vite, following the principles of Screaming Architecture to maintain clean, modular, and scalable code. It can be run using either pnpm or npm and runs on port 5173 by default.

## Colaborators! 
The branch need to follows the next format: 
(if a feature)
feat/name-branch

And commits need to have the next messages: 
(If feature)
feat: change-description
(if update)
update: change-description
(if remove)
remove: change-description

## 📌 Requirements

- Node.js `>= 18.x`
- pnpm `>= 8.x` (optional) or npm `>= 9.x`

## 🚀 Installation

Clone the repository** to your local machine:

```sh
git clone https://github.com/<your_user>/frontend
```

Install dependencies using your preferred package manager:

### Enter frontend:
```sh
cd client
```

### Using pnpm:
```sh
pnpm install
```

### Using npm:
```sh
npm install
```

## 🔥 Running the Project

To start the development server on port `5173`:

### With pnpm:
```sh
pnpm dev
```

### With npm:
```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🏗️ Architecture

The project follows **Screaming Architecture**, meaning the code structure reflects domains and functionalities instead of being technology-based

## ✅ Available Scripts

| Command         | Description                                      |
|----------------|--------------------------------------------------|
| `pnpm dev` / `npm run dev` | Starts the development server |
| `pnpm build` / `npm run build` | Builds the application for production |
| `pnpm start` / `npm run start` | Runs the production server |
| `pnpm lint` / `npm run lint` | Runs the linter to check the code |

## 📦 Building for Production

To generate an optimized production build:

```sh
pnpm build  # or npm run build
```

To start the application in production mode:

```sh
pnpm start  # or npm run start
```

## 📄 License

- This project is licensed under the [MIT](LICENSE) license.
- This document will be updated as the project evolves.