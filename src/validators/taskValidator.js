import { useState, useEffect } from "react";

import moment from "moment";

const regexOne = /^(?:[A-Za-zĄ-żą-żÓó]+)(?:[A-Za-z0-9Ą-Żą-żÓó ,.]*)$/;
const regexTwo = /^(?:[A-Za-zĄ-żą-żÓó]+)(?:[A-Za-z0-9Ą-Żą-żÓó ,.\n]*)$/;

export const useTaskValidator = () => {
  const [validateObject, setValidateObject] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (validateObject !== null) {
      console.log("obiekt który dochodzi", validateObject);
      if (validateObject.title.length === 0) setErrorMsg("Tytuł wymagany");
      else if (
        !regexOne.test(validateObject.title) &&
        validateObject.title.length > 0
      )
        setErrorMsg("Niedozwolony znak");
      else if (validateObject.title.length > 25) setErrorMsg("Za duży tytuł");
      else if (
        !regexTwo.test(validateObject.desc) &&
        validateObject.desc !== ""
      )
        setErrorMsg("Niedozwolony znak");
      else if (validateObject.date.length === 0) setErrorMsg("Data wymagana");
      else if (
        moment(validateObject.date).diff(moment().format("YYYY-MM-DD")) < 0
      )
        setErrorMsg("Zadanie z przeszłości");
      else setErrorMsg("");
    }
  }, [validateObject]);


  const setState = (newState) => {
    setValidateObject((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return [errorMsg, setState];
};
