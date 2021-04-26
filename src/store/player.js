
import { getApiToken } from './api';

export const SET_PLAYER_LIST = 'players/playersListList';
export const SET_PLAYER_STATS = 'players/playerStats';
export const REMOVE_PLAYER_LIST = 'players/playersListList/remove';
export const REMOVE_PLAYER_STATS = 'players/playerStats/remove';

//actions
export const setPlayerList = playerList => ({ type: SET_PLAYER_LIST, playerList });
export const setPlayerStats = playerStats => ({ type: SET_PLAYER_STATS, playerStats });
export const removeplayersList = () => ( { type: REMOVE_PLAYER_LIST} );
export const removePlayerStats = (id) => ({ type: REMOVE_PLAYER_STATS, id });

//reducers
//state should look like:
//  state.players = [ {playerId, fullName, playerImage, teamImage }, {...} ... ]
//  state.player.stats = [
//       { }, { }, { ... }, ... ]
export default function reducer(state={}, action) {
    switch (action.type) {
        case SET_PLAYER_LIST: {
            const newState = {...state};
            //add the players info
            //assume NO player info exists, as this will wipe out the old players info
            if (newState.playerList) {
              delete newState.playerList
            }
            newState.playerList = action.playerList
            return newState;
        }
        case REMOVE_PLAYER_LIST: {
            const newState = { ...state };
            delete newState.playerList;
            console.log("After removing players info, state: ", newState);
            return newState
        }
        case SET_PLAYER_STATS: {
            const newState = {...state }
            console.log("Reducer: playerStats:  ", action.playerStats);
            newState.playerStats = action.playerStats;
            return newState
        }
        case REMOVE_PLAYER_STATS: {
            const newState = {...state}
            delete newState.playerStats[action.id]
            console.log("After removing a player stats for player id:  ", action.id, ":  ", newState.playerStats);
            return newState;
        }
        default: return state;
    }
}
// https://project.trumedianetworks.com/api/nfl/players
// -H 'accept: application/json' \
// -H `tempToken: ${apiToken}'

/* Response:
[
    {
      "playerId": 2543477,
      "fullName": "Blake Bortles",
      "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
      "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png"
    },
    {
      "playerId": 2543499,
      "fullName": "Derek Carr",
      "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR358797.png",
      "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2520.png"
    },
    {
      "playerId": 2560800,
      "fullName": "Baker Mayfield",
      "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MAY483453.png",
      "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/1050.png"
    }
  ]
*/



