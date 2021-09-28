import React from 'react';
import Name from '../Name/Name';
import './Calculation.css';

const Calculation = (props) => {
   const {calculation} = props;
   let total = 0;
   let writerNames=[...calculation];
   
   for(const writer of calculation){
        total = parseInt(total) + parseInt(writer.books);
   };
    return (
        <div>
            <h1>Writers Selected : {props.calculation.length} </h1>
            <h3>Total Books Collected : {total} </h3>
            <hr/>
            <h2>Selected Writers:{writerNames.map(writerName=><Name key={writerName.name} name={writerName} />)}  </h2>
        </div>
    );
};

export default Calculation;