import { useState, useEffect } from "react";
import { getLibrary } from "../services/libraryAPI";

export default function Library() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getLibrary()
        .then(res => setGames(res.data))
    }, []);

    return(
        <div className="libraryMain">
            <h2>My Library</h2>
            <div className="gamesContainer">
                {games.map((each, i) => {
                    return(
                        <div className="gamesDisplay" key={i}>
                            <h3><a href={`/${each._id}`}>{each.title}</a></h3>
                            <img src={`http:${each.cover}`} />
                            <p>{each.summary}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}