import React, {useContext} from "react";
import "./CategoryComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

//Context
import { CategoryContext } from "../../context/CategoryContext";

const CategoryComponent = ({id, title}) => {
  const { categoryAction, categoryStatus, categoryDispatch } = useContext(
    CategoryContext
  );

  const remove = (val) => {
    axios.delete(`http://localhost:5000/category/${val}`)
    .catch(repsonse => console.log(repsonse))
    .catch(error => console.log(error))

    categoryDispatch({type: categoryAction.delete, payload: val})
  }

  return (
    <div className="categoryComponent">
      <div className="categoryComponent__title">{title}</div>
      <div onClick={() => remove(id)} className="categoryComponent__icon">
        <FontAwesomeIcon icon="trash-alt" />
      </div>
    </div>
  );
};

export default CategoryComponent;
