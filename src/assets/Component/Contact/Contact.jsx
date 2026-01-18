import './Contact.css';
import { Link } from 'react-router'
import "tailwindcss";
import bg from '../../Images/pyrite-626549_640.jpg'
import instagram from '../../Images/icons8-instagram-48.png'

import whatsapp from "../../Images/icons8-whatsapp-38.png"
import linkedin from '../../Images/icons8-linkedin-48.png'
import { useState } from "react";
import { useNavigate } from "react-router";
import "toastify-js/src/toastify.css"
import { ToastContainer, toast } from 'react-toastify';


const Contact=({submitContactus })=> {
      const showToastMessage = () => {
    toast.success("Message sent successfully !", {
      position: "top-right"
    });
  };
    
   const navigate = useNavigate();

 const [info, setInfo] = useState({
    name: "",
    email: "",
    area_of_interest: "",
    area_of_interest_message: ""
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    submitContactus(info, navigate,showToastMessage); // send to backend
  };
    return (
    
    <div className='contact__container'>
        <ToastContainer />
        <div className="contact__container--content">
            <div className="h-full w-full bg-cover bg-center  flex items-center justify-center " style={{ backgroundImage: `url(${bg})` }}>

                <div className=" h-full w-full backdrop-blur-md bg-white/30 flex items-center justify-center flex-col gap-y-8 ">
                      <div className="borderconx">
                            <h2>
                                    <span style={{color: "red"}}>Grain</span>&Trax
                            </h2>
                     </div>

                     <h3 style={{fontSize: "1.3rem", fontWeight:"500", padding:"0.5rem", textAlign:"center"}} >Looking for a secure, high trust supplier of gold, silver, or  platinum?<span style={{color: "red"}}> Reach out for a tailored metals procurement quote</span> 
                     </h3>
                </div>

            </div>

        </div>

        <div className="info__container">
            <form className="info__container--info">
                <div className="info__container--info--emailcon">
                    <input type="text " className='space' placeholder='Your Name'  name="name" 
                    value={info.name}
                    onChange={handleChange}/>

                    <input type="text" placeholder='Your Email' name="email"  value={info.email}
                    onChange={handleChange}  />

                    <input type="text" placeholder='Your Area of interest' name="area_of_interest"  value={info.area_of_interest}
                    onChange={handleChange} />
                </div>
                <textarea name="area_of_interest_message"       id="area_of_interest_message"
                   rows="6" cols="50" placeholder=" Your message"
                   value={info.area_of_interest_message}
                    onChange={handleChange}

                ></textarea>
                <div className="send_message">
                    <button onClick={handleSubmit}>Send Message</button>
                </div>
            </form>
            
            <div className="info__container--location">
                     <div className="flexy--title">

                        <h1>Main Office</h1>
                     </div>

                    <div className="info__container--location--content">
                        <div className='flexy'> 
                            <i className="fa-solid fa-location-dot fa-l" style={{color: "rgb(235, 203, 144)"}}></i>
                            <p>Minsk, Belarus</p>
                        </div>

                        <div className='flexy'> 
                            <i className="fa-solid fa-phone fa-l" style={{color: "rgb(235, 203, 144)"}}></i>
                            <p>+375 25 950-23-88</p>
                            
                        </div>

                        <div className='flexy'> 
                            <i className="fa-solid fa-envelope" style={{color: "rgb(235, 203, 144)"}}></i>
                            <p> graintraxinc@gmail.com</p>
                        </div>

                        <div className='socialflexy'> 
                                
                          {/* <Link  to="/Home" className="instagream">
                                <img src={facebook} alt="" />
                          </Link> */}
                          <Link to="https://www.instagram.com/reel/DOZIR5mjEhn/?igsh=cTEzbzYyYXBmNW1s" className="facebook">
                                <img src={instagram} alt="" />
                          </Link>
                          <Link to="https://www.linkedin.com/company/grain-trax-inc/?viewAsMember=true" className="Linkedin">
                                <img src={linkedin} alt="" />
                          </Link>

                          <a href="https://wa.me/+375 25 950-23-88" target='_blank'>
                            <img src={whatsapp}alt="whatsapp_button" />
                          </a>
                            
                            
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Contact
