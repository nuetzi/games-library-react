import XboxSeriesXGames from "../queries/topXBoxSeriesXS.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Microsoft Xbox Series X|S</h2>
            <div className="queryContainer">
                {XboxSeriesXGames.map((each, i) => {
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