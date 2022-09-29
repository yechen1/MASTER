import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import "./theme.less";
import App from './App';
import Main from './webGL';
import Page from './three/Page';

const root = ReactDOM.createRoot(document.getElementById('root'));
// </React.StrictMode>
root.render(
   <BrowserRouter>
      <div style={{width: "100vw", height: "100vh"}}>
         {/* <App /> */}
         <Page />
         <Main />
      </div>
      
   </BrowserRouter>
);

