import { useState, useEffect } from "react";
import { getTopDreamcast } from "../services/importsAPI";

export default function Dreamcast() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getTopDreamcast()
        .then(res => setGames(res.data))
    }, [games]);

    return(
        <div className="libraryMain">
            <h2>Sega Dreamcast</h2>
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