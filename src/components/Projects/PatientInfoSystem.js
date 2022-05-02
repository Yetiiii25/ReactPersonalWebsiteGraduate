import { Link } from 'react-router-dom'
import React from 'react'

const PatientInfoSystem = () => {
  return (
    <>
      <div className="container">
        <div className="row mb-3 pt-5 align-items-center">
          <div className="col-sm-5">
            <h6>Computer Software</h6>
            <h1>Patient Information System for the clinic of SSC-R Manila</h1>
          </div>
          <div className="col-sm-7">
            <img className="w-100 img-fluid" src="images/portfolio/projects/PIS/Patientinfo.png" alt="" />
          </div>
          <div className="row mb-3">
            <div className="col-sm-12 pt-5">
              <p className="lead">This system was made for San Sebastian College - Recoletos Manila Clinic because they still
                keep their record using logbooks. They keen the record of student annual health Records, incidents report
                and patient visit. All this informant records are recorded in manually and kept in the file cabinet.
                As a 2nd year student of Computer Science, me and my party Julius Honrales III, proposed this.
              </p>
            </div>
            <div className="col-sm-0"></div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <div className="h6">
                Software Engineering Project:
              </div>
              <div className="row small">
                <div className="col-md-12">
                  <p className="text-muted">Window Forms</p>
                </div>
                <p className="text-muted">Ms Sql</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="h6">
                Project Date:
              </div>
              <div className="row small">
                <div className="col-md-12">
                  <p className="text-muted">February 2019 - January 2020</p>
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
        <div className="row mb-3">
          <div className="col-sm-5 h3">Objectives</div>
          <div className="col-sm-7 lead">The general objectives of the study would likely focus on the Development of Patient
            Information System for San Sebastian College Recoletos Manila. The system that will be efficient and accurate to
            manage the records and information about the school clinic. The system aims to build up:</div>
        </div>
        <div className="row mb-3 pt-2">
          <div className="col-sm-5 h3"></div>
          <div className="col-sm-7 lead">1.	Computerized Logging in and out from the clinic.</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-5 h3"></div>
          <div className="col-sm-7 lead">2.	Summary of Patients that went in the clinic</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-5 h3"></div>
          <div className="col-sm-7 lead">3.	Smart Search Functionality for faster data retrieval</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-5 h3"></div>
          <div className="col-sm-7 lead">4.	Patient Information Table.</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-5 h3"></div>
          <div className="col-sm-7 lead">5.	Annual Check-Up Records and Schedule.</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-5 h3"></div>
          <div className="col-sm-7 lead">6.	Can set Notifications and Reminders.</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-5 h3"></div>
          <div className="col-sm-7 lead">7.	Storages of Clinic documents and notes.</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-5 h3"></div>
          <div className="col-sm-7 lead">8.	Identify and maintain a patient record.</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-5 h3"></div>
          <div className="col-sm-7 lead">9.	Generate Patient Record.</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-5 h3"></div>
          <div className="col-sm-7 lead">10.	Management of Patients Family Contact Information.</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-5 h3"></div>
          <div className="col-sm-7 lead">11.	Calendar Event.</div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 pb-3 h3">My Role / Planning</div>
          <div className="col-sm-7 lead"> Full Stack Developer </div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 h3">Tech Stack</div>
          <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/PIS/techstack.png" alt="" />
          </div>
        </div>
        <div className="row mb-3 pb-4">
          <div className="col-sm-5 pb-3 h3"></div>
          <div className="col-sm-7 lead"> Windows Form was used for the Front-End and also C# for the Calendar Events while Ms Sql was used for the Back-End of the software
          </div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 h3">Sample UI</div>
          <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/PIS/Patientinfo.png" alt="" />
          </div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 h3">Database Schema</div>
          <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/PIS/database.png" alt="" />
          </div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 h3">Some Flowcharts</div>
          <div className="col-sm-7 lead">
            <div id="carouselExampleDark1" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/portfolio/projects/PIS/flowchart1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/portfolio/projects/PIS/flowchart2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/portfolio/projects/PIS/flowchart3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/portfolio/projects/PIS/flowchart4.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/portfolio/projects/PIS/flowchart5.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 h3">Some Data Flow Diagram</div>
          <div className="col-sm-7 lead">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/portfolio/projects/PIS/dfd1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/portfolio/projects/PIS/dfd2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/portfolio/projects/PIS/dfd3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/portfolio/projects/PIS/dfd4.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/portfolio/projects/PIS/dfd5.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 pb-4 pt-5 lead">The primary objective of this research was to create an Automated Patient Information System that not far from the traditional way of the clinic staffs and users. Patient Information System is created after months of working with the project. The proposed system showcases how efficient and reliable an automated system compared to the manual system.
            The Patient Information System are aims to provide a computerized patient records, patient visit logs, patient watchlist, summary of patients that went in the clinic, smart search functionality for faster data retrieval, patient information table, annual check-up records and schedule, can set notifications and simple reminders, storages of clinic documents and notes, identify and maintain a patient record, generate patient record, and manage patients family contact information. with this, it will lessen the time and effort for finding the documents in their old way. instead of finding the document in a lot of cabinet files, just click the certain system feature a quick search in a search bar in the system and it will show up. It will also save space inside the clinic, because they do not need a lot of file cabinets anymore.
          </div>
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

export default PatientInfoSystem