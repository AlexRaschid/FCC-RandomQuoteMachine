import React from 'react';

export default class QuoteAuthor extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <blockquote className="blockquote">
                <p id="author" className="col-12 blockquote-footer text-right">Jokeinator9000</p>    
            </blockquote>
        );

    }
}