const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cron = require('node-cron');
const axios = require('axios');

const app = express();
const prisma = new PrismaClient();
app.use(express.json());
app.use(express.static('public'));
// ==========================================
// THE ENGINE: Cron Job runs every 1 minute
// ==========================================
cron.schedule('* * * * *', async () => {
  console.log('⏰ Running scheduled API checks...');
  
  // Fetch all monitors from the database
  const monitors = await prisma.monitor.findMany();
  
  for (const monitor of monitors) {
    const startTime = Date.now();
    let status = 'DOWN';
    let statusCode = null;
    let errorMsg = null;
    
    try {
       // Ping the URL
       // Ping the URL
       const response = await axios({
         method: monitor.method,
         url: monitor.url,
         timeout: 5000,
         headers: {
           'User-Agent': 'API-Monitor-Hackathon-App' // GitHub requires this!
         }
       });
       
       statusCode = response.status;
       // Check if the response matches what the user expects (usually 200)
       status = statusCode === monitor.expectedStatus ? 'UP' : 'DOWN';
       
    } catch (error) {
       // Note: Removed the ': any' TypeScript syntax here
       statusCode = error.response?.status || null;
       errorMsg = error.message;
    }
    
    const responseTime = Date.now() - startTime;
    
    // Save the result to the database
    await prisma.checkResult.create({
      data: {
        monitorId: monitor.id,
        status,
        statusCode,
        responseTime,
        error: errorMsg
      }
    });
    
    console.log(`[${status}] ${monitor.name} | ${statusCode} | ${responseTime}ms`);
  }
});

// ==========================================
// API ROUTES
// ==========================================

// 1. Add a new API to monitor
app.post('/monitors', async (req, res) => {
  const { name, url, method, expectedStatus } = req.body;
  
  try {
    const monitor = await prisma.monitor.create({
      data: { name, url, method: method || 'GET', expectedStatus: expectedStatus || 200 }
    });
    res.json(monitor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create monitor' });
  }
});

// 2. Get all monitors and their 5 most recent results
app.get('/monitors', async (req, res) => {
  const monitors = await prisma.monitor.findMany({
    include: {
      results: {
        orderBy: { checkedAt: 'desc' },
        take: 5 
      }
    }
  });
  res.json(monitors);
});

// ==========================================
// START SERVER
// ==========================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('⚙️  Cron engine initialized. Waiting for the next minute tick...');
});