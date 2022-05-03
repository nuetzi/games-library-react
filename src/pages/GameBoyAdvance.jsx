import GBAGames from "../queries/topGBA.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Nintendo Game Boy Advance</h2>
            <div className="queryContainer">
                {GBAGames.map((each, i) => {
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