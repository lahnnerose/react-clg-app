import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

function Nav() {
    return (
        <header>
            <div className={styles.mainHeader}>
            <nav>
                <h1><NavLink to="/" className={styles.siteTitle}>MoreIsMore</NavLink></h1>
                <ul>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/work">
                            Recipes
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
};

export default Nav