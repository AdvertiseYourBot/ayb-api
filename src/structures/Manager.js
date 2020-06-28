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

    const percentPending = Math.round(
      (data.pending_approvals / data.bots) * 100
    );
    const info = {
      bots: {
        total: data.bots,
        pending: data.pending_approvals,
        percentPending,
      },
    };

    return info;
  }

  async fetchBot(id) {
    if (!id || typeof id !== "string")
      throw new Error(
        `Manager#fetchBot requires a string paramater. Received ${typeof id}`
      );

    const url = `${this.url}/bot?${id}`;
    const res = await axios.get(url);
    const data = res.data;

    if (!data.success) return data;

    const catURL = `${this.url}/category?id=${data.category}`;
    const catRes = await axios.get(catURL);
    const cData = catRes.data;

    const category = new Category(data.category, cData.name, cData.slug);

    return new Bot({
      ownerID: data.ownerid,
      clientID: data.clientid,
      username: data.botname,
      avatarURL: data.botavatar,
      votes: data.score,
      category,
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
