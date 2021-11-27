import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className="footer__1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 space-y-20">
                            <div className="footer__logo">
                                <Link to="/">
                                    <img src={`img/logos/Logo.png`} alt="logo" id="logo_js_f" style={{height: '2.8rem'}}/>
                                </Link>
                            </div>
                            <p className="footer__text">
                            Creatverse is a revolutionary social network that
                            rewards users based on their interactions. Using the CREATVERE native token
                            CREATO, platform users (both artists and fans) receive compensation for
                            ratings, shares, likes, etc
                            </p>
                            <div>
                                <ul className="footer__social space-x-10 mb-40">
                                    <li> <Link to="#"> <i className="ri-facebook-line" /> </Link>
                                    </li>
                                    <li> <Link to="#"> <i className="ri-whatsapp-line" /> </Link>
                                    </li>
                                    <li> <Link to="#"> <i className="ri-youtube-line" /> </Link>
                                    </li>
                                    <li> <Link to="#"> <i className="ri-telegram-line" /> </Link>
                                    </li>
                                    <li> <Link to="#"> <i className="ri-medium-line" /> </Link>
                                    </li>
                                    <li> <Link to="#"> <i className="ri-reddit-line" /> </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <h6 className="footer__title">Pages</h6>
                            <ul className="footer__list">
                                <li> <Link to="home-1"> Skating Pools </Link>
                                </li>
                                <li> <Link to="home-2"> Technical Support
                                </Link> </li>
                                <li> <Link to="home-3"> Terms & Conditions </Link> </li>
                                <li> <Link to="marketplace"> Privacy Policy
                                </Link>
                                </li>
                                <li> <Link to="marketplace"> Disclaimers
                                </Link>
                                </li>
                                <li> <Link to="marketplace"> About
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6">
                            <h6 className="footer__title">Assets</h6>
                            <ul className="footer__list">
                                <li> <Link to="profile"> Profile </Link>
                                </li>
                                <li> <Link to="creators"> Creators </Link>
                                </li>
                                <li> <Link to="collections"> Colletctions </Link>
                                </li>
                                <li> <Link to="Activity"> Activity
                                </Link> </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6">
                            <h6 className="footer__title">Company</h6>
                            <ul className="footer__list">
                                <li> <Link to="uploadType"> Upload Types </Link>
                                </li>
                                <li> <Link to="upload"> Upload </Link> </li>
                                <li> <Link to="connect-wallet"> Connect wallet
                                </Link> </li>
                                <li> <Link to="item-details"> Item details </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="copyright text-center">
                    © 2021 CREATVERSE. All rights reserved. Created with love by HAPPAX
                    ENTERTAINMENT LAB (P) LTD
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
