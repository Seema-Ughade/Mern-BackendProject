import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config(); 

const app = express();
const hostname = process.env.HOSTNAME || 'localhost'; 
const port = process.env.PORT || 5000;



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

// Services page
app.get('/services', (req, res) => {
    res.send('Hello from services page');
});

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});
