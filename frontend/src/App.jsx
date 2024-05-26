import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import RegiserPage from './pages/register'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegiserPage/>}/>
    </Routes>
  );
}

export default App;