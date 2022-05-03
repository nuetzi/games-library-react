import { useState, useEffect } from "react";
import { getTopPS3 } from "../services/importsAPI";

export default function Playstation3() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getTopPS3()
        .then(res => setGames(res.data))
    }, [games]);

    return(
        <div className="libraryMain">
            <h2>Sony Playstation 3</h2>
            <div className="importsContainer">
                {games.map((each, i) => {
                    return(
                        <div className="importsDisplay" key={i}>
                            <h4><a href={`/${each._id}`}>{each.name}</a></h4>
                            <a href={`${each.url}`} target="_blank" rel="noopener noreferrer"><img src={`https:${each.cover.url}`} alt={each.title}/></a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}