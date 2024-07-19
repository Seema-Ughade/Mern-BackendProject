import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const hostname = 'localhost'
const port = 4000;

app.use(cors());

//home page
app.get('/courses', (req , res)=>{
    const courses = [{
        id : 1,
        courseName: "MERN"
    },
    {
        id : 2,
        courseName: "MEAN"
    },
    {
        id : 3,
        courseName: "MERP"
    },

   ]
    res.send(courses);
});

//services page
app.get('/services',(req , res)=>{

    res.send('Hello form services page');

})

app.listen(port, hostname, () =>{
    console.log(`server is running on http://${hostname}:${port}`)
});
