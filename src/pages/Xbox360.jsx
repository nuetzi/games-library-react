import Xbox360Games from "../queries/topXBox360.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Microsoft Xbox 360</h2>
            <div className="queryContainer">
                {Xbox360Games.map((each, i) => {
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