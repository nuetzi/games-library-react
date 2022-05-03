import { useState, useEffect } from "react";
import { getTopPS5 } from "../services/importsAPI";

export default function Playstation5() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getTopPS5()
        .then(res => setGames(res.data))
    }, [games]);

    return(
        <div className="libraryMain">
            <h2>Sony Playstation 5</h2>
            <div className="importsContainer">
                {games.map((each, i) => {
                    return(
                        <div className="importsDisplay" key={i}>
                            <h4><a href={`/${each._id}`}>{each.name}</a></h4>
                            <a href={`${each.url}`}><img src={`https:${each.cover.url}`} alt={each.title}/></a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}