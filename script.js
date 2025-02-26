window.onload = function() {
    let counter = 0;
    const maxAlerts = 5;
    const intervalId = setInterval(function() {
        if (counter < maxAlerts) {
            alert("Gorge flod💩");
            counter++;
        } else {
            clearInterval(intervalId);
        }
    }, 500); // Alerts every 5 seconds
};