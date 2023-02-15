function getInputFieldValueById(inputId){
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString)
//   inputField.value = '';
  return inputFieldValue;
}

function getElementValueById(elementId){
    const elementInput = document.getElementById(elementId);
    const elementInputValueString = elementInput.innerText;
    const elementInputValue = parseFloat(elementInputValueString);
    return elementInputValue;
}

function setInputValue(elementId, newValue){
    const elementInput = document.getElementById(elementId);
    elementInput.innerText = newValue;

}