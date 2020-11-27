import React from 'react';

const Starwars = props => {
    return (
        <div className='starwars'>
            <h2>Name: {props.starwars.name}</h2>
            <h3>Birth Year: {props.starwars.birth_year}</h3>
            <h3>Eye Color: {props.starwars.eye_color}</h3>
            <h3>Gender: {props.starwars.gender}</h3>
        </div>
    );
};
export default Starwars;
