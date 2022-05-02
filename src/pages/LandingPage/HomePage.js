import React from 'react'
import {homeObjOne} from '../LandingPage/LandingPageData';
import Hero from '../../components/Hero'
import CardHome from '../../components/CardHome'



const HomePage = () => {


  return (
  <>
    <Hero {...homeObjOne}/> 
    <CardHome/>
  </>
    
  )
}

export default HomePage