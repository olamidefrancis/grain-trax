import './App.css'
import Navbar from './assets/Component/Navbar/Navbar'
import Content from './assets/Component/Content/Content'
import Contact from './assets/Component/Contact/Contact'
import Industries from './assets/Component/Industries/Industries'
import Footer from './assets/Component/Footer/Footer'
import Clouds from './assets/Component/Clouds/Clouds'
import EmblaCarousel from './assets/Component/Carousel/Carousel'
import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
  path:'/',
  element: <div>
                <Navbar/>
                <EmblaCarousel/>
                <Clouds/>
                <Industries/>
                <Footer/>
           </div>,
  errorElement: <div>404 Page not found</div>
 },

  {
  path:'/Contact',
  element: <>
               <Navbar/>
               <Contact/>
               
           </>
  },
      
    {
  path:'/Home',
  element: <div>
                <Navbar/>
                <EmblaCarousel/>
                <Industries/>
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
