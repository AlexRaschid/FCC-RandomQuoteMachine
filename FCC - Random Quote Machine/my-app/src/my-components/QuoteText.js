import React from 'react';

export default class QuoteText extends React.Component{
    
    constructor(props){
        super(props);
    }


    render(){
        return(
        <div className="">

            <p id="text" className="text-center">
                <i className="quoteIcon fas fa-quote-left" />
                     {` ${this.props.joke} `} 
                <i className="quoteIcon fas fa-quote-right" />
            </p>    
        </div>
        );

    }
}