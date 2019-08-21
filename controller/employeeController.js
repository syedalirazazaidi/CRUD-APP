
const express = require('express');
const router=express.Router();
require('./../app')
router.get('/',(req,res)=>{
    res.render("employee/addorEdit",{viewTitle : "Insert Employee"});
})
router.post('/',(req,res)=>{
    insertRecord(req,res);
    const employee = new Employee();
    employee.fullName=req.body.fullName;
    employee.email=req.body.email;
    employee.mobile=req.body.mobile;
    employee.city=req.body.city;
    employee.save((err,doc)=>{
        if(!err)
        res.redirect('employee/list');
else{
    console.log('error during record:'+err);
}

    }); 
})

router.post('/',(req,res)=>{
    console.log(req.body)
    res.render("employee/addorEdit",{viewTitle : "Insert Employee"});
})
router.get('/list',(req,res)=>{
res.json('from list')
})
module.exports=router;
