// arrow function synthax
 
const players = [
  {
    name: "Lori",
    score: 100
   
  },
{
    name: "Simon",
    score: 100
   
  },
   {
    name: "Peter",
    score: 10
   
  },
{
    name: "John",
    score: 50
   
  },
{
    name: "Gary",
    score: 90
   
  },

];



const Header = (props) => {
   return (
    <header>
     <h1>{ props.title }</h1>     
     <span className="stats">Players: { props.totalPlayers }</span>
     
     </header>
    
    );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
      {props.name}
    </span>
        
    <Counter score={ props.score } />
    
    </div>
   
    );
}


const Counter = (props) => {
  return (
    
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment"> + </button>
</div>
   );
}

const App = (props) => {

  return (
  
  <div className="scoreboard">
    <Header 
  title="Our Scoreboard" 
  totalPlayers={props.initialPlayers.length} 
  />
 
  
  
    {/* Players list */}
  
  
  {props.initialPlayers.map( player =>
     <Player 
  name={player.name} 
  score={player.score}
  />
  
  
  )}
   </div>
  
  );
}

ReactDOM.render(
  <App initialPlayers={players}/>,
  document.getElementById('root')
);
  
  
  
  //map each of our Player objects to a Player component.
  //I'll write the callback as an arrow function that takes
  //the parameter player to represent the current item being
  // processed in the array.And the function will return a Player
  //component

//You'll often see components defined as arrow functions. Even though there's no real benefit to writing a component as an arrow function, it provides a more concise syntax.
//parent passed to child component
//Props is what React components use to talk to each other and share information. 
//Props pass data from parent componet to child component
//in the app component were passing data to the header component
//via the title and total players props.
// which are then consumed by header and displayed as content
// We still need to write the props for the player and counter components.
