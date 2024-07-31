import './App.css';

//components
import "./components/InputTodo"
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment >
      <InputTodo/>
      <ListTodo/>
    </Fragment>


  );
}

export default App;
