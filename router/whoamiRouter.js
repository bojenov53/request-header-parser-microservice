import { Router } from "express";
import whoamiController from "../controller/whoamiController.js";

const router = Router();

router.get('/whoami', whoamiController.whoami);


export default router;