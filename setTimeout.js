console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");

let startDate = new Date().getTime();

let endDate = startDate;

while (endDate <= startDate) {
    endDate = new Date().getTime();
    console.log(endDate);
}

console.log("While ended");