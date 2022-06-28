
import './App.css';
import PLAYER from './player/player';
import { useState } from "react";

const infoPlayer = [
  {
    id: 1,
    name: "Quang Hai",
    position: "ST",
    age: 38,
    rate: 10,

  },
  {
    id: 2,
    name: "Van Persi",
    position: "ST",
    age: 41,
    rate: 9,

  },
  {
    id: 3,
    name: "B. Leno",
    position: "GK",
    age: 20,
    rate: 8,

  },
  {
    id: 4,
    name: "T. Henry",
    position: "ST",
    rate: 100,
    age: 20,

  },
];
function App() {
  const [player, setPlayer] = useState(infoPlayer);
  const addPlayer = () => {
    const newPlayer = {
      id: 5,
      name: "Phuoc Thinh",
      position: "luom banh",
      rate: -100,
      age: 18,
    }
    const newState = [...player,newPlayer];
    setPlayer(newState);
  }
  const firePlayer = () => {
    const newlist = player.filter((player) => player.id !==5 );
    setPlayer(newlist);
    

    
  }

  const list = player.map((user) => <PLAYER key={user.id} player={user} />)


  
  return (
    <div className="App" >
      <div className="btn">

      <button onClick={addPlayer} className="addNewPlayer" > + Add Player </button>
      <button onClick={firePlayer} className="removeNewPlayer" > - Remove New Player</button>
      </div>

      {list}
    </div>
  );
}

export default App;
