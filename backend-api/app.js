const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Backend API running 🚀');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'UP'
    });
});

app.get('/products', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Laptop',
            price: 50000
        },
        {
            id: 2,
            name: 'Phone',
            price: 20000
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
