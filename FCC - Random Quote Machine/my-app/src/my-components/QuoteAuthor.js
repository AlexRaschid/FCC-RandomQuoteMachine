import React from 'react';

export default class QuoteAuthor extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <blockquote className="blockquote">
                <p id="author" className="col-12 blockquote-footer float-right">xXx_PoopMaster_xXx</p>    
            </blockquote>
        );

    }
}