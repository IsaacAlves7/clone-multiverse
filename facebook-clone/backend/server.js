const express = require("express");
const cors = require("cors");
const app = express();
const options={
    origin: "http://localhost:3000",
    useSuccessStatus: 200,
} 

app.use(cors(options));

app.get('/',(req,res)=>{
    res.send("Welcome from home!")
});

app.get('/books',(res)=>{
    res.send("Welcome from books again!")
});

app.listen(8000, () => {
    console.log("server is listening!");
});