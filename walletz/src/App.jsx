import './App.css';
import {Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import RegiserPage from './pages/register'
import DashPage from './pages/dashboard';
import WalletPage from './pages/wallet';
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from './context/userContext';

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
    <Toaster position='bottom-center' toastOptions={{duration: 2000}}/>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegiserPage/>}/>
      <Route path='/dashboard' element={<DashPage/>}/>
      <Route path='/wallet' element={<WalletPage/>}></Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
