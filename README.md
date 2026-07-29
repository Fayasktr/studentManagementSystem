# Student Management System API (SOLID Principles)

A robust backend REST API for a **Student Management System** built with **Node.js**, **Express**, **TypeScript**, and **Mongoose (MongoDB)** following **SOLID Principles** and **Clean Layered Architecture**.

---

## 🏗 Architecture & SOLID Principles

This application is structured to ensure high maintainability, testability, and scalability by strictly applying SOLID design principles:

- **S - Single Responsibility Principle (SRP)**:
  - **Schemas/Models**: Define database shape & Mongoose methods.
  - **Repositories**: Handle database persistence & direct queries.
  - **Services**: Encapsulate core business rules and validations.
  - **Controllers**: Manage HTTP Request/Response flow.
  - **Dependencies Container**: Handles class instantiation & wiring.
- **O - Open/Closed Principle (OCP)**:
  - `BaseRepository<T>` provides generic CRUD operations (`findById`, `deleteById`, `updateById`) allowing extension by specific repositories without modifying core logic.
- **L - Liskov Substitution Principle (LSP)**:
  - Specific repositories (`StudentRepository`, `AdminRepository`) extend `BaseRepository` cleanly and can be substituted anywhere `IBaseRepository` is expected.
- **I - Interface Segregation Principle (ISP)**:
  - Small, focused interfaces (`IStudentRepository`, `IStudentService`, `IAdminService`, `IBaseRepository`) prevent classes from depending on methods they do not use.
- **D - Dependency Inversion Principle (DIP)**:
  - Controllers depend on Service interfaces (`IStudentService`), and Services depend on Repository interfaces (`IStudentRepository`). 
  - Dependencies are injected in `src/dependencies/`.

---

## 📁 Project Structure

```
src/
├── config/              # Database connection setup (Mongoose)
├── controllers/         # Request handling & HTTP response logic
├── dependencies/        # Dependency Injection Container (wiring layers)
├── dto/                 # Data Transfer Objects for request validation
├── interfaces/          # TypeScript interfaces & layer contracts
├── models/              # TypeScript types & Mongoose Schemas
├── repositories/        # Data Access Layer (BaseRepository & StudentRepository)
├── routes/              # Express API route endpoints
├── services/            # Business logic & domain rules
├── app.ts               # Express application configuration
└── server.ts            # Server entry point
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory:

```env
PORT=4444
MONGO_URI=mongodb://localhost:27017/student_management
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run in Development Mode
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm start
```

---

## 🛣 API Endpoints

### Student Routes

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/` | Create a new student |
| `GET` | `/:id` | Fetch student by ID |
| `PUT` | `/:id` | Update student by ID |
| `DELETE` | `/:id` | Delete student by ID |

---

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ORM
- **Runner**: tsx (TypeScript Execution)
