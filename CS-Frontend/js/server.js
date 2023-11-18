const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const port = 3000;

app.get('/play/:videoId', (req, res) => {
  const videoId = req.params.videoId;

  // Fetch the audio stream URL using ytdl-core
  const audioStream = ytdl(`https://www.youtube.com/watch?v=${videoId}`, {
    quality: 'highestaudio',
    filter: 'audioonly',
  });

  // Pipe the audio stream to the response
  audioStream.pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
