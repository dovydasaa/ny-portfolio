window.onload = function() {
    let counter = 0;
    const maxAlerts = 5;
    const startDelay = 2000; // 2 seconds delay

    setTimeout(function() {
        const intervalId = setInterval(function() {
            if (counter < maxAlerts) {
                alert("Gorge flod💩");
                counter++;
            } else {
                clearInterval(intervalId);
            }
        }, 1000); // Alerts every 0.5 seconds
    }, startDelay);
};