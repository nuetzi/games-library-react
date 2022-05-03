import DreamcastGames from "../queries/topDreamcast.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Sega Dreamcast</h2>
            <div className="queryContainer">
                {DreamcastGames.map((each, i) => {
                    return(
                        <ul>
                        <li key={i}>
                        <a href={each.id}>{each.name}</a> <br/>
                        </li>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}