import PS1Games from "../queries/topPS1.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Sony Playstation</h2>
            <div className="queryContainer">
                {PS1Games.map((each, i) => {
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