import { Link, NavLink } from "react-router-dom";
import LogoImg from '../../assets/Logo.png';

const NavBar = () => {
    return (
       <div className="lg:mx-12 my-0 lg:my-4  md:mx-8 md:my-3">
         <div className="navbar sm:flex lg:flex-row md:flex-row flex-col">
            <div className="flex-1">
                <Link to="/">
                <img src={LogoImg} className="w-40" alt="" />
                </Link>
            </div>
            <div className=" sm:justify-center">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation">Donation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics">Statistics</NavLink>
                    </li>
                </ul>
            </div>
        </div>
       </div>
    );
};

export default NavBar;