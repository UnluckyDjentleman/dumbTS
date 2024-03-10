var gamers = [
    {
        nickname: "may0n0ise",
        level: 35,
        favCharacter: "Elias"
    }, {
        nickname: "cherryBranch",
        level: 20,
        favCharacter: "Edith"
    }, {
        nickname: "l1nuSS",
        level: 45,
        favCharacter: "Hugo"
    }
];
var filter = function (array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
};
var result = filter(gamers, function (_) { return _.nickname.startsWith('l'); });
console.log(result[0].nickname);
