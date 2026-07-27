const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>🛒 Welcome to My Free Store!</h1><p>Tracking system is starting up...</p>');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
