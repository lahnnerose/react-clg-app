import React from 'react';
import classes from './Recipe.module.css'

const Recipe = (props) => {
    return (
        <li className={classes.Recipe}>
            <h2>{props.name}</h2>
        </li>
    )
}

export default Recipe;