interface IPet{
    color: string|undefined,
    name: string,
    age: number,
    info(): void
}

interface IKitty extends IPet{
    meow():void
}

interface IDoggy extends IPet{
    woof():void
}

class Cat implements IKitty{
    color="White-cream"
    name="Belka"
    age= 0.5
    info(): void {
        console.log(this.color+" kitty named "+this.name+" is "+this.age+" years old.")
    }
    meow(): void {
        console.log('Meow!');
    }
}

class Dog implements IDoggy{
    color="Black"
    name="Barry"
    age= 8
    info(): void {
        console.log(this.color+" dog named "+this.name+" is "+this.age+" years old.")
    }
    woof(): void{
        console.log('woof! woof!');
    }
}


let belka:Cat=new Cat();
belka.info();
belka.meow();

let barry:Dog=new Dog();
barry.info();
barry.woof();

