//InstanceType<T> get from Class type its object type

class Car{
    drive():void{}
}

function factory(Class: typeof Car){
    type Instance=InstanceType<typeof Class>;
    let instance:Instance=new Class();//let instance:Car
}

let v0:InstanceType<any|never>;//let v0:any|never
//let v11:InstanceType<number>; //ERROR!