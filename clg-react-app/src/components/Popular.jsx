import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styles from "./popular.module.css";
import { Link } from "react-router-dom";


function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async () => {
        const check = localStorage.getItem("popular");

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
             
            const data = await api.json();

            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }    

    };

    return (
            <div>
                    <div className={styles.Wrapper}>
                        <h3>Popular Recipes</h3>

                            <Splide options={{
                                perPage: 4,
                                pagination: false,
                                drag: 'free',
                                gap: '2.5rem',
                            }}>

                        {popular.map((recipe) => {
                            return(
                                <SplideSlide key={recipe.id}>
                                <div className={styles.card}>
                                <div className={styles.gradient}>
                                <Link to={"/recipe/" + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                </Link>
                                </div>
                                </div>
                                </SplideSlide>
                            );
                        })}
                        </Splide>
            </div>
    </div>
    );
}


export default Popular;