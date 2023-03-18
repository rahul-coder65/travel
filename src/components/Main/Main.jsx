import React , {useEffect} from "react";
import './main.css';
import Data from '../../Data';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Card(data){
   return (
      <div key={data.id}
      data-aos="fade-up"
     className="singleDestination">
     
       <div className="imageDiv">
          <img src={data.imgSrc} alt={data.destTitle} />
       </div>

       <div className="cardInfo">
          <h4 className="destTitle">
             {data.destTitle}
          </h4>
          <span className="continent flex">
          <HiOutlineLocationMarker className="icon" />
           <span className="name">{data.location}</span>
         
          </span>
          <div className="fees flex">
             <div className="grade">
                <span>{data.grade} <small>
                   +1
                </small></span>
             </div>
             <div className="price">
                <h5>{data.fees}</h5>
             </div>
          </div>
          <div className="desc">
             <p>{data.description}</p>
          </div>
          <button className="btn flex">
             DETAILS <HiOutlineClipboardCheck className="icon" />
          </button>
       </div>
    </div>
   );
}

function Main (){

   useEffect(() => {
      Aos.init({duration : 2000})
    },[])
   return <section className="main container section">
      <div className="secTitle">
         <h3  data-aos="fade-right" className="title">
            Most visited destination
         </h3>
      </div>

      <div className="secContent grid">
         {
            Data.map(Card)
         }
      </div>
   </section>
}

export default Main;