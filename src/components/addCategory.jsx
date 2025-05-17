import { useState } from "react";

export const AddCategory = () => {
  const [imputValue, setImputValue] = useState("one punch");

  const onImputChange = (event) => {
    setImputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(imputValue)
  
  }

  return (
  <form onSubmit={ onSubmit}>
     <input
      type="text"
      placeholder="Buscar"
      value={imputValue}
      onChange={onImputChange} // (event) => onImputChange(event)
    />
  </form>
   
  );
};
