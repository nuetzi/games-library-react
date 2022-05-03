import XboxOneGames from "../queries/topXBoxOne.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Microsoft Xbox One</h2>
            <div className="queryContainer">
                {XboxOneGames.map((each, i) => {
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