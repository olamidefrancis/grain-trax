import './About.css';
import { Link } from 'react-router';
import Navbar from '../Navbar/Navbar'

const About = () => {
  const faqsList = [
    {
      q: "Reliable procurement of Healthcare equipment | Certified Medical Devices & Supplies",
    },
    {
      q: "Agricultural equipment | Tractors",
    },
    {
      q: "Precious Metals | Gold, Silver & Platinum",
    },
    {
      a: "<>Financial institutions<>\n\n<>Jewellers and refiners<>\n\n<>Industrial manufacturers<>\n\n<>Private investors and collectors<>"
    },
  ];

  return (
    <section className="flex flex-col bg-gray-800 h-screen overflow-hidden">
  
      {/* <Link to="/" className="absolute top-6 left-6 text-white text-6xl font-bold">
        &#8592;
      </Link> */}
      <Navbar/>

      
      <div className="flex flex-1 justify-center items-center px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl w-full">
          
         
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-semibold text-cyan-400 text-2xl">
              Who we serve
            </h3>
            <p className="mt-3 text-white text-3xl font-extrabold sm:text-4xl">
              All information you need to know
            </p>
          </div>

        
          <div className="flex-1">
            <ul className="space-y-4 divide-y divide-gray-700 text-center md:text-left">
              {faqsList.map((item, idx) => (
                <li key={idx} className="pb-10 pt-6">
                        <summary className="font-semibold text-gray-200 text-2xl mb-4">
                            {item.q}
                        </summary>
                        {item.a && (
                            <p
                            dangerouslySetInnerHTML={{ __html: item.a }}
                            className="font-semibold text-gray-200 whitespace-pre-line text-2xl mt-2"
                            />
                        )}
                </li>

              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
