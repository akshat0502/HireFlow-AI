# HireFlow AI

An AI-powered recruitment and job management platform built with React and Spring Boot.

HireFlow AI helps candidates and recruiters manage jobs, resumes, authentication, and AI-powered resume analysis through a modern web application.

---

## 🚀 Features

### Authentication
- User registration and login
- JWT-based authentication
- BCrypt password encryption
- Role-based user system
- Secure protected routes

### Job Management
- View available jobs
- Create job postings
- Edit job postings
- Delete job postings
- View detailed job information
- Job location, salary, experience and skills

### Resume Management
- Upload resumes
- Download resumes
- Manage logged-in user's resume
- PDF resume processing

### AI Resume Analysis
- Analyze resumes using Gemini AI
- Extract useful information from resumes
- Generate AI-powered resume analysis
- Job/resume matching functionality

### Dashboard
- Centralized dashboard
- Quick access to Jobs
- Resume management
- AI Analysis
- Profile

### UI
- Responsive React interface
- Tailwind CSS
- React Router
- Lucide icons
- Toast notifications

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- Tailwind CSS
- React Router
- Axios
- Lucide React
- React Hot Toast
- Vite

### Backend

- Java 21
- Spring Boot 3.5.6
- Spring Security
- Spring Data JPA
- Hibernate
- REST APIs
- JWT
- Lombok
- Maven

### Database

- PostgreSQL

### AI

- Google Gemini API

### Other Tools

- Git
- GitHub
- GitHub Actions
- Swagger / OpenAPI

---

## 🏗️ Project Structure

```text
HireFlow-AI/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/hireflow/
│   │       │   ├── ai/
│   │       │   ├── config/
│   │       │   ├── constant/
│   │       │   ├── controller/
│   │       │   ├── dto/
│   │       │   ├── entity/
│   │       │   ├── exception/
│   │       │   ├── repository/
│   │       │   ├── security/
│   │       │   ├── service/
│   │       │   └── HireFlowApplication.java
│   │       │
│   │       └── resources/
│   │
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .github/
│   └── workflows/
│
├── .gitignore
└── README.md
