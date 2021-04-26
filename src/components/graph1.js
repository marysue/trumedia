import { useEffect, useState } from 'react';
import ReactTable from 'react-table-6';
import styles from 'react-table-6/react-table.css';
import { useLocation } from 'react-router-dom';
import { fetchPlayerStats } from '../store/player'


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
            const opponent =
            <div style={{display: "flex"}}>
                    {stat.opponent} <img src={stat.opponentImage} style={{height:"40px"}} alt="opponentImage" />
                    </div>


                    const gameDate =  new Date(stat.gameDate);
                    const gameDateStr = (gameDate.getMonth() + 1) + "-" + gameDate.getDate() + "-" + gameDate.getFullYear();
            return ({

                week: stat.week,
                date: gameDateStr,
                opponent: opponent,
                ydsAtt: (stat.PsYds / stat.Att).toFixed(2),
                complPct: (stat.Cmp / stat.Att).toFixed(2),
                // attempts: stat.Att,
                // completions: stat.Cmp,
                // interceptions: stat.Int,
                // passingTouchdowns: stat.PsTD,
                // passingYards: stat.PsYds,
                // rushingTouchdowns: stat.RshTD,
                // rushingYards: stat.RshYds,
                // rushes: stat.Rush,
                // sacks: stat.Sack
            }
                )
        })
        return data;
    }

    function prepareColumnsForTable () {
        const columns = [
            { Header: 'Week', accessor: 'week'},
            { Header: 'Game Date', accessor: 'date' },
            { Header: 'Opponent', accessor: 'opponent' },
            { Header:  'Yards/Attempt', accessor: 'ydsAtt'},
            { Header: 'Completion %', accessor: 'complPct'},
            // { Header: 'Attempts', accessor: 'attempts' },
            // { Header: 'Completions', accessor: 'completions' },
            // { Header: 'Interceptions', accessor: 'interceptions' },
            // { Header: 'Passing Touchdowns', accessor: 'passingTouchdowns' },
            // { Header: 'Passing Yards', accessor: 'passingYards' },
            // { Header: 'Rushing Touchdowns', accessor: 'rushingTouchdowns'},
            // { Header: 'Rushing Yards', accessor: 'rushingYards'},
            // { Header: 'Rushes', accessor: 'rushes'},
            // { Header: 'Sacks', accessor: 'sacks'}
        ]
        return columns;
    }
    if (playerInfo) {

        const columns = prepareColumnsForTable();
        const data = prepareDataForTable();
        console.log("playerInfo:  ", playerInfo);
        return (
            <>
             {/* <div> Player Id:  { playerInfo[0].playerId } */}
             <div>
                     <p style={{fontWeight: "bold"}}>Name:  {playerInfo[0].fullName}</p>
                     <img src={playerInfo[0].playerImage} alt="playerImage"/>

                     <p style={{fontWeight: "bold"}}>Team:  {playerInfo[0].team}
                     <img src={playerInfo[0].teamImage} alt="teamImage" /></p>
                     <p style={{fontWeight: "bold"}}>Season:  {playerInfo[0].seasonYear}</p>
                </div>

                <ReactTable getTdProps={(state, rowInfo, column) => ({
              style: {
                height: '40px',
              },
          })}style={{marginTop: "30px", width: "60%", marginLeft: "auto", marginRight: "auto"}} showPagination={false} data={data} columns={columns} styles={{styles}} defaultPageSize={data.length}/>
            </>
       )
    } else {
        return "No playerInfo"
    }
}

export default Graph1;
