
const { SelectMenuOptionBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');
const prefix = "!10s"
const { Client, GatewayIntentBits, channelMention,ActivityType } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

var count = 0;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("on NEU Val Cafe", { type: ActivityType.Playing});
  

});


client.on('messageCreate',  async (message) => {

   
  

    const channelQueue = client.channels.cache.get("1020082975418896415");
 if(message.content.includes(prefix)) {
    if (count < 1) {
     count++;
     const time = message.content.substring(prefix.length).trim();




     const convertTime12to24 = (time12h) => {
        const [time, modifier] = time12h.split(' ');
      
        let [hours, minutes] = time.split(':');
      
        if (hours === '12') {
          hours = '00';
        }
      
        if (modifier === 'PM' || modifier === 'pm') {
          hours = parseInt(hours, 10) + 12;
        }
      
        return `${hours}:${minutes}`;
      }

      var time24Hr = convertTime12to24(time);

      var splittingTime = time24Hr.split(":")
      var hr = splittingTime[0];
      var min = splittingTime[1];

      console.log("hr to 24:" + hr);
      console.log("min to 24:" + min);










     var date = new Date();
     var hours = date.getHours();
     var minutes = date.getMinutes();
     var timeInSeconds = (hours * 60 * 60 * 1000) + minutes * 60 * 1000;
     var time10sInSeconds = (hr * 60 * 60 * 1000) + min * 60 * 1000;
 
     console.log(hours);
     console.log(minutes);
     console.log(timeInSeconds);
 
     console.log(time10sInSeconds);
 
     var timeToSet = time10sInSeconds - timeInSeconds
 
     if(time10sInSeconds < timeInSeconds) {
         message.reply("sorry that time has already passed.");
         timeToSet = 0;
         count = 0;
         break;
     }

     
    
     message.reply(`${channelQueue} has been locked until ${time}`);
   
     
    
      
      

  
    

    


   

     channelQueue.permissionOverwrites.edit(message.guild.roles.everyone.id, { ViewChannel: false });
        setTimeout(function() {
        channelQueue.permissionOverwrites.edit(message.guild.roles.everyone.id, { ViewChannel: true });
        message.reply(`${channelQueue} has been unlocked, good luck in the games o7`);
        count = 0;
        },timeToSet);
    
   
    

 }
 else {
    message.reply(`Sorry, ${channelQueue} has already been locked meaning there will be a 10s game soon!!! please try this command again AFTER the queue has been unlocked if you want to start another 10s game!`)
}
}

 

});










client.login("MTAyMTY3NTIzMzYyODkxMzY2NA.G7VSnP.lHSRO7kikUJQiV1ygEkUZXPzR8ZStdcTAgVp84"); 
















