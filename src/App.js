
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addcontact from './Component/Addcontact';
import { EditContact } from './Component/EditContact';
import Home from './Component/Home';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./Component/Todo/TodoList"
import AddTodo from "./Component/Todo/AddTodo"
import EditTodo from "./Component/Todo/EditTodo"
// import 'bootstrap/dist/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <ToastContainer/>
    

       <Routes>
        <Route path='/' element={<TodoList/>}/>
        <Route path='/add' element={<AddTodo/>}/>
        <Route path='/edit/:id' element={<EditTodo/>}/>

      </Routes>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Addcontact/>}/>
        <Route path='/edit/:id' element={<EditContact/>}/>

      </Routes> */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
