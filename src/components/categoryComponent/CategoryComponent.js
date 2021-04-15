import React from "react";
import "./CategoryComponent.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryComponent = (props) => {
  return (
    <div className="categoryComponent">
      <div className="categoryComponent__title">{props.title}</div>
      <div className="categoryComponent__icon">
        <FontAwesomeIcon icon="trash-alt" />
      </div>
    </div>
  );
};

export default CategoryComponent;
