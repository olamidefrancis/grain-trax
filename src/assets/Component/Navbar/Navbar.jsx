import './Navbar.css'
import { Link } from 'react-router'

const Navbar=()=> {
    return (
        <div className="nav__container">

                <div className="company__name">
                    <div className="company__name_con">
                        <h2 className="company__name--title">
                            <span style={{color: "rgb(238, 75, 43)"}}>Grain</span>&Trax
                        </h2>

                    </div>

                </div>

                <div className="hamburger_container">
                        
                    <div className="hamburger-1"></div>
                    <div className="hamburger-2"></div>
                </div>

                <div className="navbar__links--container">

                    <ul className="navbar__links">
                        <Link to="/Home" className="links1"><p>Home</p></Link>
                        <Link to="/About" className="links2"> <p>About</p></Link>
                        <Link to="/Contact" className="links3"><p>Contact</p></Link>
                    </ul>
                </div>

                {/* <div className="forborder_effect">  

                        <div className="callUs">
                            <i className="phoneIcon fa-notdog fa-solid fa-phone" ></i>

                            <div className="phoneNumber">
                                <p>Call us anytime</p>
                                <p className='number'>+44 7424858685</p>
                            </div>
                        </div>
                </div> */}

        </div>
        
    )
}

export default Navbar
