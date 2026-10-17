const { AppDataSource } = require("../db");
const NoteSchema = require("../entities/Note");

class NoteRepository {
  constructor() {
    this.repo = AppDataSource.getRepository(NoteSchema);
  }

  async create(data) {
    const note = this.repo.create(data);
    return await this.repo.save(note);
  }

  async findAll() {
    return await this.repo.find();
  }
}

module.exports = new NoteRepository();