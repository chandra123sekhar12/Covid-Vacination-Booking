const db = require("../models");
const center = db.centers;
exports.createcenter=(req,res)=>{
    if (!req.body.name){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    if (!req.body.location){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    if (!req.body.number){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    if (!req.body.timings){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    const cr =new center({
        centername:req.body.name,
        location:req.body.location,
        number:req.body.number,
        timings:req.body.timings
    });
    cr
       .save(cr)
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
    center.find(condition)
        .then(data=>{res.send(data);})
        .catch(err=>{res.status(500).send({message:err.message || "some errror occured while retreving category"});
    });
}
exports.delete = (req,res)=>{
    console.log(req);
    const id= {centername:req.body.name};
    console.log(id);
    center.deleteOne(id)
    .then(data=>{
        console.log(data);
        if(data.deletedCount==0){
            res.send({message:"cannot delete center"+ req.body.name +" may be it was not found"});
        }
        else{
            res.send({message:"center was deleted successfully!"});
        }
    })
    .catch(err=>{
        res.status(500).send({message:"could not delete category with name="+req.body.name});
    });
};
exports.findOne=(req,res)=>{
    const location = {location:req.params.id};
    console.log(req.params.id);
    console.log(location);
    center.find(location)
    .then(data=>{
        console.log(data)
        if(!data)
        res.status(404).send({message:'not found center'+location});
        else res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:"error retrieving centers with ="+location});
        console.log(location);
    });
};