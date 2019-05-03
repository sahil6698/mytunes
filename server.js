const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');

const {homeRouter}=require('./routes/home');
const {errorRouter}=require('./routes/error');


const app=express();

const PORT=process.env.PORT ||3000;

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',homeRouter);
app.use('*',errorRouter);

app.listen(PORT,()=>{
    console.log(`Port Started on Port ${PORT} at ${Date.now()}`);
})