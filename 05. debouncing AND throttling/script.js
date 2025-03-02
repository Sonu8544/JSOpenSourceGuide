// console.log("Debouncing in JavaScript");
// // Debouncing in JavaScript example baby and mumma with kake

// const debounce = (fn, delay) => {
//     let timer;
//     return function (...args) {
//         if (timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             fn(...args);
//         }, delay);

//     }
// }

// const fetchData = () => {
//     console.log("Fetch data from API...", document.getElementById("search").value)
// }

// document.getElementById("search").addEventListener("keyup", debounce(fetchData, 1000));



// Throttling in JavaScript example Button clicked and button desiable
console.log("Throttling in JavaScript");

const throttle = (fn, delay) => {
    let timer = false;
    return function (...args) {
        if (!timer) {
            timer = true;
            fn(...args);
            setTimeout(() => {
                timer = false;
            }, delay);
        }
    }
}

const buttonClicked = throttle(() => {
    console.log("Button clicked");
}, 5000);