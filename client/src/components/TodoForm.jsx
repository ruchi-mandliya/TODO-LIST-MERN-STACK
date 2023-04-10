import React from "react";

const TodoForm = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter new todo..."
        className="input"
        onChange={onInputChange}
      />
      {/* <button type="submit">Add</button> */}
    </form>
  );
};

export default TodoForm;
