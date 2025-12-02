
/* setInterval() - It will execute the code after every given interval millisecond
setTimeout() - It will execute the code after given time (millisecond) only once.

SIMILAR CODE :-
    let clockObj = document.querySelector("#clock");
    setInterval(() => {
        let dateObj = new Date();
        clockObj.innerHTML = dateObj.toLocaleTimeString();
    }, 1000);
*/

setInterval(() => {
    document.querySelector("#clock").innerHTML = new Date().toLocaleTimeString();
}, 1000);    