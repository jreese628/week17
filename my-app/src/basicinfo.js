import React from 'react';

const person = (props) => {
    return (
        <div className='Cards'>
            <p> My name is {props.name} and I am {props.age} and I was born on {props.dob}.</p>
        </div>
    )
}

export default person;