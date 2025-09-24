import React, { useState }from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import List from '../components/List';
import { nanoid } from 'nanoid';

const TodoList = () => {

  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      title: 'Code Kata',
      content: 'Practice algorithm problems',
      isDone: true,
    },
    {
      id: nanoid(),
      title: 'Write TIL',
      content: 'Summarize study notes',
      isDone: true,
    },
    {
      id: nanoid(),
      title: 'Wrap Up Today',
      content: 'Review today progress, reflect on what I learned',
      isDone: true,
    },
    {
      id: nanoid(),
      title: 'Interview Preparation',
      content: 'Review interview questions and practice answers',
      isDone: false,
    },
    {
      id: nanoid(),
      title: 'Daily Learning',
      content: 'Studying new technologies, coding best practices',
      isDone: false,
    },
  ]);

  return (
    <Layout>
        <Header />
        <TodoForm todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
    </Layout>
  )
};

export default TodoList;
