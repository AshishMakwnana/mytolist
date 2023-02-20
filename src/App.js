
import './App.css';
import React from 'react';

import TodoList from "./TodoList";

const App = () => {
  return (
    <>
      <div className='main'>
        <div className='container'>
          <h1 className='heading__style'>TODO LIST </h1>
          <TodoList/>
        </div>
      </div>
    </>
  );
};

export default App;