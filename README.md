# Student Management System API

A robust, production-ready RESTful API built with **Node.js**, **Express**, **TypeScript**, and **Prisma ORM (v7)** backed by a **PostgreSQL** database.

This project implements a clean **Layered Architecture** with strict **Separation of Concerns**, leveraging the **Repository Pattern** and **Data Transfer Objects (DTOs)** for high maintainability, type safety, and scalability.

---

## 🏗️ Architecture & Request Flow

The application follows a unidirectional layered architecture where each layer has a single responsibility.

```text
Client Request (HTTP)
       │
       ▼
 1. [ Routes ]         Maps HTTP endpoints & methods to specific controllers
       │
       ▼
 2. [ Controllers ]    Manages HTTP Request (req) & Response (res), status codes & headers
       │
       ▼
 3. [ Services ]       Executes core business rules, validations & password hashing
       │
       ▼
 4. [ Repositories ]   Handles data persistence operations via Prisma Client queries
       │
       ▼
 5. [ Prisma Client ]  Type-safe query builder and database client (v7)
       │
       ▼
 6. [ PostgreSQL ]     Relational Database
```

---

## 📐 Architecture Principles

- **Layered Architecture**: Clear isolation between presentation (controllers), logic (services), and data access (repositories).
- **Separation of Concerns**: Controllers stay thin by delegating all business logic to service classes.
- **Repository Pattern**: Abstracts database queries so service layers do not depend directly on database client implementations.
- **DTO Pattern (Data Transfer Objects)**: Validates and defines the shape of data exchanged between clients and the application, preventing controllers from depending directly on internal database models.
- **Type Safety**: End-to-end static typing powered by TypeScript and Prisma's generated types.
- **SOLID Principles**: Focused class responsibilities and clean interface contracts.

---

## 📁 Project Structure & Layer Responsibilities

```text
userManagement ts/
├── prisma/
│   └── schema.prisma        # Prisma database schema models & datasource configuration
├── src/
│   ├── config/              # Database connection instantiation (connectDB.ts)
│   ├── controllers/         # Handles HTTP requests, extracts parameters, returns responses
│   ├── dtos/                # Data Transfer Objects validating incoming request payloads
│   ├── interfaces/          # Contract definitions & abstraction interfaces for services/repositories
│   ├── repositories/        # Database access layer executing Prisma ORM queries
│   ├── routes/              # Express API route endpoints definitions
│   ├── services/            # Business rules, domain validation, hashing & orchestration
│   ├── app.ts               # Express application initialization & middleware setup
│   └── server.ts            # Application entry point & HTTP server listener
├── .env                     # Local environment configurations
├── prisma.config.ts         # Prisma 7 CLI configuration
├── tsconfig.json            # TypeScript compiler options
└── package.json             # Project dependencies & scripts
```

### Layer Responsibilities Explained

| Layer / Folder | Primary Responsibility |
| :--- | :--- |
| **`routes/`** | Defines the API URI paths and forwards request traffic to specific controller functions. |
| **`controllers/`** | Manages the HTTP layer — extracts `req.body` and `req.params`, delegates work to services, and formats the `res.json()` responses. |
| **`dtos/`** | Defines the exact shape of incoming request bodies and outgoing responses, ensuring valid payload structures and preventing parameter pollution. |
| **`interfaces/`** | Declares TypeScript abstraction contracts for repositories and services to support Loose Coupling & Dependency Inversion. |
| **`services/`** | Contains core application logic, domain rules, password encryption, and validations. Keeps controllers lean and reusable. |
| **`repositories/`** | Encapsulates all Prisma database queries (`findUnique`, `create`, `update`, `delete`). Shields the service layer from direct ORM details. |
| **`config/`** | Instantiates global singletons like the Prisma Client instance. |

---

## 💎 Prisma ORM (v7 Integration)

This project uses **Prisma ORM 7**, taking advantage of the centralized `prisma.config.ts` configuration file:

- **Schema Definition** (`prisma/schema.prisma`): Declares relational models (such as `student`) and datasource details.
- **Client Generation** (`npx prisma generate`): Generates type-safe queries directly into `node_modules/@prisma/client`.
- **Database Migrations** (`npx prisma migrate dev`): Tracks schema changes via version-controlled SQL migration files.

---

## 🛠️ Environment Variables

Create a `.env` file in the root directory:

| Variable | Description | Example / Default |
| :--- | :--- | :--- |
| `PORT` | Port number for the Express server to listen on | `4444` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:fayas@localhost:5432/student_management` |

---

## 🔌 API Endpoints

### Student Resource (`/api/students`)

| Method | Endpoint | Description | Status |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/students/register` | Register a new student account | 🟡 In Progress |
| `POST` | `/api/students/login` | Authenticate student & receive token | 🟡 In Progress |
| `GET` | `/api/students` | Retrieve list of all registered students | 📋 Planned |
| `GET` | `/api/students/:id` | Fetch specific student details by ID | 📋 Planned |
| `PATCH` | `/api/students/:id` | Update student profile information | 📋 Planned |
| `DELETE`| `/api/students/:id` | Remove a student record | 📋 Planned |

---

## 🗺️ Roadmap

- [x] Express + TypeScript environment setup (`nodenext`)
- [x] Prisma ORM 7 configuration (`prisma.config.ts`)
- [x] PostgreSQL Database connection setup
- [x] Layered Architecture scaffold (Routes, Controllers, Services, Repositories, DTOs)
- [ ] Student Registration & Hashing (`bcryptjs`)
- [ ] Student Login & JWT Authentication
- [ ] Request Validation Middleware (Zod / Joi)
- [ ] Centralized Error Handling Middleware
- [ ] Unit & Integration Testing (Jest)
- [ ] Docker Containerization
- [ ] Swagger API Documentation

---

## 🏁 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **PostgreSQL** running locally or via Docker

### Installation & Setup

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
   Ensure your `.env` file has your database connection string:
   ```env
   PORT=4444
   DATABASE_URL="postgresql://postgres:fayas@localhost:5432/student_management"
   ```

4. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

5. **Run Database Migrations:**
   ```bash
   npx prisma migrate dev --name init
   ```

6. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   The API server will run at `http://localhost:4444`.

---

## 📜 NPM Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run dev` | `tsx watch src/server.ts` | Runs dev server with instant TypeScript hot-reloading |
| `npm run build` | `tsc` | Compiles TypeScript files into production JS in `./dist` |
| `npm run start` | `node dist/server.js` | Starts the production server from compiled outputs |
