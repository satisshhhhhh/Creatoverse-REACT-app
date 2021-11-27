import React from 'react'
import { Link } from 'react-router-dom'


const HeroProfile = () => {
    return (
        <div className="mb-100">
            <div className="hero__profile">
                <div className="cover">
                    <img src="img/bg/prrofile.png" alt="ImgPreview" />
                </div>
                <div className="infos">
                    <div className="container">
                        <div className="row flex-wrap align-items-center justify-content-between">
                            <div className="col-md-auto mr-20">
                                <div className="avatars d-flex space-x-20 align-items-center">
                                    <div className="avatar_wrap">
                                        <img className="avatar avatar-lg" src="img/avatars/avatar_4.png" alt="avatar" />
                                    </div>
                                    <h5>@ayoub fennouni</h5>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <div className="d-flex flex-wrap align-items-center space-x-20 mb-20_reset">
                                    <div className="mb-20">
                                        <div className="copy">
                                            <span className="color_text"> 13b9ebda0178... </span>
                                            <Link to="#"> <i className="ri-file-copy-line color_text" /> </Link>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center space-x-20">
                                        <div className="mb-20">
                                            <Link to="#" className="btn btn-dark btn-sm"> Follow </Link>
                                        </div>
                                        <div className="mb-20">
                                            <div className="share">
                                                <div className="icon">
                                                    <Link to="#"> <i className="ri-share-line" /> </Link>
                                                </div>
                                                <div className="dropdown__popup">
                                                    <ul className="space-y-10">
                                                        <li>
                                                            <Link to="#"> <i className="ri-facebook-line" /> </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#"> <i className="ri-messenger-line" /> </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#"> <i className="ri-whatsapp-line" /> </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#"> <i className="ri-youtube-line" /> </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-20">
                                            <div className="more">
                                                <div className="icon">
                                                    <Link to="#"> <i className="ri-more-fill" /> </Link>
                                                </div>
                                                <div className="dropdown__popup">
                                                    <ul className="space-y-10">
                                                        <li>
                                                            <Link to="#" className="space-x-10 d-flex">
                                                                <i className="ri-flag-line" />
                                                                <span> Report </span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroProfile
