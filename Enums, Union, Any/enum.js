var PlayerPosition;
(function (PlayerPosition) {
    PlayerPosition["Goalie"] = "\u0411\u0440\u0430\u043C\u043D\u0456\u043A";
    PlayerPosition[PlayerPosition["Defenceman"] = 3] = "Defenceman";
    PlayerPosition[PlayerPosition["Forward"] = 4] = "Forward";
})(PlayerPosition || (PlayerPosition = {}));
var brentBurns = PlayerPosition.Forward;
console.log(brentBurns);
brentBurns = PlayerPosition.Goalie;
console.log(brentBurns);
