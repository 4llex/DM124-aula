function bakeACake() {
    console.log('Start baking the bake')
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('the cake is ready!!'), 5000);
        reject('no cake today');
    });
}


bakeACake()
    .then(data => console.log(data))
    .catch(error => console.log(error));