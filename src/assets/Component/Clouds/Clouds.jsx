import './Clouds.css'



const Clouds=()=> {
    return (
        <div className="cloud__container">
            {/* <div className="bordercon">
                      <h2 className="company__name--title">
                            <span style={{color: "red"}}>Grain</span>&Trax
                      </h2>
            </div> */}
            <div className="cloud__container-aboutus">
                <h2 className="cloud__container-aboutus-aboutus">
                    About Us
                </h2>
                <div className="cloud__container-aboutus-content" style={{lineHeight:"180%"}}>
                    <h3>Reliable procurement of Healthcare equipment | Certified Medical Devices & Supplies, Agricultural equipment | Tractors, and Precious Metals | Gold, Silver & Platinum</h3>

                    <div className="cloud__container-aboutus-content-whoweserve">
                        <h4>
                            Who we serve
                        </h4>

                        <ul className="cloud__container-aboutus-content-whoweserve-arrow" style={{lineHeight:"180%"}}>
                                <li>Financial institutions</li>
                                <li>Jewellers and refiners</li>
                                <li>Industrial manufacturers</li>
                                <li>Private investors and collectors</li>
                        </ul>
                    </div>
                </div>
            </div>
              
        </div>
    )
}

export default Clouds
