import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.use(cors());

// Home page - courses endpoint
app.get('/courses', (req, res) => {
    const courses = [
        { id: 1, courseName: "MERN" },
        { id: 2, courseName: "MEAN" },
        { id: 3, courseName: "MERP" }
    ];
    res.json(courses);
});

// Services page
app.get('/services', (req, res) => {
    res.send('Hello from services page');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});
