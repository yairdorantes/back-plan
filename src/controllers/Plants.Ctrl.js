import Plant from "../models/Plants.js";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: "tolumaster",
  api_key: "238229748389954",
  api_secret: "64KwWcwxJ7OikMWHiTv7gUdE_5o",
  // EXCLUDE_DELETE_ORPHANED_MEDIA_PATHS: ("Home/media/cards", "Home"),
});

const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getGreenHousePlants = async (req, res) => {
  try {
    const plants = await Plant.find({ "owner._id": req.params.id });
    res.json(plants);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getPlant = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    res.json(plant);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createPlant = async (req, res) => {
  // console.log(req.body);
  let cloudImage;
  let { name, photo, owner, born } = req.body;
  console.log(photo);
  try {
    const result = await cloudinary.uploader.upload(photo, {
      folder: "plants",
    });
    cloudImage = result.url;
    const plant = Plant({ name, owner, born, photo: cloudImage });
    await plant.save();
    res.json({ message: "success!" });
  } catch (err) {
    res.json(err);
  }
};
const addTrackings = async (req, res) => {
  let cloudImage;
  try {
    const { track } = req.body;
    console.log(track.photo);
    const result = await cloudinary.uploader.upload(track.photo, {
      folder: "tracks",
    });
    cloudImage = result.url;

    const plant = await Plant.findById(req.params.id);
    plant.tracking.push({ date: track.date, photo: cloudImage });
    await plant.save();
    res.json({ message: "success!", "Data added": track });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updatePlant = async (req, res) => {
  try {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "plant updated successfully", plant });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const addPlantInfo = async (req, res) => {
  const { info } = req.body;
  try {
    const plant = await Plant.findById(req.params.id);
    plant.data.push(info);
    await plant.save();
    res.json({ message: "success!" });
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
};

const deletePlant = async (req, res) => {
  console.log(req.params.id);
  try {
    await Plant.findByIdAndRemove(req.params.id);
    res.json({ message: "success, deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const plantCtrl = {
  createPlant,
  getPlants,
  getPlant,
  deletePlant,
  updatePlant,
  getGreenHousePlants,
  addPlantInfo,
  addTrackings,
};
