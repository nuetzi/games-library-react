import GameGearGames from "../queries/topGameGear.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Sega Game Gear</h2>
            <div className="queryContainer">
                {GameGearGames.map((each, i) => {
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