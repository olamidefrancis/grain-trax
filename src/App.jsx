import './App.css'
import Navbar from './assets/Component/Navbar/Navbar'
import Contact from './assets/Component/Contact/Contact'
import Footer from './assets/Component/Footer/Footer'
import Clouds from './assets/Component/Clouds/Clouds'
import AboutUs from './assets/Component/About/About'
import EmblaCarousel from './assets/Component/Carousel/Carousel'
import { createBrowserRouter, RouterProvider } from "react-router"
import submitContactus from './assets/Component/request'

const router = createBrowserRouter([
  {
  path:'/',
  element: <div>
                <Navbar/>
                <EmblaCarousel/>
                <Clouds/>
                <Footer/>
           </div>,
  errorElement: <div>404 Page not found</div>
 },

  {
  path:'/Contact',
  element: <>
               <Navbar/>
               <Contact submitContactus ={submitContactus }/>
               <Footer/>
           </>
  },
      
    {
  path:'/About',
  element: <div>
                <Navbar/> 
                <AboutUs/>
           </div>,

 }
 
])

function App() {
  

  return (
   <RouterProvider router={router} />
  )
}

export default App
