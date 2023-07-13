const db = require("../models");
const user = db.users;
exports.create=(req,res)=>{
    if (!req.body.name){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    if (!req.body.password){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    if (!req.body.email){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    if (!req.body.pno){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    const us =new user({
        username:req.body.name,
        password:req.body.password,
        email:req.body.email,
        phonenumber:req.body.pno
    });
    us
       .save(us)
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
exports.login=(req,res)=>{
    user.find({})
    .then(data=>{
        i=0;
        for(i;i<data.length;i++){
            console.log(data[i]);
            if(req.body.email==data[i].email & req.body.password==data[i].password){
                console.log(data[i])
                break;
            }
        }
        if(i>=data.length){
            res.send();
        }
        res.send(data[i])
    })
    .catch(err=>{
        res.send(500).send({
            message: err.err.message || "some error occured while retrieving users."
        });
    });
};