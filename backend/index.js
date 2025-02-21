const express = require("express")
const app = express();
const PORT = 3001;

const cors = require('cors');
app.use(express.json());

app.use(cors()); 

const processData = (data) => {
    const numbers = [];
    const alphabets = [];
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
        }
    });
    return { numbers, alphabets };
};

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: 'Invalid input format' });
        }
        
        const user_id = "john_doe_17091999"; // Static user_id as per requirement
        const email = "john@xyz.com";
        const roll_number = "ABCD123";
        
        const { numbers, alphabets } = processData(data);
        const highest_alphabet = alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];
        
        res.status(200).json({
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet
        });
    } catch (error) {
        res.status(500).json({ is_success: false, error: 'Internal Server Error' });
    }
});

// GET /bfhl endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
