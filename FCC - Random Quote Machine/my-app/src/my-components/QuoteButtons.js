import React from 'react';

export default class QuoteButtons extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <a id="tweet-quote" className="col-2 btn btn-primary">
                    <i className="fa-brands fa-twitter" />        
                </a>
                <a id="new-quote" href="#" className="col-3 float-right btn btn-primary">New Joke</a>
            </div>
        );
        
    }
}