// public/script.js

async function fetchSongs() {
    const response = await fetch('/api/songs');
    const songs = await response.json();
    const songList = document.getElementById('songList');
  
    // Display songs in HTML
    songs.forEach(song => {
      const songItem = document.createElement('div');
      songItem.innerHTML = `<strong>${song.title}</strong> by ${song.artist}`;
      songList.appendChild(songItem);
    });
  }
  
  // Call fetchSongs when the page loads
  window.onload = fetchSongs;
   
