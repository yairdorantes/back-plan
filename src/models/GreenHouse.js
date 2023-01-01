import mongoose from "mongoose";
const GSSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const GreenHouse = mongoose.model("GreenHouse", GSSchema);
export default GreenHouse;
