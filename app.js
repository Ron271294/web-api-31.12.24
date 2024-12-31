const express=require('express');
const app=express();
const productRauter = require('./api/v1/routes/product');//יבוא ראוטר של המוצרים
const morgan=require('morgan');//חיבור לספריית מורגן שמבצעת לוג של כל הבקשות לקונסול



app.use(morgan('dev'));//הוספת השכבה של מורגן - middleware
app.use(express.json());//הוספת שכבה שמטפלת בבקשות מסוג גייסון
app.use(express.urlencoded({extended:true}));//הוספת שכבה שמטפלת בבקשות שנשלחו



const secure=require(`./api/v1/middlewares/secure`);
app.use(secure);///

   
app.use('/product',productRauter);//שילוב הראוטר כחלק מהפליקציה

module.exports=app;