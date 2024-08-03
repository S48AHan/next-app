
import React from 'react'

interface ToDo {
   id: number;
   title: string;
   completed: boolean; 
}

const TestComp = async () => {
const res =await fetch('https://jsonplaceholder.typicode.com/todos', {cache:'no-store'});
const todos:ToDo[] = await res.json();

  return (
    <>
    <p>{new Date().toLocaleTimeString()}</p>
    <ul>
        {todos.map(
            todo=>
                <li key={todo.id}>{todo.title}</li>
        )}
    </ul>
    </>
  )
}

export default TestComp