import React from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div>
      <Header />
      <TodoForm />
    </div>
  );
};

export default App;
