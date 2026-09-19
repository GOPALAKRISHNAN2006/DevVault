# 🔐 DevVault

DevVault is a **MERN stack developer resource management application** that allows developers to securely save, organize, manage, and access useful development resources in one place.

Users can store documentation, GitHub repositories, tutorials, articles, interview resources, and other useful developer links.

---

## 🚀 Features

### 🔐 Authentication

* User registration
* User login
* Password hashing using bcrypt
* JWT-based authentication
* Protected routes
* Get current authenticated user
* Secure user-specific resources

### 📚 Resource Management

* Create resources
* View all personal resources
* View a single resource
* Update resources
* Delete resources
* Mark/unmark resources as favorites

### 🏷️ Resource Information

Each resource can contain:

* Title
* URL
* Description
* Category
* Resource type
* Tags
* Favorite status
* Owner

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* CORS

---

## 📁 Project Structure

```text
DevVault/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── ...
│
└── server/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── .env
    ├── server.js
    └── package.json
```

---

## 🔑 Backend API

### Authentication

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| POST   | `/api/auth/register` | Register a new user    |
| POST   | `/api/auth/login`    | Login user             |
| GET    | `/api/auth/me`       | Get authenticated user |

### Resources

| Method | Endpoint                      | Description          |
| ------ | ----------------------------- | -------------------- |
| POST   | `/api/resources`              | Create a resource    |
| GET    | `/api/resources`              | Get user's resources |
| GET    | `/api/resources/:id`          | Get resource by ID   |
| PUT    | `/api/resources/:id`          | Update resource      |
| DELETE | `/api/resources/:id`          | Delete resource      |
| PATCH  | `/api/resources/:id/favorite` | Toggle favorite      |

Protected endpoints require:

```text
Authorization: Bearer <JWT_TOKEN>
```

---

## 🗄️ Resource Model

A resource contains:

```text
title
url
description
category
type
tags
favorite
user
createdAt
updatedAt
```

Each resource is associated with the authenticated user.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd DevVault
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend/server directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Do not commit `.env` to GitHub.

Add it to `.gitignore`:

```text
.env
node_modules/
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd server
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

### Start Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Vite will provide the frontend URL.

---

## 🔄 Application Flow

```text
User
 │
 ▼
React Frontend
 │
 │ Axios
 ▼
Express REST API
 │
 ├── Authentication
 │      └── JWT
 │
 ├── Resource APIs
 │
 ▼
MongoDB
```

---

## 🔐 Authentication Flow

```text
Register
   ↓
Password hashed with bcrypt
   ↓
User stored in MongoDB
   ↓
Login
   ↓
JWT generated
   ↓
JWT stored by frontend
   ↓
Protected API request
   ↓
Auth Middleware
   ↓
JWT verified
   ↓
User identified
```

---

## 🎯 Learning Objectives

This project was built to practice and understand:

* MERN stack development
* REST API development
* Express middleware
* MongoDB and Mongoose
* JWT authentication
* Password hashing
* Protected routes
* CRUD operations
* React API integration
* Frontend state management
* Full-stack application architecture

---

## 🚧 Future Improvements

Planned features include:

* 🔍 Resource search
* 🏷️ Category filtering
* ⭐ Favorites page
* 📄 Pagination
* 📊 Dashboard statistics
* 🔖 Better tag management
* 🌙 Dark mode
* 📱 Responsive UI
* 🚀 Deployment
* 📋 Code snippet vault
* 📚 Resource bookmarking

---

## 👨‍💻 Author

**Gopalakrishnan M**

B.Tech Information Technology Student

---

## ⭐ Project Status

```text
Backend  → ✅ Complete
Frontend → 🚧 In Progress
```

DevVault is being developed as a **learning-focused MERN project** to gain practical experience in full-stack web development.
