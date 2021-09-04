// 1
function getResult() {
    let start
    return function () {
       if (!start) {
        console.log('Enabled');
        start = new Date;
       } else {
           let end = new Date;
           let res = Math.round((end - start) / 1000);
           console.log(`${res} seconds have passed`);
           start = end;
    } } 
}

getTime = getResult();
setTimeout(() => getTime(), 0);
setTimeout(() => getTime(), 3000);
setTimeout(() => getTime(), 5000);
setTimeout(() => getTime(), 35000);

//2

const timer = time => {

  let interval =  setInterval(function () {
        if (time >= 1) {
            let min = Math.floor(time / 60);
            let sec = time % 60;

            let secFormated = sec;
            let minFormated = min;

            if (min < 10) {
                minFormated = `0${min}`;
            }

            if (sec < 10) {
                secFormated = `0${sec}`;
            }

            console.log(`${minFormated}:${secFormated}`)
            
            time--;
        } else {
            console.log('Timer ended')
            clearInterval(interval);
        }
    }, 1000);
}

timer(120);

