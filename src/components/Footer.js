import React from 'react'
import '../styled/FooterStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { Styledcomponents } from '@icons-pack/react-simple-icons';



const Footer = () => {
  return (
    <>


      <footer className="text-center p-5">

        <section className="d-flex justify-content-between border-top">

          <div className="me-5 mt-5 pt-1">
            <h6 className="deinenFooter fw-bold">Deinen Flores</h6>
          </div>

          <div className="footerlogo">

            <a href="/" className="me-2 text-reset disabled">
              <Styledcomponents size={25} style={{marginBottom:4}}/>
            </a>

            <a href="/#" className="me-2 text-reset disabled">
              <FontAwesomeIcon icon={faReact} />
            </a>

            <a href="/" className="me-2 text-reset disabled">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="/" className="me-2 text-reset disabled">
              <FontAwesomeIcon icon={faCss3Alt} />
            </a>

            <a href="/" className="me-2 text-reset disabled">
              <FontAwesomeIcon icon={faJs} />
            </a>


          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer