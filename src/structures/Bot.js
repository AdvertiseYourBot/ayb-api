class Bot {
  constructor({
    owner,
    clientID,
    username,
    avatarURL,
    votes,
    category,
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
  }) {
    this.owner = owner;
    this.id = clientID;
    this.username = username;
    this.avatarURL = avatarURL;
    this.votes = votes;
    this.category = category;
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
  }

  async fetchCategory() {}
}

module.exports = Bot;
