import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [imputValue, setImputValue] = useState("");

  const onImputChange = (event) => {
    setImputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (imputValue.trim().length <= 1) return;
    onNewCategory(imputValue.trim());
    setImputValue("");
  };

  return (
    <form aria-label="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar"
        value={imputValue}
        onChange={onImputChange} // (event) => onImputChange(event)
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
