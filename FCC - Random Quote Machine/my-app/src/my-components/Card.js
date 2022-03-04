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
                    
                    /*TODO: data.jokes is an obj that not only has the joke key, 
                            but also has a flag key on what type of joke it is.
                            Create Logic to filter out Jokes that have a full 
                            filter of false (ie the joke is good)
                    */

                    // let currentJokeClean = Object.values(objNum.flags).filter(value => {
                    //     return value === true ? false : true;
                    // });
                    //console.log("Clean Joke?: " + currentJokeClean);
                    
                    //console.log(objNum.joke);
                    //console.log(flagArr);
                    //We want to filter out any true flags- theyre what we DONT want
                    
                    
                    
                    // for(let i = 0; i < flagArr.length; i++){
                    //     switch(flagArr[i]){
                    //         case true:
                    //             return []
                    //         default:
                    //             break;
                    //     }
                    // }
                });

                console.log(cleanJokes);
                

                // this.setState({
                //     jokes: data.jokes.map()
                // });
            });
            
    }
    
    
    render(){
        return(
        <div className="container">
           <div className="row">

                
                    <div className="card col-md-8 mx-auto">
                        <div className="card-body">
                            <p>{console.log("Poop")}</p>
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


