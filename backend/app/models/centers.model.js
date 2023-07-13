module.exports=mongoose=>{
    var schema=mongoose.Schema({
        centername:String,
        location:String,
        number:String,
        timings:String
    },
    {timestamps:true}
    );
    schema.method("toJSON",function(){
        const{__v,_id,...object}=this.toObject();
        object.id=_id;
        return object;
    });
    const center = mongoose.model('center',schema);
    return center;
};