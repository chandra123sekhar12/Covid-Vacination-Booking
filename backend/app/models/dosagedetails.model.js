module.exports=mongoose=>{
    var schema=mongoose.Schema({
        name:String,
        aadharnumber:String,
        phonenumber:String,
        centername:String,
        vaccine:String,
        dosage:String
    },
    {timestamps:true}
    );
    schema.method("toJSON",function(){
        const{__v,_id,...object}=this.toObject();
        object.id=_id;
        return object;
    });
    const booking = mongoose.model('booking',schema);
    return booking;
};