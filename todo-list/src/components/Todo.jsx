import React from "react";

const Todo = ({ todo, onDeleteHandler, onCompleteHandler }) => {

  return (
    <li
      className="
        relative
        border border-[var(--border-color)]
        bg-[#f7f7f7]
        p-5
        rounded-[10px]
        w-[31.5%]
        ml-[1%]
        mb-[2%]
        min-h-[200px]
      "
    >
      <div className="min-h-[130px] relative">
        <span
          aria-hidden="true"
          className="
            block
            absolute
            w-[53px] h-[53px]
            -top-4
            left-1/2 -translate-x-1/2
          "
        />

        <h4 className="font-gangwon text-2xl pb-[2px] mb-3 border-b border-[var(--border-color)]">
          {todo.title}
        </h4>
        <p className="font-gangwon text-xl">{todo.content}</p>
      </div>

      <div className="mt-4">
        <button
          onClick={() => onDeleteHandler(todo.id)}
          className="
            font-gangwon
            text-[20px]
            min-w-[28px]
            px-[10px] pt-[5px] pb-[5px]
            rounded-[10px]
            cursor-pointer
            transition duration-500
            bg-[var(--button-black)] text-white
            hover:bg-[var(--button-black-hover)]
            mr-[10px]
          "
        >
          Delete
        </button>

        <button
          onClick={() => onCompleteHandler(todo.id)}
          className="
            font-gangwon
            text-[20px]
            min-w-[28px]
            px-[10px] pt-[5px] pb-[5px]
            rounded-[10px]
            cursor-pointer
            transition duration-500
            bg-[var(--main-color)]
            hover:bg-[var(--main-color-hover)]
          "
        >
          {todo.isDone ? "Cancel" : "Done"}
        </button>
      </div>
    </li>
  );
};

export default Todo;
