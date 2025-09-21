import './App.css'
import Navbar from './assets/Component/Navbar/Navbar'
import Contact from './assets/Component/Contact/Contact'
import Industries from './assets/Component/Industries/Industries'
import Footer from './assets/Component/Footer/Footer'
import Clouds from './assets/Component/Clouds/Clouds'
import EmblaCarousel from './assets/Component/Carousel/Carousel'
import { createBrowserRouter, RouterProvider } from "react-router"
import submitContactus from './assets/Component/request'

const router = createBrowserRouter([
  {
  path:'/',
  element: <div>
                <Navbar/>
                <EmblaCarousel/>
                <Industries/>
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
  path:'/Home',
  element: <div>
                <Navbar/>
                <EmblaCarousel/>
                <Industries/>
                <Clouds/>
                <Footer/>
           </div>,

 },
 {
  path:'/About',
  element: <>
             <EmblaCarousel/>
           </>
  },

])

function App() {
  

  return (
   <RouterProvider router={router} />
  )
}

export default App
