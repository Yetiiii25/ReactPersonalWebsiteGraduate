import { Link } from 'react-router-dom'
import { IoRocketSharp } from "react-icons/io5";
import { DiGithubAlt } from "react-icons/di";

function SimpleNotesMern() {
    return (
        <>
            {/* <!--------------1ST SECTION------------------> */}
            <div className="container">
                <div className="row mb-3 pt-5 align-items-center">
                    <div className="col-sm-5">
                        <h6>Web Application</h6>
                        <h1>Simple Notes using MERN, JWT and REDUX</h1>
                    </div>
                    <div className="col-sm-7">
                        <img className="w-100 img-fluid" src="images/portfolio/projects/MernSimpleNotes/SimpleNotes2.png" alt="" />
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12 pt-5">
                            <p className="lead">This is a Web Application using MERN Stack that can be used for saving private short notes. Inspired by one of my favorite programming youtuber, Brad Traversy.
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
                                    <p className="text-muted"> <a style={{ color: 'var(--text-color)', textDecoration: 'none', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }} href="https://mernjwtnotes.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <IoRocketSharp className="icon" style={{ marginRight: 5,marginLeft:3}} />Live Demo Here</a></p>
                                </div>
                                <div className="col-md-12">
                <p className="text-muted"> <a style={{ color: 'var(--text-color)', textDecoration: 'none', transition:'background 0.3s ease-in-out, color 0.6s ease-in-out' }} href="https://github.com/Yetiiii25/SimpleNotesUsingMMERNStack-JWT-REDUX" target="_blank" rel="noreferrer">
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
                    <div className="col-sm-7 lead">The objective of this is to expand knowledge on MERN Stack, this will be the first time I will be tackling and exploring MERN Stack. I have experienced JWT tokens on my internship so that should be fine. The goal here is to create a Note Keeper that is JWT protected, 
                    that has a log in and regstration of course before you can add and delete notes. </div>
                </div>

                <div className="row mb-3 pt-5 pb-4">
                    <div className="col-sm-5 h3">Tech Stack</div>
                    <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/MernSimpleNotes/MernStack.png" alt="" />
                    </div>
                    <div className="col-sm-5 h3"> </div>
                    <div className="col-sm-7 pt-3 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/MernSimpleNotes/ReduxStack.png" alt="" />
                    </div>
                </div>
                <div className="row mb-3 pb-4">
                    <div className="col-sm-5 pb-3 h3"></div>
                    <div className="col-sm-7 lead"> I've implemented MERN stack, JWT or Json Web Tokens and Redux. CSS is also used for the design of the project. React Router V6 was used for the routing of the Links.
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12 pb-4 pt-5 lead">This project took me about 4 days to finish right after my Finals Exam week.</div>
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

export default SimpleNotesMern