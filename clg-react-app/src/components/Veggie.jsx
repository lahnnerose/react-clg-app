import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styles from "./popular.module.css";


function Veggie() {

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    },[]);

    const getVeggie = async () => {
        const check = localStorage.getItem("veggie");

        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
             
            const data = await api.json();

            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data.recipes);
        }    

    };

    return (
            <div>
                    <div className={styles.wrapper}>
                        <h3>Our Vegetarian Picks</h3>

                            <Splide options={{
                                perPage: 3,
                                pagination: false,
                                drag: 'free',
                                gap: '2.5rem',
                            }}>

                        {veggie.map((recipe) => {
                            return(
                                <SplideSlide key={recipe.id}>
                                <div className={styles.card}>
                                <div className={styles.gradient}>
                                
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                   
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


export default Veggie;