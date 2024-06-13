import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import LoginUser from './components/LoginUser';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginUser/>}/>

        <Route path='/reg' element={<AddUser/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
