import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.json({message: "hello"});
})

app.post("/submit", (req,res)=>{
    const {name, email, message} = req.body;

    res.json({
        name:name,
        email:email,
        message: message
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
    
})