import React from 'react';
import Card from './Card';

class CardList extends React.Component{


render(){
    
    return(
        <div>
            {
                this.props.chars.map((char, i)=>{
                    return(
                        <Card
                        key={this.props.chars[i].name}
                        name={this.props.chars[i].name}

                        height={this.props.chars[i].height}
                        mass={this.props.chars[i].mass}
                        gender={this.props.chars[i].gender}
                        birth_year={this.props.chars[i].birth_year}
                        />
                    );
                })
            }
        </div>
    );
}
}

export default CardList;