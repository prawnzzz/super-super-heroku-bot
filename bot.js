const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'Njc2Mjg2OTg0MTg0MTM1Njgx.XkJ72g.81Yv0aKdB-jV-Ua_53moDtxgj74';
usedCommandRecently4 = new Set();

client.on('ready', () =>{
    console.log('gen bot is now online')
    client.user.setPresence({ game: { name: `${client.guilds.size} Servers`, type: "WATCHING"}});
});
client.on('message', message =>{
    if (message.content === 'hi'){
        message.author.send('hello');
        message.reply('hello')
    };
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === 'give me nitro'){
    message.channel.send('A nitro code has been sent to your dms.')
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Cooldown Message')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 10000)
    var string = `discord.gift/nR62UHhGfxgLyp3j
    discord.gift/25iM8rL6HtNaPXnO
    discord.gift/aqtBFTxaECky5uvA
    discord.gift/F9xmtlAM9IsrXjCc
    discord.gift/k5ss4nhypGOVjHgK
    discord.gift/LghrxzvDyyqpfm1M
    discord.gift/3MhLGI2BeqJQZAUX
    discord.gift/ijHxCZRlAVh3Hy9u
    discord.gift/sdmip9ewhgapINFW
    discord.gift/mifosPNJEOHDS2g
    discord.gift/hudws9hwaPFPNd
    discord.gift/diuagf9h8wFHICN
    discord.gift/usWiogf3sauifo
    discord.gift/FsjioDSAOHF2
    discord.gift/JAIjsaUIQW4qa
    discord.gift/ausihFOAU25a
    https://discord.gift/rxi4EkTOvfQktjFA
    discord.gift/jziuHWAD4a
    discord.gift/iahWsanW4
    discord.gift/auIRwPsu2saf
    discord.gift/OWAfsianWF89q
    discord.gift/wajifwauNsa2
    discord.gift/OWQj3if2qa
    discord.gift/anwoFIqaq2afsda
    discord.gift/oiafwsh8wq3ra
    discord.gift/iwsjof9q8ywa
    discord.gift/aoifHQka4fa
    discord.gift/SAUIFWGsa72
    discord.gift/sjuihaw2fa
    discord.gift/aBHJDWL83q
    discord.gift/quhaior29qARF
    https://discord.gift/xO6m6pmNEFMhsGML
    https://discord.gift/y92oXCqzKpEiTMBH
    https://discord.gift/db0CB2fG1EpriJSF
    https://discord.gift/vGm9pK1lCqkbm2oF
    https://discord.gift/Y6CEyfMQ0uXHtcvl
    https://discord.gift/ChrW5fEvbIxjrdEC
    https://discord.gift/OOIwBn0GXCvUH0Ab
    https://discord.gift/X7YNW1VumukATKV6
    https://discord.gift/FM2OYL8T5Ckrlr7p
    https://discord.gift/rdggQ24BIY2VbkSY
    https://discord.gift/DB5psQuf9jN4Fzzj
    https://discord.gift/duHW5XPgE8AYsvWD2qCZ4EcH
    https://discord.gift/42sqCB2kgd56k5mmm38wKBrj
    discord.gift/sbufCOt72q3qc3g23wydngs
discord.gift/fq728qrwefdwegvcg23fehawsf
discord.gift/jqf7w3b7e8fwsgwe4gsf3rfwsd
discord.gift/42sqCB2kgd56k5mmm38wKBrj
discord.gift/fqfuh38f874y7t7etyneg83bfgsfG
discord.gift/waf7n83qSFH3n7f3eshueg8hsuq
discord.gift/wef983wAT3waehOFgetuergyw5y
discord.gift/shrf7wf73wbf36fnsafegfybe9g8ib
discord.gift/ywbDSFnIWan7YNEF7WYE
discord.gift/WNTBFW3WFNHSFENDUfneyngs
discord.gift/abyWIqGF7gO9GJESGnssg
discord.gift/wfuhNEwsFYewg73wsnd`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});

