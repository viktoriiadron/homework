function getNum() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(Math.floor(Math.random() * 6 + 1));
        }, 2000);
    });
    return promise;
}

async function newGame() {
    let number = await getNum();

    let promice = new Promise(function (resolve, reject) {
       // console.log(number);
        
        if (number >= 1 && number <= 5) {
            resolve(console.log(`Start the game ${number}`));
        } else reject(console.log("Exit"));
    });
    promice
        .then(function () {
         if (number === 1) {
             console.log('Stay here');
         } else if (number >= 2) {
             console.log(`Go ${number} steps`)
            }
        })
    .catch(error => {console.error(`${error} Exit`)})
}

newGame()
 
