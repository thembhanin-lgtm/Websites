const express = require('express');
const app = express();

// This line tells your server to show the index.html page automatically
app.use(express.static('public'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
