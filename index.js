const Command = require('command');

module.exports = function PlayerKills(dispatch) {
    const command = Command(dispatch);
    
    let enabled,
    message;
    
    dispatch.hook('S_LOGIN', 10, (event) => {
        enabled = true;
        message = '(player-kills) ' + event.name + ' has ' + event.playerKills + ' PKs';
    });
    
    /* Not ideal to use S_SPAWN_ME but needed something that came after S_LOGIN so proxy (command) has time to establish itself. */
    dispatch.hook('S_SPAWN_ME', 'raw', () => {
        if (enabled) {
            enabled = false;
            command.message(message);
        }
    });
    
}