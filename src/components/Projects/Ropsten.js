import { Link } from 'react-router-dom'
import { IoRocketSharp } from "react-icons/io5";
import { DiGithubAlt } from "react-icons/di";


const Ropsten = () => {
    return (
        <>
            {/* <!--------------1ST SECTION------------------> */}
            <div className="container">
                <div className="row mb-3 pt-5 align-items-center">
                    <div className="col-sm-5">
                        <h6>Blockchain</h6>
                        <h1>Ropsten Ethereum Test Network and Crypto Market</h1>
                    </div>
                    <div className="col-sm-7">
                        <img className="w-100 img-fluid" src="images/portfolio/projects/Ropsten/1.png" alt="" />
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12 pt-5">
                            <p className="lead">This is my very first Blockchain Application! In which also a great lesson for me, starting from Smart Contracts to Vite and to Styling using Mui and Tailwind CSS.
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
                                    <p className="text-muted"> <a style={{ color: 'var(--text-color)', textDecoration: 'none', transition: 'background 0.3s ease-in-out, color 0.6s ease-in-out' }} href="https://github.com/Yetiiii25/RopstenTestNetworkCryptoMarket" target="_blank" rel="noreferrer">
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
                    <div className="col-sm-7 lead">The objective of this project is to explore Vite, Smart Contract, Solidity, Hardhat.JS, and Coin Gecko Api. Additionally, I able to explore Tailwind CSS and Mui for the Styles. Lastly, firebase gave me a flashback when I build my Multi-Country Paper Bill Scanner For Visually Impaired People.</div>
                </div>

                <div className="row mb-2">
                    <div className="col-sm-5 h3">Features</div>
                    <div className="col-sm-7 lead">1.	Sending of Ropsten to another account using the website through Metamask </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">2.	Use of Gif's or Messages in Transaction List</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">3.	Transactions will also reflect to Etherscan.Io </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">4.	Login using Firebase</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">5.   To be able to store coins in watchlist</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">6.   Crypto Market using Coin Gecko Api</div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">7.   Show 100 Coin Listings, Single Coin (selected), Historical Chart and Trending Coins using Carousel </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 h3"></div>
                    <div className="col-sm-7 lead">8.   USDT or PESO option</div>
                </div>

                <div className="row mb-3 pt-5 pb-4">
                    <div className="col-sm-5 h3">Sample UI</div>
                    <div className="col-sm-7 lead"> ROPSTEN ETHEREUM TEST NETWORK
                        <div id="carouselExampleDark1" className="carousel carousel-dark slide pt-2" data-bs-ride="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/portfolio/projects/Ropsten/2.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/Ropsten/14.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/Ropsten/15.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/Ropsten/16.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/Ropsten/17.png" className="d-block w-100" alt="..." />
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
                    <div className="col-sm-7 lead pt-2"> CRYPTO MARKET
                        <div id="carouselExampleDark" className="carousel carousel-dark slide pt-2" data-bs-ride="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/portfolio/projects/Ropsten/18.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/Ropsten/19.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/Ropsten/20.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/Ropsten/21.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/Ropsten/22.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/Ropsten/23.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/Ropsten/24.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/Ropsten/25.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/portfolio/projects/Ropsten/26.png" className="d-block w-100" alt="..." />
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

                <div className="row mb-3 pt-5 pb-4">
                    <div className="col-sm-5 h3">Tech Stack</div>
                    <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/Ropsten/TechStack.png" alt="" />
                    </div>
                </div>
                <div className="row mb-3 pb-4">
                    <div className="col-sm-5 pb-3 h3"></div>
                    <div className="col-sm-7 lead"> I tried React JS Library + Vite JS which is a trend right now due to it rapid development tool for modern web projects. Firebase to save the user info and also the bookmarked watchlist of Coins. Tailwind CSS was used in the Landing Page and Footer, while Mui was used in Crypto Market Page and Grids. I also used Chart JS for the Coin Charts. Lastly, Solidity and Hardhat JS for the Smart Contract.
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


export default Ropsten



// <div className="col-sm-5 h3 "></div>
//                     <div className="col-sm-7 lead pt-5"> CRYPTO MARKET
//                         <div id="carouselExampleDark1" className="carousel carousel-dark slide pt-2" data-bs-ride="false">
//                             <div className="carousel-inner">
//                                 <div className="carousel-item active">
//                                     <img src="images/portfolio/projects/Ropsten/18.png" className="d-block w-100" alt="..." />
//                                 </div>
//                                 <div className="carousel-item">
//                                     <img src="images/portfolio/projects/Ropsten/19.png" className="d-block w-100" alt="..." />
//                                 </div>
//                                 <div className="carousel-item">
//                                     <img src="images/portfolio/projects/Ropsten/20.png" className="d-block w-100" alt="..." />
//                                 </div>
//                                 <div className="carousel-item">
//                                     <img src="images/portfolio/projects/Ropsten/21.png" className="d-block w-100" alt="..." />
//                                 </div>
//                                 <div className="carousel-item">
//                                     <img src="images/portfolio/projects/Ropsten/22.png" className="d-block w-100" alt="..." />
//                                 </div>
//                                 <div className="carousel-item">
//                                     <img src="images/portfolio/projects/Ropsten/23.png" className="d-block w-100" alt="..." />
//                                 </div>
//                                 <div className="carousel-item">
//                                     <img src="images/portfolio/projects/Ropsten/24.png" className="d-block w-100" alt="..." />
//                                 </div>
//                                 <div className="carousel-item">
//                                     <img src="images/portfolio/projects/Ropsten/25.png" className="d-block w-100" alt="..." />
//                                 </div>
//                                 <div className="carousel-item">
//                                     <img src="images/portfolio/projects/Ropsten/26.png" className="d-block w-100" alt="..." />
//                                 </div>
//                             </div>
//                             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev">
//                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                 <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next">
//                                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                 <span className="visually-hidden">Next</span>
//                             </button>
//                         </div>
//                     </div>