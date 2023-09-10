import { useState, useEffect, MouseEventHandler } from 'react'
import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Table from './tableGenerator'
import * as api from './Api'

// function HandleClick():JSX.Element {
//   useEffect(() => {
//     async function fetchLoadCat() {
//       const fetch = await api.loadCategorias();
//       console.log(fetch);
//     }

//     fetchLoadCat();
//   }, [])
//   // console.log("e");
//   return (
//     <div>hello</div>
//   )
// }

function App() {

  // const [count, setCount] = useState(0)

  const handleButtonClick = async () => {
    const fetchData = await api.loadCategorias();
    const getContent = fetchData.content;

    console.log(getContent);
  };

  return (
    <>
      <div id='container'>
        <Table/>
      </div>
      <div id='footer'>
        <button onClick={handleButtonClick}>Load More...</button>
      </div>
    </>
  )
}

export default App
