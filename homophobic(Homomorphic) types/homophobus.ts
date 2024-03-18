//Readonly<T> (makes members of object readonly)
interface IStudent{
    name: string,
    age: number,
    pulpit: string,
    course: number,
    group: number
}

function mutableAction(person: IStudent):void{
    person.name="Sophie"; //OK
}

function immutableFunction(person:Readonly<IStudent>){
    person.name="Simon";//Error: Cannot assign to 'name' because it is a read-only property.
}

type Student=Readonly<IStudent> 
/*type Student={
    readonly name: string,
    readonly age: number,
    readonly pulpit: string,
    readonly course: number,
    readonly group: number
}*/