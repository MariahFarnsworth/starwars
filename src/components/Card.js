import React from 'react';

const Card = ({name})=>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <h2>{name}</h2>
        </div>
    );
}

export default Card;