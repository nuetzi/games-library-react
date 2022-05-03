import WiiUGames from "../queries/topWiiU.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Nintendo Wii U</h2>
            <div className="queryContainer">
                {WiiUGames.map((each, i) => {
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