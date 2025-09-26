import './Clouds.css'



// const Clouds=()=> {
//     return (
//         <div className="cloud__container">
//             {/* <div className="bordercon">
//                       <h2 className="company__name--title">
//                             <span style={{color: "red"}}>Grain</span>&Trax
//                       </h2>
//             </div> */}
//             <div className="cloud__container-aboutus">
//                 <h2 className="cloud__container-aboutus-aboutus">
//                     About Us
//                 </h2>
//                 <div className="cloud__container-aboutus-content" style={{lineHeight:"180%"}}>
//                     <h3>Reliable procurement of Healthcare equipment | Certified Medical Devices & Supplies, Agricultural equipment | Tractors, and Precious Metals | Gold, Silver & Platinum</h3>

//                     <div className="cloud__container-aboutus-content-whoweserve">
//                         <h4>
//                             Who we serve
//                         </h4>

//                         <ul className="cloud__container-aboutus-content-whoweserve-arrow" style={{lineHeight:"180%"}}>
//                                 <li>Financial institutions</li>
//                                 <li>Jewellers and refiners</li>
//                                 <li>Industrial manufacturers</li>
//                                 <li>Private investors and collectors</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
              
//         </div>
//     )
// }

// export default Clouds



const Clouds = () => {

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            title: "Healthcare",
            desc: "Reliable procurement of certified healthcare equipment and medical supplies.\n Trusted healthcare equipment procurement services, partner with us for FDA/CE approveddevices,PPE and hospital essentials.",

            equipment: "Healthcare",
            equipment_list:". Diagnostic imaging (X-ray, MRI, ultrasound)\n. Surgical instruments and tools\n . Icu and emergency care equipment\n . Hospital beds and furniture\n. Personal Protective equipment\n. Laboratory equipment and consumables."

        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "Agriculture",
            desc: "Affordable procurement of tractors, construction and agricultural machinery from leading global brands.",
            equipment: "Our Agricultural Equipment Ofering",
            equipment_list:". Compact and heavy-duty tractors\n. Plows, tillers, and harvesters\n . Sprayers and seeders\n . Irrigation and water management systems\n. Spare parts and accessories."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>,
            title: "Precious Metals",
            desc: "Buy gold, silver, and platinum through secure, certified    procurement services. We work with LBMA-accredited refineries for investment-grade precious metals.\n We specialize in the secure procurement and supply of precious metals for investment firms, jewellers, refiners, and industrial clients.\n All metals are sourced from LBMA-accredited refineries with full documentation and global delivery options.",
            equipment: "Precious Metals Available:",

            equipment_list:". Gold (bars, bullion, coins)\n. Silver (industrial and investment-grade)\n . Platinum and Palladium\n . Customized bulk orders. "
        },
    ]

    return (
        <section className="clound_con relative py-28 bg-gray-900">
            <div className=" clound_con_1 relative z-10 max-w-screen-2xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8 flex flex-col  ">
                <div className=" industry_p_con flex flex-col  max-w-xl gap-10 py-2">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                          Industries
                    </h3>
                    <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
                    </p>
                </div>
                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div className='content_ph  '>
                                        <h4 className=" text-gray-100 font-semibold text-2xl">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3 text-2xl whitespace-pre-line">
                                            {item.desc}
                                        </p>

                                        <h4 className=" text-gray-100 font-semibold text-2xl">
                                            {item.equipment}
                                        </h4>

                                        <p className="mt-3 text-2xl whitespace-pre-line">
                                            {item.equipment_list}
                                        </p>

                                       
                                      
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>


            <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        </section>
    )
}

export default Clouds