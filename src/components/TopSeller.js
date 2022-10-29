import React,{useState,useRef} from "react";
import "./TopSeller.css"
import TopSellerCard from "./cards/TopSellerCard";
import TopSellerData from "./data/TopSellerData";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function TopSeller(){

// const numberOfData = TopSellerData.length;
const numberOfData = 112;

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




const cards = TopSellerData.map(info=>{
                    return ( <TopSellerCard 
                        key = {info.id}
                        info = {info}
                    /> )
                })

    return(
        <>
            <div className="topSellerHeadContainer">
                <div className="topSellerHead">
                    Top sellers
                </div>
                <div className="topSellerHeadOptions">
                    <div>
                        <a className="topSellerOptionText">Show({numberOfData})</a>
                    </div>
                    <div>
                        <button
                        className="prev mediaBtn"
                        onClick={() => slide(-1450)}
                        >
                        <FontAwesomeIcon icon={faAngleLeft} />
                        </button>

                        <button
                        className="next mediaBtn"
                        onClick={() => slide(+1450)}>
                        <FontAwesomeIcon icon={faAngleRight} />
                        </button>


                    </div>
                </div>

            </div>
            

            <section className="cards-list" ref={scrl} onScroll={scrollCheck}>
                
                {cards}
            </section>
        </>
    )
}
export default TopSeller