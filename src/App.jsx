import './App.css'
import './Normalize.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from "react"
import Footer from './consumer-web/components/Footer'
import Header from './consumer-web/components/Header'
import Home from './consumer-web/components/Home'
import ContactUs from './consumer-web/components/ContactUs'
import WhyChooseUs from './consumer-web/components/WhyChooseUs'
import ForVendors from './consumer-web/components/ForVendors'
import BackToTop from './consumer-web/components/BackToTop'
import OurTeam from './consumer-web/components/OurTeam'
import Physicians from './consumer-web/components/Physicians'
import OOSSForm from './consumer-web/components/OOSSForm'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "contact-us",
      element: <ContactUs />
    },
    {
      path: "why-choose-us",
      element: <WhyChooseUs />
    },
    {
      path: "for-vendors",
      element: <ForVendors />
    },
    {
      path: "our-team",
      element: <OurTeam />
    },
    {
      path: "physicians-advisory-board",
      element: <Physicians />
    },
    {
      path: "ooss-ascrs",
      element: <OOSSForm />
    },
  ]);
  

  return (
    <>
      <Header />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
