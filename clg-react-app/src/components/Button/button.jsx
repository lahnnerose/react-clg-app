import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
    return (
        <button type={props.type} className={styles.button}>
            {props.children}
        </button>
    )
}

export default Button;