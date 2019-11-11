import React, {useEffect, useState} from 'react';
import Quote from './Quote/Quote';
import styles from './App.module.css';

function App() {
  const apiUrl = `https://api.quotable.io/random`;
  const colors = ['Orange', 'Black', 'Purple', 'Green', 'Blue', 'Yellow'];
  const [quote, setQuote] = useState('');
  const [color, setColor] = useState('');

  const changeColor = () => {
    return colors[Math.floor(Math.random()*6)];
  }
  const getQuote = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQuote(data)
      setColor(changeColor());
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setColor(changeColor());
    getQuote();
  }, [])
  
  return (
    <div className={`${styles[color]} ${styles.QuoteBox}`}>
      <h1>RANDOM QUOTE MACHINE</h1>
      <Quote content={quote.content} author={quote.author} click={getQuote}></Quote>
    </div>
    
  );
}

export default App;
