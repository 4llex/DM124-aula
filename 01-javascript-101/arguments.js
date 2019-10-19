const numeros = process.argv.slice(2);
let total = 0;

for(let i=0; i<numeros.length; i++){
    total = total + Number(numeros[i]);
}

console.log(total);