import React from 'react';
import Recipe from '../Recipe/Recipe';
import styles from "../Recipe List/RecipeList.module.css"

const RecipeList = (props) => {
    if(props.recipes.length === 0) {
        return null
    }
    return (
        <section>
            <ul className={styles["recipe-list"]}>
                {props.recipes.map((recipe) => (
                        <Recipe key={recipe.id} name={recipe.title} />
                ))}
            </ul>
        </section>
    )
}



export default RecipeList