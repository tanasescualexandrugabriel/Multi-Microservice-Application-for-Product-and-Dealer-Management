const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Frontend server is running on port ${port}`);
});
