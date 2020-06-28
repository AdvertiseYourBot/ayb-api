const axios = require("axios");

class Category {
  constructor(id, name, slug) {
    this.id = id;
    this.name = name;
    this.slug = slug;
  }

  async fetchBots() {}
}

module.exports = Category;
