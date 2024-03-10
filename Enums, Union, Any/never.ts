let a:string = "Change your life"
function NeverTooLate(a: string):never{
    while(true){
        console.log(a);
    }
}

NeverTooLate(a);