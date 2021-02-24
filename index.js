const Discord = require("discord.js");
const Bot = new Discord.Client(); 
const Info = require("./configuration.json") //Configurations, insert your token, client etc there
const Colors = require("./colors.json")

Bot.once(`ready`, () => {
console.log("Bot online!") //Logs onto the console whenever it's online
})



Bot.on("message", message => {
  const args = message.content
    .slice(Info.Prefix.length) //Slices strings here : https://www.w3schools.com/jsref/jsref_slice_string.asp
    .trim() //Trims strings here : https://www.w3schools.com/jsref/jsref_trim_string.asp
    .split(" "); //Split strings here : https://www.w3schools.com/jsref/jsref_split.asp
  const command = args.shift().toLowerCase(); //For an example, message is ">BAN", .toLowerCase() translates it to ">ban" https://www.w3schools.com/jsref/jsref_tolowercase.asp

  Bot.on("message", message => { //Bot owner's command to shutdown the bot
    if (message.content.toLowerCase() == "shutdownbot") { 
        if (message.author.id === ("375823027675463680")) //astralnetwork#4060's Id
        message.channel.send("Initiating Bot Shutdown").then(() => {
            bot.destroy()
        })
    }
})


if (command === "getping") { //Gets the ping
    var yourping = new Date().getTime() - message.createdTimestamp
    var botping = Math.round(Bot.ws.ping)
    const member = message.author;
    const tag = message.author.username;
    const url = member.displayAvatarURL();
    if (message.member.hasPermission("VIEW_CHANNEL")) {  //Finds if message author has permissions
     message.channel.send(new Discord.MessageEmbed()
    .setTitle(`Ping Latency`).setColor(Colors.LightGreen).addField(`${tag}'s ping `, `${yourping} MS`).addField(`Bot's ping`, `${botping} MS`).setTimestamp(message.createdAt).setFooter(`Prompted by ${message.author.username}`).setAuthor(message.author, url)); 
    }
 }
})


Bot.login(Info.Token) //Gets token from configuration.json file (ez)

//All string references https://www.w3schools.com/jsref/jsref_obj_string.asp

