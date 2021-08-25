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
        </div>
    )
}

export default Footer