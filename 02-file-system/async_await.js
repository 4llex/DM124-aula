function bakeACake() {
    console.log('Start baking the bake')
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('the cake is ready!!'), 1000);
        //reject('no cake today');
    });
}

function addFrosting(cake) {
    return new Promise((resolve,reject) => {
        resolve(cake + 'with a delicious frosting!');
    })
}

async function main() {
    const cake = await bakeACake();
    const cakeWithFrosting = await addFrosting(cake);
    console.log(cakeWithFrosting);
}

main();