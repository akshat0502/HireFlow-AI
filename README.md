# HireFlow AI

HireFlow AI is an AI-powered recruitment and job management platform built with React and Spring Boot.

The platform provides secure authentication, job management, resume management, and AI-powered resume analysis to simplify recruitment workflows.

---

## 🚀 Features

- User registration and login
- JWT-based authentication
- Recruiter and Candidate roles
- Job creation and management
- Job search and job details
- Resume upload and download
- AI-powered resume analysis
- Job and resume matching
- Protected API endpoints
- Responsive dashboard
- Swagger API documentation

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- Tailwind CSS
- React Router
- Axios
- Vite
- Lucide React
- React Hot Toast

### Backend

- Java 21
- Spring Boot 3.5.6
- Spring Security
- Spring Data JPA
- Hibernate
- JWT
- Maven
- Lombok
- REST APIs

### Database

- PostgreSQL

### AI

- Google Gemini API

### API Documentation

- Swagger / OpenAPI

---

## 📁 Project Structure

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
│   │       │   └── service/
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
