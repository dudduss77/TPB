export const emailValidator = (event, callback, callbackIsValidate) => {

  event.preventDefault();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let children = event.currentTarget.children;

  let selectInput = [];

  for(let i = 0; i < children.length; i++) {
    let tagName = children[i].tagName;
    let elementName = children[i].name;
    if(tagName === 'INPUT' && (elementName === 'newMail' || elementName === 'repeatMail')) {
      selectInput.push(children[i]);
    }
  }

  let inputValue = [];

  for(let i = 0; i < selectInput.length; i++) {
    inputValue[i] = selectInput[i].value;
  }

  if(inputValue[0] === '') {
    selectInput[0].classList.add('inputStyle--error');
    selectInput[0].classList.remove('inputStyle--succes')
    selectInput[1].classList.add('inputStyle--error');
    selectInput[1].classList.remove('inputStyle--succes');
    callback("Pole wymagane");
    callbackIsValidate(false);
  } else if (!regex.test(inputValue[0])){
    selectInput[0].classList.add('inputStyle--error');
    selectInput[0].classList.remove('inputStyle--succes');
    callback("Zły format email");
    callbackIsValidate(false);
  } else if (inputValue[1] === ''){
    selectInput[1].classList.add('inputStyle--error');
    selectInput[1].classList.remove('inputStyle--succes');
    callback("Pole wymagane");
    callbackIsValidate(false);
  } else if (!regex.test(inputValue[1])){
    selectInput[1].classList.add('inputStyle--error');
    selectInput[1].classList.remove('inputStyle--succes');
    callback("Zły format email");
    callbackIsValidate(false);
  } else if(inputValue[0] !== inputValue[1]) {
    selectInput[0].classList.add('inputStyle--error');
    selectInput[0].classList.remove('inputStyle--succes');
    selectInput[1].classList.add('inputStyle--error');
    selectInput[1].classList.remove('inputStyle--succes');
    callback("Różne pola");
    callbackIsValidate(false);
  } else {
    selectInput[0].classList.remove('inputStyle--error');
    selectInput[0].classList.add('inputStyle--succes');
    selectInput[1].classList.remove('inputStyle--error');
    selectInput[1].classList.add('inputStyle--succes');
    callback("");
    callbackIsValidate(true);
  }
}