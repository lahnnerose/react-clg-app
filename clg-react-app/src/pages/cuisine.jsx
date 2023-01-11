import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);


  return (
  <Wrapper
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
        {cuisine.map((item) => {
        return (
            <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                </Link>
            </Card>
        );
        })}
 </Wrapper>
  )};


const Wrapper = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    min-height: 18rem;
    border-radius: 2rem;
    overflow: hidden;

img {
    position: relative;
    width: 100%;
    object-fit: cover;
}

a {
    text-decoration: none;
}

h4 {
    text-align: center;
    padding: 1rem;
    color: rgb(80, 80, 80);
}


h3 {
    text-align: center;
    padding: 1rem;
    font-size: 1rem;
    color: rgb(213, 104, 104);
    position:absolute;
    z-index: 2;
    line-height: 1.25rem;
    /* margin: 0rem; */
}
`;

export default Cuisine;