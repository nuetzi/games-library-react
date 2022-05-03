import PSPGames from "../queries/topPSPortable.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Sony Playstation Portable (PSP)</h2>
            <div className="queryContainer">
                {PSPGames.map((each, i) => {
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