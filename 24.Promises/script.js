function newGame() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(Math.floor(Math.random() * 6 + 1));
        }, 2000);
    });

    promise
        .then(function (number) {
            if (number >= 1 && number <= 5) {
                console.log(`Start the game ${number}`);
                return number;
            }
            else (reject());
        })
        .then(function (number) {
            if (number === 1) {
                console.log('Stay here');
            } else { console.log(`Go ${number} steps`) }
        })
        .catch(err => console.error(`Exit`));
}

newGame()

