import React from 'react';
import Card from './Card';

const CardList=({chars})=>{
    return(
        <div>
            {
                chars.map((char, i)=>{
                    return(
                        <Card 
                        key={chars[i].name}
                        name={chars[i].name}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;