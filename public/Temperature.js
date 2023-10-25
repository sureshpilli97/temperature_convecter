"use strict";
function convertClick() {
    console.log("Hello");
    var d = document.getElementById("inputNumber");
    var degree = d.valueAsNumber;
    var t = document.getElementById("typeSelected");
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
    if ((r !== 'NaN C') && (r !== 'NaN F') && (r !== 'NaN K')) {
        result.innerText = r;
    }
}
let inputEl = document.getElementById("inputNumber");
inputEl.addEventListener("keyup", convertClick);
document.addEventListener('DOMContentLoaded', () => {
    var t = document.querySelector("#st");
    setInterval(() => {
        const time = new Date().toLocaleTimeString();
        t.innerText = time;
    }, 1000);
});
