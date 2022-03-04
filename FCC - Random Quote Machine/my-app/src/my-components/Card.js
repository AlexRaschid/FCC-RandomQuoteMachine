import React from 'react';

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
                console.log(data.jokes);
                let cleanJokes = data.jokes.map(objNum => {
                    //console.log(Object.values(objNum.flags));
                    //console.log(objNum);
                    //console.log(Object.values(objNum.flags));

                    //objNum.flags is an array of boolean values. I want the jokes
                    //that have ALL boolean values of false
                    let isCurrentJokeClean = Object.values(objNum.flags).every(value => {
                        console.log("value: " + value);
                        return value === true ? false : true;
                    });
                    
                    switch(isCurrentJokeClean){
                        case true:
                            return objNum.joke;
                    }

                    //filter(Boolean) gets rid of any falsy values ie undefined
                }).filter(Boolean);

                //console.log(cleanJokes);
                

                this.setState({
                    jokes: [...cleanJokes]
                });
                //console.log(this.state.jokes);
            });
            
    }
    
    
    render(){
        return(
        <div className="container">
           <div className="row">

                
                    <div className="card col-md-8 mx-auto">
                        <div className="card-body">
                            <p>{console.log(this.state.jokes)}</p>
                            <p>Author here</p>
                        </div>
                        <div className="row">
                            <button type="button" className="col-2 btn btn-primary">Button 1</button>
                            <button href="#" className="col-2 btn btn-primary">Button 2</button>
                            <button href="#" className="col-2 btn btn-primary">Button 3</button>
                        </div> 
                        
                    </div>
                
            
          </div>
        </div>
        );
    }
}


