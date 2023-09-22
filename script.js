// get pages
const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");

// get Buttons

const confirmBtn = document.getElementById("confirmBtn");
const continueBtn = document.getElementById("continueBtn");

// get input fields

const cardHolderName = document.getElementById("cardHolderName");
const cardNumber = document.getElementById("cardNumber");
const dateInputMonth = document.getElementById("dateInputMonth");
const dateInputYear = document.getElementById("dateInputYear");
const inputCvc = document.getElementById("inputCvc");

// get the error divs

const cardholderNameErrorText = document.getElementById("cardholderNameErrorText");
const cardNoErrorText = document.getElementById("cardNoErrorText");
const monthErrorText = document.getElementById("monthErrorText");
const yearErrorText = document.getElementById("yearErrorText");
const cvcErrorText = document.getElementById("cvcErrorText");

//get success page card details same as the user typed in the form

const givenCvcNumber = document.getElementById("givenCvcNumber");
const givenCardNumber = document.getElementById("givenCardNumber");
const givenName = document.getElementById("givenName");
const givenDate = document.getElementById("givenDate");

// get patterns for number only input fields

const numPattern = /^[0-9 ]*$/;

confirmBtn.addEventListener("click", () => {
    checkName();
    checkNum();
    checkMonth();
    checkYear();
    checkCvcNum();
    if(cardHolderName.value !== "" && cardNumber.value !== "" && dateInputMonth.value !== "" && dateInputYear.value !== "" && inputCvc.value !== "" ){
        firstPage.classList.add("hidden");
        secondPage.classList.remove("hidden");
        getDetailsAsTyped();
    }
})
function checkName() {
    if (cardHolderName.value === "") {
        cardHolderName.classList.add("error");
        cardholderNameErrorText.classList.remove("hidden");
        cardholderNameErrorText.innerHTML = "Can't be blank";
    }
    else if(cardHolderName.value !== ""){
        cardHolderName.classList.remove("error");
        cardholderNameErrorText.classList.add("hidden");
        cardholderNameErrorText.innerHTML = "";
    }

}
function checkNum() {
    if (cardNumber.value === "") {
        cardNumber.classList.add("error");
        cardNoErrorText.classList.remove("hidden");
        cardNoErrorText.innerHTML = "Can't be blank";
    }
    if (cardNumber.value !== "") {
        if (numPattern.test(cardNumber.value)) {
            cardNumber.classList.remove("error");
            cardNoErrorText.classList.add("hidden");
            cardNoErrorText.innerHTML = "";
        }
        else {
            cardNumber.classList.add("error");
            cardNoErrorText.classList.remove("hidden");
            cardNoErrorText.innerHTML = "Wrong format,numbers only";
        }
    }
}

function checkMonth() {
    if (dateInputMonth.value === "") {
        dateInputMonth.classList.add("error");
        monthErrorText.classList.remove("hidden")
        monthErrorText.innerText = "Can't be blank";
    }
    else if(dateInputMonth.value !== ""){
        dateInputMonth.classList.remove("error");
        monthErrorText.classList.add("hidden")
        monthErrorText.innerText = "";
    }

}
function checkYear() {
    if (dateInputYear.value === "") {
        dateInputYear.classList.add("error");
        yearErrorText.classList.remove("hidden")
        yearErrorText.innerText = "Can't be blank";
    }
    else if(dateInputYear.value !== ""){
        dateInputYear.classList.remove("error");
        yearErrorText.classList.add("hidden")
        yearErrorText.innerText = "";
    }
}
function checkCvcNum() {
    if (inputCvc.value === "") {
        inputCvc.classList.add("error");
        cvcErrorText.classList.remove("hidden");
        cvcErrorText.innerHTML = "Can't be blank"
    } else if(inputCvc.value !== ""){
        inputCvc.classList.remove("error");
        cvcErrorText.classList.add("error");
        cvcErrorText.innerHTML = "";
    }
}
function getDetailsAsTyped(){
    givenCvcNumber.innerText = inputCvc.value
    givenCardNumber.innerText = cardNumber.value
    givenName.innerText = cardHolderName.value
    givenDate.innerText = dateInputMonth.value + "/" + dateInputYear.value
}
continueBtn.addEventListener("click",()=>{
    secondPage.classList.add("hidden");
    firstPage.classList.remove("hidden");
    cardHolderName.value = "";
    cardNumber.value = "";
    dateInputMonth.value = "";
    dateInputYear.value = "";
    inputCvc.value = "";
})