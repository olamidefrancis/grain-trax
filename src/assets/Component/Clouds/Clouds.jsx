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
               <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21s9.286-9.841 9.286-13.841a3.864 3.864 0 0 0-1.182-3.008A4.13 4.13 0 0 0 12 3.007A4.13 4.13 0 0 0 8.896 4.15a3.864 3.864 0 0 0-1.182 3.01C7.714 11.16 17 21 17 21"/></svg>,
            title: "Healthcare",
            desc: "Reliable procurement of certified healthcare equipment and medical supplies.\n Trusted healthcare equipment procurement services, partner with us for FDA/CE approveddevices,PPE and hospital essentials.",

            equipment: "Healthcare",
            equipment_list:". Diagnostic imaging (X-ray, MRI, ultrasound)\n. Surgical instruments and tools\n . Icu and emergency care equipment\n . Hospital beds and furniture\n. Personal Protective equipment\n. Laboratory equipment and consumables."

        },
        {
            icon:
               <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 15a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 0v.01M17 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-6.5 0H17"/><path d="M20 15.2V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5"/><path d="M18 5h-1a1 1 0 0 0-1 1v4"/></g></svg>,
            title: "Agriculture",
            desc: "Affordable procurement of tractors, construction and agricultural machinery from leading global brands.",
            equipment: "Our Agricultural Equipment Ofering",
            equipment_list:". Compact and heavy-duty tractors\n. Plows, tillers, and harvesters\n . Sprayers and seeders\n . Irrigation and water management systems\n. Spare parts and accessories."
        },
        {
            icon:
               <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 14c0 1.657 2.686 3 6 3s6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3z"/><path d="M9 14v4c0 1.656 2.686 3 6 3s6-1.344 6-3v-4M3 6c0 1.072 1.144 2.062 3 2.598s4.144.536 6 0c1.856-.536 3-1.526 3-2.598c0-1.072-1.144-2.062-3-2.598s-4.144-.536-6 0C4.144 3.938 3 4.928 3 6z"/><path d="M3 6v10c0 .888.772 1.45 2 2"/><path d="M3 11c0 .888.772 1.45 2 2"/></g></svg>,
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