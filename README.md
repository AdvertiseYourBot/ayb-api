# ayb-api

The official AYB api wrapper

## Classes

#### Manager

###### Methods

- fetchStats()

  - Fetch overall site statistics for ayblisting.com
  - Example:

  ```js
  const AYB = require("ayb-api");
  const manager = new AYB();

  manager.fetchStats().then(console.log);
  /*
    {
      bots: {
        total: 138,
        pending: 4,
        percentPending: 3,
      },
    }
  */
  ```

- fetchBot(String: id)

  - Fetch a bot from the site using its id
  - Example

  ```js
  const AYB = require("ayb-api");
  const manager = new AYB();

  manager.fetchBot("123456789101112").then(console.log);
  /*
    Bot {
      ownerID: "6872634786236543",
      clientID: "123456789101112",
      username: "Cool Bot",
      avatarURL: "https://cdn.discordapp.com/avatars/681940967615627276/9e876b4b6cf61b343c4bd345bcf69ff5.jpg",
      votes: 2,
      category: 17,
      approved: true,
      certified: false,
      premium: false,
      prefix: "!",
      permissions: "523627856",
      library: "discord.js",
      description: {
        brief: "This bot focuses on being really cool",
        full: "Cool Bot can do cool things like:\n- say things\n- ban people\n- kick people\n- tell yo mama jokes\n\n Add it now for ultimate coolness",
      },
      website: "https://coolbot.xyz",
      github: "https://github.com/coolguy/coolbot",
      supportServerCode: "Ob68h3f",
      invite: "https://discord.com/oauth2/authorize?client_id=123456789101112&scope=bot&permissions=523627856"
    }
  */
  ```

- fetchCategory(String: id)

  - Fetch a category by id
  - Example

  ```js
  const AYB = require("ayb-api");
  const manager = new AYB();

  manager.fetchBot("12").then(console.log);
  /*
    Category {
      name: "Music",
      slug: "music",
      id: "12"
    }
  */
  ```
