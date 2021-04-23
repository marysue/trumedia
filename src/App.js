import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPlayersList, setPlayersInfo, setPlayerStats, fetchPlayerStats } from './store/player';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let playerList = [];
    (async () => {
      const response = await fetchPlayersList();
      console.log("Response: ", response);
      dispatch(setPlayersInfo(response));
      console.log("response:  ", response);
      for (let i = 0; i < response.length; i++) {
        console.log(response[i].playerId);
        const player = await fetchPlayerStats(response[i].playerId);
        playerList.push(player);
        dispatch(setPlayerStats(playerList));
      }


    })();

  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit HEELLO<code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
