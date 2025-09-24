import React, { useState, useRef } from 'react';

const TodoForm = ({ todos, setTodos}) => {

    // Initial state for a new todo item
    const initialState = { id: 0, title: '', content: '', isDone: false };

    // Local state for controlled inputs (title and content)
    const [inputTodo, setInputTodo] = useState(initialState);

    // useRef for incremental unique IDs (changing ref does not trigger re-render)
    const nextId = useRef(todos.length);

    const onChangeHandler = (event) => {
        const { value, name } = event.target;
        setInputTodo({ ...inputTodo, [name]: value });
      };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(!inputTodo.title || !inputTodo.content) {
            alert("Please enter a title and content.");
            return;
        }
        const newTodo = { ...inputTodo, id: nextId.current };
        setTodos([...todos, newTodo]);
        nextId.current += 1; // Increment the ID for the next todo
        setInputTodo(initialState); // Reset input fields
    }

  return (
    <form onSubmit={onSubmitHandler} className='flex justify-start mb-[30px]'>
        <div className='mr-[20px] flex items-center gap-[10px]'>
            <label htmlFor="title" className='font-gangwon text-[25px] text-[#202020]' >Title</label>
            <input id='title' type='text' name='title' onChange={onChangeHandler} value={inputTodo.title} className='min-w-[250px] max-w-[350px] h-10 border border-[#ccc] rounded-[10px] px-3' />

            <label htmlFor="content" className='ml-[10px] text-[20px] text-[#202020]'>Content</label>
            <input id='content' type="text" name='content' onChange={onChangeHandler} value={inputTodo.content} className='min-w-[250px] max-w-[350px] h-10 border border-[#ccc] rounded-[10px] px-3'/>
        </div>
        <button type='submit' className='min-w-[28px] px-[20px] pt-[5px] pb-[5px] rounded-[10px] cursor-pointer transition duration-500 bg-[#ffb02e] hover:bg-[#f19500] text-white'>
            ADD
        </button>
    </form>
  )
};

export default TodoForm;
