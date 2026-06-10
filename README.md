<h1 align="center">📝 Angular Posts CRUD</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-16-DD0031?logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/RxJS-Reactive-B7178C?logo=reactivex&logoColor=white" alt="RxJS" />
  <img src="https://img.shields.io/badge/CRUD-REST_API-success" alt="CRUD" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/angular-posts-crud" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/angular-posts-crud/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/angular-posts-crud?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/angular-posts-crud/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/angular-posts-crud" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

- [📝 Angular Posts CRUD](#-angular-posts-crud)
  - [🌐 Live Demo](#-live-demo)
  - [📖 Description](#-description)
  - [⚙️ System Requirements](#️-system-requirements)
  - [🚀 Project Installation](#-project-installation)
  - [▶️ Run the Project](#️-run-the-project)
  - [🧠 Project Architecture](#-project-architecture)
  - [✨ Features](#-features)
  - [🛠 Technologies Used](#-technologies-used)
  - [📁 Project Structure](#-project-structure)
  - [🔥 Best Practices Implemented](#-best-practices-implemented)
  - [🎯 Project Goal](#-project-goal)
  - [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/angular-posts-crud/

---

## 📖 Description

> [!NOTE]
> An Angular 16 CRUD application that consumes REST APIs and implements advanced user experience patterns, route protection, reusable architecture, state management, and reactive programming.

The project demonstrates real-world Angular development practices including CRUD operations, feature modules, route guards, LocalStorage persistence, dynamic loading states, centralized error handling, reusable services, and scalable application architecture.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

- 📦 **Node.js:** `v16.14.x – v18.x` _(recommended: v18 LTS)_
- 📦 **npm:** `v8+`
- 🅰️ **Angular CLI:** `v16.x`

## Recommended using nvm

```bash
nvm install 18
nvm use 18
```

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/angular-posts-crud.git

cd angular-posts-crud
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

---

## 🧠 Project Architecture

The application follows a modular architecture based on Core, Shared, Feature Modules, Route Guards, and reusable services.

### 📄 Posts Module

Responsible for:

- Listing posts
- Creating posts
- Editing posts
- Viewing post details
- Deleting posts

### 🎮 Feature Modules

Responsible for:

- Movies management
- Games management
- Devices management
- Route organization
- Child routes configuration

### 🛡️ Pending Changes Guard

Responsible for:

- Preventing accidental navigation
- Detecting unsaved form changes
- Displaying confirmation dialogs
- Protecting user-entered data

### ⚠️ Error Handler Service

Responsible for:

- Centralized error handling
- API error mapping
- State management
- User feedback

### 🔔 Alerts Service

Responsible for:

- Confirmation dialogs
- Success notifications
- Error notifications
- User interaction feedback

### 🧩 Shared & Core Modules

Responsible for:

- Reusable functionality
- Shared components
- Application-wide services
- Modular organization

---

## ✨ Features

### CRUD Operations

- 📄 List records
- 🔍 View details by ID
- ➕ Create records
- ✏️ Edit records
- 🗑️ Delete records

### User Experience

- 💾 Auto-save form progress in LocalStorage
- 🛡️ Navigation protection for unsaved changes
- ⚠️ Confirmation dialogs before deleting data
- 🚫 Prevent duplicate form submissions
- 🔄 Inline loading indicators inside buttons
- 📢 Friendly feedback messages

### Smart Forms

- 💾 Form persistence after page refresh
- 🔍 Change detection on edit forms
- ⚡ Skip unnecessary update requests
- 📝 Validation before submission

### Loading States

Dynamic loading messages such as:

```text
Loading...
Getting data...
We are about to finish this...
Almost there...
Just a second more...
```

### State Management

- ⏳ Loading State
- ✅ Success State
- 📭 Empty State
- ❌ Error State

### Routing

- 🛡️ Route Guards
- 🧭 Child Routes
- 🚫 Custom 404 Page
- 📦 Feature Module Routing

---

## 🛠 Technologies Used

| Technology       | Purpose              |
| ---------------- | -------------------- |
| Angular 16       | Front-End Framework  |
| TypeScript       | Application Logic    |
| RxJS             | Reactive Programming |
| Angular Router   | Navigation           |
| Route Guards     | Route Protection     |
| LocalStorage API | Form Persistence     |
| Reactive Forms   | Form Management      |
| Feature Modules  | Modular Architecture |
| Services         | Business Logic       |
| REST APIs        | Data Source          |

---

## 📁 Project Structure

```text
angular-posts-crud/

├── src/app/
│
├── core/
│   └── menu/
│
├── shared/
│
├── guards/
│   └── pending-changes-form.guard.ts
│
├── services/
│   ├── posts.service.ts
│   ├── alerts.service.ts
│   └── errHandler.service.ts
│
├── interfaces/
│
├── helpers/
│
├── pages/
│   ├── posts/
│   ├── movies/
│   ├── games/
│   ├── devices/
│   └── 404/
│
├── app.routes.ts
├── app.routing.module.ts
└── app.module.ts
```

---

## 🔥 Best Practices Implemented

- Feature Module Architecture
- Core Module Pattern
- Shared Module Pattern
- Route Guards
- Reactive Forms
- Child Routing
- Separation of Concerns
- Centralized Error Handling
- Reusable Services
- Strong Typing with TypeScript
- LocalStorage Persistence
- Smart Form Validation
- UX-Oriented Design
- State Management Patterns
- Scalable Angular Structure

---

## 🎯 Project Goal

Practice and strengthen advanced Angular concepts through the implementation of a real-world CRUD application.

Key concepts covered:

- CRUD Operations
- REST API Consumption
- Reactive Programming with RxJS
- Route Guards
- Child Routes
- Reactive Forms
- LocalStorage Persistence
- Error Handling
- Loading States
- Feature Modules
- Core & Shared Modules
- Dependency Injection
- TypeScript Best Practices
- Front-End Architecture

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.
