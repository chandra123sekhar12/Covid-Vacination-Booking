const express = require('express');
const cors = require('cors');
const app=express();
var corsOptions={
    origin:["https://covid-vacination-booking-api.vercel.app"],
    methods: ["POST","GET"],
    credentials:true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const db = require("./app/models");
db.mongoose
.connect(mongodb+srv://dbuser:Amulya@14@cluster0.0ocf6oh.mongodb.net/cv_db?retryWrites=true&w=majority)
.then(()=>{
    console.log("Connected to the database!")
})
.catch(err => {
    console.log("cannot connect to the database!",err);
    process.exit();
});
app.get("/",(req,res)=>{
    res.json({message:"Welcome to first application"});
});

require("./app/routes/cv.routes")(app);

const PORT = process.env.PORT || 8080 ;
app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT} .`);
});
