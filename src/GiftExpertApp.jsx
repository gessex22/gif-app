import { useState } from "react";
import { AddCategory } from "./components/addCategory";
import { GifGrid } from "./components/gifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragonball"]);

  const onAddCategory = (newCat) => {
    if (categories.includes(newCat)) return;
    setCategories([newCat, ...categories]);
  };

  return (
    <>
        <h1> gif expert app</h1>
        <AddCategory onNewCategory={(event) => onAddCategory(event)} />
        <ol>
          {categories.map((item) => (
            <GifGrid key={item} category={item} />
          ))}
        </ol>
    </>
  );
};
