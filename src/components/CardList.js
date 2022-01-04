import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    if (0) {
        throw new Error('Dead...');
    }
    return(
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={robots[i].id} 
                            id={robots[i].id} 
                            name={robots[i].name}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList