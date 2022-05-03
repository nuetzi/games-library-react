import Nintendo3DSGames from "../queries/top3DS.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Nintendo 3DS</h2>
            <div className="queryContainer">
                {Nintendo3DSGames.map((each, i) => {
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