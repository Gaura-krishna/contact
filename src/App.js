import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Addcontact from "./Component/Addcontact";
import { EditContact } from "./Component/EditContact";
import Home from "./Component/Home";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./Component/Todo/TodoList";
import AddTodo from "./Component/Todo/AddTodo";
import EditTodo from "./Component/Todo/EditTodo";
import { getLoginToken } from "./Action/authAction";
import Login from "./Component/Todo/Login";
import Register from "./Component/Todo/Register";
import { useEffect } from "react";
// import 'bootstrap/dist/bootstrap.min.js';

function App() {

const token = getLoginToken()

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />

         <Routes>
          <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!token ? <Register /> : <Navigate to="/" />} />


          <Route path="/" element={token ? <TodoList /> : <Navigate to="/login" />} />
          <Route path="/add" element={token ? <AddTodo /> : <Navigate to="/login" />} />
          <Route path="/edit/:id" element={token ? <EditTodo /> : <Navigate to="/login" />} />
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
