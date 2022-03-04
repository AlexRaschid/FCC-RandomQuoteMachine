import React from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import QuoteButtons from './QuoteButtons';

export class Card extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            jokes: []
        }
    }

    componentDidMount(){
        //Returns a promise
        fetch('https://v2.jokeapi.dev/joke/Dark?type=single&amount=10')
            //Response Object-.json returns another promise
            .then(response => response.json())
            .then(data => {
                //Returns Jokes and returns all clean jokes (all filters = false)
                let cleanJokes = data.jokes.map(objNum => {
                    //objNum.flags is an array of boolean values. I want the jokes
                    //that have ALL boolean values of false
                    let isCurrentJokeClean = Object.values(objNum.flags).every(value => {
                        return value === true ? false : true;
                    });

                    switch(isCurrentJokeClean){
                        case true:
                            return objNum.joke;
                    }
                    //filter(Boolean) gets rid of any falsy values ie undefined
                }).filter(Boolean);

                

                this.setState({
                    jokes: [...cleanJokes]
                });
            });
            
    }
    
    
    render(){
        return(
        <div className="container h-100">
           <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div className="card col-md-8 mx-auto ">
                        <div className="card-body">
                            <QuoteText jokes={this.state.jokes}/>
                            <QuoteAuthor />
                            <QuoteButtons />
                        </div>
                    </div>
          </div>
        </div>
        );
    }
}


