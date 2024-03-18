//Partial<T> (makes members of object partial)

interface IConfiguration{
    port:"80"|"8080";
    domain: string;
}

const DEFAULT:IConfiguration={
    port:"80",
    domain:"http://localhost"
}

//ERROR: all object members are not partial!
/*function createConfig(config: IConfiguration):IConfiguration{
    return Object.assign({},DEFAULT,config);
}*/

function createConfig(config: Partial<IConfiguration>):IConfiguration{
    return Object.assign({},DEFAULT,config);//OK
}

createConfig({
    port:"80"
})
