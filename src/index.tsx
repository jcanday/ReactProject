import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home,Inventory,SignIn,Dashboard } from './components';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path='/' element={<Home title  ={'Car Inventory'} sub = {'Get it filled'}/>} />
          <Route path='/inventory' element={<Inventory title = {'This is the Inventory'}/>} />
          <Route path='/dashboard' element={<Dashboard title = {'Dashboard of Cars'}/>} />
          <Route path='/signin' element={<SignIn title={'Sign In Here'}/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
