const formObj = document.querySelector("form");

formObj.addEventListener("submit", (e) => {
    e.preventDefault();
    const heightVal = Number(document.querySelector("#height").value); 
    const weightVal = Number(document.querySelector("#weight").value);

    let errorObj = document.querySelector("#error");
    let resultObj = document.querySelector("#result");

    // Clear previous messages first
    errorObj.innerHTML = "";
    resultObj.innerHTML = "";

    if(heightVal <= 0 || isNaN(heightVal)) {
        errorObj.innerHTML = "Invalid Values. Please enter a valid height";
        return;
    }
    else if(weightVal <= 0  || isNaN(weightVal)) {
        errorObj.innerHTML = "Invalid Values. Please enter a valid weight";
        return;
    }
    else { //calculate BMI
        let bmiResult = (weightVal / ((heightVal * heightVal) / 10000)).toFixed(2); 
        let stateofHealth = null;

        if(bmiResult < 18) {
            stateofHealth = "Under Weight";
        }
        else if(bmiResult > 24) {
            stateofHealth = "Over Weight";
        }
        else {
            stateofHealth = "Healthy";
        }
        
        resultObj.innerHTML = `<b>${bmiResult}pt</b>, you are <b>${stateofHealth}</b>..!`;
    }
});

