import PS3Games from "../queries/topPS3.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Sony Playstation 3</h2>
            <div className="queryContainer">
                {PS3Games.map((each, i) => {
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