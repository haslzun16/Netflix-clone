import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if( window.scrollY > 100){
                handleShow(true);

            }else{
                handleShow(false);
                
            }
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix Logo"
      />
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="Netflix avatar" class="nav__avatar" />
    </div>
  );
}

export default Nav;