client.on('message', message =>{
    if (!message.guild) return;
if (message.content === 'Give me nitro'){
    message.channel.send('A nitro code has been sent to your dms.')
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Cooldown Message')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 10000)
    var string = `discord.gift/nR62UHhGfxgLyp3j
    discord.gift/25iM8rL6HtNaPXnO
    discord.gift/aqtBFTxaECky5uvA
    discord.gift/F9xmtlAM9IsrXjCc
    discord.gift/k5ss4nhypGOVjHgK
    discord.gift/LghrxzvDyyqpfm1M
    discord.gift/3MhLGI2BeqJQZAUX
    discord.gift/ijHxCZRlAVh3Hy9u
    discord.gift/sdmip9ewhgapINFW
    discord.gift/mifosPNJEOHDS2g
    discord.gift/hudws9hwaPFPNd
    discord.gift/diuagf9h8wFHICN
    discord.gift/usWiogf3sauifo
    discord.gift/FsjioDSAOHF2
    discord.gift/JAIjsaUIQW4qa
    discord.gift/ausihFOAU25a
    https://discord.gift/rxi4EkTOvfQktjFA
    discord.gift/jziuHWAD4a
    discord.gift/iahWsanW4
    discord.gift/auIRwPsu2saf
    discord.gift/OWAfsianWF89q
    discord.gift/wajifwauNsa2
    discord.gift/OWQj3if2qa
    discord.gift/anwoFIqaq2afsda
    discord.gift/oiafwsh8wq3ra
    discord.gift/iwsjof9q8ywa
    discord.gift/aoifHQka4fa
    discord.gift/SAUIFWGsa72
    discord.gift/sjuihaw2fa
    discord.gift/aBHJDWL83q
    discord.gift/quhaior29qARF
    https://discord.gift/xO6m6pmNEFMhsGML
    https://discord.gift/y92oXCqzKpEiTMBH
    https://discord.gift/db0CB2fG1EpriJSF
    https://discord.gift/vGm9pK1lCqkbm2oF
    https://discord.gift/Y6CEyfMQ0uXHtcvl
    https://discord.gift/ChrW5fEvbIxjrdEC
    https://discord.gift/OOIwBn0GXCvUH0Ab
    https://discord.gift/X7YNW1VumukATKV6
    https://discord.gift/FM2OYL8T5Ckrlr7p
    https://discord.gift/rdggQ24BIY2VbkSY
    https://discord.gift/DB5psQuf9jN4Fzzj
    https://discord.gift/duHW5XPgE8AYsvWD2qCZ4EcH
    https://discord.gift/42sqCB2kgd56k5mmm38wKBrj
    discord.gift/sbufCOt72q3qc3g23wydngs
discord.gift/fq728qrwefdwegvcg23fehawsf
discord.gift/jqf7w3b7e8fwsgwe4gsf3rfwsd
discord.gift/2sqCB2kgd56k5mmm38wKBrj
discord.gift/fqfuh38f874y7t7etyneg83bfgsfG
discord.gift/waf7n83qSFH3n7f3eshueg8hsuq
discord.gift/wef983wAT3waehOFgetuergyw5y
discord.gift/shrf7wf73wbf36fnsafegfybe9g8ib
discord.gift/ywbDSFnIWan7YNEF7WYE
discord.gift/WNTBFW3WFNHSFENDUfneyngs
discord.gift/abyWIqGF7gO9GJESGnssg
discord.gift/wfuhNEwsFYewg73wsnd`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});

client.on('message', message =>{
    if (message.content.startsWith('!kick')){
     var member= message.mentions.members.first();
     message.reply(`${member} has been ~~kicked~~ yeeted outta here!`);
     (member.kick());
    
}})

client.on('message', message =>{
    if (message.content.startsWith('!ban')){
        var member = message.mentions.members.first();
        message.reply(`${member} has been ~~banned~~ yeeted outta here!`);
        (member.ban());
    }
})

client.login(process.env.token);
