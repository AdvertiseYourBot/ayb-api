const axios = require("axios");
const Bot = require("./Bot");
const Category = require("./Category");

class Manager {
  /**
   * @param {Client} client A Discord.js v12+ client instance [OPTIONAL]
   */
  constructor(client /* Discord.js v12+ only */) {
    this.url = "https://api.ayblisting.com";
    this.client = client;
  }

  async fetchMe() {
    if (!this.client)
      throw new Error(
        "Manager#fetchMe() requires the client paramater to be passed when initializing"
      );

    if (!this.client.user)
      throw new Error(
        "The client is not ready. Please only call Manager#fetchMe() once the user property has fully loaded on the client"
      );

    const res = await this.fetchBot(this.client.user.id);
    return res;
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

  /**
   * @param {String} id The id of the category to fetch
   */
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

  /**
   * @param {String} id The id of the bot to fetch
   */
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
      owner: this.client
        ? this.client.users.cache.get(data.ownerid) || data.ownerid
        : data.ownerid,
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
