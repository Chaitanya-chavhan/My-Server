const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
// Render will set the port, so we use process.env.PORT
const port = process.env.PORT || 3000;

// Use CORS (good practice)
app.use(cors());

// === 1. Serve API Routes ===
// Your API routes should come *first*
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the COMBINED server! 👋' });
});

// === 2. Serve Static Frontend ===
// This line tells Express to serve all files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// === 3. Fallback Route ===
// This sends any request that doesn't match the API or a static file
// back to your index.html. This is key for single-page apps.
// After:
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// === Start the Server ===
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});