import React from "react";
import "./Navbar.css"
import logo from "../../media/logo1.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faGlobe, faUserCircle } from "@fortawesome/free-solid-svg-icons";
function Navbar(){
    return(
        <>
        <div className="navbarContainer">
            <div>
                <img className="navbarLogo" src={logo} alt="logo"/>
            </div>
            <div className="navbarOptions">
                <div className="navbarBtn">Become a Host</div>
                <div className="navbarBtn"><FontAwesomeIcon icon={faGlobe} /></div>
                <div className="navbarBtn navbarBtnGrp">
                    <FontAwesomeIcon icon={faBars} />
                    <FontAwesomeIcon icon={faUserCircle} />
                </div>

            </div>
        </div>


        </>
    )
}

export default Navbar;