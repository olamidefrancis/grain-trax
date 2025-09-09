import './Industries.css'
// import target from "../../Images/icons8-target-color-hand-drawn-70.png"
import docbag from "../../Images/icons8-doctors-bag-50.png"
import tractor from "../../Images/icons8-tractor-50.png"
import preciousmetal from "../../Images/icons8-ruby-50.png"

const Industries=()=> {
    return (
        <div className="industrymain__con">
            <h2>
                Industries
            </h2>

            <div className="industry__con">
                
                <div className="industry__con--content">
                    <div className="industry__con--content--num">
                        <h1>Healthcare</h1>
                        <p>Reliable procurement of certified healthcare equipment and medical supplies.</p>
                        <p>Trusted healthcare equipment procurement services, partner with us for FDA/CE approveddevices,PPE and hospital essentials.</p>

                        <h1>Our medical equipment categories include;</h1>
                        
                        <p>Diagnostic imaging (X-ray, MRI, ultrasound)</p>
                        <p>Surgical instruments and tools </p>
                        <p>Icu and emergency care equipment </p>
                        <p>Hospital beds and furniture </p>
                        <p>Personal Protective equipment </p>
                        <p>Laboratory equipment and consumables</p>

                    </div>
                    
                    <div className="industry__con--content--num--iages">
                        <img src={docbag } alt="mapme" />
                    </div>
                </div>

                <div className="industry__con--content">
                    <div className="industry__con--content--num">
                        <h1>Agriculture</h1>
                        <p>Affordable procurement of tractors, construction and agricultural machinery from leading global brands.</p>

                        <h1>Our Agricultural Equipment Oering:</h1>

                        <p>Compact and heavy-duty tractors</p>
                        <p>Plows, tillers, and harvesters</p>
                        <p>Sprayers and seeders</p>
                        <p>Irrigation and water management systems</p>
                        <p>Spare parts and accessories</p>

            
                    </div>
                    
                    <div className="industry__con--content--num--iages">
                        <img src={tractor } alt="mapme" />
                    </div>
                </div>

                <div className="industry__con--content">
                    <div className="industry__con--content--num">
                        <h1>Precious Metals</h1>
                        <p>Buy gold, silver, and platinum through secure, certified    procurement services. We work with LBMA-accredited refineries for investment-grade precious metals.
                            
                        </p>
                        <p>We specialize in the secure procurement and supply of precious metals for investment firms, jewellers, refiners, and industrial clients.
                        </p>

                        <p>
                            All metals are sourced from LBMA-accredited refineries with full documentation and global delivery options.
                        </p>

                        <h1>Precious Metals Available:</h1>

                        <p> Gold (bars, bullion, coins)</p>
                        <p>Silver (industrial and investment-grade)</p>
                        <p> Platinum and Palladium</p>
                        <p> Customized bulk orders</p>


                    </div>
                    
                    <div className="industry__con--content--num--iages">
                        <img src={preciousmetal } alt="mapme" />
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Industries
