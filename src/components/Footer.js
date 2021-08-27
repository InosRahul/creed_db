import './Footer.scss'
import React from "react";

const Footer = () => {
   
    return(
        <div className="footer">
        <div className="btns">
                <button className="btn">
                    <a 
                    href="https://addons.mozilla.org/en-US/firefox/addon/creeds-thoughts/"
                    target="_blank"
                    rel="noreferrer"
                    title="firefox addon"
                    >
                    Firefox Addon
                    </a>
                </button>
        </div>
        <h3>Made with 💛 by an Office Fan.</h3>
        </div>

    )
}

export default Footer;