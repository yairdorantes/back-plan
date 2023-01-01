import { Router } from "express";
import { GreenHouseCtrl } from "../controllers/GreenHouseCtrl.js";
import { plantCtrl } from "../controllers/Plants.Ctrl.js";
const router = Router();

/////GREEn HOuse//////

router.get("/greenhouses", GreenHouseCtrl.getGreenHouses);
router.post("/create-gs", GreenHouseCtrl.createGreenHouse);
router.post("/validate-gs", GreenHouseCtrl.validateGS);

//////plants
router.get("/plants", plantCtrl.getPlants);
router.get("/plant/:id", plantCtrl.getPlant);
router.get("/gs-plants/:id", plantCtrl.getGreenHousePlants);
router.post("/create-plant", plantCtrl.createPlant);
router.delete("/delete-plant/:id", plantCtrl.deletePlant);
router.put("/update-plant/:id", plantCtrl.updatePlant);
router.post("/add-info/:id", plantCtrl.addPlantInfo);
router.post("/add-trackings/:id", plantCtrl.addTrackings);

export default router;
