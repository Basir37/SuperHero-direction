import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Writer.css';

const Writer = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
   
    const{name,category,country,bestSold,image,language,books} = props.writer;
    return (
        <div className="writer">
            <img src={image} alt="image of writer" />
            <h2>{name}</h2>
            <p>Special <b> {category}</b></p>
            <p>From <b>{country}</b></p>
            <h3>Writer of {bestSold}</h3>
            <p>Written in {language}</p>
            <h3>Total Books : {books}</h3>
            <button className="regular-button" onClick={()=>props.addWriterToList(props.writer)}>{cartIcon} Add to list</button>
            
        </div>
    );
};

export default Writer;