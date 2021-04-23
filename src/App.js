import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPlayersList, setPlayerList, setPlayerStats, fetchPlayerStats } from './store/player';
import Graph1 from './components/graph1';
import NavigationHeader from './components/NavigationHeader';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const playersStatsArr = [];
    (async () => {
      const playerList = await fetchPlayersList();
      dispatch(setPlayerList(playerList));

      for (let i = 0; i < playerList.length; i++) {
        const playerStats = await fetchPlayerStats(playerList[i].playerId);
        playersStatsArr.push({id: playerStats[i].playerId, stats: playerStats});
      }
      console.log("App.js:  playerStatsArr:  ", playersStatsArr);
      dispatch(setPlayerStats(playersStatsArr));

    })();

  });
  return (
    <div className="App">
      <NavigationHeader></NavigationHeader>
     <Graph1></Graph1>
    </div>
  );
}

export default App;
