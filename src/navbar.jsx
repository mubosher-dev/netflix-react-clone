import React, { useEffect, useState } from "react";
import "./navbar.css";

function navbar() {
    const [show,handleSow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                handleSow(true);
            } else handleSow(false);
            return () => {window.removeEventListener('scroll');}
        })
    },[])

    return (
        <div className={`nav ${show && 'black'}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />

            <img
                src="https://www.pngmart.com/files/19/Smile-PNG-Free-Download.png"
                alt="Netflix logo"
            />
        </div>
    )
}

export default navbar;