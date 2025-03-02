console.log("06.%20event-bubling-andCapturing/script.js");
const divElement = document.querySelector("div");
const button = document.querySelector("button");
const a = document.querySelector("a");

// Event Bubling child to parent
divElement.addEventListener("click", function () {
    console.log("div clicked");
});

button.addEventListener("click", function () {
    console.log("button clicked");
});


// event capturing parent to child
divElement.addEventListener("click", function () {
    console.log("div clicked");
}, true);

button.addEventListener("click", function () {
    console.log("button clicked");
}, true);


// Stop Propagation suppose i click on button then it will not go to div
button.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("button clicked");
});


// Event preventDefault stop the default behaviour of the element
a.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("a clicked");
});