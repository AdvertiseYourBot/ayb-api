class Category {
  constructor(manager, { id, name, slug }) {
    this.$manager = manager;
    this.id = id;
    this.name = name;
    this.slug = slug;
  }
}

module.exports = Category;
