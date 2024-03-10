type Filter<T>={
    (array: T[], f: (item: T)=>boolean): T[]
}


let gamers=[
    {
        nickname:"may0n0ise",
        level:35,
        favCharacter:"Elias"
    },{
        nickname:"cherryBranch",
        level: 20,
        favCharacter:"Edith"
    },{
        nickname:"l1nuSS",
        level: 45,
        favCharacter:"Hugo"
    }
]

let filter: Filter<any>=(array,f)=>{
    let result:any[]=[];
    for(let i=0;i<array.length;i++){
        let item:any=array[i];
        if(f(item)){
            result.push(item);
        }
    }
    return result;
}

let result=filter(gamers, _=>_.nickname.startsWith('l'));

console.log(result[0].nickname)

/*
1. type Filter = {
        <T>(array: T[], f: (item: T) => boolean): T[]
   }
   let filter: Filter = // ...
2. type Filter<T> = {
        (array: T[], f: (item: T) => boolean): T[]
   }
   let filter: Filter<number> = // ...
3. type Filter = <T>(array: T[], f: (item: T) => boolean) => T[] 
   let filter: Filter = // ...
4. type Filter<T> = (array: T[], f: (item: T) => boolean) => T[]
   let filter: Filter<string> = // ...
5. function filter<T>(array: T[], f: (item: T) => boolean): T[] { ❺
        // ...
   }
*/