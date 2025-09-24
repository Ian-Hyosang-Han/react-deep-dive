import React from "react";
import Todo from "./Todo";

// Component that renders Todo items
const TodoList = ({
  todos,
  setTodos,
  isDone,
  onDeleteHandler,
  onCompleteHandler,
}) => {
  return (
    <ul className="flex justify-start flex-wrap">
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
            onDeleteHandler={onDeleteHandler}
            onCompleteHandler={onCompleteHandler}
          />
        ))}
    </ul>
  );
};

const List = ({ todos, setTodos }) => {
  // Delete handler
  const onDeleteHandler = (selectedId) => {
    const remainedTodos = todos.filter((todo) => todo.id !== selectedId);
    setTodos(remainedTodos);
  };

  // Toggle complete handler
  const onCompleteHandler = (selectedId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === selectedId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // Status sections
  const statuses = [
    { label: "KeepGoing", isDone: false },
    { label: "Done", isDone: true },
  ];

  return (
    <div>
      {statuses.map(({ label, isDone }) => (
        <div key={label} className="list_container">
          <h3 className="text-[var(--font-title-size)] mt-[40px] mb-[30px]">
            {label}
          </h3>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            isDone={isDone}
            onDeleteHandler={onDeleteHandler}
            onCompleteHandler={onCompleteHandler}
          />
        </div>
      ))}
    </div>
  );
};

export default List;
