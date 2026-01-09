const intervalStop = setInterval(() => {
    console.log(new Date());
}, 2000);

setTimeout(() => { clearInterval(intervalStop); }, 8000);