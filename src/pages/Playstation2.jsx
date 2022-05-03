import PS2Games from "../queries/topPS2.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Sony Playstation 2</h2>
            <div className="queryContainer">
                {PS2Games.map((each, i) => {
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