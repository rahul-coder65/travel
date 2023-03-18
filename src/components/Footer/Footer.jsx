import React, {useEffect} from "react";
import './footer.css';
import video2 from '../../Assets/goa.mp4';
import {FiSend} from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter} from 'react-icons/ai';

import {AiFillInstagram} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {FiChevronRight} from 'react-icons/fi';
 

import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer (){
   
   useEffect(() => {
      Aos.init({duration : 2000})
    },[])

   return(
      <section className="footer">
         <div className="videoDiv">
            <video src={video2} loop autoPlay muted type="video/mp4"></video>
         </div>
         <div className="secContents container flex">
            <div className="contactDiv flex">
               <div data-aos="fade-up" className="text">
                  <small>KEEP IN TOUCH</small>
                  <h2>Travel with us</h2>
               </div>
               <div className="inputDiv flex">
                  <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                  <button data-aos="fade-up" className="btn flex" type="submit">
                    SEND <FiSend className="icon" />
                  </button>
               </div>
            </div>
            <div className="footerCard flex">
               <div className="footerIntro flex">
                  <div className="logoDiv">
                     <a href="#" className="logo flex">
                        <MdOutlineTravelExplore className="icon" /> Travel.
                     </a>
                  </div>
                  <div data-aos="fade-up" className="footerParagraph">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, unde blanditiis eum perspiciatis non alias nesciunt nostrum ipsam aliquid omnis! A accusantium facilis mollitia eligendi! Quia impedit ab est dicta.
                  </div>
                  <div data-aos="fade-up" className="footerSocials flex">
                     <AiOutlineTwitter className="icon" />
                     <AiFillYoutube className="icon" />
                     <AiFillInstagram className="icon" />
                     <FaTripadvisor className="icon" />

                  </div>
               </div>
             
               <div className="footerLinks grid">
                     {/* Group One */}  
                   <div data-aos="fade-up"
                   data-aos-duration="3000" 
                    className="linkGroup">
                     <span className="groupTitle">
                        OUR AGENCY
                     </span>
                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                     Services
                     </li>

                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                    Insurance
                     </li>

                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                      Agency
                     </li>

                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                     Tourism
                     </li>

                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                     Payment
                     </li>
                   </div>

                    {/* Group Two */}  
                    <div data-aos="fade-up" 
                     data-aos-duration="4000"
                    className="linkGroup">
                     <span className="groupTitle">
                       PARTNERS
                     </span>
                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                     Bookings
                     </li>

                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                    Rentcars
                     </li>

                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                     HostelWorld
                     </li>

                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                     Trivago
                     </li>

                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                     Tripadvisor
                     </li>
                   </div>

                    {/* Group Three */}  
                    <div data-aos="fade-up" 
                     data-aos-duration="5000"
                    className="linkGroup">
                     <span className="groupTitle">
                        LAST MINUTE
                     </span>
                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                     Shimla
                     </li>

                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                    Tajmahal
                     </li>

                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                     Kashmir
                     </li>

                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                     Uttarakhand
                     </li>

                     <li className="footerList flex">
                     < FiChevronRight className="icon"/>
                     Himalaya
                     </li>
                   </div>
               </div>

               <div className="footerDiv flex">
                  <small>BEST TRAVEL WEBSITE THEME</small>
                <small>COPYRIGHT RESERVED -RAHUL SINGH 2023</small>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Footer;