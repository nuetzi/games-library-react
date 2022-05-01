import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteGame, getGame } from "../services/libraryAPI";

export default function Show() {
    const nav = useNavigate();
    const { id } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        getGame(id)
        .then(res => setGame(res.data))
    }, []);

    const removeGame = () => {
        deleteGame(id);
        nav("/library");
    };

    return(
        <div className="showGame">
            <h2>{game.title}</h2>
            <img src={`http:${game.cover}`} /> <br/>
            <div className="showInfo">
            <ul>
            <li><b>Genre(s):</b> {game.genres} </li>
            <li><b>Year:</b> {game.year} </li>
            <li><b>Platforms:</b> {game.platforms} </li>
            <li><b>Critics' Rating:</b> {game.rating} </li>
            <li><b>Summary:</b> {game.summary} </li>
            <li><a href={`${game.url}`} target="_blank" rel="noopener noreferrer">More Info</a> </li>
            </ul>
            </div>
            <br/>
            <br/>
            <button onClick={removeGame}>REMOVE FROM LIBRARY</button>
        </div>
    );
}