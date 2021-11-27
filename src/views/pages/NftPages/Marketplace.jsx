import React from 'react'
import CardMarketplace from '../../../components/cards/CardMarketplace'
import Collection2 from '../../../components/collection/Collection2'
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/header/Header'
import HeroMarketplace from '../../../components/hero/HeroMarketplace'
import MenuFilter from '../elements/MenuFilter'
import useDocumentTitle from '../../../components/useDocumentTitle'


const Marketplace = () => {
    useDocumentTitle(
        " Marketplace"
    );
    return (
        <div>
            <Header />
            <HeroMarketplace />
            <div className="container">
                <div className="section mt-50">
                    <div className="section__head">
                        <h2 className="section__title mb-20"> Artworks</h2>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-auto">
                                <div className="d-flex align-items-center">
                                    <span className="color_text txt_sm d-none d-sm-block mr-10" style={{ minWidth: 'max-content' }}>
                                        FILTER BY:
                                    </span>
                                    <MenuFilter />
                                </div>
                            </div>
                            <div className="col-lg-auto">
                                <div className="d-flex space-x-10 align-items-center sm:mt-20">
                                    <span className="color_text txt_sm"> SORT BY: </span>
                                    <select className="select_custom btn btn-dark btn-sm">
                                        <option value="A">Recent active</option>
                                        <option value="B">oldest active</option>
                                        <option value="C">another active</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CardMarketplace />
                </div>
                <div className="section mt-100">
                    <div className="section__head">
                        <h2 className="section__title mb-20"> Collections</h2>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-auto">
                                <div className="d-flex align-items-center">
                                    <span className="color_text txt_sm d-none d-sm-block mr-10" style={{ minWidth: 'max-content' }}>
                                        FILTER BY:
                                    </span>
                                    <ul className="menu_categories space-x-20">
                                        <li className="d-flex space-x-10 switch_item">
                                            <input type="checkbox" id="switch7" /><label htmlFor="switch7" className="ml-0">Toggle</label>
                                            <span> Has list price </span>
                                        </li>
                                        <li className="d-flex space-x-10 switch_item">
                                            <input type="checkbox" id="switch8" defaultChecked /><label htmlFor="switch8" className="ml-0">Toggle</label>
                                            <span> Has open offer </span>
                                        </li>
                                        <li className="d-flex space-x-10 switch_item">
                                            <input type="checkbox" id="switch9" /><label htmlFor="switch9" className="ml-0">Toggle</label>
                                            <span> Owned by creator </span>
                                        </li>
                                        <li className="d-flex space-x-10 switch_item">
                                            <input type="checkbox" id="switch10" /><label htmlFor="switch10" className="ml-0">Toggle</label>
                                            <span> Has sold </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-auto">
                                <div className="d-flex space-x-10 align-items-center sm:mt-20">
                                    <span className="color_text txt_sm"> SORT BY: </span>
                                    <select className="select_custom btn btn-dark btn-sm">
                                        <option value="A">Recent active</option>
                                        <option value="B">oldest active</option>
                                        <option value="C">another active</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Collection2 />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Marketplace
