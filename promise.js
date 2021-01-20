var userLoggedIn = false;

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(userLoggedIn) {
            resolve();
        } else {
            reject();
        }
    }, 1000*3);
});

promise
.then(() => console.log("User is logged in."))
.catch(() => console.log("User is not logged in."));

