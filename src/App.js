import './App.css';
import './index.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import { fetchPlayerList, setPlayerList } from './store/player';
import NavigationHeader from './components/NavigationHeader';
import NavigationFooter from './components/NavigationFooter';
import PlayersPage from './components/PlayersPage';
import Graph1 from './components/graph1';

function App() {
  const playerList = useSelector(state => state.player.playerList);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect( () => {
    setLoaded(true);
    (async() => {
      if (!playerList) {
       const pl = await fetchPlayerList();
      dispatch(setPlayerList(pl));

      }
    })();
  }, [dispatch, playerList]);

  if (!loaded) {
    return null;
  } else if (!playerList) {
    return null;
   } else  {
  return (
    <div className="App">
      <NavigationHeader></NavigationHeader>
      <BrowserRouter>
          <Switch>

            <Route
              path="/"
              exact
              render={ () => ( <PlayersPage /> )}
              />
            <Route
              path="/statistics/:id"
              render={ () => ( <Graph1 /> )}
            />
          </Switch>
        </BrowserRouter>
        <NavigationFooter></NavigationFooter>
    </div>
  );
}
}


export default App;
