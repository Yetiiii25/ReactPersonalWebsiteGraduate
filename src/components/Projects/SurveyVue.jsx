import { Link } from 'react-router-dom'
import { IoRocketSharp } from "react-icons/io5";
import { DiGithubAlt } from "react-icons/di";


const SurveyVue = () => {
    return (
        <>
            {/* <!--------------1ST SECTION------------------> */}
            <div className="container">
                <div className="row mb-3 pt-5 align-items-center">
                    <div className="col-sm-5">
                        <h6>Website</h6>
                        <h1>Survey Maker using Vite, Vue and Laravel</h1>
                    </div>
                    <div className="col-sm-7">
                        <img className="w-100 img-fluid" src="images/portfolio/projects/SurveyVue/3.png" alt="" />
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12 pt-5">
                            <p className="lead"> This one is the last project I will be doing before I graduate a couple days since I posted this. I know that I am going to enter the real world
                            so I made this project to practice my self in vue and refresh my knowledge in PHP. This is a CRUD Survey Maker using Vite, Vue and Laravel.
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
                                    <p className="text-muted"> <a style={{ color: 'var(--text-color)', textDecoration: 'none', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }} href="https://github.com/Yetiiii25/SurveyMaker-using-vite-vue-laravel" target="_blank" rel="noreferrer">
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
                                    <p className="text-muted">July 2022</p>
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
                    <div className="col-sm-7 lead">The objective of this project is to explore Vite, Vue, Tailwind CSS and Laravel. Because a couple of days from now on, I will graduate college. This serves as a practice and refreshes my knowledge and understanding in Vue and Php.</div>
                </div>

                <div className="row mb-2">
                    <div className="col-sm-5 h3">Features</div>
                    <div className="col-sm-7 lead">1.	Create, read, update, and delete a user   </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">2.	Create, read, update, and delete a survey</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">3.	Implementation of Laravel Php for the database </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">4.	Manipulation in adding survey options and multiple questions</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">5.   Adding of image in the survey</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">6.   Dashboard for the surveys</div>
                </div>

                <div className="row mb-2 mt-5">
                    <div className="col-sm-5 h3">Still Working On</div>
                    <div className="col-sm-7 lead"> <s>7.   Viewing of Survey Answers</s></div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead"><s>8.   Role Based Users</s></div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead"><s>9.   Admin and Client Side separation</s></div>
                </div>

                <div className="row mb-3 pt-5 pb-4">
                    <div className="col-sm-5 h3">Sample UI</div>
                    <div className="col-sm-7 lead"> SURVEY MAKER - REGISTRATION AND LOGIN
                        <div id="carouselExampleDark1" className="carousel carousel-dark slide pt-2" data-bs-ride="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/portfolio/projects/SurveyVue/4.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/5.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/6.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/7.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/8.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/9.png" className="d-block w-100" alt="..." />
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

                <div className="row mb-3 pb-4">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead pt-2"> LANDING PAGE
                        <div id="carouselExampleDark" className="carousel carousel-dark slide pt-2" data-bs-ride="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/portfolio/projects/SurveyVue/10.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/11.png" className="d-block w-100" alt="..." />
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

                <div className="row mb-3 pb-4">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead pt-2"> CREATING A SURVEY
                        <div id="carouselExampleDark2" className="carousel carousel-dark slide pt-2" data-bs-ride="false">
                            
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <img src="images/portfolio/projects/SurveyVue/12.png" className="d-block w-100" alt="..." />
                                </div>

                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/13.png" className="d-block w-100" alt="..." />
                                </div>  

                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/14.png" className="d-block w-100" alt="..." />
                                </div>  

                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/15.png" className="d-block w-100" alt="..." />
                                </div> 

                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/16.png" className="d-block w-100" alt="..." />
                                </div>  

                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/17.png" className="d-block w-100" alt="..." />
                                </div>  

                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/18.png" className="d-block w-100" alt="..." />
                                </div>

                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/19.png" className="d-block w-100" alt="..." />
                                </div>  

                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/20.png" className="d-block w-100" alt="..." />
                                </div>   

                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/21.png" className="d-block w-100" alt="..." />                      
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 pb-4">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead pt-2"> ANSWERING A SURVEY
                        <div id="carouselExampleDark3" className="carousel carousel-dark slide pt-2" data-bs-ride="false">
                            
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <img src="images/portfolio/projects/SurveyVue/22.png" className="d-block w-100" alt="..." />
                                </div>

                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/23.png" className="d-block w-100" alt="..." />
                                </div>  

                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/24.png" className="d-block w-100" alt="..." />
                                </div>  

                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/25.png" className="d-block w-100" alt="..." />
                                </div>  
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/26.png" className="d-block w-100" alt="..." />
                                </div>  
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/27.png" className="d-block w-100" alt="..." />
                                </div>  
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/SurveyVue/28.png" className="d-block w-100" alt="..." />
                                </div>  

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark3" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark3" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 pt-5 pb-4">
                    <div className="col-sm-5 h3">Database Schema</div>
                    <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/SurveyVue/DB.png" alt="" />
                    </div>
                </div>
                <div className="row mb-3 pb-4">
                    <div className="col-sm-5 pb-3 h3"></div>
                    <div className="col-sm-7 lead"> Illustrated above is the database schema for this project. It also shows how table are interconnected with each other using FK.
                    </div>
                </div>

                <div className="row mb-3 pt-5 pb-4">
                    <div className="col-sm-5 h3">Tech Stack</div>
                    <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/SurveyVue/TechStack.png" alt="" />
                    </div>
                </div>
                <div className="row mb-3 pb-4">
                    <div className="col-sm-5 pb-3 h3"></div>
                    <div className="col-sm-7 lead"> I used Vite + Vue which is a trend right now because of it's speed and perfomance. I also use laravel for the backend database. I used both Laravel and Vue to improve my knowldge as well as refresh it. For the styling I used Tailwind Css which I also practice now a days.
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


export default SurveyVue
