import { Link } from 'react-router-dom'
import { IoRocketSharp } from "react-icons/io5";
import { DiGithubAlt } from "react-icons/di";


function ExpenseTrackerMern() {
    return (
        <>
            {/* <!--------------1ST SECTION------------------> */}
            <div className="container">
                <div className="row mb-3 pt-5 align-items-center">
                    <div className="col-sm-5">
                        <h6>Web Application</h6>
                        <h1>Expense Tracker MERN Stack</h1>
                    </div>
                    <div className="col-sm-7">
                        <img className="w-100 img-fluid" src="images/portfolio/projects/MernExpenseTracker/ExpenseTracker.png" alt="" />
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12 pt-5">
                            <p className="lead">This is a Web Application using MERN Stack that can be used for Expense Tracking. Inspired by one of my favorite programming youtuber, Brad Traversy.
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
                                    <p className="text-muted"> <a style={{ color: 'var(--text-color)', textDecoration: 'none', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }} href="https://mernexpensestracker.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <IoRocketSharp className="icon" style={{ marginRight: 5, marginLeft:3 }} />Live Demo Here</a></p>
                                </div>
                                <div className="col-md-12">
                <p className="text-muted"> <a style={{ color: 'var(--text-color)', textDecoration: 'none', transition:'background 0.3s ease-in-out, color 0.6s ease-in-out' }} href="https://github.com/Yetiiii25/ExpenseTrackerMernStack" target="_blank" rel="noreferrer">
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
                                    <p className="text-muted">May 2022</p>
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
                    <div className="col-sm-7 lead">The objective of this is to try to remember and apply what I have learned on my previous project, Simple Notes. This Expense Tracker was used to be plain at all and has no backend, so I added Backend here so that if you refresh the page, the expenses will be saved and will not be gone at all.  </div>
                </div>

                <div className="row mb-3 pt-5 pb-4">
                    <div className="col-sm-5 h3">Tech Stack</div>
                    <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/MernSimpleNotes/MernStack.png" alt="" />
                    </div>
                </div>
                <div className="row mb-3 pb-4">
                    <div className="col-sm-5 pb-3 h3"></div>
                    <div className="col-sm-7 lead"> I've implemented MERN Stack. CSS is also used for the design of the project. React Router V6 was used for the routing of the Links.
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12 pb-4 pt-5 lead">This project took me about a day to finish it, right after creating the Simple Notes. </div>
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


export default ExpenseTrackerMern