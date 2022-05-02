import React from 'react'
import About from '../../components/About'
import { aboutObjOne } from './Data'

const AboutMePage = () => {
  return (
    <>
      <About {...aboutObjOne} />
    </>

  )
}

export default AboutMePage