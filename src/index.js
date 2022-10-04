import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./normalize.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const engine = new Styletron();

const root = ReactDOM.createRoot(document.getElementById('root'));

let answers = [];

root.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <App answers = {answers}/>
    </StyletronProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
