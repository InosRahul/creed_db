import './Footer.css'
import React from 'react';


const Footer = () => {
    return(
        <div className="footer">
        <div className="btns">
                <button className="btn">
                    <a 
                    id="webapp-btn"
                    href="https://random-creed-lines.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    title="webapp"
                    >
                    Website
                    </a>
                </button>
        </div>
        <h3>Made with 💛 by an Office Fan.</h3>
        </div>
    )
}

export default Footer