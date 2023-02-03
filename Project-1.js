let ResultElement = document.getElementById("Result");
let buildingValueElement = document.getElementById("buildingValue");
let bppValueElement = document.getElementById("bppValue");
let messageOne = "The given BPP limit is below 18% of the Building value.";
let messageTwo = "The given BPP limit is more than 18% of the Building value.";
let errorMess = "Please enter the Building & BPP values";

function calculateValue() {
    let BuildingValue = parseInt(buildingValueElement.value);
    let BPPValue = parseInt(bppValueElement.value);
    let Value = (BuildingValue * 0.18);
    if (BuildingValue === "" || isNaN(BuildingValue)) {
        ResultElement.textContent = errorMess;
        ResultElement.style.color = "magenta";
        ResultElement.style.fontFamily = "monospace";
    }
    else if ((BPPValue === "") || isNaN(BPPValue)){
        ResultElement.textContent = errorMess;
        ResultElement.style.color = "magenta";
        ResultElement.style.fontFamily = "monospace";
    }
    else if (Value >= BPPValue) {
        ResultElement.textContent = messageOne;
        ResultElement.style.color = "red";
        console.log(ResultElement);
        ResultElement.style.fontFamily = "monospace";
    }
    else {
        ResultElement.textContent = messageTwo;
        ResultElement.style.color = "green";
        ResultElement.style.fontFamily = "monospace";
    }
}