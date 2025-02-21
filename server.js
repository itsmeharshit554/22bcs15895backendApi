const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/bfhl", (req, res) => {
    const data = req.body.data;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const numbers = data.filter((c) => !isNaN(c));
    const alphabets = data.filter((c) => /^[a-zA-Z]$/.test(c));

    const highest_alphabet = alphabets.length ? [alphabets.sort((a, b) => b.localeCompare(a))[0]] : [];
    console.log(numbers, alphabets, highest_alphabet);
    const response = {
        is_success: true,
        user_id: "john_doe_17091999",  // Replace with actual details
        email: "john@xyz.com",         // Replace with actual email
        roll_number: "ABCD123",        // Replace with actual roll number
        numbers,
        alphabets,
        highest_alphabet
    };

    res.status(200).json(response);
});

app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});
