const express = require('express');//קישור לספריית אקספרס על מנת להשתמש באובייקט ובפונקציה שלה
const router = express.Router();//הגדרת ראוטר עבור נקודות הקצה של המוצר
const {getAll,getById,addNew,updateById,deleteById}=require('../controlers/product');//יבוא הפונקציות דרך משתנה

router.get('/',getAll);//נקודת קצה עבור כל המוצרים
//router.get('/',getAll);//נקודת קצה עבור כל המוצרים


router.get('/:id',getById);//עבור מוצר לפי קוד מוצר

router.post('/',addNew);//עבור הוספת מוצר חדש

router.put('/:id',updateById);//עבור עדכון מוצר לפי קוד מוצר המוצרים נקודת קצה

router.delete('/:id',deleteById);//עבור מחיקת מוצר לפי קוד מוצר נקודת קצה



module.exports=router;