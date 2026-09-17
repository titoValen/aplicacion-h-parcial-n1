import { Router } from "express";
import * as attendeeController from "../controllers/attendee.controller.js";

const router = Router();

router.get("/", attendeeController.getAllAttendees);
router.get("/:id", attendeeController.getAttendeeById);
router.get("/:id/events", attendeeController.getAttendeeEvents);
router.post("/", attendeeController.createAttendee);
router.put("/:id", attendeeController.updateAttendee);
router.delete("/:id", attendeeController.deleteAttendee);

export default router;
