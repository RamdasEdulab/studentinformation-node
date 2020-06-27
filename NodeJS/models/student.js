const mongoose = require('mongoose');

var Student = mongoose.model('Student',{
    Name: {type:String},
    Age:{type:Number},
    Std:{type:String} 
});

module.exports={Student};
