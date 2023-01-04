import styles from "./home.module.css";
import heroImage from '../images/thisIsTheSign.jpg';
import heroImage2 from '../images/brandingPink.png';
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";


const Home = () => {
    return (
        <div className="frontPage">
            {/* Neon sign image not right for now */}
        {/* <img src={heroImage} alt="Neon sign reading 'This is the Sign You've been Waiting For'" className={styles.heroImage}/>         */}
        <img src={heroImage2} alt="Woman's hand pouring canned beverage into a martini glass on a pink background'" className={styles.heroImage2}/>
        <h1>
        Recipes that hit the spot and fit with your goals!
        </h1>
        <Veggie />
        <Popular />
        </div>
    );
}

export default Home