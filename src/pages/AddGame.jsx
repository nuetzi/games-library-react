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
            summary: e.target.summary.value
        };
        addGame(newGame);
        navigate("/");
    };

    return (
        <div className="main">
            <h2>Add a New Game</h2>
            <form onSubmit={createGame}>
                Title: <input type="text" name="title" /> <br/>
                Genres: <input type="text" name="genres" /> <br/>
                Year: <input type="number" name="year" min="1972" max="2022"/> <br/>
                Cover: <input type="text" name="cover" /> <br/>
                Rating: <input type="number" name="rating" min="0" max="100" step="0.01" /> <br/>
                Platforms: <input type="text" name="platforms" /> <br/>
                <br/>
                <textarea name="summary" cols="100" rows="25"></textarea> <br/>
                <input type="submit" />
            </form>
        </div>
    );
}