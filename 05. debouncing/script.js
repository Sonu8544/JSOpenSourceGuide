
console.log("05. debouncing");

function debounce(fun, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fun(...args);
        }, delay)
    }
}

const getData = () => {
    console.log("Fetching Data....", document.getElementById("search").value);
}

document.getElementById("search").addEventListener("keyup", debounce(getData, 300));