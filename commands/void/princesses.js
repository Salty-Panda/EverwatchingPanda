const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('princesses')
		.setDescription('Posts message about princesses of undead'),
	scope: 'global',
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		// await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);

		const role = interaction.guild.roles.cache.find(role => role.id === '553347167583076372'); // Replace with the exact name of the role
		if (role) {

			const membersWithRole = role.members.filter(member => member.presence && member.presence.status);
			const onlineCount = membersWithRole.size;

			if (onlineCount >= 1) {
				let response;

				switch (onlineCount) {
					case 1:
						response =
							"There is only one princess of undead online and its...\n" +
							member.user.nickname + "\n" +
							"Remember, I'm watching";
						break;
					case 2:
						response =
							"There two princesses of undead online. That's enough to play ping-pong\n";
						break;
					case 3:
						response = "Three princesses, cheers. That's enough to play three person chess\n" +
							"But could you please pay more attention to the number of kings?";
						break;
				}

				await interaction.reply(response);
			} else {
				await interaction.reply('There are no Princesses of Undead online. Have they left, or maybe ascended to Queens?');
			}
		} else {
			await interaction.reply('Role not found.');
		}
	},
};
