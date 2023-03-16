const express=require('express');
const app=express();
const port=5100;
const database=require('mysql')
const bodyParser=require('body-parser');
const { render } = require('ejs');
const { json } = require('body-parser');




app.use(express.static('public'));
app.set("view engine","ejs");
var urlencode=bodyParser.urlencoded({extended:false});
app.use(bodyParser.json());

app.get('/index',(req,res)=>{
    res.render('index');
})



app.listen(port, () => console.log("listening :",port));