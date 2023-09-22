import express from "express";
import path from 'path'

const __dirname = path.resolve();
const app = express();

app.listen(3000);

app.get('/',(req,res) => 
{
    res.sendFile(__dirname + '/public/main.html')
}
);