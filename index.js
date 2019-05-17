String.prototype.clr = function (hexColor) { return `<font color='#${hexColor}'>${this}</font>` };

module.exports = function PlayerKills(mod) {

    let enabled = true,
    message = '';
    
    mod.hook('S_LOGIN', 13, (event) => {
        enabled = true;
        message = 'PK Kill Count: '.clr("FDD017") + event.pkKillCount.toString().clr("00FFFF");
    });
    
    mod.hook('S_SPAWN_ME', 'raw', () => {
        if (enabled) {
            enabled = false;
            mod.command.message(message);
        }
    });
    
}