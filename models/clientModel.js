import mongoose from "mongoose";
const clientSchema = new mongoose.Schema({
  name:{
      type:String,
      required:true,
      trim:true,
  },
  email:{
      type:String,
      required:true,
      trim:true,
  },
  password:{
      type:String,
      required:true,
  },
});


export default mongoose.model("client", clientSchema);
