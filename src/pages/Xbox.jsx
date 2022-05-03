import XboxGames from "../queries/topXBox.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Microsoft Xbox</h2>
            <div className="queryContainer">
                {XboxGames.map((each, i) => {
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