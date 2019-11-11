import React from 'react';
import styles from './Quote.module.css';

const quote = (props) => {
    const quoteContent = (
        <div className={styles.Quote}>
            <h2>{props.content}</h2>
            <h3>- {props.author} -</h3>
            <button onClick={props.click}>New Quote</button>
        </div>
    );

    return (
        props.content ? quoteContent : null
    )
}

export default quote;