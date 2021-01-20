var userLoggedIn = true;

function checkUserLoggedIn() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userLoggedIn) {
                resolve("User is logged in.");
            } else {
                reject("User is not logged in.");
            }
        }, 1000*3);
    }); 
    return promise;
}

checkUserLoggedIn().then((successMsg) => console.log(successMsg))
.catch((rejectMsg) => console.log(rejectMsg));

