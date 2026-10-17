const noteService = require("../services/note.service");

class NoteController {
  async create(req, res) {
    try {
      const note = await noteService.createNote(req.body);
      res.status(201).json(note);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const notes = await noteService.getAllNotes();
      res.json(notes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new NoteController();