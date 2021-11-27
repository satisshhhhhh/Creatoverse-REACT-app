import React from 'react'
import { Link } from 'react-router-dom'


const MenuCategories = [
    {
        icon: "ri-gamepad-line",
        title: "Games"
    },
    {
        icon: "ri-brush-line",
        title: "Art"
    },
    {
        icon: "ri-stock-line",
        title: "Trading Cards"
    },
    {
        icon: "ri-music-line",
        title: "Music"
    },
    {
        icon: "ri-global-line",
        title: "Domain Names"
    },
    {
        icon: "ri-emotion-laugh-line",
        title: "Memes"
    },
    {
        icon: "ri-layout-4-line",
        title: "Collectibles"
    }
]
const HeroRanking = () => {
    return (
        <div>
            <div className="hero_ranking bg_white">
                <div className="container">
                    <h1 className="text-center">Ranking NFT</h1>
                </div>
            </div>
            <div className="bg_white border-b py-20">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-auto">
                            <div className="d-flex space-x-10 align-items-center">
                                <ul className="menu_categories space-x-20">
                                    {MenuCategories.map((val, i) => (
                                        <li key={i}>
                                            <Link to="#"> <i className={val.icon}></i> <span> {val.title} </span> </Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <div className="d-flex space-x-10 align-items-center sm:mt-20">
                                <select className="select_custom btn btn-dark btn-sm">
                                    <option value="A">All Chains</option>
                                    <option value="B">oldest active</option>
                                    <option value="C">another active</option>
                                </select>
                                <select className="select_custom btn btn-dark btn-sm">
                                    <option value="A">All Chains</option>
                                    <option value="B">oldest active</option>
                                    <option value="C">another active</option>
                                </select>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroRanking
