import React from 'react';

export default class QuoteButtons extends React.Component{
    
    constructor(props){
        super(props);

        this.alterPage = this.alterPage.bind(this);
    }

    alterPage(){
        this.props.generateQuote();
        this.props.updateBackground();

            
    }

    render(){
        return(
            <div>
                <a id="tweet-quote" rel="noopener noreferrer" href="https://twitter.com/intent/tweet" target="_blank" className="col-2 btn btn-primary">
                    <i className="fa-brands fa-twitter" />        
                </a>
                <a id="new-quote" onClick={this.alterPage} className="col-3 float-right btn btn-primary">New joke</a>
            </div>
        );
        
    }
}