import DSGames from "../queries/topNintendoDS.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Nintendo DS</h2>
            <div className="queryContainer">
                {DSGames.map((each, i) => {
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