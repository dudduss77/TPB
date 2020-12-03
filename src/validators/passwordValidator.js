export const passwordValidator = (event, errorCallback, isValidateCallback) => {
  event.preventDefault();

  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  let children = event.currentTarget.children;

  let selectInput = [];

  for(let i = 0; i < children.length; i++) {
    let tagName = children[i].tagName;
    let elementName = children[i].name;
    if(tagName === 'INPUT' && (elementName === 'newPassword' || elementName === 'repeatPassword')) {
      selectInput.push(children[i]);
    }
  }

  let inputValue = selectInput.map(item => item.value);

  if(inputValue[0] === '') {
    selectInput[0].classList.add('inputStyle--error');
    selectInput[0].classList.remove('inputStyle--succes')
    selectInput[1].classList.add('inputStyle--error');
    selectInput[1].classList.remove('inputStyle--succes');
    errorCallback("Pole wymagane");
    isValidateCallback(false);
  } else if (!regex.test(inputValue[0])){
    selectInput[0].classList.add('inputStyle--error');
    selectInput[0].classList.remove('inputStyle--succes');
    errorCallback("Hasło musi zawierać od 8 do 15 znaków. Małe, duże litery, cyfry i znaki specjalne.");
    isValidateCallback(false);
  } else if (inputValue[1] === ''){
    selectInput[1].classList.add('inputStyle--error');
    selectInput[1].classList.remove('inputStyle--succes');
    errorCallback("Pole wymagane");
    isValidateCallback(false);
  } else if (!regex.test(inputValue[1])){
    selectInput[1].classList.add('inputStyle--error');
    selectInput[1].classList.remove('inputStyle--succes');
    errorCallback("Hasło musi zawierać od 8 do 15 znaków. Małe, duże litery, cyfry i znaki specjalne.");
    isValidateCallback(false);
  } else if(inputValue[0] !== inputValue[1]) {
    selectInput[0].classList.add('inputStyle--error');
    selectInput[0].classList.remove('inputStyle--succes');
    selectInput[1].classList.add('inputStyle--error');
    selectInput[1].classList.remove('inputStyle--succes');
    errorCallback("Różne pola");
    isValidateCallback(false);
  } else {
    selectInput[0].classList.remove('inputStyle--error');
    selectInput[0].classList.add('inputStyle--succes');
    selectInput[1].classList.remove('inputStyle--error');
    selectInput[1].classList.add('inputStyle--succes');
    errorCallback("");
    isValidateCallback(true);
  }
}