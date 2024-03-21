import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Animation from './pages/Animation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/animation' element={<Animation/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
