import React, { useEffect, useState } from "react";
import './App.css';

/* const apiFetch =()=>{
  const gitHubUrl='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  const [cita,setQuote] = useState([]);

  const getQuote = async ()=>{
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setQuote(jsonData.quotes);
  }

  useEffect( () => {
    getQuote();
  }, []);

  return cita;  
} */
const colors = [
  '#f94144','#f3722c','#f8961e','#f9c74f','#43aa8b','#4d908e','#577590','#277da1'
];

function App() {
  // const cita = apiFetch();
  const gitHubUrl='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  const [cita,setQuote] = useState([]);

  const getQuote = async ()=>{
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setQuote(jsonData.quotes);
  }

  useEffect( () => {
    getQuote();
  }, []);

  const[index,setIndex] = useState(Math.floor(Math.random() * 102));
  
  const handleQuote = ()=>{
    const index = Math.floor(Math.random() * 102);
    let color = Math.floor(Math.random() * colors.length);
    setIndex(index);
    document.getElementById('wrapper').style.background = colors[color];
    //document.getElementsByClassName("boton").style.background = colors[color];
  }

  return (
    <div id="wrapper">
      <div className="card" id="quote-box">
        <div className="card-body" >
          <h5 className="card-title" id="text">{cita[index] && cita[index].quote}</h5>
          <p className="card-text" id="author"><cite>{cita[index] && cita[index].author}</cite></p>
          <div id="botones">
            <a target="_blank" id="tweet-quote" className="btn btn-dark boton" title="Tweet this quote!" href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${cita[index] && cita[index].quote}" %0D%0A- ${cita[index] && cita[index].author}%0D%0A`}>
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-dark boton" onClick={handleQuote} id="new-quote">New Quote</a>
          </div>

        </div>
      </div>
    </div>

  );
}

export default App;
