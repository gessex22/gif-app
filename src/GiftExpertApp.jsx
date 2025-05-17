import { useState } from "react";
import {AddCategory} from './components/addCategory'
export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragonball"]);

  const onAddCategory = () => setCategories(["valorant", ...categories]);

  return (
    <>
      {/* { /title /} */}
      <h1> gif expert app</h1>

      {/* {/imput/} */}
      <AddCategory />
      
      {/* {/listado de git/} */}
      <button onClick={onAddCategory}> Add</button>
      <ol>
        {categories.map((item) => {
          return <li key={item}> {item} </li>;
        })}
      </ol>
      {/* {/gif item /} */}
    </>
  );
};
