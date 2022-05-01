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
            Genre(s): {game.genres} <br/>
            Year: {game.year} <br/>
            Platforms: {game.platforms} <br/>
            Critics' Rating: {game.rating} <br/>
            Summary: {game.summary} <br/>
            <a href={`${game.url}`}>More Info</a> <br/>
            <br/>
            <br/>
            <button onClick={removeGame}>REMOVE FROM LIBRARY</button>
        </div>
    );
}