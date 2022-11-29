import { NavLink } from "react-router-dom";
import "./header.module.css";

function Nav() {
    return (
        <header>
            <div className="mainHeader">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className="siteTitle">
                            Electric Avenue
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/work">
                            Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Nav