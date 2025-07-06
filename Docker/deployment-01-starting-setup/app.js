const path = require('path');

const express = require('express');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '/views', 'welcome.html');
  res.sendFile(filePath);
});

app.listen(80,()=>{
  console.log('server is running on port 80');
});
