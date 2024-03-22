//Required<T> (opposite to Partial<T>)
interface IConfiguration{
    port:"80"|"8080";
    domain: string;
}
const DEFAULT_CONF:Partial<IConfiguration>={
    port:"80",
    domain:"http://localhost"
}
function createConfiguration(config: Required<IConfiguration>):IConfiguration{
    return Object.assign({},DEFAULT_CONF,config);//OK
}
type T0=Partial<IConfiguration>
/* type T0 = {
    domain?: string;
    port?: "80" | "8080";
 }*/
type T1=Required<T0>
/* 
type T1 = {
    domain: string;
    port: "80" | "8080";
 }
*/