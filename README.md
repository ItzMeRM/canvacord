# Canvacord
Canvacord is a wrapper for canvas & jimp which can be used to create/manipulate images easily. 
This package is meant for beginners who don't know how to use canvas & stuffs.

> ⚠ This package is not recommended to you if you know how to use canvas/other image manipulation tools.

# Installing

```bash
npm i --save canvacord
```

# Features
- Beginner friendly
- Supports Buffer or image url
- Super fast image manipulation
- Welcomer and leaver images
- Rank card
- and more...

# Limitations
- You can only create stuffs using the mentioned functions.
- You cannot create super-fancy things
- If you want to go deeper, you must learn canvas

# Methods
**[All The Methods are listed here](https://canvacord.js.org)**

# Example

```js

const canvacord = require("canvacord");

async function create() {
    let img = await canvacord.trigger("./image.png");
    canvacord.write(img, "triggered.gif");

    let color = await canvacord.color("#4E5D94");
    canvacord.write(color, "color.png");
}

create();

```

# Discord.js Example

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const canvacord = require("canvacord");

client.on("ready", () => {
    console.log("I'm online!");
});

client.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.content === "!trigger") {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
    }
    if (message.content === "!delete") {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.delete(avatar);
        let attachment = new Discord.MessageAttachment(image, "deleted.png");
        return message.channel.send(attachment);
    }
    if (message.content === "!rank") {
        let rank = getRankSomehow();
        let image = await canvacord.rank({ 
            username, 
            discrim, 
            level: rank.level, 
            rank: rank.rank, 
            neededXP: rank.neededXP, 
            currentXP: rank.currentXP, 
            avatarURL: message.author.displayAvatarURL({ format: "png" }), 
            color: "white", 
            background: "https://link-to/superDuperBackground"
        });
        let attachment = new Discord.MessageAttachment(image, "rank.png");
        return message.channel.send(attachment);
    }
});

client.login("Your_Bot_Token_here");

```

# Documentation
**[https://canvacord.snowflakedev.xyz](https://canvacord.js.org)**


# License
This project is licensed under **[GNU GENERAL PUBLIC LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html)**.

```md
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.
```

# Join Our Discord Server
**[discord.gg/uqB8kxh](https://discord.gg/uqB8kxh)**
