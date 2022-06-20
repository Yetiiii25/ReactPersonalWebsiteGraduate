import { Link } from 'react-router-dom'
import { DiGithubAlt } from "react-icons/di";


const ProtectedRoutes = () => {
    return (
        <>
            {/* <!--------------1ST SECTION------------------> */}
            <div className="container">
                <div className="row mb-3 pt-5 align-items-center">
                    <div className="col-sm-5">
                        <h6>Website Template</h6>
                        <h1>Protected Routes and Role Based Authorization using MERN stack and JWT Token  </h1>
                    </div>
                    <div className="col-sm-7">
                        <img className="w-100 img-fluid" src="images/portfolio/projects/ProtectedRoutes/ProtectedRoutes.png" alt="" />
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12 pt-5">
                            <p className="lead">This is a sample of a full MERN Stack, Protected Routes and Role Based Authorization using MERN stack and JWT Token </p>
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
                                    <p className="text-muted"> <a style={{ color: 'var(--text-color)', textDecoration: 'none', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }} href="https://github.com/Yetiiii25/MernRoleBased" target="_blank" rel="noreferrer">
                                        <DiGithubAlt className="icon" size={20} style={{ marginRight: 2, marginLeft: 0, marginBottom: 2.5 }} />GitHub Repository Here</a></p>
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
                    <div className="col-sm-7 lead">The objectives of this project is to train me on how to implemnt protected routes, user role based log in and registration functions, improve knowldedge on MERN stack and JWT Tokens. </div>
                </div>

                <div className="row mb-1">
                    <div className="col-sm-5 h3">Features</div>
                    <div className="col-sm-7 lead">1.	Role Based</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">2.	Protected Routes</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">3.	Form Validations in Registration and Login Forms</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">4.	Authorization and Authentication</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">5.   JWT, Access and Refresh Tokens</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">6.   Persistence Login</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">7.   MERN Stack</div>
                </div>


                <div className="row mb-3 pt-5 pb-4">
                    <div className="col-sm-5 h3">Sample UI</div>
                    <div className="col-sm-7 lead">
                        <div id="carouselExampleDark1" className="carousel carousel-dark slide" data-bs-ride="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/portfolio/projects/ProtectedRoutes/1.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/ProtectedRoutes/2.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/ProtectedRoutes/3.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/ProtectedRoutes/4.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/ProtectedRoutes/5.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/ProtectedRoutes/6.png" className="d-block w-100" alt="..." />
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
                    <div className="col-sm-5 h3">Tech Stack</div>
                    <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/ProtectedRoutes/MernStack.png" alt="" />
                    </div>
                </div>
                <div className="row mb-3 pb-4">
                    <div className="col-sm-5 pb-3 h3"></div>
                    <div className="col-sm-7 lead"> MERN Stack was implemented for this project, also JWT TOKENS.
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


export default ProtectedRoutes