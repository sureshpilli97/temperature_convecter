"use strict";
function convertClick() {
    var d = document.querySelector("#degrees");
    var degree = d.valueAsNumber;
    var t = document.getElementById("type");
    var type = t.value;
    var r;
    if (type === "F") {
        r = `${((degree - 32) * (5 / 9)).toFixed(2)} C`;
    }
    else if (type === "K") {
        r = `${(degree - 272.15).toFixed(2)} C`;
    }
    else {
        r = `${((9 / 5) * degree + 32).toFixed(2)} F`;
    }
    var result = document.getElementById("result");
    result.innerText = r;
}
document.addEventListener('DOMContentLoaded', () => {
    var t = document.querySelector("#st");
    function updateTimer() {
        const time = new Date().toLocaleTimeString();
        t.innerText = time;
    }
    setInterval(updateTimer, 1000);
    updateTimer();
});
