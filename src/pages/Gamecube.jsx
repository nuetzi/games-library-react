import GamecubeGames from "../queries/topGamecube.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Nintendo GameCube</h2>
            <div className="queryContainer">
                {GamecubeGames.map((each, i) => {
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