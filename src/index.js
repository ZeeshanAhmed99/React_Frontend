import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import First_Tutorial from './First_Tutorial';
import reportWebVitals from './reportWebVitals';
import Profile from './Profile';
import Home from './Home';
import Profilestate from './Profilestate';
import Toggle from './Toggle';
import Event from './Event';
import LifeCycle from './LifeCycle';
import UseState from './UseState';
import Hooks from './Hooks';
import SubmitForm from './SubmitForm';
import Listing from './Listing';
import API from './API';
import Ref from './Ref';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data_res from './Data_res';
import Api_calling from './Api_calling';
ReactDOM.render(
  <React.StrictMode>
    {/* <Profilestate />
    <Event />
    <Toggle />
     <LifeCycle />  
      <Hooks />
      <SubmitForm />
      <Listing />
      <API />
      <Ref /> }
    <Data_res/>*/}
    <Api_calling/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
