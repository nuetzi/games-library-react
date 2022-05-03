import WiiGames from "../queries/topWii.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Nintendo Wii</h2>
            <div className="queryContainer">
                {WiiGames.map((each, i) => {
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