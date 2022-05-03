import { useState, useEffect } from "react";
import { getTopXbox360 } from "../services/importsAPI";

export default function Xbox360() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getTopXbox360()
        .then(res => setGames(res.data))
    }, [games]);

    return(
        <div className="libraryMain">
            <h2>Microsoft Xbox 360</h2>
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