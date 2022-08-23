import { useState } from "react";

export const AddCategory = ({
    // setCategories,
    onAddCategory
}) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [...categories, inputValue]);
    onAddCategory(inputValue);
    setinputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange} // By default event is send
      />
    </form>
  );
};
