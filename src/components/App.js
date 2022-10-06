import React, { useEffect, useState } from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {
  const random = Math.floor((Math.random() * 100) % colors.length)
  const [quote,setQuote] = useState("");
  const [author,setAuthor] = useState("");
  const [background,setBackground] = useState(colors[random]);
  async function getAuthorQuote(){
    const infoJson = await fetch("https://api.quotable.io/random");
    const data = await infoJson.json();
    setAuthor(data.author);
    setQuote(data.content)
    setBackground(colors[random])
    console.log(data)
    console.log(background)
  }
  useEffect(()=>{
    getAuthorQuote();
  },[])

    return (
      <div id="main" style={{backgroundColor:`${background}`}}>
        <div id="wrapper" >
          <div className="quote-text">{quote}</div>
          <div className="quote-author">{author}</div>
          <button id="new-quote" onClick={getAuthorQuote}>Fetch</button>
        </div>
      </div>
    );
};

export default App;
