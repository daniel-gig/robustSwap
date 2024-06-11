import { Link } from "react-router-dom";

import obust from "../assets/OBUST.svg";
import swap from "../assets/SWAP.svg";
import RobustLogo from "../assets/Robust Logo.svg";
import Home from "../assets/Home.svg";

import "./SideBar.css";

const SideBar = () => {
    return (
        <div>
            <div className="left-side-bar">
                <div className="logo">
                    <div className="image-area">
                        <img
                            className="logo-img"
                            src={RobustLogo}
                            alt="Robust Logo"
                        />
                        <div className="logo-font">
                            <img className="obust" src={obust} alt="obust" />
                            <img className="swap" src={swap} alt="swap" />
                        </div>
                    </div>
                </div>
                <div className="sidebar-button-group">
                    <Link to="/Home">
                        <img src="Home" className="" />
                        Home
                    </Link>
                    <Link to="/Exchange">Exchange</Link>
                    <Link to="/Farms">Farms</Link>
                    <Link to="/Pools">Pools</Link>
                    <Link to="/Referrals">Referrals</Link>
                    <hr className="hr-style" />
                    <Link to="/Home">
                        <img src="Home" className="" />
                        Home
                    </Link>

                    <Link to="/Exchange">Audit</Link>
                    <Link to="/Farms">Features</Link>
                    <Link to="/Pools">Listings</Link>
                    <Link to="/Referrals">Charts</Link>
                    <Link to="/Referrals">More</Link>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
