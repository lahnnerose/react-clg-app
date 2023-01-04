import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button/button";
import RecipeList from "./Recipe List/RecipeList";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";


function Popular() {

    const [recipes, setRecipes] = useState();

    useEffect(() => {
        fetchLowCalRecipes();
    }, []);

    const fetchLowCalRecipes = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.REACT_APP_API_KEY}&maxCalories=600&number=9`).then( (response) => response.json() );
        setRecipes(response);
        console.log(response);
    };

    return (
            <div>
            
                    <Wrapper>
                        <h3>LowCal Picks</h3>

                            <Splide options={{
                                perPage: 4,
                                pagination: false,
                                drag: 'free',
                                gap: '2.5rem',
                            }}>

                        {recipes && recipes.map((recipe) => {
                            return(
                                <SplideSlide key={recipe.id}>
                                <Card>
                                
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <Gradient />
                                </Card>
                                </SplideSlide>
                            );
                        })}
                        </Splide>
            </Wrapper>
    </div>
    );
}

const Wrapper = styled.div`
margin: 4rem 0 rem;
`;

const Card = styled.div`
min-height: 18rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

}

p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #FFF;
    width: 80%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content; center;
    align-items; center;
}
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Popular;