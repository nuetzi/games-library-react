import { useState, useEffect } from "react";
import { getTopRated } from "../services/igdbAPI";

export default function Home() {
    const [games, setGames] = useState([]);

    // useEffect(() => {
    //     getTopRated()
    //     .then(res => setGames(res.data))
    // }, []);

    return(
        <div>
            <h2>Top 50</h2>
            {/* <div className="gamesContainer">
                {games.map((each, i) => {
                    return(
                        <div className="gamesDisplay" key={i}>
                        <a href={each.url}>{each.name}</a>
                        </div>
                    );
                })}
            </div> */}
        </div>
    );
}