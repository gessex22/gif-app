import { useState } from "react";
import { AddCategory } from "./components/addCategory";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragonball"]);

  const onAddCategory = (newCat) => setCategories([newCat, ...categories]);

  return (
    <>
      <h1> gif expert app</h1>

      <AddCategory 
        // setCategories={setCategories}
        onNewCategory= {event => onAddCategory( event)}
      />

      <ol>
        {categories.map((item) => {
          return <li key={item}> {item} </li>;
        })}
      </ol>
    </>
  );
};
