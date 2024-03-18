type Color='RED'|'ORANGE'|'BLUE'|'BROWN'|'WHITE'|'GREEN'
abstract class Animal{
    constructor(readonly name: string) {}
    getType():string{
        return typeof Animal;
    }
}

//This string returns ERROR! We cannot create an object of abstract class
//let animal:Animal=new Animal("Belka");

class Bird extends Animal{
    age: number
    constructor(name: string, age: number){
        super(name);
        this.age=age
    }
    public fly():void{
        console.log('Bird '+this.name+' is flying');
    }
    set setAge(age: number){
        this.age=age
    }
    override getType():string {
        return "bird";
    }
}

class Fish extends Animal{
    age: number
    protected color: Color
    constructor(name: string, age: number, color: Color){
        super(name);
        this.age=age
        this.color=color
    }
    public swim():void{
        console.log(this.color+ ' fish '+this.name+' is swimming');
    }
    get getColor(){
        return this.color;
    }
    override getType():string {
        return "fish";
    }
}

class Parrot extends Bird{
    speak(text:string|undefined):string|void{
        if(typeof text==="undefined"){
            console.log(this.name+'says ...');
        }
        else{
            return text
        }
    }
    /*set setName(name:string){
        return this.name=name;
    }*/
    getType(): string {
        return "parrot";
    }
}

class Zoo<T extends Animal>{
    protected items: T[]=[];
    public add(item:T):void{
        this.items.push(item)
    }
    public delete(itemIndex:number):void{
        this.items.splice(itemIndex,1);
    }
    public update(item:T, indexToUpdate: number):void{
        this.items[indexToUpdate]=item
    }
    public selectAll():T[]{
        return this.items;
    }
    getByName(name:string):T|undefined{
        return this.items.find(el=>el.name===name);
        //! means "define assignment assertions"
    }
}

let zoo:Zoo<Bird|Fish>=new Zoo();
zoo.add(new Bird('birdy',4));
zoo.add(new Fish('fishy',3,'BLUE'));
zoo.add(new Bird('bird1',5));
zoo.add(new Fish('fish1',2,'GREEN'));
console.log(zoo.selectAll());

zoo.delete(1);
console.log(zoo.selectAll());

zoo.update(new Parrot('kesha',1),0);
console.log(zoo.selectAll());

console.log(zoo.getByName('kesha')!.getType());
