import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from "./routes/Home";
import About from './routes/About';
import Poll from './components/Poll';
import AllPolls from './routes/AllPolls';
import Navbar from './components/Navbar';
import Login from "./routes/Register";
import SignIn from './routes/Signin';
import LogOut from './routes/LogOut';
import SinglePagePoll from './components/SinglePagePoll';
import Profile from './routes/Profile';
import UserPolls from "../src/routes/UserPolls";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='createPoll' element={<Poll />} />
          <Route path="Signup" element={<Login />} />
          <Route path='Signin' element={<SignIn />} />
          <Route path="Allpolls" element={<AllPolls />} />
          <Route path='poll/:id' element={<SinglePagePoll />} />
          <Route path='Logout' element={<LogOut />} />
          <Route path='Profile' element={<Profile />} >
            <Route path='polls' element={<UserPolls />} />
          </Route>
        </Route>
        <Route path="*" element={<div>This path does not exist</div>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
