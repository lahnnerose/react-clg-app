import React from 'react';
import styles from './cuisine.module.css'
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
  <div className={styles.cuisineWrapper}>
        {cuisine.map((item) => {
        return (
            <div className={styles.cuisineCard} key={item.id}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
            </div>
        );
        })}
 </div>
  )};


export default Cuisine;