import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


function App() {

  const [status, setStatus] = useState("Not Delivered")
  const [check, setCheck] = useState("checked")

  return (
    <div>
      <h1>
        Package has been delivered : {status}.
      </h1>
      <button onClick={() => setStatus("Delivered")}>click me</button>
      <p>Package is {check ? "Not Availabel" : "Availabel"} in warehouse</p>
      <input type="checkbox" value="false" onChange={() => setCheck((check => !check))}></input>
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Sanket" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
