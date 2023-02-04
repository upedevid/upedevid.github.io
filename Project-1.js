let ResultElement = document.getElementById("Result");
let buildingValueElement = document.getElementById("buildingValue");
let bppValueElement = document.getElementById("bppValue");
let messageOne = "The given BPP limit is below 18% of the Building value.";
let messageTwo = "The given BPP limit is more than 18% of the Building value.";
let errorMess = "Please enter the Building & BPP value";
let errorMessOne = "Please enter the Building value";
let errorMessTwo = "Please enter the BPP value";
let eightBldgElement = document.getElementById("eightBldg");
let disBppElement = document.getElementById("givenBpp");


function calculateValue() {
    let BuildingValue = parseInt(buildingValueElement.value);
    let BPPValue = parseInt(bppValueElement.value);
    let Value = round(BuildingValue * 0.18);
    if ((BuildingValue === "" || isNaN(BuildingValue)) && (BPPValue === "" || isNaN(BPPValue))) {
        ResultElement.textContent = errorMess;
        ResultElement.style.color = "red";
        ResultElement.style.fontFamily = "monospace";
        eightBldgElement.textContent = " ";
        disBppElement.textContent = " ";
    }
    else if (BuildingValue === "" || isNaN(BuildingValue)) {
        ResultElement.textContent = errorMessOne;
        ResultElement.style.color = "red";
        ResultElement.style.fontFamily = "monospace";
        eightBldgElement.textContent = " ";
        disBppElement.textContent = " ";
    }
    else if ((BPPValue === "") || isNaN(BPPValue)){
        ResultElement.textContent = errorMessTwo;
        ResultElement.style.color = "red";
        ResultElement.style.fontFamily = "monospace";
        eightBldgElement.textContent = " ";
        disBppElement.textContent = " ";
    }
    else if (Value > BPPValue) {
        ResultElement.textContent = messageOne;
        ResultElement.style.color = "magenta";
        ResultElement.style.fontFamily = "monospace";
        eightBldgElement.textContent = (BuildingValue * 0.18);
        disBppElement.textContent = bppValueElement.value;
    }
    else {
        ResultElement.textContent = messageTwo;
        ResultElement.style.color = "green";
        ResultElement.style.fontFamily = "monospace";
        eightBldgElement.textContent = (BuildingValue * 0.18);
        disBppElement.textContent = bppValueElement.value;
    }
}
