import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/header/Header'
import useDocumentTitle from '../../../components/useDocumentTitle'

const wallets = [
    {
        title: "coibase",
        p: "wallet that works on both mobile and through a browser extension",
        popup: "connected"
    },
    {
        title: "metamask",
        p: "A browser extension with great flexibility. The web's popular wallet",
        popup: "error"
    },
    {
        title: "torus",
        p: "Log in with Google,  Facebook, or other OAuth providers",
        popup: "connected"
    },
    {
        title: "fortmatic",
        p: "wallet that allows you to  sign up with your phone number on any device",
        popup: "error"
    },
    {
        title: "bitski",
        p: "wallet that allows you to  sign in with an email and password",
        popup: "connected"
    },
    {
        title: "walletconnect",
        p: "Log in with Google,  Facebook, or other OAuth provider",
        popup: "error"
    }
]

const ConnectWalllet = () => {
    useDocumentTitle(
        "Wallet "
    );
    return (
        <div className="effect">
            <Header />

            <div className="container">
                <div>
                    <Link to="#" className="btn btn-white btn-sm mt-20"> Back to home</Link>
                    <div className="hero__wallets pt-100 pb-50">
                        <div className="space-y-20 d-flex flex-column align-items-center">
                            <div className="logo">

                                <img
                                    src={`img/icons/logo.svg`}
                                    alt="ImgPreview"
                                />
                            </div>
                            <h2 className="text-center">Connect your wallet</h2>
                            <p className="text-center">Connect with one of available wallet providers or create a new wallet.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="wallets">
                            <div className="row mb-20_reset">
                                {wallets.map((val, i) => (
                                    <div className="col-lg-4" key={i}>
                                        <Link to="#" className="box in__wallet space-y-10">
                                            <div className="logo">
                                                <img src={`img/icons/${val.title}.svg`} alt="logo_community" />
                                            </div>
                                            <h5 className="text-center">{val.title}</h5>
                                            <p className="text-center">{val.p}</p>
                                        </Link>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default ConnectWalllet
