import React from 'react';

function Characters(props) {
    const {id, name, status, species, gender, image} = props;
    return (
        <div>
            <div>{id}</div>
            <h3>{name}</h3>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt=""/>
        </div>
    );

}

export default Characters