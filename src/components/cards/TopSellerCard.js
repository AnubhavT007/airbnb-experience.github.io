import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';

export default function TopSellerCard(props) {
    let badgeText
    if (props.info.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.info.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            
            <i className="fa fa-regular fa-heart card--badge"></i>
            
            <img className="card--image" src={props.info.coverImg}/>
            <div className="card--stats">
                
                <FontAwesomeIcon className ="card--star" icon={faStar} />&nbsp;
                <span>{props.info.stats.rating}</span>&nbsp;
                <span className="gray"> ({props.info.stats.reviewCount}) • </span>&nbsp;
                <span className="gray">{props.info.location}</span>
            </div>
            <p className="card--title">{props.info.title}</p>
            <p className="card--price"><span className="bold">From ₹{props.info.price}</span>/person</p>
        </div>
    )
}