const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Use CORS to allow requests from your Netlify site
app.use(cors());

// Your single API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the LIVE RENDER server! 👋' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});