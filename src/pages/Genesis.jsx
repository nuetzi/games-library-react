import GenesisGames from "../queries/topGenesis.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Sega Genesis</h2>
            <div className="queryContainer">
                {GenesisGames.map((each, i) => {
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