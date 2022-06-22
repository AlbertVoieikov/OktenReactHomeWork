import React from 'react';

function Characters(props) {
    const {name, surname, age, info, photo} = props;
    return (
        <div>
            <h2>{name} {surname}</h2>
            <div>{age}</div>
            <p>{info}</p>
            <img src={photo} alt=""/>
        </div>
    )
}

export default Characters;