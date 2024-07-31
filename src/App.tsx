import React from 'react';
import Greeting from './component/Greeting';
import Counter from './component/Counter';
import AddTask from './tasks/AddTask';
import ListTask from './tasks/ListTask';

function App() {
  return (
    <div>
      <Greeting name="Hage" />
      <Counter />

       <h1>ToDo List</h1>
      <AddTask />
      <ListTask />
    </div>
     
  );
}

export default App;
