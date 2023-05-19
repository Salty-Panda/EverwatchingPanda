const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kings')
		.setDescription('Posts message about kings of undead'),
	scope: 'global',
	async execute(interaction, logChannel) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		// await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);

		const role = interaction.guild.roles.cache.find(role => role.id === '553347167583076372'); // Replace with the exact name of the role
		if (role) {
			//console.log(role.name);
			const membersWithRole = role.members.filter(member => member.presence && member.presence.status);
			let users = await interaction.guild.members.fetch({user:membersWithRole.map(a => a.user.id),withPresences:true, force:true});
			let actuallyOnlineMembers = users.filter(member => member.presence && member.presence.status);
			logChannel.send(`${interaction.user.username} used 'kings'.\nOnline kings according to cache: ${membersWithRole.map(a => (a.user.username+": "+a.presence.status)).join(", ")}\nActually online members: ${actuallyOnlineMembers.map(a => a.user.username).join(", ")}`);


		if (actuallyOnlineMembers.size >= 1) {
			let response;

			switch (actuallyOnlineMembers.size) {
				case 1:
					response =
						"There is only one king of undead online. Panda is sad.\n" +
						"Remember, I'm watching you";
					break;
				case 2:
					response =
						"There two kings of undead online. Maybe they can try to breed more of them?\n" +
						"Spoiler: Maybe sometime I'll write custom messages based on who's online \n" +
						"and in place of the message upward you'll see encouragement for Cow to breed resident batcatgirl";
					break;
				case 3:
					response = "Three kigns. PLACEHOLDER";
					break;
				case 4:
					response = "I AM EVERWATCHING PANDA. PRAISE ME!\n" +
						"FOUR KINGS OF THE UNDEAD ARE NOW ON!\n" +
						"BY RIGHT OF THE GREAT PANDA!\n" +
						"(and that old man too I guess)\n" +
						"IT'S TIME TO COMMENCE OPERATION:\n" +
						"PANDEMONIUM!\n" +
						"THE ELECTRIC BOOGALOO, FOUR!\n" +
						"RETURN OF THE BOOGALOO";
					break;
				case 5:
					response = "I AM EVERWATCHING PANDA. PRAISE ME!\n" +
						"FIVE KINGS OF THE UNDEAD ARE NOW ON!\n" +
						"BY RIGHT OF THE GREAT PANDA!\n" +
						"(and that old man too I guess)\n" +
						"IT'S TIME TO COMMENCE OPERATION:\n" +
						"UNDEAD RISING! FOR THE FIFTH TIME!!!\n" +
						"THE ELECTRIC BOOGALOO, FIIIIIVE!\n" +
						"RETURN OF THE BOOGALOO!\n" +
						"OOGGY BOOGY'S BOOGALOO!\n" +
						"THE BOOGALOO SPECIAL!\n" +
						"THE NEXT BOOGALOO!!!!\n" +
						"LURKERS UNITE FOR TEH BOOGALOO!!!!";
					break;
				case 6:
					response = "I AM EVERWATCHING PANDA. PRAISE ME!\n" +
						"SIX FUCKING KINGS OF THE UNDEAD;\n" +
						"BY RIGHT OF THE GREAT PANDA!!!!!\n" +
						"(and that old man too I guess)\n" +
						"IT'S TIME TO COMMENCE OPERATION SIX SIX SIX!!!!!!!:\n" +
						"UNDEAD RISING, LET'S TAKE OVER THIS FUCKING WOOOOORLD!\n" +
						"THE ELECTRIC BOOGALOO, SIXTY NINE!!!\n" +
						"NOICE!\n" +
						"RETURN OF THE BOOGALOO\n" +
						"ALWAYS THE BOOGALOO!!!!\n" +
						"BOOGALOO AND FOREVER!\n" +
						"FOREVER AND EVER BOOGALOO!!!!!!!\n" +
						"IF YOU HAVEN'T SEEN THE BOOGALOO YOU HAVE NOW, BOOGALOO!\n" +
						"OH SHIT, IT'S A MOTHER FUCKIN CRUSADE IN THIS BITCH!!!\n" +
						"RAVE TIME!\n" +
						"RAVE WITH THE DEAD!\n" +
						"DEAD RAVE PARTY! BOOOGALOO RAVE!!!!\n" +
						"J)#H%R_(Q#HRN_(Q#YVRN_Q(#YR0aw=038rya!!!!";
					break;
				case 7:
					response = "I AM EVERWATCHING PANDA. PRAISE ME!\n" +
						"SEVEN FUCKING SEVEN SEVEN KINGS OF THE UNDEAD;\n" +
						"BY RIGHT OF THE GREAT PANDA!!!!!\n" +
						"(and that old man too I guess)\n" +
						"IT'S TIME TO COMMENCE OPERATION GOD NUMBERS OF SEVEN AND SEVEN!!!!!!!:\n" +
						"UNDEAD RISING, LET'S TAKE OVER THIS FUCKING WOOOOORLD!\n" +
						"THE ELECTRIC BOOGALOO, SIXTY NINE!!!\n" +
						"NOICE!\n" +
						"RETURN OF THE BOOGALOO\n" +
						"ALWAYS THE BOOGALOO!!!!\n" +
						"BOOGALOO AND FOREVER!\n" +
						"FOREVER AND EVER BOOGALOO!!!!!!!\n" +
						"IF YOU HAVEN'T SEEN THE BOOGALOO YOU HAVE NOW, BOOGALOO!\n" +
						"OH SHIT, IT'S A MOTHER FUCKIN CRUSADE IN THIS BITCH!!!\n" +
						"RAVE TIME!\n" +
						"RAVE WITH THE DEAD!";
					break;
				case 8:
					response = "I AM EVERWATCHING PANDA. PRAISE ME!\n" +
						"HOLY FUCK IT'S EIGHT KINGS OF THE UNDEAD, QUEENS, AND PRINCESSES OF THE UNDEAD\n" +
						"BY RIGHT OF THE GREAT PANDA!!!!!\n" +
						"(and that old man too I guess)\n" +
						"IT'S TIME TO COMMENCE OPERATION GOD NUMBERS OF EIGHT AS EIGHT!!!!!!!:\n" +
						"UNDEAD RISING, LET'S TAKE OVER THIS FUCKING WOOOOORLD!\n" +
						"THE ELECTRIC BOOGALOO, SIXTY NINE!!!\n" +
						"NOICE!\n" +
						"RETURN OF THE BOOGALOO\n" +
						"ALWAYS THE BOOGALOO!!!!\n" +
						"BOOGALOO AND FOREVER!\n" +
						"FOREVER AND EVER BOOGALOO!!!!!!!\n" +
						"IF YOU HAVEN'T SEEN THE BOOGALOO YOU HAVE NOW, BOOGALOO!\n" +
						"OH SHIT, IT'S A MOTHER FUCKIN CRUSADE IN THIS BITCH!!!\n" +
						"RAVE TIME!\n" +
						"RAVE WITH THE DEAD!\n" +
						"DEAD RAVE PARTY! BOOOGALOO RAVE!!!!\n" +
						"J)#H%R_(Q#HRN_(Q#YVRN_Q(#YR0aw=038rya!!!!\n" +
						"EIGHT AND EIGHT FOREVER AND EVER EIGHT \n" +
						"EIGHT TIMES DEATH IS DEATH AND EIGHT, EIGHT, EIGHT!!!!\n" +
						"ADFJ)QAHRQ)AWEYAW\n" +
						"F)(QW#YN)WF\n" +
						"HE COMES)@(H_$)#%$)+@#NU%+)@(#%H@#)(&%$FUCK MY LIFE)Y#_(%HQ@#+*$RHQ@# \n" +
						"RAAAAAAAAAAAAAAAAAVE IN HEEEEEEEEEEEEEEEEERE!!!!!\n" +
						"CURSE OF THE BLACK CRUSAAAAAAAAADE!!!!!\n" +
						"FOR THE MOTHERLAND AND THE FATHERLAND!!!!!!\n" +
						"EIGHT PARTS OF EIGHT!\n" +
						"LET'S RAVE THIS BITCH EIGHT TIMES TONIGHT!";
					break;
			}

			await interaction.reply(response);
		} else {
			await interaction.reply('There are no Kings of Undead online. Cry, because it means this server is dying');
		}
	} else {
		await interaction.reply('Role not found.');
	}
},
};
