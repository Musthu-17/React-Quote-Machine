import './App.css';
import load from "./loading.png";
import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {

  const [imageLoaded,setImageLoaded] = useState(false)
  const [imageUrl,setImageUrl] = useState(null)
  const [quote,setQuote] = useState({msg:"Life is too short to worry about anything",author:"Anonymous"})
  
  useEffect(()=>{

    let isMounted = true

    const fetchRandomQuote = async()=>{
      try{
        let response = await fetch("https://api.quotable.io/random")
        let data =  await response.json()
        if(isMounted){
        setQuote({msg: data.content,author: data.author})
        }
      }
      catch(error){
        console.error("Unable to fetch quote",error)
      }
    } 

    const fetchRandomImage = async()=>{     
      setImageLoaded(false)
      try{
        let response = await fetch("https://picsum.photos/1920/1080")

        if(isMounted) {
          setImageUrl(response.url)
        }

      }
      catch(error){
        console.error("error fetching image",error)
      }
    } 

    fetchRandomImage()
    fetchRandomQuote()

    return()=>{
      isMounted = false
    }

  },[])

  const handleImageLoad=()=>{
    setImageLoaded(true)
  }
  
  return (
    <div className="App">
      <header className="App-header"> 

        {imageUrl && (
        <img src={imageUrl} alt='bg' className="background" onLoad={handleImageLoad} style={{display: imageLoaded? 'block':'none',transition: "opacity 0.5s ease-in-out"}}/>
        )}

        {imageLoaded ? (
          <Box quote={quote.msg} author={quote.author}/>
        ):(        
          <Loading/>
        )}
      </header>
    </div>
  );
}

function Box(props){

  const handleClick = ()=>{
    window.location.reload()
  }

  return (
    <>
      <div id="quote-box" className="quote-box">
        <p id="text" className="">{'"'+props.quote+'"'}</p>
        <p id="author">{"- "+props.author}</p>
        <div className="actions">
          <a id="tweet-quote" rel="noreferrer" href="https://twitter.com/intent/tweet" target="_blank"><FontAwesomeIcon icon={faTwitter} className="tweet"/></a>
          <button id="new-quote" onClick={handleClick}>Inspire Me</button>        
        </div>
      </div>
    </>
  )
}

function Loading(){
  return (
    <>
      <div>
        <img src={load} alt="loading" className="loadIcon"/>
      </div>
    </>
  )
}

export default App;
