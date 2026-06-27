# 📡 API Sentinel: Full-Stack Monitoring Engine

A robust, autonomous background monitoring system built to track the health, latency, and uptime of external APIs. 

Unlike standard CRUD applications, this project relies on an automated background engine that polls endpoints at scheduled intervals, handles network layer security (User-Agents), and persists system telemetry to a cloud database for real-time visualization.

## ✨ Key Features

* **Autonomous Polling Engine:** Utilizes `node-cron` to execute high-frequency HTTP requests to target APIs without requiring user interaction.
* **Real-Time Telemetry:** Tracks network latency (`ms`) and parses HTTP server responses (`Status Codes`) to determine system health.
* **Resilient Error Handling:** Gracefully manages network timeouts, invalid domains, and strict server security policies (e.g., handling `403 Forbidden` responses).
* **Dynamic Dashboard:** A lightweight, auto-refreshing UI built with Vanilla JS and Tailwind CSS that consumes the backend REST API to visualize data.
* **Cloud-Native Database:** Utilizes Prisma ORM connected to a Neon Serverless PostgreSQL database.

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL (Hosted on Neon), Prisma ORM
* **Background Jobs:** `node-cron`
* **HTTP Client:** Axios
* **Frontend:** Vanilla JavaScript, HTML5, Tailwind CSS (CDN)
* **Deployment:** Render (Web Service)

## ⚙️ System Architecture

1. **The Engine:** A cron job ticks every 60 seconds, fetching all active monitors from the PostgreSQL database.
2. **The Ping:** Axios sends out asynchronous HTTP requests to the target endpoints.
3. **The Log:** The response time and HTTP status code are calculated and pushed back into the database via Prisma.
4. **The UI:** The Express server serves a static dashboard that fetches the latest telemetry data every 10 seconds.

---

## 🚀 Getting Started (Local Development)

### 1. Clone the Repository
```bash
git clone [https://github.com/yourusername/api-monitor.git](https://github.com/yourusername/api-monitor.git)
cd api-monitor
