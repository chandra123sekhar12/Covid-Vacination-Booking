module.exports=mongoose=>{
    var schema=mongoose.Schema({
        admin_name:String,
        password:String,
        phonenumber:String,
        email:String
        
    },
    {timestamps:true}
    );
    schema.method("toJSON",function(){
        const{__v,_id,...object}=this.toObject();
        object.id=_id;
        return object;
    });
    const admin = mongoose.model('admin',schema);
    return admin;
};