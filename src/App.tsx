import './App.css'
import Layout from './pages/layout/Layout';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/signup/SignUp';
import Authenticated from './pages/authenticated/Authenticated';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/login' index element={<Login />} />
          <Route path='/signup' index element={<SignUp />} />
        </Route>
        <Route path='/authenticated' index element={<Authenticated />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
