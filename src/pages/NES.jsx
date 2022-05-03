import NESGames from "../queries/topNES.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Nintendo Entertainment System (NES)</h2>
            <div className="queryContainer">
                {NESGames.map((each, i) => {
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