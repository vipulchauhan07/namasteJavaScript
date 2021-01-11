function run() {
    for (var i = 1; i < 6; i++) {
        function close(j) {
            setTimeout(function y() {
                console.log(j);
            }, j * 1000);
        }
        close(i);
    }
}
run();