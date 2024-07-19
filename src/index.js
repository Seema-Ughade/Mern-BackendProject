import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios'; // Import axios here

dotenv.config();

const app = express();
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.use(cors());

// Home page
app.get('/courses', (req, res) => {
    const courses = [
        {
            id: 1,
            courseName: "MERN"
        },
        {
            id: 2,
            courseName: "MEAN"
        },
        {
            id: 3,
            courseName: "MERP"
        }
    ];
    res.send(courses);
});

// JSON data
app.get('/albums', async (req, res) => {
    
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        res.json(response.data);
    
});

// Services page
app.get('/services', (req, res) => {
    res.send('Hello from services page');
});

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});
