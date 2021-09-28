import React from 'react';
import './Name.css';

const Name = (props) => {
   const {name} = props;
    return (
        <div>
            <div className="single-writer">{name.name}</div>
        </div>
    );
};

export default Name;