const mongoose = require('mongoose');
require('./employee.model')
mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true},(err)=>{
if(!err){
    console.log("mongodb connected")
    
    }
    else{
        console.log(err)
    }
} 
);
