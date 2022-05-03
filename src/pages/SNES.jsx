import SNESGames from "../queries/topSNES.json";

export default function SNES() {
    return(
        <div className="queryPage">
            <h2>Super Nintendo</h2>
            <div className="queryContainer">
                {SNESGames.map((each, i) => {
                    return(
                        <ul>
                        <li key={i}>
                        <a href={each.id}>{each.name}</a> <br/>
                        {/* <img src={`https:${each.cover.url}`} /> */}
                        </li>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}