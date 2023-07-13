module.exports=app=>{
    const users=require("../controllers/user.controller");
    const centers=require("../controllers/center.controller");
    const admins=require("../controllers/admin.controller");
    const bookings=require("../controllers/dosagedetails.controller")
    
    var router = require("express").Router();
    router.post("/",users.create);
    router.post("/login",users.login);
    router.post("/addcenter",centers.createcenter);
    router.get("/",centers.findAll);
    router.get("/getbookings",bookings.findAll);
    router.post("/adminlogin",admins.adminlogin);
    router.get("/:id",centers.findOne);
    router.post("/delete",centers.delete);
    router.post("/addbooking",bookings.create);
    app.use('/api/cv',router);
};