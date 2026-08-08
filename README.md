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

#🔐Authentication

HireFlow AI uses Spring Security with JWT authentication.

Authentication Flow

```User
  │
  ▼
React Frontend
  │
  │ Register / Login
  ▼
Spring Boot API
  │
  ▼
Spring Security
  │
  ▼
PostgreSQL
  │
  ▼
JWT Token
  │
  ▼
Frontend
  │
  ▼
Protected API Requests

Passwords are encrypted using BCrypt before being stored in the database.

JWT tokens are automatically attached to authenticated API requests using an Axios interceptor.

💼 Job Management

Recruiters can manage job postings through the application.

Supported operations include:

Create job
View jobs
View job details
Update job
Delete job

Job information includes:

Job title
Company
Location
Salary
Experience
Employment type
Required skills
Job description
Recruiter information
Job status
📄 Resume Management

Users can upload and manage their resumes.

Available operations:

Upload resume
View current resume
Download resume

Resume files are processed by the backend for AI analysis.

🤖 AI Resume Analysis

HireFlow AI integrates Google Gemini to provide AI-powered resume analysis.

Process
```Resume Upload
      │
      ▼
PDF Processing
      │
      ▼
Resume Text Extraction
      │
      ▼
Gemini AI
      │
      ▼
Resume Analysis
      │
      ▼
Structured Response
      │
      ▼
Frontend

The AI functionality is designed to help users understand their resume and evaluate its suitability for job opportunities.

📡 API Endpoints
Authentication

```POST /api/auth/register
POST /api/auth/login

Jobs
```GET    /api/jobs
GET    /api/jobs/{id}
POST   /api/jobs
PUT    /api/jobs/{id}
DELETE /api/jobs/{id}
Resume
```POST /api/resume/upload
GET  /api/resume/me
GET  /api/resume/{id}
AI
```POST /api/ai/analyze/{resumeId}
Health
```GET /api/health
📚 Swagger Documentation

When the backend is running, Swagger UI is available at:

```http://localhost:8080/swagger-ui/index.html

Swagger provides an interactive interface for testing the REST APIs.

⚙️ Local Setup
Prerequisites

Install the following:

Java 21
Node.js
PostgreSQL
Git
1. Clone the Repository
```git clone https://github.com/akshat0502/HireFlow-AI.git
```cd HireFlow-AI
Backend Setup
2. Configure PostgreSQL

Create a PostgreSQL database:

```CREATE DATABASE hireflow;

Update your local Spring Boot configuration with your PostgreSQL credentials.

Example:

```spring.datasource.url=jdbc:postgresql://localhost:5432/hireflow
spring.datasource.username=postgres
spring.datasource.password=YOUR_DATABASE_PASSWORD

jwt.secret=YOUR_JWT_SECRET
jwt.expiration=86400000

gemini.api.key=YOUR_GEMINI_API_KEY
gemini.model=gemini-2.5-flash

server.port=8080

Do not commit real passwords, API keys, JWT secrets, or other credentials to GitHub.

3. Start the Backend

Open a terminal:

```cd backend

On Windows:

```.\mvnw.cmd spring-boot:run

The backend will run at:

```http://localhost:8080

Frontend Setup
4. Install Dependencies

Open another terminal:

```cd frontend

Install dependencies:

```npm install

5. Start the Frontend

```npm run dev

The frontend will run at:

```http://localhost:5173

🧪 Build and Test
Backend

Compile the backend:

cd backend
```.\mvnw.cmd clean compile

Run the backend:

```.\mvnw.cmd spring-boot:run
Frontend

Build the production frontend:

```cd frontend
npm run build

🔒 Security

The project follows basic security practices including:

JWT authentication
BCrypt password hashing
Protected REST endpoints
Role-based authorization
CORS configuration
Environment/local configuration for sensitive credentials

Sensitive information should never be committed to the repository.

🔄 CI/CD

GitHub Actions is used to automate the project build and validation process.

The CI/CD pipeline is designed to:

```Git Push
   │
   ▼
GitHub Actions
   │
   ├── Frontend Build
   │
   └── Backend Build
   │
   ▼
Deployment

The deployment pipeline will be configured as part of the project deployment process.

☁️ Deployment

Planned deployment architecture:

```Frontend
   │
   ▼
Vercel

Backend
   │
   ▼
Cloud Hosting

Database
   │
   ▼
PostgreSQL

The frontend will be deployed using Vercel.

The Spring Boot backend can be deployed using a cloud platform such as Render, Railway, or another compatible hosting service.

Production credentials should be configured through environment variables on the respective hosting platforms.

🎯 Business Value

HireFlow AI combines job management, resume management, authentication, and AI-powered resume analysis into a single recruitment platform.

The goal is to reduce manual resume screening effort and provide users with faster insights when evaluating candidates and job opportunities.

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

GitHub:
https://github.com/akshat0502

LinkedIn:
https://www.linkedin.com/in/akshat0502/

📄 License

This project was developed as a technical project-based assessment.


### After replacing `README.md`

Run:

```powershell
git add README.md
git commit -m "Update project documentation"
git push origin main

Then verify:

```git status

You should get:

nothing to commit, working tree clean
