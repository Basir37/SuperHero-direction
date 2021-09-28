import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Writer from '../Writer/Writer';
import './Writers.css';

const Writers = () => {
    const [writers,setWriters]=useState([]);
    const [calculation,setCalculation]=useState([]);
    useEffect(()=>{
        fetch('./writers.json')
        .then(res=>res.json())
        .then(data=>setWriters(data));
    },[])
    const addWriterToList=writer=>{
        const newCalculation = [...calculation,writer];
        setCalculation(newCalculation);
    }
    return (
        <div className="main-container">
            <div className='writers-container'>
            {
               writers.map(writer=><Writer addWriterToList={addWriterToList} key={writer.name} writer={writer}/>)
           }
            </div>
            <div>
                <Calculation calculation={calculation}/>
            </div>
          
        </div>
    );
};

export default Writers;