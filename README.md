# 📡 API Sentinel: Automated Monitoring Platform

A lightweight, production-inspired backend application that continuously monitors external APIs and services, tracks response times, records status codes, and visualizes system health on an auto-refreshing dashboard.

## Overview

In real-world applications, downtime can lead to lost revenue and poor user experience. This platform helps developers autonomously track the health of their integrations without relying on manual checks. 

## How It Works

User Adds Monitor via Dashboard
        ↓
Cron Job Runs Every 60 Seconds
        ↓
Axios Pings API Endpoints
        ↓
Calculate Latency (ms) & Status
        ↓
Result Stored in PostgreSQL
        ↓
Dashboard Auto-Refreshes UI

## Features

**Core Monitoring Engine**
* Background Cron Job Execution
* Automatic API Health Checks
* Response Time (Latency) Tracking
* Status Code Validation (e.g., 200 OK vs 403 Forbidden)
* Network Layer Security Bypass (User-Agent Injection)

**Dashboard & Visualization**
* Auto-refreshing UI (Updates every 10 seconds)
* Dynamic Color Coding (Green for UP, Red for DOWN)
* Real-time Latency Metrics
* Status Code Readouts
* Form-based UI to seamlessly add new endpoints

**Data Persistence**
* Hosted Serverless PostgreSQL (Neon)
* Prisma ORM for seamless data modeling
* Historical tracking of all pings

## Tech Stack

**Backend**
* Node.js
* Express.js

**Database**
* PostgreSQL (Neon Serverless)
* Prisma ORM

**Monitoring & Utilities**
* Axios (HTTP Requests)
* node-cron (Task Scheduling)

**Frontend**
* Vanilla JavaScript
* HTML5
* Tailwind CSS (via CDN)

**Deployment**
* Render (Web Service)

## Database Models

**Monitor**
* id (UUID)
* name (String)
* url (String)
* method (String)
* expectedStatus (Int)
* interval (Int)
* createdAt (DateTime)

**CheckResult**
* id (UUID)
* monitorId (String, Foreign Key)
* status (String - UP/DOWN)
* statusCode (Int)
* responseTime (Int - ms)
* error (String)
* checkedAt (DateTime)

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/monitors` | Fetch all monitors and their 5 most recent ping results |
| **POST** | `/monitors` | Add a new API endpoint to the monitoring engine |
| **GET** | `/` | Serves the HTML dashboard interface |

## Environment Variables

Create a `.env` file in the root of your directory:
`PORT=3000`
`DATABASE_URL="postgresql://user:password@your-database-url.com/neondb?sslmode=require"`

## Installation & Setup

**1. Clone the repository:**
```bash
git clone <your-github-repo-url>
cd api-monitor
