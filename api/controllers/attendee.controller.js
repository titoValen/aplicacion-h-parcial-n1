import * as attendeeService from "../../services/attendee.service.js";
import * as eventService from "../../services/event.service.js";

// TODO: Agregar views para el manejo de salidas

export async function getAllAttendees(req, res) {
  try {
    const { name } = req.query;
    const attendees = await attendeeService.getAllAttendees({ name });
    res.json(attendees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAttendeeById(req, res) {
  try {
    const id = req.params.id;
    const attendee = await attendeeService.getAttendeeById(id);
    if (!attendee) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.json(attendee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createAttendee(req, res) {
  try {
    const { name, photo, description } = req.body;
    const newAttendee = { name, photo, description };
    const result = await attendeeService.createAttendee(newAttendee);
    res.status(201).json({ message: "Cliente creado", id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateAttendee(req, res) {
  try {
    const id = req.params.id;
    const result = await attendeeService.updateAttendee(id, req.body);
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.json({ message: "Cliente actualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteAttendee(req, res) {
  try {
    const id = req.params.id;
    const result = await attendeeService.deleteAttendee(id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.json({ message: "Cliente eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAttendeeEvents(req, res) {
  try {
    const id = req.params.id;
    const events = await eventService.getEventsByAttendeeId(id);
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
