class Bot {
  constructor(
    manager,
    {
      owner,
      clientID,
      username,
      avatarURL,
      votes,
      categoryID,
      approved,
      certified,
      premium,
      prefix,
      permissions,
      library,
      description,
      website,
      github,
      supportServerCode,
    }
  ) {
    this.$manager = manager;
    this.owner = owner;
    this.id = clientID;
    this.username = username;
    this.avatarURL = avatarURL;
    this.votes = votes;
    this.categoryID = categoryID;
    this.approved = approved;
    this.certified = certified;
    this.premium = premium;
    this.prefix = prefix;
    this.permissions = permissions;
    this.library = library;
    this.description = description;
    this.website = website;
    this.github = github;
    this.supportServer = `https://discord.com/invite/${supportServerCode}`;
    this.invite = `https://discord.com/oauth2/authorize?client_id=${this.id}&scope=bot&permissions=${this.permissions}`;
    this.url = `https://ayblisting.com/bots/${this.id}`;
  }

  async fetchCategory() {
    const res = await this.$manager.fetchCategory(this.categoryID);
    return res;
  }
}

module.exports = Bot;
