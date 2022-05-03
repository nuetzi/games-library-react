import PS5Games from "../queries/topPS5.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Sony Playstation 5</h2>
            <div className="queryContainer">
                {PS5Games.map((each, i) => {
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