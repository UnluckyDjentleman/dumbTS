
//custom errors
class DivisionByZeroException extends Error{}
class DateException extends Error{}

//try-catch mechanism
function dateOfBirth(datestr: string):Date|undefined{
    try{
        let date=new Date(datestr);
        return date;
    }
    catch(e){
        if(e instanceof DateException){
            console.log(e.message)
        }
        else{
            throw e;
        }
    }
    finally{
        console.log('try/catch mechanism');
    }
}

console.log(dateOfBirth("1987-01-11"));
console.log(dateOfBirth("1987-01-32"));