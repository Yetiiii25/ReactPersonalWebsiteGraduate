import React from 'react'
import { Link } from 'react-router-dom'
import { IoRocketSharp } from "react-icons/io5";

const PersonalWebsiteCollegeConversion = () => {
  return (
    <>
         {/* <!--------------1ST SECTION------------------> */}
         <div className="container">
        <div className="row mb-3 pt-5 align-items-center">
          <div className="col-sm-5">
            <h6>Website</h6>
            <h1>My Personal Website conversion into React.JS</h1>
          </div>
          <div className="col-sm-7">
            <img className="w-100 img-fluid" src="images/portfolio/projects/PersonalWebsiteCollegeConversion/ConversionUndergrad.png" alt="" />
          </div>
          <div className="row mb-3">
            <div className="col-sm-12 pt-5">
              <p className="lead">This was my very first task as an Intern, it is to convert my Personal Website into React.Js. Other task given was I must still utilize the use of Bootstrap 5, React Router v6, Functional Component, Styled Components and React Hooks
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
                  <p className="text-muted"> <a style={{ color: 'var(--text-color)', textDecoration: 'none', transition:'background 0.3s ease-in-out, color 0.6s ease-in-out' }} href="https://yetiiii25.github.io/PersonalWebsiteConversionReact/" target="_blank" rel="noreferrer">
                  <IoRocketSharp className="icon" style={{marginRight:5}}/>Live Demo Here</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="h6">
                Project Date:
              </div>
              <div className="row small">
                <div className="col-md-12">
                  <p className="text-muted">1st Week of March 2022</p>
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
          <div className="col-sm-7 lead">The primary objectives of this task was to learn and explore React.JS. While applying it in my HTML,CSS,JS Personal Website. I must still utilize the use of Bootstrap 5, React Router v6, Functional Component, Styled Components and React Hooks  </div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 pb-3 h3">Struggles</div>
          <div className="col-sm-7 lead"> The struggles that I encountered was, It is my first time encountering React.Js Library, It was overwhelming to study all of it at once. 
          My solution was to follow a roadmad about React.Js and simply study it one by one, instead of exploring it all together.  </div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 h3">Tech Stack</div>
          <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/PersonalWebsiteCollegeConversion/techstack.png" alt="" />
          </div>
        </div>
        <div className="row mb-3 pb-4">
          <div className="col-sm-5 pb-3 h3"></div>
          <div className="col-sm-7 lead"> React.JS, Styled Components and Bootstrap 5.
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 pb-4 pt-5 lead">This task was good for 1 week only, I finished it within the given deadline, and gain an incredible amount of knowledge about React.JS</div>
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

export default PersonalWebsiteCollegeConversion