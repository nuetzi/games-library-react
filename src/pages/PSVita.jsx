import PSVitaGames from "../queries/topPSVita.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Sony Playstation Vita</h2>
            <div className="queryContainer">
                {PSVitaGames.map((each, i) => {
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