const number = process.argv.slice(2);
let total = 0;

for(let i=0; i<number.length; i++){
    total = total + Number(number[i]);
}

console.log(total);