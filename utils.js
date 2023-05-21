const { guildId, logChannelId } = require('./config.json');

module.exports = {
    getOnlineUsersByRoleId: getOnlineUsersByRoleId,
    initDevChannel: initDevChannel,
    log: log
}


function getOnlineUsersByRoleId(interaction, roleId) {
    const role = interaction.guild.roles.cache.find(role => role.id === roleId); // Replace with the exact name of the role
    if (!role) {
        log('Tried to find users by role, but role with specified ID was not found')
    }
    const membersWithRole = role.members.filter(member => member.presence && member.presence.status && member.presence.status !== 'offline');
    return membersWithRole;
}

let channel;

function initDevChannel(client) {
    const server = client.guilds.cache.get(guildId);
    if (server) {
        channel = server.channels.cache.get(logChannelId);
        if (channel) {
            console.log(`Connected to dev channel: ${channel.name}`);
            log(`Bot is up and running`);
        } else {
            console.log('Dev channel not found.');
        }
    } else {
        console.log('Dev server not found.');
    }
}

function log(text) {
    channel.send(text);
}