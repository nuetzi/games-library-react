import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getGame, editGame, deleteGame } from "../services/libraryAPI";

export default function Edit() {
    const nav = useNavigate();
    const { id } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        getGame(id)
        .then(res => setGame(res.data))
    }, []);

    const modifyGame = e => {
        e.preventDefault()
        const updatedGame = {
            title: e.target.title.value,
            genres: e.target.genres.value,
            year: e.target.year.value,
            cover: e.target.cover.value,
            rating: e.target.rating.value,
            platforms: e.target.platforms.value,
            summary: e.target.summary.value,
            url: e.target.url.value
        };
        editGame(id, updatedGame);
        nav(`/library/${id}`);
    };

    const goBack = () => {
        nav(`/library/${id}`);
    };

    const removeGame = () => {
        deleteGame(id);
        nav("/library");
    };

    return(
        <div className="editContainer">
            <h2>Edit Game Info</h2>
            <form onSubmit={modifyGame}>
                Title: <input type="text" name="title" defaultValue={game.title} /> <br/>
                Genres: <input type="text" name="genres" defaultValue={game.genres} /> <br/>
                Year: <input type="number" name="year" min="1972" max="2022" defaultValue={game.year} /> <br/>
                Cover: <input type="text" name="cover" defaultValue={game.cover} /> <br/>
                Rating: <input type="number" name="rating" min="0" max="100" step="1" defaultValue={game.rating} /> <br/>
                Platforms: <input type="text" name="platforms" defaultValue={game.platforms} /> <br/>
                URL: <input type="text" name="url" defaultValue={game.url} /> <br/>
                <br/>
                Summary: <br/>
                <textarea name="summary" cols="100" rows="25" defaultValue={game.summary} ></textarea> <br/>
                <br/>
                <br/>
                <input type="submit" />
            </form>
            <br/>
            <button type="submit" onClick={goBack}>Go Back</button>
            <br/>
            <br/>
            <br/>
            <button type="submit" onClick={removeGame}>Remove Game</button>
        </div>
    );
}