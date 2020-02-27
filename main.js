const { Client } = require('discord.js');
const client = new Client({ disableMentions: true});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!:ping_pong:');
  if (msg.content === 'everyone') msg.channel.send('@everyone, salut à tous !', {disableMentions: false});
  if (msg.content === 'noteveryone') msg.channel.send('@everyone (noteveryone), salut à tous !');
});

client.login('NjgyMzA4NTU0NDgwMjg3ODAy.XlbMCg.xxxfCOqoiJdStpoV8Ef5cJAQKXY');