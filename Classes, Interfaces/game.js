var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Positioning = /** @class */ (function () {
    function Positioning(vert, hor) {
        this.vert = vert;
        this.hor = hor;
        this.vert = vert;
        this.hor = hor;
    }
    Positioning.prototype.distanceFrom = function (position) {
        return {
            vert: Math.abs(position.vert - this.vert),
            hor: Math.abs(position.hor.charCodeAt(0) - this.hor.charCodeAt(0))
        };
    };
    Positioning.prototype.getVerHor = function () {
        return this.hor.toString() + this.vert.toString();
    };
    return Positioning;
}());
var Figure = /** @class */ (function () {
    function Figure(color, vert, hor) {
        this.color = color;
        this.vert = vert;
        this.hor = hor;
        this.pos = new Positioning(vert, hor);
    }
    Figure.prototype.makeAStep = function (position) {
        console.log(this.color + ' made a step from ' + this.pos.getVerHor() + ' to ' + position.getVerHor());
        this.pos = position;
    };
    Figure.prototype.getPosition = function () {
        return this.pos;
    };
    Figure.prototype.getColor = function () {
        return this.color;
    };
    return Figure;
}());
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    King.prototype.canMakeAStep = function (position) {
        var dist = this.pos.distanceFrom(position);
        return dist.hor < 2 && dist.vert < 2;
    };
    return King;
}(Figure));
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Queen.prototype.canMakeAStep = function (position) {
        var dist = this.pos.distanceFrom(position);
        return (dist.hor < 8 || dist.vert < 8) && (dist.hor === dist.vert);
    };
    return Queen;
}(Figure));
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bishop.prototype.canMakeAStep = function (position) {
        var dist = this.pos.distanceFrom(position);
        return dist.hor < 8 && dist.vert < 8 && (dist.hor === dist.vert);
    };
    return Bishop;
}(Figure));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Knight.prototype.canMakeAStep = function (position) {
        var dist = this.pos.distanceFrom(position);
        return (dist.hor < 3 && dist.vert < 2) || (dist.hor < 2 && dist.vert < 3);
    };
    return Knight;
}(Figure));
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rook.prototype.canMakeAStep = function (position) {
        var dist = this.pos.distanceFrom(position);
        return (dist.hor < 8 && dist.vert === 0) || (dist.hor === 0 && dist.vert < 8);
    };
    return Rook;
}(Figure));
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pawn.prototype.canMakeAStep = function (position) {
        var dist = this.pos.distanceFrom(position);
        return (dist.vert < 2 || dist.vert < 3) && dist.hor === 0;
    };
    return Pawn;
}(Figure));
var Play = /** @class */ (function () {
    function Play() {
        this.figures = Play.createGame();
    }
    Play.createGame = function () {
        return [
            new King('Red', 8, 'E'),
            new King('White', 1, 'E'),
            new Queen('White', 1, 'D'),
            new Queen('Red', 8, 'D'),
            new Bishop('White', 1, 'C'),
            new Bishop('White', 1, 'F'),
            new Bishop('Red', 8, 'C'),
            new Bishop('Red', 8, 'F'),
            new Rook('White', 1, 'A'),
            new Rook('White', 1, 'H'),
            new Rook('Red', 8, 'A'),
            new Rook('Red', 8, 'H'),
            new Knight('White', 1, 'B'),
            new Knight('White', 1, 'G'),
            new Knight('Red', 8, 'B'),
            new Knight('Red', 8, 'G'),
            new Pawn('White', 2, 'A'),
            new Pawn('White', 2, 'B'),
            new Pawn('White', 2, 'C'),
            new Pawn('White', 2, 'D'),
            new Pawn('White', 2, 'E'),
            new Pawn('White', 2, 'F'),
            new Pawn('White', 2, 'G'),
            new Pawn('White', 2, 'H'),
            new Pawn('Red', 7, 'A'),
            new Pawn('Red', 7, 'B'),
            new Pawn('Red', 7, 'C'),
            new Pawn('Red', 7, 'D'),
            new Pawn('Red', 7, 'E'),
            new Pawn('Red', 7, 'F'),
            new Pawn('Red', 7, 'G'),
            new Pawn('Red', 7, 'H')
            //TS-2511: Cannot create an object of abstract class
            //new Figure('Red', 1, 'E');
        ];
    };
    return Play;
}());
var chess = new Play().figures;
var step1 = new Positioning(3, 'B');
var pawn1 = chess.find(function (elem) { return elem.canMakeAStep(step1) && elem.getColor() !== 'White'; });
pawn1.makeAStep(step1);
var step2 = new Positioning(6, 'C');
var pawn2 = chess.find(function (elem) { return elem.canMakeAStep(step2) && elem.getColor() !== 'Red'; });
pawn1.makeAStep(step2);
