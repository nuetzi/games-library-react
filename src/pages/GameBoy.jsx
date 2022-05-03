import GBGames from "../queries/topGB.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Nintendo Game Boy</h2>
            <div className="queryContainer">
                {GBGames.map((each, i) => {
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