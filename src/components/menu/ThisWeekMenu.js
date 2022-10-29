import React,{useState,useRef} from "react";
import "./ThisWeekMenu.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ThisWeekMenu(){
    let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };


  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

    return(
        <>
        <div className="thisWeekMenuContainer">
            <div>
                <div className="thisWeekMenuFiltersContainer">
                    <button className="weekFilterBtn">Dates</button>
                    <button className="weekFilterBtn">Group Size</button>
                    <button className="weekFilterBtn">More Filters</button>
                </div>

            </div>
            <div className="subMenu">
                    <button
                    className="prev mediaBtn1"
                    onClick={() => slide(-500)}
                    >
                    <FontAwesomeIcon icon={faAngleLeft} />
                    </button>


                    <div className="subMenuContainer" ref={scrl} onScroll={scrollCheck}>
                        <button className="menuBtn">Great For Groups</button> 
                        <button className="menuBtn">Family friendly</button> 
                        <button className="menuBtn">Animals</button> 
                        <button className="menuBtn">Arts & Writing</button> 
                        <button className="menuBtn">Baking</button> 
                        <button className="menuBtn">Cooking</button> 
                        <button className="menuBtn">Dance</button> 
                        <button className="menuBtn">Drinks</button> 
                        <button className="menuBtn">Entertainment</button> 
                        <button className="menuBtn">Great For Groups</button> 
                        <button className="menuBtn">Family friendly</button> 
                        <button className="menuBtn">Animals</button> 
                        <button className="menuBtn">Arts & Writing</button> 
                        <button className="menuBtn">Baking</button> 
                        <button className="menuBtn">Cooking</button> 
                        <button className="menuBtn">Dance</button> 
                        <button className="menuBtn">Drinks</button> 
                        <button className="menuBtn">Entertainment</button> 
                    </div>


                    <button
                    className="next mediaBtn1"
                    onClick={() => slide(+500)}>
                    <FontAwesomeIcon icon={faAngleRight} />
                    </button>
            </div>
        </div>
        
        </>
    )
}
export default ThisWeekMenu;