import './App.css'
import './Normalize.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from "react"
import Footer from './commercial-web/components/Footer'
import Header from './commercial-web/components/Header'
import Home from './commercial-web/components/Home'
import ContactUs from './commercial-web/components/ContactUs'
import WhyChooseUs from './commercial-web/components/WhyChooseUs'
import ForVendors from './commercial-web/components/ForVendors'
import BackToTop from './commercial-web/components/BackToTop'
import OurTeam from './commercial-web/components/OurTeam'
import Physicians from './commercial-web/components/Physicians'
import OOSSForm from './commercial-web/components/OOSSForm'

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
