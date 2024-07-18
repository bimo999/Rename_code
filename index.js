const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('𝐁𝐋 丶𝐒𝐲𝐬𝐭𝐞𝐦 is Fixed In VC room!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



















const allowedRoles = ['1256778578213736529', '1249816714917711953', '1262823943165972671'];

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('$re')) {
        const args = message.content.split(' ').slice(1);
        const newRoomName = args.join(' ');

        const memberRoles = message.member.roles.cache.map(role => role.id);
        const hasPermission = allowedRoles.some(role => memberRoles.includes(role));

        if (!hasPermission) {
            await message.reply(">:rolling_eyes: You Don't Have Permission!");
            await message.delete();
            return;
        }

        try {
            await message.channel.setName(newRoomName);
            await message.delete(); // Delete the command message after renaming the room
        } catch (error) {
            console.error(error);
            await message.reply('Use prefix $re roomname.');
        }
    }
});

client.login(process.env.token);
