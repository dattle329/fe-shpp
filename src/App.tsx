import "./App.css";
import Layout from "./pages/layout/Layout";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import Authenticated from "./pages/authenticated/Authenticated";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" index element={<Login />} />
            <Route path="/signup" index element={<SignUp />} />
          </Route>
          <Route path="/authenticated" index element={<Authenticated />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};
export default App;
