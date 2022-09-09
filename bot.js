const Config = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: 'God on Js0n\'s Server' }, status: 'dnd' }).catch(console.error);
});

client.on('message', async message => {
  const prefix = Config.prefix;

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  // =========================== ADMINISTRATOR + MODERATOR ONLY COMMANDS ===========================

  if (cmd === "announce") {
    if (message.deletable) {
        message.delete();
    }

    if (args.length < 1) {
      return message.reply("please enter something to announce!\n`/announce [announcement]`").then(m => m.delete(5000));
    }

    const embed = new Discord.RichEmbed().setColor(message.guild.me.displayHexColor).setTitle("New Announcement!").setDescription(args.slice(0).join(" ")).setFooter("Sent by: " + message.author.tag, message.author.avatarURL).setTimestamp();
    message.guild.channels.get('656716676179427344').send(embed);
  }

  if (cmd === "clear") {
    message.reply("ADD A CLEAR COMMAND");
  }

  if (cmd === "pic") {
    if (message.deletable) {
        message.delete();
    }
    message.channel.send({files: ["https://i.imgur.com/3QnQDIO.gif"]})
  }

  // =========================== END OF ADMINISTRATOR + MODERATOR ONLY COMMANDS ===========================

  if (cmd === "welcome") {
    message.delete();

    const embed = new Discord.RichEmbed()

    .setColor("eed605")
    .setThumbnail(message.guild.iconURL)
    .setTitle("Welcome to the Js0niverse!")

    .setDescription("\n\nWe hope you enjoy your stay!\n\nPlease ensure you read the laws of the universe in: " + message.guild.channels.get('660944300489703435') + "\n\nCheck out the " + message.guild.channels.get('656716676179427344') + " channel for important information")

    //.setDescription("\n\nWe hope you enjoy your stay!\n\nPlease ensure you read the rules in: " + message.guild.channels.get('660944300489703435') + "\n\nCheck out the " + message.guild.channels.get('656716676179427344') + " channel for important information\n\nIf you have questions or need help, feel free to contact a member of the " + message.guild.roles.get('663127755843698776'))
    .setFooter("Js0niverse | Welome");

    message.channel.send(embed);
  }

  if (cmd === "rules") {
    message.delete();

    const embed = new Discord.RichEmbed()

    .setColor("eed605")
    .setThumbnail(message.guild.iconURL)
    .setTitle("Laws Of The Universe Agreement")
    .setDescription("These laws are subject to change at ANY time without notice!\n\n**UPDATED AS OF:\n8/31/21**\n\nBy joining the universe, you accept the responsibility to read and comply with the laws below. If found breaking laws, expect consequences. Should you have any questions about the following laws please contact an " + message.guild.roles.get('663127755843698776') + " for more information!")

    message.channel.send(embed);

    const embed2 = new Discord.RichEmbed()

    .setColor("eed605")
    .setThumbnail(message.guild.iconURL)
    .setTitle("Laws Of The Universe")
    .setDescription("• Respect is to be shown to every member of the universe. Any " + message.guild.roles.get('663127755843698776') + " has the final say in any disputes that should arise. Should one arise between THEM, some shits going down.\n\n• Discrimination will result in banishment.\n\n• Do not post portals to other universes.\n\n• Do not spam.\n\n• The appropriate channel should be used when using voice communications.\n\n• Mute your mic if you have a shitload of background noise!\n\n• You are NO LONGER required to set your nickname to your first name. *You're SO welcome.*\n\n*While in Discord you are required to follow the Discord ToS and Guildlines*\n:pushpin: **Discord | Terms Of Service** :pushpin:\n **https://discordapp.com/terms**\n\n:pushpin: **Discord | Community Guidelines** :pushpin:\n**https://discordapp.com/guidelines**")
    .setFooter("Js0niverse | Laws");

    message.channel.send(embed2);
  }

  if (cmd === "links") {
    message.delete();

    const embed = new Discord.RichEmbed()

    .setColor("eed605")
    .setThumbnail(message.guild.iconURL)
  	.setTitle("Js0niverse Portals")
    .addField('Website', 'https://js0n.net/home')
  	.addField('Permanent Invite Link', 'https://discord.gg/5dtBnRQ8f5')
  	.addBlankField()
  	.addField('Instagram', 'https://www.instagram.com/notjasonsmith/', true)
  	.addField('Steam', 'https://steamcommunity.com/id/js0n_', true)
  	.addField('Snapchat', 'js0nsnap', true)
    .addField('Venmo', '@payJs0n', true)
    .addField('CashApp', '$payJs0n', true)
    .addField('PayPal', 'https://www.paypal.com/paypalme/payjs0n', true)
  	.setFooter("Js0niverse | Links");

    message.channel.send(embed);
  }

});

client.login(Config.token);
