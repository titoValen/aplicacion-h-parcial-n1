import * as eventService from "../services/event.service.js";

const SECTIONS = [
  { name: "Concierto", slug: "concierto" },
  { name: "Festival", slug: "festival" },
  { name: "Showcase", slug: "showcase" },
  { name: "Gira", slug: "gira" },
  { name: "Evento Privado", slug: "privado" },
];

export async function renderHome(req, res) {
  try {
    res.render("index", { sections: SECTIONS });
  } catch (error) {
    console.error(error)
    res.status(500).send("Error al cargar la página");
  }
}

export async function renderSection(req, res) {
  try {
    const { slug } = req.params;
    const events = await eventService.getAllEvents({ section: slug });
    res.render("section", { section: slug, events });
  } catch (error) {
    res.status(500).send("Error al cargar los eventos");
  }
}
