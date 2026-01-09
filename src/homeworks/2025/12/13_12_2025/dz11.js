function runNTimes(fn, count, delay){
    let i = 0;

    const intervalID = setInterval(() => {
        fn();
        i++;
        if (i === count) {
            clearInterval(intervalID);
        }
    }, delay);
}

runNTimes(() => console.log("Тук тук тук"), 5, 1000);