import * as eventService from "../services/event.service.js";

// TODO: Agregar views para el manejo de salidas

export async function getAllEvents(req, res) {
  try {
    const { section, name } = req.query;
    const events = await eventService.getAllEvents({ section, name });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getEventById(req, res) {
  try {
    const id = req.params.id;
    const event = await eventService.getEventById(id);
    if (!event) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createEvent(req, res) {
  try {
    const { name, description, link, img, artists, section } = req.body;
    const newEvent = { name, description, link, img, artists, section };
    const event = await eventService.createEvent(newEvent);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateEvent(req, res) {
  try {
    const id = req.params.id;
    const result = await eventService.updateEvent(id, req.body);
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }
    res.json({ message: "Evento actualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function markAsCompleted(req, res) {
  try {
    const id = req.params.id;
    const result = await eventService.markAsCompleted(id);
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }
    res.json({ message: "Event marked as completed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function markAsSuspended(req, res) {
  try {
    const id = req.params.id;
    const result = await eventService.markAsSuspended(id);
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }
    res.json({ message: "Event marked as suspended" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteEvent(req, res) {
  try {
    const id = req.params.id;
    const result = await eventService.deleteEvent(id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }
    res.json({ message: "Evento eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
