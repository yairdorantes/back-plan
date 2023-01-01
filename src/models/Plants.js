import mongoose from "mongoose";
const PlantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    // type: mongoose.Schema.Types.ObjectId,
    type: Array,
    ref: "GreenHouse",
    default: "Public",
  },
  photo: {
    type: String,
    required: true,
  },
  born: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    default: [],
  },
  tracking: {
    type: Array,
    default: [],
  },
});
const Plant = mongoose.model("Plant", PlantSchema);
export default Plant;
