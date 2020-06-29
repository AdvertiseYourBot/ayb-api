const axios = require("axios");
const Bot = require("./Bot");
const Category = require("./Category");

class Manager {
  constructor() {
    this.url = "https://api.ayblisting.com";
  }

  async fetchStats() {
    const res = await axios.get(`${this.url}/stats`);
    const data = res.data;

    const pending = parseInt(data.pending_approvals);
    const total = parseInt(data.bots);
    const percentPending = Math.round((pending / total) * 100);

    const info = {
      bots: {
        total,
        pending,
        percentPending,
      },
    };

    return info;
  }

  async fetchCategory(id) {
    if (typeof id !== "string")
      throw new Error(
        `Manager#fetchCategory requires a string paramater (id). Received ${typeof id}`
      );

    const url = `${this.url}/category?id=${id}`;
    const res = await axios.get(url);
    const data = res.data;

    if (!data.success) return data;

    return new Category(this, {
      id: data.id,
      name: data.name,
      slug: data.slug,
    });
  }

  async fetchBot(id) {
    if (typeof id !== "string")
      throw new Error(
        `Manager#fetchBot requires a string paramater (id). Received ${typeof id}`
      );

    const url = `${this.url}/bot?${id}`;
    const res = await axios.get(url);
    const data = res.data;

    if (!data.success) return data;

    return new Bot(this, {
      ownerID: data.ownerid,
      clientID: data.clientid,
      username: data.botname,
      avatarURL: data.botavatar,
      votes: parseInt(data.score),
      categoryID: data.category,
      approved: data.approved,
      certified: data.certified,
      premium: data.premium,
      prefix: data.prefix,
      permissions: data.permissions,
      library: data.library,
      description: {
        brief: data.brief,
        full: data.description,
      },
      website: data.websiteurl,
      github: data.github,
      supportServerCode: data.supportservercode,
    });
  }
}

module.exports = Manager;
