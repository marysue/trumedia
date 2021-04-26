import { useEffect, useState } from 'react';
import {  useDispatch  } from 'react-redux';
import ReactTable from 'react-table-6';
import styles from 'react-table-6/react-table.css';
import { useLocation } from 'react-router-dom';
import { fetchPlayerStats, setPlayerStats } from '../store/player';


const Graph1 = () => {
    //const dispatch = useDispatch();
    const location = useLocation()
    const playerId = location.pathname.slice(12);
    const [playerInfo, setPlayerInfo] = useState(null);

    useEffect ( () => {
        console.log("PlayerId:  ", playerId);
        (async () => {
            const response = await fetchPlayerStats(playerId);
            console.log("PlayerInfo:  ", response);
            setPlayerInfo(response);


        })();

    }, [playerId]);

   function prepareDataForTable() {

        const stats = playerInfo
        let data = stats.map( (stat) => {
            return ({
                week: stat.week,
                date: stat.gameDate,
                opponent: stat.opponent,
                opponentImage: <img src={stat.opponentImage} alt="opponentImage" />,
                attempts: stat.Att,
                completions: stat.Cmp,
                interceptions: stat.Int,
                passingTouchdowns: stat.PsTD,
                passingYards: stat.PsYds,
                rushingTouchdowns: stat.RshTD,
                rushingYards: stat.RshYds,
                rushes: stat.Rush,
                sacks: stat.Sack })
        })
        return data;
    }

    function prepareColumnsForTable () {
        const columns = [
            { Header: 'Week', accessor: 'week'},
            { Header: 'Game Date', accessor: 'date' },
            { Header: 'Opponent', accessor: 'opponent' },
            { Header: 'Opponent Image', accessor: 'opponentImage' },
            { Header: 'Attempts', accessor: 'attempts' },
            { Header: 'Completions', accessor: 'completions' },
            { Header: 'Interceptions', accessor: 'interceptions' },
            { Header: 'Passing Touchdowns', accessor: 'passingTouchdowns' },
            { Header: 'Passing Yards', accessor: 'passingYards' },
            { Header: 'Rushing Touchdowns', accessor: 'rushingTouchdowns'},
            { Header: 'Rushing Yards', accessor: 'rushingYards'},
            { Header: 'Rushes', accessor: 'rushes'},
            { Header: 'Sacks', accessor: 'sacks'}
        ]
        return columns;
    }
    if (playerInfo) {

        const columns = prepareColumnsForTable();
        const data = prepareDataForTable();
        console.log("playerInfo:  ", playerInfo);
        return (
            <>
             <div> Player Id:  { playerInfo[0].playerId }
                     <p>Name:  {playerInfo[0].fullName}</p>
                     <img src={playerInfo[0].playerImage} alt="playerImage"/>
                     <img src={playerInfo[0].teamImage} alt="teamImage" />
                     <p>Team:  {playerInfo[0].team}</p>
                     <p>SeasonYear:  {playerInfo[0].seasonYear}</p>
                </div>

                <ReactTable data={data} columns={columns} styles={{styles}} defaultPageSize={data.length}/>
            </>
       )
    } else {
        return "No playerInfo"
    }
}

    // const stats = playerInfo[0].stats
    // return (
    //     <>
    //         <div> Player Id:  { stats[0].playerId }</div>
    //         <p>Name:  {stats[0].name}</p>
    //         <img src={stats[0].playerImage} alt="playerImage"/>
    //         <img src={stats[0].teamImage} alt="teamImage" />
    //         <p>Team:  {stats[0].team}</p>
    //         <p>SeasonYear:  {stats[0].seasonYear}</p>

    //         { stats.map( (stat) => {
    //             return (
    //                 <>
    //                  <div  style={{marginLeft: "auto", marginRight: "auto", display: "block", borderBottom: "5px solid black"}}>Week: { stat.week }
    //                  <table style={{textAlign: "center"}}>
    //                      <tr>
    //                         <td>Week</td>
    //                         <td>{stat.week}</td>
    //                      </tr>
    //                      <tr>
    //                          <td>Date</td>
    //                          <td>{stat.gameDate}</td>
    //                      </tr>
    //                      <tr>
    //                          <td>Opponent</td>
    //                          <td>{stat.opponent} <img src={stat.opponentImage} alt="Opponent Image" /></td>
    //                      </tr>
    //                     <tr>
    //                         <td>Pass Attempts</td>
    //                         <td>{stat.Att}</td>
    //                     </tr>

    //                     <tr>
    //                         <td>Pass Completions</td>
    //                         <td>{stat.Cmp}</td>
    //                     </tr>
    //                     <tr>
    //                         <td>Team</td>
    //                         <td>{stat.team}</td>
    //                     </tr>
    //                     <tr>
    //                         <td>Pass Attempts</td>
    //                         <td>{stat.Att}</td>

    //                     </tr>
    //                     <tr>
    //                         <td>Pass Interceptions</td>
    //                         <td>{stat.Int}</td>

    //                     </tr>
    //                     <tr>
    //                         <td>Passing Touchdowns</td>
    //                         <td>{stat.PsTD}</td>

    //                     </tr>
    //                     <tr>
    //                         <td>Passing Yards</td>
    //                         <td>{stat.PsYds}</td>

    //                     </tr>
    //                     <tr>
    //                         <td>Rushing Touchdowns</td>
    //                         <td>{stat.RshTD}</td>

    //                     </tr>
    //                     <tr>
    //                         <td>Rushing Yards</td>
    //                         <td>{stat.RshYds}</td>

    //                     </tr>
    //                     <tr>
    //                         <td>Rushes</td>
    //                         <td>{stat.Rush}</td>

    //                     </tr>
    //                     <tr>
    //                         <td>Sacks</td>
    //                         <td>{stat.Sack}</td>
    //                     </tr>
    //                  </table>
    //                  </div>

    //                  </>
    //             )
    //         })
    //     }
    //     </>
   // )
// } else {
//     return "Loading..." }
//}

export default Graph1;
