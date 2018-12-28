const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
const prefix = "$";
 
client.on("message", message => {
 if (message.content === "$help)(") {
  const embed = new Discord.RichEmbed() 
      .setColor("#000000") 
      .setDescription(`
	  __~~FoxBOTS~~__ By: TEAM FOXS
╔[❖════════════❖]╗
             Prefix = ' $ '
╚[❖════════════❖]╝
╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝
❖ $id ➾ ايدي حقك
❖ $daily ➾ كرديت مجانا
❖ $credit ➾ معرفة كريدت
❖ $trans <@someone> <number> ➾ اعطاء كريدت
❖ $avatar ➾ صوره حقك
❖ $ping ➾ بينق البوت
❖ $info ➾ انفو كامل
❖ $bot ➾ عن البوت
❖ $server ➾  معلومات عن السيرفر
❖ make room with name <welcome> ➾ for join-leave log
❖ $member ➾ تشوف الميمبير
❖ $invite ➾ bot invite link
❖ $support ➾ server support link
❖ $sug <Suggestion> ➾ اقتراح
❖ $msg ➾  رساله مع امبد
❖ $send ➾  فيها افري وين
❖ $giveaway <room name> <time in min> <giveaway name> ➾ make giveaway! 
❖ $BotTime ➾ وقت البوت
❖ $new ➾ to make ticket / or $new- to close it 
 
==================================================================
Server support: https://discord.gg/REKnChB
==================================================================
bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=528122045758832640&permissions=8&scope=bot
==================================================================

ملاحضه البوت محمي بكود الجحفله

        `)
   message.channel.sendEmbed(embed)
    
   }
   }); 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "$say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });


client.on('message', message => {
	if(message.author.bot) return;
var perfix = "$";
      if (message.content.startsWith(prefix + 'clear')) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`**You Don't Have**  *MANAGE_MESSAGES*  **Permission **`).catch(console.error);
    message.delete()
    if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);
   const messagecount = parseInt(args.join(' '));
   message.channel.fetchMessages({
     limit: messagecount
 }).then(messages => message.channel.bulkDelete(messages));
    var embed = new Discord.RichEmbed()
        .setTitle('تم مسح الشات بنجاح :white_check_mark: ')
        .setColor('RANDOM')
       message.channel.sendEmbed(embed).then(m => {
    m.delete(1000);
});
 };
 });




client.on('message', message => {
	if(message.author.bot) return;
    let args = message.content.split(' ');
    let prefix = "$"; 
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});






client.on('message', message => {
	if(message.author.bot) return;
    if (message.content.startsWith("$info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO FoxGeneral`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true) 
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("``Your Name``", `${message.author.username}`)
            .addField('``your tag``', message.author.discriminator)
            .addField('``Your id``', message.author.id)
            .addField('``Bot``', message.author.bot)
            .addField('``date of registration``', message.author.createdAt)
    })
}
});


client.on('message', msg => {
	if(msg.author.bot) return;
 if (msg.content.startsWith(prefix + 'msg')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let Fox = msg.mentions.members.first()
      if (!Fox) return msg.reply(`**يجب تحديد الشخص**`)
      let FoxEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديدة:new_moon_with_face: **`)
      .setDescription(args.join(" "))

      client.users.get(`${Fox.id}`).send(FoxEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});



client.login(process.env.FOXBOT);
