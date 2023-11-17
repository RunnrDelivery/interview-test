export class Database {
  #data = {};

  async insert(key, value) {
    this.#data[key] = value;
  }

  async select(key) {
    return this.#data[key];
  }

  async delete(key) {
    delete this.#data[key];
  }

  async update(key, value) {
    this.#data[key] = value;
  }

  async exists(key) {
    return this.#data[key] !== undefined;
  }
}
