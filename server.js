const express = require('express');
const path = require('path');
const cors = require('cors'); // <-- ADD THIS LINE

const app = express();
const port = 3000;

// === Enable CORS ===
app.use(cors()); // <-- ADD THIS LINE

// === Serve Static Files ===
// We can remove this now, since Netlify will handle our frontend
// app.use(express.static('public')); 

// === API Route for Practice ===
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the RENDER server! 👋' });
});

// === Start the Server ===
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});