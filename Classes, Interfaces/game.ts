type Color='Red'|'White'
type Hor='A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'
type Vert=1|2|3|4|5|6|7|8

class Positioning{
    constructor(
        private vert: Vert,
        private hor: Hor
    ){
        this.vert=vert
        this.hor=hor
    }
    distanceFrom(position: Positioning){
        return{
            vert: Math.abs(position.vert-this.vert),
            hor: Math.abs(position.hor.charCodeAt(0)-this.hor.charCodeAt(0))
        }
    }
    getVerHor():string{
        return this.hor.toString()+this.vert.toString()
    }
}

abstract class Figure{
    protected pos: Positioning
    constructor(
        private readonly color: Color,
        private vert: Vert,
        private hor: Hor
    ){
        this.pos=new Positioning(vert,hor);
    }
    makeAStep(position: Positioning){
        console.log(this.color+' made a step from '+this.pos.getVerHor()+' to '+position.getVerHor());
        this.pos=position
    }
    abstract canMakeAStep(position: Positioning):boolean
    getPosition():Positioning{
        return this.pos;
    }
    getColor():Color{
        return this.color;
    }
}

class King extends Figure{
    canMakeAStep(position: Positioning){
        let dist=this.pos.distanceFrom(position);
        return dist.hor<2&&dist.vert<2
    }
}
class Queen extends Figure{
    canMakeAStep(position: Positioning){
        let dist=this.pos.distanceFrom(position);
        return (dist.hor<8||dist.vert<8)&&(dist.hor===dist.vert)
    }
}
class Bishop extends Figure{
    canMakeAStep(position: Positioning){
        let dist=this.pos.distanceFrom(position);
        return dist.hor<8&&dist.vert<8&&(dist.hor===dist.vert)
    }
}
class Knight extends Figure{
    canMakeAStep(position: Positioning){
        let dist=this.pos.distanceFrom(position);
        return (dist.hor<3&&dist.vert<2)||(dist.hor<2&&dist.vert<3)
    }
}
class Rook extends Figure{
    canMakeAStep(position: Positioning){
        let dist=this.pos.distanceFrom(position);
        return (dist.hor<8&&dist.vert===0)||(dist.hor===0&&dist.vert<8)
    }
}
class Pawn extends Figure{
    canMakeAStep(position: Positioning){
        let dist=this.pos.distanceFrom(position);
        return (dist.vert<2||dist.vert<3)&&dist.hor===0
    }
}

class Play{
    public figures=Play.createGame();

    private static createGame(){
        return[
            new King('Red',8,'E'),
            new King('White',1,'E'),

            new Queen('White', 1, 'D'),
            new Queen('Red', 8, 'D'),

            new Bishop('White', 1, 'C'),
            new Bishop('White', 1, 'F'),
            new Bishop('Red', 8,'C'),
            new Bishop('Red', 8, 'F'),

            new Rook('White', 1, 'A'),
            new Rook('White', 1, 'H'),
            new Rook('Red', 8,'A'),
            new Rook('Red', 8, 'H'),

            new Knight('White', 1, 'B'),
            new Knight('White', 1, 'G'),
            new Knight('Red', 8,'B'),
            new Knight('Red', 8, 'G'),

            new Pawn('White', 2, 'A'),
            new Pawn('White', 2, 'B'),
            new Pawn('White', 2, 'C'),
            new Pawn('White', 2, 'D'),
            new Pawn('White', 2, 'E'),
            new Pawn('White', 2, 'F'),
            new Pawn('White', 2, 'G'),
            new Pawn('White', 2, 'H'),
            new Pawn('Red', 7,'A'),
            new Pawn('Red', 7, 'B'),
            new Pawn('Red', 7,'C'),
            new Pawn('Red', 7, 'D'),
            new Pawn('Red', 7,'E'),
            new Pawn('Red', 7, 'F'),
            new Pawn('Red', 7,'G'),
            new Pawn('Red', 7, 'H')

            //TS-2511: Cannot create an object of abstract class
            //new Figure('Red', 1, 'E');
        ]
    }
}