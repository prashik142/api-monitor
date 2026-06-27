# 📡 Real-Time API Monitoring Platform

> **A production-inspired API monitoring platform that continuously checks API health, tracks response times, stores historical uptime data, and visualizes system health through a real-time dashboard.**

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=for-the-badge&logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge)

</p>

---

# 🌐 Live Demo

### 🚀 Dashboard

**https://api-monitor-sbe2.onrender.com**

> **Note:** This project is hosted on **Render's Free Tier**. If the application has been idle, the first request may take **30–60 seconds** to wake up.

---

# 📸 Dashboard Preview

<p align="center">
    <img src="./screenshots/dashboard.png" alt="API Sentinel Dashboard" width="100%">
</p>

---

# 🚀 Overview

**API Sentinel** is a lightweight backend application that continuously monitors REST APIs and websites.

Every minute, the monitoring engine automatically sends requests to registered endpoints, records response times, validates expected status codes, stores monitoring history in PostgreSQL, and updates a live dashboard.

This project demonstrates production-level backend concepts such as:

- Automated Cron Jobs
- API Health Monitoring
- Response Time Tracking
- REST API Development
- Database Persistence
- Backend Architecture
- Dashboard Visualization

---

# ✨ Features

## 🔍 Monitoring Engine

- Automatic API Health Checks
- Scheduled Background Monitoring
- Response Time (Latency) Tracking
- Status Code Validation
- Error Logging
- Historical Monitoring Records
- User-Agent Injection for Restricted APIs

---

## 📊 Dashboard

- Real-Time Monitoring Dashboard
- Auto Refresh Every 10 Seconds
- Add New API Monitors
- Dynamic UP / DOWN Status Indicators
- Live Response Time Metrics
- Latest Monitoring History

---

## 🗄 Database

- PostgreSQL (Neon Serverless)
- Prisma ORM
- Historical Monitoring Records
- Relational Data Model

---

# ⚙️ System Workflow

```text
               User Adds Monitor
                      │
                      ▼
            Stored in PostgreSQL
                      │
                      ▼
       Cron Job Runs Every 60 Seconds
                      │
                      ▼
         Axios Sends HTTP Request
                      │
                      ▼
      Measure Response Time (Latency)
                      │
                      ▼
      Validate Expected Status Code
                      │
                      ▼
       Save Result into PostgreSQL
                      │
                      ▼
      Dashboard Refreshes Every 10s
```

---

# 🏗️ Architecture

```mermaid
flowchart TD

A[User Dashboard]
B[Express API]
C[Cron Scheduler]
D[Axios HTTP Client]
E[External APIs]
F[PostgreSQL]
G[Dashboard UI]

A --> B
B --> F

C --> D
D --> E
E --> D
D --> F

F --> G
```

---

# 🛠 Tech Stack

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL (Neon)
- Prisma ORM

## Monitoring

- Axios
- node-cron

## Frontend

- HTML5
- Tailwind CSS
- Vanilla JavaScript

## Deployment

- Render
- Neon PostgreSQL

---

# 🗄 Database Schema

## Monitor

| Field | Type |
|-------|------|
| id | UUID |
| name | String |
| url | String |
| method | String |
| expectedStatus | Integer |
| interval | Integer |
| createdAt | DateTime |

---

## CheckResult

| Field | Type |
|-------|------|
| id | UUID |
| monitorId | UUID |
| status | UP / DOWN |
| statusCode | Integer |
| responseTime | Integer |
| error | String |
| checkedAt | DateTime |

---

# 📡 REST API

## Get All Monitors

```http
GET /monitors
```

Returns all monitors along with their latest monitoring history.

---

## Create Monitor

```http
POST /monitors
```

### Request Body

```json
{
    "name":"GitHub API",
    "url":"https://api.github.com",
    "method":"GET",
    "expectedStatus":200,
    "interval":60
}
```

---

## Dashboard

```http
GET /
```

Serves the monitoring dashboard.

---

# 📂 Project Structure

```text
api-sentinel/

├── prisma/
│   └── schema.prisma
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── styles.css
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── cron/
│   ├── middleware/
│   ├── prisma/
│   └── index.js
│
├── screenshots/
│   └── dashboard.png
│
├── .env
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/prashik142/api-sentinel.git
```

Move into the project

```bash
cd api-sentinel
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000

DATABASE_URL="postgresql://username:password@host/database?sslmode=require"
```

Generate Prisma Client

```bash
npx prisma generate
```

Push the schema

```bash
npx prisma db push
```

Start the server

```bash
npm start
```

or

```bash
npm run dev
```

---

# 🚀 Future Improvements

- Email Alerts
- Slack Integration
- Discord Notifications
- SMS Alerts
- JWT Authentication
- User Accounts
- Docker Support
- Kubernetes Deployment
- Grafana Dashboard
- WebSocket Live Updates
- SSL Certificate Monitoring
- Response Body Validation
- Incident Timeline
- Performance Analytics
- Multi-region Monitoring

---

# 💡 Key Learnings

Building this project helped me gain practical experience in:

- Backend Development
- REST API Design
- Cron Job Scheduling
- PostgreSQL Database Design
- Prisma ORM
- API Monitoring Systems
- Error Handling
- Deployment on Render
- Production-style Backend Architecture

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push the branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---


**Prashik Mane**

- 🎓 B.Tech, IIT Kharagpur

---

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub. It helps others discover the project and motivates future improvements.
