import PS4Games from "../queries/topPS4.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Sony Playstation 4</h2>
            <div className="queryContainer">
                {PS4Games.map((each, i) => {
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