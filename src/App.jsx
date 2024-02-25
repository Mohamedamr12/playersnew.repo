import Player from "./components/player";
import players from "./players";


function App() {
  return (
    <div>
        {players.map((item) => (
          <Player item={item} />
        ))}
      </div>
          
     
  );
}

export default App
