
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addcontact from './Component/Addcontact';
import { EditContact } from './Component/EditContact';
import Home from './Component/Home';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  return (
    <div className="App">
      <HashRouter >
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Addcontact/>}/>
        <Route path='/edit/:id' element={<EditContact/>}/>

      </Routes>
      </HashRouter>
     
    </div>
  );
}

export default App;
