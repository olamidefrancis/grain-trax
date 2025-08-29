import './Contact.css';
import facebook from '../../Images/icons8-facebook-windows-11-color-32.png'
import insta from '../../Images/icons8-instagram-windows-11-color-32.png'
import x from '../../Images/icons8-x-windows-11-color-32.png'
import linkedin from '../../Images/icons8-linkedin-3d-fluency-32.png'
import { Link } from 'react-router'




const Contact=()=> {
    return (
        <div className="contact__container">
            <div className="contact__container1">
                <div className="contact__container1--intro">
                
                </div>
                <div className="contact__container1--intro--content">
                    <h1 className="contact__container1--intro--content--title">
                           <span style={{color:"rgb(238, 75, 43)"}}> Grain</span>&Trax
                    </h1>
                    <div className="contact__container1--intro--content--socials">
                            <Link to='https://www.youtube.com/watch?v=m8g2uQhdBmk&list=RDBD2msFMmgsY&index=27' className='imgglow'>
                                <img src={facebook} alt="facebook"  />
                            </Link>

                             <Link to='https://www.youtube.com/watch?v=m8g2uQhdBmk&list=RDBD2msFMmgsY&index=27' className='imgglow'>
                                <img src={insta} alt="insta" />
                            </Link>

                             <Link to='https://www.youtube.com/watch?v=m8g2uQhdBmk&list=RDBD2msFMmgsY&index=27' className='imgglow'>
                                <img src={x} alt="x"  />
                            </Link>

                             <Link to='https://www.youtube.com/watch?v=m8g2uQhdBmk&list=RDBD2msFMmgsY&index=27' className='imgglow'>
                                <img src={linkedin} alt="linkedin"  />
                            </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
