const convertTonumber = value => Number(value);

const numbers = process.argv.slice(2)
        .map(convertTonumber);


const sum = (total,number) => total + number;
const total = numbers.reduce(sum);

console.log(total);

