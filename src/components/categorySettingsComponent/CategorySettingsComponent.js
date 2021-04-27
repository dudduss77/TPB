import React, { useContext, useState } from "react";
import "./CategorySettingsComponent.scss";
import moment from "moment";
import axios from "axios";

//Components
import HeaderComponent from "../headerComponent/HeaderComponent";
import InputComponent from "../inputComponent/InputComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import CategoryComponent from "../categoryComponent/CategoryComponent";

//Context
import { CategoryContext } from "../../context/CategoryContext";


const CategorySettingsComponent = () => {
  const { categoryAction, categoryStatus, categoryDispatch } = useContext(
    CategoryContext
  );

  const [newCategory, setNewCategory] = useState("");

  const submit = () => {
    let category = {
      id: moment.now(),
      selectHeader: newCategory,
      selectValue: newCategory
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
    };
    axios
      .post("http://localhost:5000/category", category)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    categoryDispatch({ type: categoryAction.add, payload: category });

    setNewCategory('');
  };

  return (
    <div className="categorySettingsComponent">
      <HeaderComponent headerTitle="Kategorie" />
      <div className="categorySettingsComponent__wrapper">
        <InputComponent
          initialValue={newCategory}
          labelFor="newCategory"
          label="Nowa Kategoria"
          type="text"
          placeholder="Nowa Kategoria"
          getValue={setNewCategory}
        />

        <ButtonComponent size="small" buttonName="Dodaj" buttonClick={submit} />
      </div>
      <div className="categorySettingsComponent__wrapper categorySettingsComponent__wrapper--category">
        {categoryStatus.map((category) => (
          <CategoryComponent
            title={category.selectHeader}
            id={category.id}
            key={category.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySettingsComponent;
