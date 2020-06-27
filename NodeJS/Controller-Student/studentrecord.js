const express = require('express');

var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var {Student}= require('../models/student');


router.get('/getstudentrecord', (req,res)=>{
    Student.find((err,docs)=>{
        if(!err){res.send(docs);}
        else
        console.log('get all StudentData');
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
     return res.status(400).send('no student_id in this table');

     Student.findById(req.params.id,(err,docs)=>{
         if(!err){res.send(docs);}
         else
         console.log('get id wise studentrecord');
     });
    
});

router.post('/Studentrecord',(req,res)=>{
    var stud = Student({
        Name:req.body.Name,
        Age:req.body.Age,
        Std:req.body.Std
        
    });
    stud.save((err,docs)=>{
      if(!err){res.send(docs);}
      else
      console.log('studentrecord saved successfully');
    });
});

router.put('/:id',(req,res)=>{
if(!ObjectId.isValid(req.params.id))
return res.status(400).send('no student_id in this table');
var stud={
    Name:req.body.Name,
    Age:req.body.Age,
    Std:req.body.Std
    
}
Student.findByIdAndUpdate(req.params.id,{$set:stud},(err,docs)=>{
    if(!err){res.send(docs);}
    else
    console.log(' studentrecord updated successfully');
});
});

router.delete('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('no student_id in this table');

    Student.findByIdAndDelete(req.params.id, (err,docs)=>{
        if(!err){res.send(docs);}
        else
        console.log('studentrecord deleted successfully');
    });
});


module.exports=router;
