import SaturnGames from "../queries/topSaturn.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Sega Saturn</h2>
            <div className="queryContainer">
                {SaturnGames.map((each, i) => {
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