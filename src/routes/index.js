const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
   res.render('ini/index');
   
});
router.get('/cultivo',(req,res)=>{
   res.render('ini/cultivo');
   
});
router.get('/climatologia',(req,res)=>{
   res.render('ini/climatologia');
   
});


module.exports=router;