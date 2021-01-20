var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000*3);
});

promise.then(() => console.log("Successful"));

