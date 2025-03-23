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

---
---

<h1>BACKEND</h1>

### Enter backend:
```sh
cd contract
```

<a href="https://x.com/ohayo_dojo">
<img src="https://img.shields.io/twitter/follow/dojostarknet?style=social"/>
</a>
<a href="https://github.com/dojoengine/dojo/stargazers">
<img src="https://img.shields.io/github/stars/dojoengine/dojo?style=social"/>
</a>

[![discord](https://img.shields.io/badge/join-dojo-green?logo=discord&logoColor=white)](https://discord.com/invite/dojoengine)
[![Telegram Chat][tg-badge]][tg-url]

[tg-badge]: https://img.shields.io/endpoint?color=neon&logo=telegram&label=chat&style=flat-square&url=https%3A%2F%2Ftg.sumanjay.workers.dev%2Fdojoengine
[tg-url]: https://t.me/dojoengine

# Dojo Starter: Official Guide

A quickstart guide to help you build and deploy your first Dojo provable game.

Read the full tutorial [here](https://dojoengine.org/tutorial/dojo-starter).

## Running Locally

#### Terminal one (Make sure this is running)

```bash
# Run Katana
katana --dev --dev.no-fee
```

#### Terminal two

```bash
# Build the example
sozo build

# Inspect the world
sozo inspect

# Migrate the example
sozo migrate

# Start Torii
# Replace <WORLD_ADDRESS> with the address of the deployed world from the previous step
torii --world <WORLD_ADDRESS> --http.cors_origins "*"
```

---

## Contribution

1. **Report a Bug**

    - If you think you have encountered a bug, and we should know about it, feel free to report it [here](https://github.com/dojoengine/dojo-starter/issues) and we will take care of it.

2. **Request a Feature**

    - You can also request for a feature [here](https://github.com/dojoengine/dojo-starter/issues), and if it's viable, it will be picked for development.

3. **Create a Pull Request**
    - It can't get better then this, your pull request will be appreciated by the community.

Happy coding!
