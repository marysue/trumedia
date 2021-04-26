import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';


const PlayersPage = () => {
    const players = useSelector(state => state.player.playerList);
    console.log("PlayersPage displaying.");
    if (players) {
    return(
        players.map( (player) => {
            return (
                <>
                    <div>
                        <Link
                            style={{textDecoration: "none" }}
                            to={`/statistics/${player.playerId}`}
                            key={player.playerId}
                            >
                            <img data-tip="Select player to view statistics" src={player.playerImage} alt={player.fullName}></img>
                            <ReactTooltip />
                        </Link>
                        <p>{player.fullName}  <img src={player.teamImage} alt={player.teamImage} /></p>
                    </div>
                </>
            )
        })

    )

}
}

export default PlayersPage;
