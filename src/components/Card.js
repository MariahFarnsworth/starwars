import React from 'react';

class Card extends React.Component{

    constructor(){
        super()
        this.state ={
            toggle:false
        }
            
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    mouseEnter(){
        this.setState({toggle: true});
        console.log('in');
    }
    mouseLeave(){
        this.setState({toggle: false});
        console.log('out');
    }


    render(){
   
        if(this.state.toggle === false){
            return(
                <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                    <h2>{this.props.name}</h2>
                </div>
            );
        }else{
            return(
                <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <h2>{this.props.name}</h2>
                <p>Height: {this.props.height}</p>
                <p>Mass: {this.props.mass}</p>
                <p>Gender: {this.props.gender}</p>
                <p>Birth Year: {this.props.birth_year}</p>
                 </div>
             );
        }
    }
}

export default Card;