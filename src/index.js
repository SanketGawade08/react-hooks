import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { FaStar } from "react-icons/fa"


function App() {

  // const [status, setStatus] = useState("Not Delivered")
  // const [check, setCheck] = useState("checked")

  // const [name, setName] = useState("Roohi")
  // const [admin, setAdmin] = useState(false)

  // const createArray = (length) => [...Array(length)];

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch(`https://api.github.com/users`)
  //     .then((response) => response.json())
  //     .then(setData)
  //   // console.log(data)
  // }, [])

  // if (data) {
  //   console.log(data)
  //   return (
  //     < ul >
  //       {
  //         data.map((user) => (
  //           <li key={user.id}>
  //             {user.login}
  //           </li>
  //         ))
  //       }
  //     </ul >
  //   )
  // }

  // function star({ selected = false, onselect }) {
  //   return (
  //     <FaStar

  //       color={selected ? "red" : "gray"}
  //       onClick={onselect}>
  //     </FaStar>
  //   )
  // }

  // useEffect(() => {
  //   console.log(`celebrate ${name}`);
  // }, [name])

  // useEffect(() => {
  //   console.log(`the user is: ${admin ? "Admin" : "Not Admin"}`);
  // }, [admin])


  // return (
  //   <p>hello</p>


  //   // <section>
  //   //   <p>Congratulations! {name}</p>
  //   //   <button onClick={() => setName("Zooey")}>Change winner</button>

  //   //   <p>{admin ? "logged in" : "Logged Out"}</p>
  //   //   <button onClick={() => setAdmin(true)}>Log In</button>
  //   // </section >



  //   // {/* // <div>
  //   // //   <h1>
  //   // //     Package has been delivered : {status}.
  //   // //   </h1>
  //   // //   <button onClick={() => setStatus("Delivered")}>click me</button>
  //   // //   <p>Package is {check ? "Not Availabel" : "Availabel"} in warehouse</p>
  //   // //   <input type="checkbox" value="false" onChange={() => setCheck((check => !check))}></input>

  //   // // </div> */}
  // )


  // Use Reducer Function

  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0)


  return (
    <h1 onClick={() => setNumber(1)}>{number}</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
