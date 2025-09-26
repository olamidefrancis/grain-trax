import './About.css'


const About = () => {

    const faqsList = [
        {
            q: "Reliable procurement of Healthcare equipment | Certified Medical Devices & Supplies",
            
        },
        {
            q: " Agricultural equipment | Tractors",
            
        },
        {
            q: "Precious Metals | Gold, Silver & Platinum",
            
        },
        {
        
            a: "<>Financial institutions<>\n\n<>Jewellers and refiners<>\n\n<>Industrial manufacturers<>\n\n<>Private investors and collectors<>"
        },
       
    ]

    return (
        <section className='py-14 bg-gray-800 h-[100vh]  flex justify-center items-center'>
            <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8 flex justify-center items-center ">
                <div className='flex-1 '>
                    <div className="max-w-lg">
                        <h3 className='font-semibold text-cyan-400 text-2xl'>
                             Who we serve
                        </h3>
                        <p className='mt-3 text-white text-3xl font-extrabold sm:text-4xl'>
                            All information you need to know
                        </p>
                    </div>
                </div>
                <div className='flex-1 mt-12 md:mt-0 flex j'>
                    <ul className='space-y-4 divide-y divide-gray-700 '>
                        {faqsList.map((item, idx) => (
                            <li
                                className="py-5"
                                key={idx}>
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-200 text-xl paddi ">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className="  font-semibold text-gray-200 whitespace-pre-line text-xl ">
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};


export default About