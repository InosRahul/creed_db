import  "./Thoughts.scss";
import React, { useState, useEffect } from "react";

const Thoughts = () => {
    const [thought, setThought] = useState('');
    const [season, setSeason] = useState('');
    const [episode, setEpisode] = useState('');
    const [color, setColor] = useState('#9b59b6');
    useEffect(() => {
        getNewThought()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
    const getNewThought = () => {
       let uri = `https://gist.githubusercontent.com/InosRahul/c8bc6ac5c304572a770ce791b535502a/raw/a8570dc76697c033c6987296cd7aea55846579c3/creed.json`;
       fetch(uri)
       .then(res => res.json())
       .then(data => {
           let newThought = data.thoughts;
           let randomNumber = Math.floor(Math.random() * newThought.length);
           let randomNumberColor = Math.floor(Math.random() * colors.length)
           let randomThought = newThought[randomNumber];
           setThought(randomThought.line);
           setSeason(randomThought.season);
           setEpisode(randomThought.episode);
           setColor(colors[randomNumberColor]);
           
           
       })
       .catch((error) => {console.error('error', error)});
}
    
    const handleClick = () => {
        getNewThought();
        document.body.style.backgroundColor = color;
    }

    return (
        
        <div id="thought-box" className="thought-box" >
             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
            <div id="thought-text" className="thought-text" >
                <p>{thought}</p>
            
            </div>
            <div id="thought-info" className="thought-info">
                <p>Season - {season} Episode - {episode}</p>
            </div>
            <div className="buttons">
            <a  href={`https://twitter.com/intent/tweet?hashtags=theoffice&text=${thought}`} className="button"
                id="tweet-quote"
                title="Tweet this"
                target="_blank"
                rel="noreferrer">
             <i className="fa fa-twitter"></i>
            </a>
            <a  href={`https://github.com/InosRahul/random-creed-lines`} className="button"
                id="github-button"
                title="Github"
                target="_blank"
                rel="noreferrer">
             <i className="fa fa-github"></i>
            </a>
            <button id="new-thought" className="button" onClick={handleClick}>
                New thought
            </button>

           
      
            </div>
        </div>
       
    )
}


export default Thoughts;