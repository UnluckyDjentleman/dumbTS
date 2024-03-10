function *generator(count: number): IterableIterator<number>{
    while(count<5){
        yield count++;
    }
    return count*100;
}

const gen=generator(0);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);