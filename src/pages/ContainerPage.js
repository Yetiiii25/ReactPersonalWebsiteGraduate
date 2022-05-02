import React,{useState} from 'react'
import NavBar from '../components/NavBar';
import Hamburger from '../components/Hamburger';
import Footer from '../components/Footer';

const ContainerPage = ({children}) => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }
  

  return (
    <>
        <Hamburger isOpen={isOpen} toggle={toggle}/>
        <NavBar isOpen={isOpen} toggle={toggle}/>
        <div>{children}</div>
        <Footer />
    </>
  )
}

export default ContainerPage