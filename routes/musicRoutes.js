// routes/musicRoutes.js
const express = require('express');
const router = express.Router();

const songs = [
  { id: 1, title: "Song A", artist: "Artist 1" },
  { id: 2, title: "Song B", artist: "Artist 2" },
  { id: 3, title: "Song C", artist: "Artist 3" },
];

router.get('/songs', (req, res) => {
  res.json(songs);
});

module.exports = router;
