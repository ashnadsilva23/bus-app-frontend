import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import LoginUser from './components/LoginUser';
import AddBus from './components/AddBus';
import Search from './components/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginUser/>}/>
        <Route path='/reg' element={<AddUser/>}/>
        <Route path='/add' element={<AddBus/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
