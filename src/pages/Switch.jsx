import SwitchGames from "../queries/topSwitch.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Nintendo Switch</h2>
            <div className="queryContainer">
                {SwitchGames.map((each, i) => {
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