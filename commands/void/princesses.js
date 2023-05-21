const { SlashCommandBuilder } = require('discord.js');
const { log, getOnlineUsersByRoleId } = require('./../../utils.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('princesses')
		.setDescription('Posts message about princesses of undead'),
	scope: 'global',
	async execute(interaction) {

		const membersWithRole = getOnlineUsersByRoleId(interaction, '553347167583076372');

		log(`${interaction.user.username} used 'princesses'.\nOnline princesses according to cache: ${membersWithRole.map(a => (a.user.username + ": " + a.presence.status)).join(", ")}`);

		let response;

		switch (membersWithRole.size) {
			case 0:
				response =
					'There are no Princesses of Undead online. Have they left, or maybe ascended to Queens?';
				break;
			case 1:
				response =
					"There is only one princess of undead online and its...\n" +
					interaction.member.user.nickname + "\n" +
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

	},
};
