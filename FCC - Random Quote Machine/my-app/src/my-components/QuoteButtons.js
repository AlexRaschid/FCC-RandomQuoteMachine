import React from 'react';

export default class QuoteButtons extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <button type="button" className="col-2 btn btn-primary">Button 1</button>
                <button href="#" className="col-2 btn btn-primary">Button 2</button>
                <button href="#" className="col-2 float-right btn btn-primary">Button 3</button>
            </div>
        );
        
    }
}