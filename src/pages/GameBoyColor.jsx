import GBCGames from "../queries/topGBColor.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Nintendo Game Boy Color</h2>
            <div className="queryContainer">
                {GBCGames.map((each, i) => {
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