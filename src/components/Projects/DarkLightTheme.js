import { Link } from 'react-router-dom'
import { IoRocketSharp } from "react-icons/io5";
import { DiGithubAlt } from "react-icons/di";


const DarkLightTheme = () => {
  return (
    <>
    {/* <!--------------1ST SECTION------------------> */}
    <div className="container">
      <div className="row mb-3 pt-5 align-items-center">
        <div className="col-sm-5">
          <h6>Website Template</h6>
          <h1>Dark Mode Themes Responsive Website using Router v6</h1>
        </div>
        <div className="col-sm-7">
          <img className="w-100 img-fluid" src="images/portfolio/projects/DarkLightTheme/DarkLightTheme.png" alt="" />
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 pt-5">
            <p className="lead">This is a sample of React.Js, React-router V6, NavBar with Darkmode. Which is ready to use for your upcoming website project!
            </p>
          </div>
          <div className="col-sm-0"></div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <div className="h6">
              Website:
            </div>
            <div className="row small">
              <div className="col-md-12">
                <p className="text-muted"> <a style={{ color: 'var(--text-color)', textDecoration: 'none', transition:'background 0.3s ease-in-out, color 0.6s ease-in-out' }} href="https://yetiiii25.github.io/DarkModeThemeReactTemplate/" target="_blank" rel="noreferrer">
                <IoRocketSharp className="icon" style={{marginRight:5, marginLeft:3}}/>Live Demo Here</a></p>
              </div>
              <div className="col-md-12">
                <p className="text-muted"> <a style={{ color: 'var(--text-color)', textDecoration: 'none', transition:'background 0.3s ease-in-out, color 0.6s ease-in-out' }} href="https://github.com/Yetiiii25/DarkModeThemeReactTemplate" target="_blank" rel="noreferrer">
                <DiGithubAlt className="icon" size={20} style={{marginRight:2, marginLeft:0, marginBottom:2.5}}/>GitHub Repository Here</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="h6">
              Project Date:
            </div>
            <div className="row small">
              <div className="col-md-12">
                <p className="text-muted">April 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!----------------HR---------------------> */}
    <div className="container clearfix pb-5">
      <hr />
    </div>
    {/* <!----------------2ND SECTION---------------------> */}
    <div className="container">
      <div className="row mb-3 pb-5">
        <div className="col-sm-5 pb-4 h3">Objectives</div>
        <div className="col-sm-7 lead">The objective of this mini project is to give fellow React.JS developers etra knowledge on how Dark and Light Mode works on React.JS. 
        Another purpose of this is to provide a readily template of a Dark and Light Mode website with Navbar and Footer with children components inside of it, React Router V6 was used for path navigation</div>
      </div>

      <div className="row mb-3 pt-5 pb-4">
        <div className="col-sm-5 h3">Tech Stack</div>
        <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/DarkLightTheme/TechStack.png" alt="" />
        </div>
      </div>
      <div className="row mb-3 pb-4">
        <div className="col-sm-5 pb-3 h3"></div>
        <div className="col-sm-7 lead"> React.Js was used for the frontend of the project. Styled components and CSS is also used for the design of the project. React Router V6 was used for the routing of the Links.
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-12 pb-4 pt-5 lead">This project took me about 3 days to finish during the Holy Week / Holidays in the Philippines.</div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-12 text-center">
          <Link className="h5" to='/portfolio' style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
            <i className="bi bi-arrow-left-circle h2"></i> Back to Recent Projects
          </Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default DarkLightTheme