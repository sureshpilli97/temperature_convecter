
function convertClick(){
    console.log("Hello");
    var  d = document.getElementById("inputNumber") as HTMLInputElement;
    var degree = d.valueAsNumber;
    var t = document.getElementById("typeSelected") as HTMLSelectElement;
    var type = t.value;
    var r:string;
    if (type === "F") {
        r = `${((degree - 32) * (5 / 9)).toFixed(2)} C`;
    } else if (type === "K") {
        r = `${(degree - 272.15).toFixed(2)} C`;
    } else {
        r = `${((9 / 5) * degree + 32).toFixed(2)} F`;
    }
    var result = document.getElementById("result") as HTMLHeadingElement;
    if((r!=='NaN C')&& (r!=='NaN F') && (r!=='NaN K')){
        result.innerText = r;
    }
    
}
let inputEl=document.getElementById("inputNumber") as HTMLInputElement;
inputEl.addEventListener("keyup",convertClick);
document.addEventListener('DOMContentLoaded', () => {
    var t = document.querySelector("#st") as HTMLHeadingElement;
    
    
    setInterval(()=> {
        const time = new Date().toLocaleTimeString();
        t.innerText = time;
    }, 1000);
});