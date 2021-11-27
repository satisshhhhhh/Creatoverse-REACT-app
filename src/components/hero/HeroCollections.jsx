import React from 'react'
import MenuFilter from '../../views/pages/elements/MenuFilter'

function HeroCollections() {
    return (
        <div>
            <div>
                <div className="hero__collections">
                    <div className="container">
                        <h1>Artwork collections</h1>
                    </div>
                </div>
                <div className="filters bg_white border-b py-20">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-auto">
                                <div className="d-flex align-items-center">
                                    <span className="color_text txt_sm d-none d-sm-block mr-10"> FILTER BY: </span>
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
                </div>
            </div>
        </div>
    )
}

export default HeroCollections
