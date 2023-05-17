const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	scope: 'guild',
	async execute(interaction) {
		interaction.guild.roles.cache.find(role => role.id === '290978216598962178').members.forEach(element => {
			console.log(element.status);
		});
		await interaction.reply('Pong!');
	},
};
