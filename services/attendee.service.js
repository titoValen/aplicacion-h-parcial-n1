import { db, ObjectId } from "../config/db.js";

export async function getAllAttendees(filters = {}) {
  const query = {};

  if (filters.name) {
    query.name = { $regex: filters.name, $options: "i" };
  }

  const attendees = await db.collection("attendees").find(query).toArray();
  return attendees;
}

export async function getAttendeeById(id) {
  const attendee = await db
    .collection("attendees")
    .findOne({ _id: new ObjectId(id) });
  return attendee;
}

export async function createAttendee(data) {
  const result = await db.collection("attendees").insertOne(data);
  return result;
}

export async function updateAttendee(id, data) {
  const result = await db
    .collection("attendees")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
  return result;
}

export async function deleteAttendee(id) {
  const result = await db
    .collection("attendees")
    .deleteOne({ _id: new ObjectId(id) });
  return result;
}
