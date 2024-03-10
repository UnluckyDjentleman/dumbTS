interface IPet{
    color: string|undefined,
    name: string,
    age: number,
    info(): void
}

interface IKitty{
    meow():void
}

interface IDoggy{
    woof():void
}

class Cat implements IPet, IKitty{
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

class Dog implements IPet, IDoggy{
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

