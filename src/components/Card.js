import React from 'react';

const Card = ({ id, name }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow b32 shadow-5 tc'>
            <img alt='robotImg' src={`https://robohash.org/${name}`} />
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default Card;