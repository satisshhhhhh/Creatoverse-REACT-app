import React from 'react'
import MenuCategories from '../../views/pages/elements/MenuCategories'

function HeroMarketplace() {
    return (
        <div>
            <div>
            {/* <div className="hero_marketplace bg_white">
                <div className="container">
                <h1 className="text-center">NFT Marketplace</h1>
                </div>
            </div> */}
            <div className="bg_white border-b py-20">
                <div className="container">
                <div className="d-flex justify-content-center">
                <MenuCategories />
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeroMarketplace
