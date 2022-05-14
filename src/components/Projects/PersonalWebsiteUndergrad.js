import React from 'react'
import { Link } from 'react-router-dom'
import { IoRocketSharp } from "react-icons/io5";
import { DiGithubAlt } from "react-icons/di";

const PersonalWebsiteUndergrad = () => {
  return (
    <>
         {/* <!--------------1ST SECTION------------------> */}
         <div className="container">
        <div className="row mb-3 pt-5 align-items-center">
          <div className="col-sm-5">
            <h6>Website</h6>
            <h1>My Personal Website as College Graduate</h1>
          </div>
          <div className="col-sm-7">
            <img className="w-100 img-fluid" src="images/portfolio/projects/PersonalWebsiteCollegeGrad/PersonalWebsitePostGrad.png" alt="" />
          </div>
          <div className="row mb-3">
            <div className="col-sm-12 pt-5">
              <p className="lead">This Personal Website was my side project aside from the task given during School and Internship. I made this, because this will be the representation of my self all throughout my life as a student.
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
                  <p className="text-muted"> <a style={{ color: 'var(--text-color)', textDecoration: 'none', transition:'background 0.3s ease-in-out, color 0.6s ease-in-out' }} 
                  href="https://yetiiii25.github.io/ReactPersonalWebsiteGraduate/" target="_blank" rel="noreferrer">
                  <IoRocketSharp className="icon" style={{marginRight:5, marginLeft:3}}/>Live Demo Here</a></p>
                </div>
                <div className="col-md-12">
                <p className="text-muted"> <a style={{ color: 'var(--text-color)', textDecoration: 'none', transition:'background 0.3s ease-in-out, color 0.6s ease-in-out' }} href="https://github.com/Yetiiii25/ReactPersonalWebsiteGraduate" target="_blank" rel="noreferrer">
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
                  <p className="text-muted">April of 2022</p>
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
          <div className="col-sm-7 lead">My primary objective here was to showcase who am I, projects I made and what I accomplished all throughout my life. I started this project during my last days in school and internship. I started
          at first I was just thinking about making a project to conclude all my knowledge learned during my internship, to also practice my skills in React.JS. But I end up doing this Personal Website as a College Student because I got inspired and also manifesting that I will graduate that year. That incoming July of 2022. </div>
        
          <div className="col-sm-5 pb-4 h3"></div>
          <div className="col-sm-7 pt-3 lead">Next is I made this because this will be the representation of my self all throughtout my life as a Student and I will about to enter the real world. With this website I can showcase my self, my talent, and my works. </div>
       
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
          <div className="col-sm-12 pb-4 pt-5 lead"></div>
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

export default PersonalWebsiteUndergrad