const form = document.getElementById("base-converter");
const resultDiv = document.querySelector("div.result");

function handleForm(e) {
  e.preventDefault();

  const addWrongResult = (insideText) => {
    resultDiv.classList.add("wrong");
    resultDiv.innerText = insideText;
  };

  const fromBase = e.target["from-base"].value;
  const toBase = e.target["to-base"].value;
  const givenNumber = e.target.givenNumber.value.trim();

  if (!givenNumber) {
    addWrongResult("Error: Please enter valid input");
    return;
  }

  let result = null;

  if (fromBase == 10) {
    if (isNaN(givenNumber)) {
      addWrongResult("Can not convert given input.");
      return;
    }
    result = decToBase(parseFloat(givenNumber), toBase);
  } else {
    const decVal = baseToDec(givenNumber, fromBase);
    if (isNaN(decVal)) {
      addWrongResult("Can not convert given input.");
      return;
    }
    result = decToBase(decVal, toBase);
  }

  resultDiv.classList.remove("wrong");
  resultDiv.innerText = result || "Something went wrong.";
}

form.addEventListener("submit", handleForm);
