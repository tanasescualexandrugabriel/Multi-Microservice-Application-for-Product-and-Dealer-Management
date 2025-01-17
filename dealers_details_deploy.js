const express = require('express');
const app = express();

app.get('/dealer-pricing', (req, res) => {
    // Exemplu de prețuri de dealer
    const dealers = [
        { name: 'Dealer 1', price: 1180.99 },
        { name: 'Dealer 2', price: 1215.50 },
        { name: 'Dealer 3', price: 1200.00 }
    ];
    res.json(dealers);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Dealer Pricing microservice is running on port ${port}`);
});
