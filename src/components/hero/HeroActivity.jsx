import React from 'react'
import MenuActivity from '../../views/pages/elements/MenuActivity'

function HeroActivity() {
    return (
        <div>
            <div>
            {/* <div className="hero__activity">
                <div className="container">
                <h1 className="text-center">Activity Feed</h1>
                </div>
            </div> */}
            <div className="bg_white border-b py-20">
                <div className="container">
                <div className="d-flex justify-content-center">
                <MenuActivity /> 
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeroActivity
