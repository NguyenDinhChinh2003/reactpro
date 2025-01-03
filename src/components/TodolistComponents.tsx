import React, { useState, useEffect } from 'react';

interface Todo {
  title: string;
  done: boolean;
}

interface ClockProps {
  color: string;
  time: string;
}

function Clock({ color, time }: ClockProps) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}

export default function TodolistComponents() {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Learn React', done: false },
    { title: 'Learn TypeScript', done: false },
    { title: 'Learn Redux', done: false },
  ]);
  
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  const handleCheckboxChange = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <Clock color="blue" time={time} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleCheckboxChange(index)}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
