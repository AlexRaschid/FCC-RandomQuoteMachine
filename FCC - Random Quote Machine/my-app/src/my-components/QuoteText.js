import React from 'react';

export default class QuoteText extends React.Component{
    
    constructor(props){
        super(props);
    }


    render(){
        return(
        <div className="row">

            <p id="text" className="">
                <i className="fas fa-quote-left" />
                     {` ${this.props.jokes[0]} `} 
                <i className="fas fa-quote-right" />
            </p>    
        </div>
        );

    }
}