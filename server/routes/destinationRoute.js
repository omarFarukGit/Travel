import { Router } from "express";

import destinationModel from "../models/destinationModel.js";
import { destinationController } from "../controllers/destinationController.js";
import { verify } from "../midilleware/verify.js";

const router = Router();

router.post("/", destinationController.createDestinations);
router.get("/", destinationController.getAllDestinations);
router.get("/:id",verify, destinationController.getDestinaitionById);
router.patch("/:id", destinationController.updateDestinations);
router.delete("/:id", destinationController.deleteDestinations);

export const destinationRouter = router;
