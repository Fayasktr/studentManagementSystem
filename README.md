# Student Management System (TypeScript & Prisma)

A scalable RESTful API built with **Node.js**, **Express**, **TypeScript**, and **Prisma ORM** (v7) backed by a **PostgreSQL** database. Designed using a clean layered architecture (Controllers, Services, Repositories, DTOs, and Routes).

## 🚀 Features

- **TypeScript**: Strict type checking and ES module support (`nodenext`).
- **Prisma ORM 7**: Database schema modeling, type generation, and query management with PostgreSQL.
- **Layered Architecture**: Decoupled design separating HTTP controllers, business services, repository database access, and data transfer objects (DTOs).
- **Environment Management**: Configured with `dotenv` and `prisma.config.ts`.

## 📁 Project Structure

```text
userManagement ts/
├── prisma/
│   └── schema.prisma        # Prisma database schema definition
├── src/
│   ├── config/              # Database connection setup (connectDB.ts)
│   ├── controllers/         # HTTP request & response handlers
│   ├── dtos/                # Data Transfer Objects (Request/Response schemas)
│   ├── repositories/        # Database query layer (Prisma queries)
│   ├── routes/              # Express API route endpoints
│   ├── services/            # Business logic and validation layer
│   ├── app.ts               # Express application initialization
│   └── server.ts            # Entry point server listener
├── .env                     # Environment variables
├── prisma.config.ts         # Prisma 7 CLI configuration
├── tsconfig.json            # TypeScript compiler configuration
└── package.json             # Project dependencies and scripts
```

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [Prisma v7](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Development Tooling**: `tsx` (TypeScript Execute & Watch)

## 🏁 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL running locally or remotely

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Fayasktr/studentManagementSystem.git
   cd studentManagementSystem
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   PORT=4444
   DATABASE_URL="postgresql://postgres:password@localhost:5432/student_management"
   ```

4. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

5. **Start Development Server:**
   ```bash
   npm run dev
   ```
   The server will start at `http://localhost:4444`.

## 📜 Available Scripts

- `npm run dev` - Starts the development server with live reload (`tsx watch src/server.ts`).
- `npm run build` - Compiles TypeScript code to `./dist`.
- `npm run start` - Runs the compiled production server (`node dist/server.js`).
