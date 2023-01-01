import GreenHouse from "../models/GreenHouse.js";
const createGreenHouse = async (req, res) => {
  try {
    const GS = GreenHouse(req.body);
    await GS.save();
    res.json({ message: "success!", GS });
  } catch (err) {
    res.json(err);
  }
};

const validateGS = async (req, res) => {
  console.log(req.body);
  const { green_house, password } = req.body;
  console.log(green_house);
  try {
    const gs = await GreenHouse.findById(green_house);
    if (gs.password === password) {
      res.json({ approved: true, gs });
    } else {
      res.json({ approved: false });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getGreenHouses = async (req, res) => {
  try {
    const GSs = await GreenHouse.find();
    res.json(GSs);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const GreenHouseCtrl = {
  createGreenHouse,
  getGreenHouses,
  validateGS,
};