export const fetchPlayerList = async () => {
    try {

         const apiToken = await getApiToken();

        console.log("apiToken: ", apiToken);
        const response = await fetch(`https://project.trumedianetworks.com/api/nfl/players`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'temptoken': `${apiToken.token}`, },
           // headers: { 'Content-Type': 'application/json', 'temptoken': 'a8d2525e-d48b-4a7c-85d7-dc9f9bbe36ca' },
        });

        if (response.ok) {
            return await response.json();

        } else {
            throw response.status
        }
    } catch (e) {
        console.log("PlayersList fetch error: ", e);
    }
}
/* Response:
[
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 1,
    "gameDate": "2018-09-09 13:00:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "NYG",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/3410.png",
    "Att": 33,
    "Cmp": 18,
    "Sack": 1,
    "Int": 1,
    "PsYds": 176,
    "PsTD": 1,
    "Rush": 4,
    "RshYds": 42,
    "RshTD": 0
  },
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 2,
    "gameDate": "2018-09-16 16:25:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "NE",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/3200.png",
    "Att": 45,
    "Cmp": 29,
    "Sack": 0,
    "Int": 1,
    "PsYds": 376,
    "PsTD": 4,
    "Rush": 6,
    "RshYds": 35,
    "RshTD": 0
  },
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 3,
    "gameDate": "2018-09-23 13:00:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "TEN",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/2100.png",
    "Att": 34,
    "Cmp": 21,
    "Sack": 3,
    "Int": 0,
    "PsYds": 155,
    "PsTD": 0,
    "Rush": 5,
    "RshYds": 27,
    "RshTD": 0
  },
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 4,
    "gameDate": "2018-09-30 13:00:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "NYJ",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/3430.png",
    "Att": 38,
    "Cmp": 29,
    "Sack": 2,
    "Int": 1,
    "PsYds": 388,
    "PsTD": 2,
    "Rush": 3,
    "RshYds": 28,
    "RshTD": 0
  },
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 5,
    "gameDate": "2018-10-07 13:00:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "KC",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/2310.png",
    "Att": 61,
    "Cmp": 33,
    "Sack": 5,
    "Int": 4,
    "PsYds": 430,
    "PsTD": 1,
    "Rush": 4,
    "RshYds": 34,
    "RshTD": 1
  },
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 6,
    "gameDate": "2018-10-14 16:25:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "DAL",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/1200.png",
    "Att": 26,
    "Cmp": 15,
    "Sack": 3,
    "Int": 1,
    "PsYds": 149,
    "PsTD": 1,
    "Rush": 4,
    "RshYds": 22,
    "RshTD": 0
  },
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 7,
    "gameDate": "2018-10-21 13:00:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "HOU",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/2120.png",
    "Att": 12,
    "Cmp": 6,
    "Sack": 0,
    "Int": 0,
    "PsYds": 61,
    "PsTD": 0,
    "Rush": 6,
    "RshYds": 30,
    "RshTD": 0
  },
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 8,
    "gameDate": "2018-10-28 09:30:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "PHI",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/3700.png",
    "Att": 41,
    "Cmp": 24,
    "Sack": 4,
    "Int": 0,
    "PsYds": 286,
    "PsTD": 1,
    "Rush": 8,
    "RshYds": 43,
    "RshTD": 0
  },
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 10,
    "gameDate": "2018-11-11 13:00:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "IND",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/2200.png",
    "Att": 38,
    "Cmp": 26,
    "Sack": 0,
    "Int": 0,
    "PsYds": 320,
    "PsTD": 2,
    "Rush": 2,
    "RshYds": 8,
    "RshTD": 0
  },
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 11,
    "gameDate": "2018-11-18 13:00:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "PIT",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/3900.png",
    "Att": 18,
    "Cmp": 10,
    "Sack": 6,
    "Int": 0,
    "PsYds": 104,
    "PsTD": 0,
    "Rush": 2,
    "RshYds": 17,
    "RshTD": 0
  },
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 12,
    "gameDate": "2018-11-25 13:00:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "BUF",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/610.png",
    "Att": 23,
    "Cmp": 12,
    "Sack": 3,
    "Int": 2,
    "PsYds": 127,
    "PsTD": 1,
    "Rush": 6,
    "RshYds": 39,
    "RshTD": 0
  },
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 16,
    "gameDate": "2018-12-23 13:00:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "MIA",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/2700.png",
    "Att": 6,
    "Cmp": 5,
    "Sack": 1,
    "Int": 0,
    "PsYds": 39,
    "PsTD": 0,
    "Rush": 4,
    "RshYds": 25,
    "RshTD": 0
  },
  {
    "playerId": 2543477,
    "fullName": "Blake Bortles",
    "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
    "seasonYear": 2018,
    "week": 17,
    "gameDate": "2018-12-30 13:00:00",
    "team": "JAX",
    "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png",
    "opponent": "HOU",
    "opponentImage": "https://static.trumedianetworks.com/images/nfl/teams/2120.png",
    "Att": 28,
    "Cmp": 15,
    "Sack": 3,
    "Int": 1,
    "PsYds": 107,
    "PsTD": 0,
    "Rush": 4,
    "RshYds": 15,
    "RshTD": 0
  }
]

*/
export const fetchPlayerStats = async (id) => {
    try {
        const apiToken = await getApiToken();
        const response = await fetch (`https://project.trumedianetworks.com/api/nfl/player/${id}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'temptoken': `${apiToken.token}`, },
            //headers: { 'Content-Type': 'application/json', 'temptoken': 'a8d2525e-d48b-4a7c-85d7-dc9f9bbe36ca' },
        });

        if (response.ok) {
            return await response.json();
        } else {
            throw response.status
        }
    } catch (e) {
        console.log("PlayersStats fetch error: ", e);
    }
}
