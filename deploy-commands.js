const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const {token, clientId, guildId} = require('./config.json');

const guildCommands = [];
const globalCommands = [];
// Grab all the command files from the commands directory you created earlier
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    // Grab all the command files from the commands directory you created earlier
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            switch (command.scope) {
                case 'guild':
                    guildCommands.push(command.data.toJSON());
                    break;
                case 'global':
                    globalCommands.push(command.data.toJSON());
                    break;
                default:
                    console.log(`[WARNING] The command at ${filePath} is missing or has illegal value of a required "scope" property.`);
                    break;
            }
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
    try {
        console.log(`Started refreshing ${globalCommands.length} global application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const globalCommandsData = await rest.put(
            Routes.applicationCommands(clientId),
            { body: globalCommands },
        );

        console.log(`Successfully reloaded ${globalCommands.length} global application (/) commands.`);

        console.log(`Started refreshing ${guildCommands.length} guild application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const guildCommandsData = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: guildCommands },
        );

        console.log(`Successfully reloaded ${guildCommands.length} guild application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();
