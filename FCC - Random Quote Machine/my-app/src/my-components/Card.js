import React from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import QuoteButtons from './QuoteButtons';

export class Card extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            joke: "",
            backgroundColor: ""
        }

        this.generateQuote = this.generateQuote.bind(this);
        this.updateBackground = this.updateBackground.bind(this);
    }

    componentDidMount(){
        this.generateQuote();
        this.updateBackground();

            
    }

    updateBackground(){
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
        document.body.style.transition = "all 2s"; 
        
        //I hate styling
        document.getElementById('tweet-quote').style.backgroundColor = randomColor;
        document.getElementById('tweet-quote').style.borderColor = randomColor;
        document.getElementById('tweet-quote').style.transition = "all 2s";

        document.getElementById('new-quote').style.backgroundColor = randomColor;
        document.getElementById('new-quote').style.borderColor = randomColor;
        document.getElementById('new-quote').style.transition = "all 2s";
        
        //Why do the quotes not transition color the same?
        document.getElementsByClassName('quoteIcon')[0].style.color = randomColor;
        document.getElementsByClassName('quoteIcon')[0].transition = "all 2s"; 
            document.getElementById('text').style.color = randomColor;
            document.getElementById('text').style.transition = "all 2s"; 
        document.getElementsByClassName('quoteIcon')[1].style.color = randomColor;
        document.getElementsByClassName('quoteIcon')[1].transition = "all 2s"; 

        document.getElementById('author').style.color = randomColor;
        document.getElementById('author').style.transition = "all 2s"; 
    }

    

    generateQuote(){
        //https://dad-jokes.p.rapidapi.com/random/joke?count=2
        //Returns a promise
        fetch("https://random-stuff-api.p.rapidapi.com/joke?tag=IT&blacklist=christian%2C%20God%2C%20political%2C%20racist%2C%20Black%2C%20gay%2C%20men%2C%20women", {
            "method": "GET",
            "headers": {
                "authorization": "3Df7JbqoBvTu",
                "x-rapidapi-host": "random-stuff-api.p.rapidapi.com",
                "x-rapidapi-key": "450c0aa454msheac48f88c4ff1fbp15d093jsn4cc347fe6f48"
            }
        })
        .then(response => response.json())
        .then(data => {
            let joke = data.joke

            this.setState({
                joke: joke 
            });

        }); 
            
             
        
    }
    
    render(){
        return(
        <div className="container h-100">
           <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    
                    <div id="quote-box" className="card col-md-8 mx-auto ">
                        <div className="card-body">
                            <QuoteText joke={this.state.joke}/>
                            {console.log(this.updateBackground)}
                            <QuoteAuthor />
                            <QuoteButtons generateQuote={this.generateQuote} updateBackground={this.updateBackground}/>
                        </div>
                    </div>
          </div>
        </div>
        );
    }
}


