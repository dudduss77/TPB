import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";

export const CategoryContext = React.createContext();

const initialState = [];

const categoryActionType = {
  update: "UPDATE",
  add: "ADD",
  delete: "DELETE",
};

function categoryReducer(prevState, action) {
  switch (action.type) {
    case categoryActionType.update:
      return action.payload;
    case categoryActionType.add:
      return [...prevState, action.payload];
    case categoryActionType.delete:
      return prevState.filter((category) => category.id !== action.payload);
    default:
      return prevState;
  }
}

const CategoryProvider = ({ children }) => {
  const [categoryStatus, categoryDispatch] = useReducer(
    categoryReducer,
    initialState
  );

  useEffect(() => {
    axios
      .get('http://localhost:5000/category')
      .then((response) =>
        categoryDispatch({
          type: categoryActionType.update,
          payload: response.data,
        })
      )
      .catch((error) => console.log(error));
  }, []);

  const value = {
    categoryAction: categoryActionType,
    categoryStatus: categoryStatus,
    categoryDispatch: categoryDispatch,
  };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
