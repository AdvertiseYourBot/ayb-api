# ayb-api

The official Javascript AYB api wrapper. Looking for another language? [Java](https://github.com/AdvertiseYourBot/ayb-api.java), [Python](https://github.com/AdvertiseYourBot/ayb-api.py), [C#](https://github.com/AdvertiseYourBot/ayb-api.cs). If you would like a specific language added feel free to tell us in our [Discord server](https://discord.gg/bDsTZ29)

[![DeepScan grade](https://deepscan.io/api/teams/10306/projects/13032/branches/211955/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=10306&pid=13032&bid=211955)

## Examples

#### Discord Bot

```js
const {
  Client,
  MessageEmbed /* or RichEmbed if using v11 and before */,
} = require("discord.js");
const client = new Client();

const AYB = require("ayb-api");
const manager = new AYB(/* [OPTIONAL] You can pass the Discord.js client here for more methods and properties */);

client.on("ready", () => console.log(`${client.user.tag} is online!`));

client.on("message", async (msg) => {
  if (msg.content.toLowerCase() === "!me") {
    const me = await manager.fetchBot(client.user.id); //  If you pass the Discord.js client into the new Manager instance you can do Manager#fetchMe() instead of Manager#fetchBot(client.user.id);
    const embed = new MessageEmbed() /* or RichEmbed if using v11 and before */
      .setAuthor(
        client.user.tag,
        client.user.displayAvatarURL() /* or client.user.displayAvatarURL for v11 and before */
      )
      .setTitle(me.description.brief)
      .setDescription(me.description.full)
      .setThumbnail(me.avatarURL)
      .addField("Votes", me.votes)
      .addField("Prefix", me.prefix)
      .addField("Invite", me.invite)
      .addField("Library", me.library)
      .addField("Approved", me.approved ? "Yes" : "No")
      .addField("Certified", me.certified ? "Yes" : "No")
      .addField("Premium", me.premium : "Yes" : "No")
      .addField("Website", me.website)
      .addField("GitHub", me.github)
      .addField("Support Server", me.supportServer);

    msg.channel.send(embed);
  }
});

client.login("<TOKEN>");
```

## Classes

### Manager

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
      categoryID: 12,
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
      supportServer: "https://discord.com/invite/Ob68h3f",
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

###### Properties

- **String: url** `The base url for api requests`

---

### Bot

###### Methods

- fetchCategory()
  - Fetch the category of that bot
  - Example

  ```js
  const AYB = require("ayb-api");
  const manager = new AYB();

  manager.fetchBot("123456789101112").then(async (bot) => {
    bot.fetchCategory().then(console.log);
    /*
      Category {
        name: "Music",
        slug: "music",
        id: "12"
      }
    */
  });
  ```

###### Properties

- **Manager: \$manager** `The manager that fetched this bot`

- **String: owner** `The user property for the owner of this bot (if a Discord.js v12+ client was passed when initializing the Manager). If no client was passed or no user was found then it will default to the owner's id`

- **String: id** `The id of this bot`

- **String: username** `This bot's username`

- **String: avatarURL** `The direct url for this bot's avatar`

- **Number: votes** `The amount of votes this bot has on ayblisting.com`

- **String: categoryID** `The id of this bot's category`

- **Boolean: approved** `Whether this bot is approved or not`

- **Boolean: certified** `This bot's certification status`

- **Boolean: premium** `This bot's premium status`

- **String: prefix** `The prefix of this bot`

- **String: permissions** `The permissions integer for this bot`

- **String: library** `The library used to create this bot`

- **String: website** `The url to this bot's website (empty if none)`

- **String: github** `The url to this bot's GitHub repository (empty if none)`

- **String: supportServer** `The invite url for this bot's support server`

- **String: invite** `The invite url for this bot`

- **String: url** `The ayblisting.com url for this bot`

---

### Category

###### Properties

- **Manager: \$manager** `The manager that fetched this category`

- **String: id** `The id of this category`

- **String: name** `The name of this category`

- **String: slug** `The slug of this category`
