class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    await this.model.findOne({
      where: { id: id },
    })
    .then((user) => {
        return user
    }) 
  }

  async getAll() {
    return await this.model.findAll();
  }

  async create(entity) {
    return await this.model.create(entity);
  }

  async update(id, entity) {
    await this.model
      .finOne({
        where: { id: id },
      })
      .then((user) => {
        user.update(entity).then((reg) => {
          return reg;
        });
      });
  }
}

module.exports = BaseRepository;
