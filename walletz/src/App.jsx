import './App.css';
import {Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import RegiserPage from './pages/register'
import DashPage from './pages/dashboard';
import WalletPage from './pages/wallet';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegiserPage/>}/>
      <Route path='/dashboard' element={<DashPage/>}/>
      <Route path='/wallet' element={<WalletPage/>}></Route>
    </Routes>
  );
}

export default App;
