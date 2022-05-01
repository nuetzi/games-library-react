import { useNavigate } from "react-router-dom";
import { addGame } from "../services/libraryAPI";

export default function AddGame() {
    const navigate = useNavigate();

    const createGame = e => {
        e.preventDefault();
        const newGame = {
            title: e.target.title.value,
            genres: e.target.genres.value,
            year: e.target.year.value,
            cover: e.target.cover.value,
            rating: e.target.rating.value,
            platforms: e.target.platforms.value,
            summary: e.target.summary.value,
            url: e.target.url.value
        };
        addGame(newGame);
        navigate("/library");
    };

    return (
        <div className="addGameContainer">
            <h2>Add a New Game</h2>
            <div className="addGameInfo">
                <form onSubmit={createGame}>
                    Title: <input type="text" name="title" /> <br/>
                    Genres: <input type="text" name="genres" /> <br/>
                    Year: <input type="number" name="year" min="1972" max="2022"/> <br/>
                    Cover: <input type="text" name="cover" /> <br/>
                    Critics' Rating: <input type="number" name="rating" min="0" max="100" step="0.1" /> <br/>
                    Platforms: <input type="text" name="platforms" /> <br/>
                    URL: <input type="text" name="url" /> <br/>
                    <br/>
                    Summary: <br/>
                    <textarea name="summary" cols="100" rows="25"></textarea> <br/>
                    <br/>
                    <br/>
                    <input type="submit" />
            </form>
            </div>
        </div>
    );
}