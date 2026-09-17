import { db, ObjectId } from "../config/db.js";

export async function getAllEvents(filters = {}) {
  const query = {};

  if (filters.section) {
    query.section = filters.section;
  }
  if (filters.name) {
    query.name = { $regex: filters.name, $options: "i" };
  }

  const events = await db.collection("events").find(query).toArray();
  return events;
}

export async function getEventById(id) {
  const event = await db
    .collection("events")
    .findOne({ _id: new ObjectId(id) });
  return event;
}

export async function createEvent(data) {
  const eventData = { ...data };

  if (eventData.attendeeId) {
    eventData.attendeeId = new ObjectId(eventData.attendeeId);
  }

  const result = await db.collection("events").insertOne(eventData);
  return result;
}

export async function updateEvent(id, data) {
  const result = await db
    .collection("events")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
  return result;
}

export async function markAsCompleted(id) {
  const result = await db
    .collection("events")
    .updateOne({ _id: new ObjectId(id) }, { $set: { completed: true } });
  return result;
}

export async function markAsSuspended(id) {
  const result = await db
    .collection("events")
    .updateOne({ _id: new ObjectId(id) }, { $set: { suspended: true } });
  return result;
}

export async function deleteEvent(id) {
  const result = await db
    .collection("events")
    .deleteOne({ _id: new ObjectId(id) });
  return result;
}

export async function getEventsByAttendeeId(attendeeId) {
  const events = await db
    .collection("events")
    .find({ attendeeId: new ObjectId(attendeeId) })
    .toArray();
  return events;
}
