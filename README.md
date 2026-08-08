HireFlow AI

HireFlow AI is an AI-powered recruitment and job management platform built with React and Spring Boot.

🚀 Features

User registration and login

JWT-based authentication

Recruiter and Candidate roles

Job creation and management

Job search and job details

Resume upload and download

AI-powered resume analysis

Job and resume matching

Protected API endpoints

Responsive dashboard

Swagger API documentation

🛠️ Tech Stack

Frontend

React

JavaScript

Tailwind CSS

React Router

Axios

Vite

Lucide React

React Hot Toast

Backend

Java 21

Spring Boot 3.5.6

Spring Security

Spring Data JPA / Hibernate

JWT

Maven

Lombok

REST APIs

Database

PostgreSQL

AI

Google Gemini API

API Documentation

Swagger / OpenAPI

📁 Project Structure

HireFlow-AI/
├── backend/
├── frontend/
├── .github/
├── .gitignore
└── README.md

🔐 Authentication

HireFlow AI uses Spring Security with JWT authentication.

User → React Frontend → Spring Boot API → Spring Security
                                      ↓
                                  PostgreSQL
                                      ↓
                                  JWT Token

Passwords are encrypted using BCrypt before being stored in the database. JWT tokens are automatically attached to authenticated API requests using an Axios interceptor.

💼 Job Management

Recruiters can:

Create jobs

View jobs

View job details

Update jobs

Delete jobs

Job details include title, company, location, salary, experience, employment type, required skills, description, recruiter, and status.

📄 Resume Management

Users can:

Upload resumes

View their current resume

Download resumes

Uploaded resumes can be processed for AI analysis.

🤖 AI Resume Analysis

HireFlow AI integrates Google Gemini for AI-powered resume analysis.

Resume Upload
      ↓
PDF Processing
      ↓
Text Extraction
      ↓
Gemini AI
      ↓
Resume Analysis
      ↓
Frontend

📡 API Endpoints

Authentication

POST /api/auth/register
POST /api/auth/login

Jobs

GET    /api/jobs
GET    /api/jobs/{id}
POST   /api/jobs
PUT    /api/jobs/{id}
DELETE /api/jobs/{id}

Resume

POST /api/resume/upload
GET  /api/resume/me
GET  /api/resume/{id}

AI

POST /api/ai/analyze/{resumeId}

Health

GET /api/health

📚 Swagger

When the backend is running:

http://localhost:8080/swagger-ui/index.html

⚙️ Local Setup

Prerequisites

Java 21

Node.js

PostgreSQL

Git

1. Clone

git clone https://github.com/akshat0502/HireFlow-AI.git
cd HireFlow-AI

2. Database

Create a PostgreSQL database:

CREATE DATABASE hireflow;

Configure your local backend properties:

spring.datasource.url=jdbc:postgresql://localhost:5432/hireflow
spring.datasource.username=postgres
spring.datasource.password=YOUR_DATABASE_PASSWORD

jwt.secret=YOUR_JWT_SECRET
jwt.expiration=86400000

gemini.api.key=YOUR_GEMINI_API_KEY
gemini.model=gemini-2.5-flash

server.port=8080

Never commit real passwords, API keys, JWT secrets, or other credentials to GitHub.

3. Backend

cd backend
.\mvnw.cmd spring-boot:run

Backend:

http://localhost:8080

4. Frontend

cd frontend
npm install
npm run dev

Frontend:

http://localhost:5173

🧪 Build

Backend

cd backend
.\mvnw.cmd clean compile

Frontend

cd frontend
npm run build

🔒 Security

JWT authentication

BCrypt password hashing

Protected REST endpoints

Role-based authorization

CORS configuration

Sensitive credentials kept out of source control

🔄 CI/CD

GitHub Actions is used to automate project build and validation.

Git Push
   ↓
GitHub Actions
   ├── Frontend Build
   └── Backend Build
   ↓
Deployment

☁️ Deployment

Planned deployment architecture:

Frontend → Vercel

Backend → Cloud hosting platform

Database → PostgreSQL

Production credentials should be configured through environment variables on the hosting platforms.

🎯 Business Value

HireFlow AI combines job management, resume management, authentication, and AI-powered resume analysis into a single recruitment platform.

The goal is to reduce manual resume screening effort and provide faster insights when evaluating candidates and job opportunities.

🔮 Future Improvements

Advanced candidate-job matching

Resume scoring

Job recommendations

Application tracking

Recruiter-specific dashboard

Candidate-specific dashboard

Email notifications

Admin dashboard

Recruitment analytics

Cloud-based resume storage

Automated production deployment

Monitoring and logging

👨‍💻 Author

Akshat Saxena

GitHub: https://github.com/akshat0502

LinkedIn: https://www.linkedin.com/in/akshat0502/

📄 License

This project was developed as a technical project-based assessment.
