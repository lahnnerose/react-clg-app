import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();


    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);

    },[params.search]);




  return (
    <Grid 
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
        {searchedRecipes.map((item) => {
        return (
            <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                </Link>
            </Card>
        );
    })}
    </Grid>
  );
}



const Grid = styled.div`
    margin: 4rem 0rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled.div`
min-height: 18rem;
border-radius: 2rem;
 overflow: hidden;
img {
    width: 100%;
    border-radius: 2rem;
}

a {
    text-decoration: none;
}

h4 {
    text-align: center;
    padding: 1rem;
}
`;


// h3 {
//     text-align: center;
//     padding: 1rem;
//     font-size: 1rem;
//     color: rgb(213, 104, 104);
//     position:absolute;
//     z-index: 2;
//     line-height: 0rem;
//     margin: 0rem;
// }


export default Searched;