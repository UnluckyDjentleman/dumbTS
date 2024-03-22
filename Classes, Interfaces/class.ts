class A{
    b: number=1
}

console.log(new A().b)

class Zebra { 
    trot() {
        console.log('a')
    }
   }
class Poodle { 
    trot() {
        console.log('b')
    }
}

function ambleAround(animal: Zebra) { 
    animal.trot()
   }
   let zebra = new Zebra
   let poodle = new Poodle
   ambleAround(zebra) // OK
   ambleAround(poodle) // OK
   
   class User {
    private _id: string;
    name: string;

    constructor(name: string) {
// заполнение приватного поля _id при создании метода в конструкторе.
        this._id = this.generateGuid();
        this.name = name;
    }

    private generateGuid(): string {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    public getInfo(): string {
        return "Id = " + this._id + " name = " + this.name + " danger = " + this.danger;
    }
}

var parrot: User = new User("Кеша");
console.log(parrot.getInfo()); 