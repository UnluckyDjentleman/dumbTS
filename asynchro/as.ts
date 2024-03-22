function payment():string{
    let i:number=0;
    while(i<=100){
        console.log('Run: '+i+'%')
        i++;
    }
    return 'Payment succesful';
}

async function paying(name: string, sum: number):Promise<void>{
    console.log(name+' sent '+sum+' bucks.');
    const data=await payment();
    console.log(data);
}

paying('Billy', 300);

