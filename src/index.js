import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const hostname = process.env.HOSTNAME;
const port = process.env.PORT || 4000;

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
