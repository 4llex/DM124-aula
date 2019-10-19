const names = [
    'Ichigo Kurosai',
    'Didi moco',
    'Bruce wayne'
];


const lastNameFirst = name => {
    const [ firstName, lastName] = name.split(' ');
    return `${lastName}, ${firstName}`;
}

const print = name => console.log(name);


names
    .map(lastNameFirst)
    .sort()
    .forEach(print);