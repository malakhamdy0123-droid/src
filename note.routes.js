const noteRepository = require("../repositories/note.repository");

class NoteService {
  async createNote(data) {
    return await noteRepository.create(data);
  }

  async getAllNotes() {
    return await noteRepository.findAll();
  }
}

module.exports = new NoteService();