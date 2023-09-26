import express from "express";
import path from 'path';
import nunjucks from 'nunjucks';

const __dirname = path.resolve();
const app = express();

// view engin set
app.set('view engine', 'html');

//nujucks 
nunjucks.configure('views' , {

    watch: true, // html 파일이 수정될 경우, 다시 반영 후 랜더링
    express: app
});

app.get('/',(req,res) => 
{
    res.sendFile(__dirname + '/public/main.html');
}
);

app.get('/write',(req,res) => 
{
    res.render('write.html');
}

);

app.listen(3000, () => {
    console.log("this log server health check is ok ")
});