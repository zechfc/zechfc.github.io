const updateThermomether =() => {
    const goal = 10000;
    const funds = document.getElementById("txt-funds").value;
    const errorSpan = document.getElementById("funds-error");
    errorSpan.innerHTML = "";
    const therm = document.getElementById("thermomether")
    document.querySelector(":root").style.setProperty('--funds', "0%");

    //error
    if(isNaN(funds)){
        errorSpan.innerHTML = "* Not a valid number";
        return;
    }
    else if(funds < 0){
        errorSpan.innerHTML = "* Negative number";
        return;
    }

    const percent = funds / goal * 100;
    document.querySelector(":root").style.setProperty('--funds', percent + "%");
};

//e = event
const evalForm = (e) => {
    e.preventDefault();

    console.log("here")
}

document.getElementById("btn-cont").onclick = updateThermomether;
document.getElementById("my-form").onsubmit = evalForm;