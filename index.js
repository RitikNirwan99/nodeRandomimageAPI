// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route to serve a random image
app.get('/api/image/random', (req, res) => {
  const width = req.query.width || 300;
  const height = req.query.height || 300;
  const imageUrl = `https://picsum.photos/${width}/${height}`;
  
  res.json({
    message: 'Random image generated successfully!',
    imageUrl,
  });
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Random Image API! Visit /api/image/random');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
