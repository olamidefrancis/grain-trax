import './Contact.css';
import { Link } from 'react-router'
import "tailwindcss";
import bg from '../../Images/pyrite-626549_640.jpg'
import instagram from '../../Images/icons8-instagram-48.png'
import facebook from '../../Images/icons8-facebook-48.png'
import linkedin from '../../Images/icons8-linkedin-48.png'


const Contact=()=> {
    return (
    
    <div className='contact__container'>
        <div className="contact__container--content">
            <div className="h-full w-full bg-cover bg-center  flex items-center justify-center " style={{ backgroundImage: `url(${bg})` }}>

                <div className=" h-full w-full backdrop-blur-md bg-white/30 flex items-center justify-center flex-col gap-y-8 ">
                      <div className="borderconx">
                            <h2>
                                    <span style={{color: "red"}}>Grain</span>&Trax
                            </h2>
                     </div>

                     <h3 style={{fontSize: "1.3rem", fontWeight:"400", padding:"0.5rem", textAlign:"center"}} >Looking for a secure, high trust supplier of gold, silver, or  platinum?<span style={{color: "red"}}> Reach out for a tailored metals procurement quote</span> 
                     </h3>
                </div>

            </div>

        </div>

        <div className="info__container">
            <div className="info__container--info">
                <div className="info__container--info--emailcon">
                    <input type="text " className='space' placeholder='Your Name' />
                    <input type="text" placeholder='Your Email' />
                    <input type="text" placeholder='Your Area of interest' />
                </div>
                <textarea name="areas_of_interest_message" id="areas_of_interest_id"
                   rows="6" cols="50" placeholder=" Your message"
                ></textarea>
                <div className="send_message">
                    <button>Send Message</button>
                </div>
            </div>
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
                                
                          <Link  to="/Home" className="instagream">
                                <img src={facebook} alt="" />
                          </Link>
                          <Link to="/Home" className="facebook">
                                <img src={instagram} alt="" />
                          </Link>
                          <Link to="/Home" className="Linkedin">
                                <img src={linkedin} alt="" />
                          </Link>
                            
                            
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Contact
