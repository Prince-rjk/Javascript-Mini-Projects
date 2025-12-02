let bodyObj = document.querySelector("body");
let buttonObj = document.querySelectorAll(".button");

buttonObj.forEach((button) => {
    button.addEventListener("click", (e) => {
        bodyObj.style.backgroundColor = e.target.id;
    }) 
});

    let restButtonObj = document.querySelector("#restButton");
    restButtonObj.addEventListener("click", () => {
    bodyObj.style.backgroundColor = "white";
});