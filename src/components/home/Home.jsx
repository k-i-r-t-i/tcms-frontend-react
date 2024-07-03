import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Footer from "../common/footer/Footer"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      {/* <Testimonal />
      <Hblog />
      <Hprice /> */}
      <Footer />
    </>
  )
}

export default Home