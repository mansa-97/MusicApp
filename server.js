// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
  res.render('index'); // This will look for 'views/index.ejs'
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
//This sets up a basic Express server that listens on port 3000. When you run node server.js, it will start your server and serve the homepage from views/index.ejs. 
const musicRoutes = require('./routes/musicRoutes');
app.use('/api', musicRoutes); // Prefix all routes with /api
