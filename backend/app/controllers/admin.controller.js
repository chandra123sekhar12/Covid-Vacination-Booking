const db = require("../models");
const admin = db.admins;
exports.adminlogin=(req,res)=>{
    admin.find({})
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
            message: err.err.message || "some error occured while retrieving admin."
        });
    });
};