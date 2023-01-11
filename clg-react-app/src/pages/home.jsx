import styles from "./home.module.css";
// import bgImage from '../images/gradientBG.jpg';
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";


const Home = () => {
    return (
        <motion.div
        
        >
        <div className="frontPage">
        {/* <img src={bgImage} alt="Woman's hand pouring canned beverage into a martini glass on a pink background'" className={styles.heroImage2}/> */}
        <h1>
        All your favourite recipes reinvented to fit your macros
        </h1>
        <Veggie />
        <Popular />
        </div></motion.div>
    );
};

export default Home;