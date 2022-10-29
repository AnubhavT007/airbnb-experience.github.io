import React,{useState,useRef} from "react";
import ThisWeekCard from "./cards/ThisWeekCard";
import "./ThisWeek.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ThisWeekMenu from "./menu/ThisWeekMenu";


function ThisWeek(){

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
        <div>
            <div className="thisWeekHeadContainer">

                <div className="thisWeekHead">
                    New This Week
                </div>
                <div className="thisWeekBtnContainer">
                {scrollX !== 0 && (<button
                  className="prev mediaBtn"
                  onClick={() => slide(-500)}
                  >
                  <FontAwesomeIcon icon={faAngleLeft} />
                  </button>)}

                  {!scrolEnd && (<button
                  className="next mediaBtn"
                  onClick={() => slide(+500)}>
                  <FontAwesomeIcon icon={faAngleRight} />
                  </button>)}
              </div>


            </div>
            
            <section className="cardContainer" ref={scrl} onScroll={scrollCheck}>
            
                <ThisWeekCard 
                    title= "Most Popular Around The World"
                    background="https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=720"
                />
                <ThisWeekCard 
                    title= "Great for team building"
                    background="https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=720"
                />
                <ThisWeekCard 
                    title= "Fun For The Family"
                    background="https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=720"
                />
                
            </section>

        </div> 



        <div >
          <ThisWeekMenu/>
        </div>
 
        </>
    )
}

export default ThisWeek;