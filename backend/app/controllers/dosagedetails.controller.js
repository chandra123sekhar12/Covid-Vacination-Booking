const db = require("../models");
const booking = db.dosagedetails;
exports.create=(req,res)=>{
    if (!req.body.name){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    if (!req.body.aadharnumber){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    if (!req.body.phonenumber){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    if (!req.body.centername){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    
    const bk =new booking({
        name:req.body.name,
        aadharnumber:req.body.aadharnumber,
        phonenumber:req.body.phonenumber,
        centername:req.body.centername,
        vaccine:req.body.vaccine,
        dosage:req.body.dosage
    });
    bk
       .save(bk)
       .then(data => {
           res.send(data);
           console.log(data)
       })
       .catch(err=>{
           res.status(500).send({
               message:err.message || "Some error occurred whilecreating the user."
           });
       });
};
exports.findAll = (req,res)=>{
    const name = req.query.centername;
    var condition = name ? {title: {$regex:new RegExp(name), $options:"i"} } :{};
    booking.find(condition)
        .then(data=>{res.send(data);})
        .catch(err=>{res.status(500).send({message:err.message || "some errror occured while retreving category"});
    });
}