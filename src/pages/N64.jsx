import N64Games from "../queries/topN64.json";

export default function NES() {
    return(
        <div className="queryPage">
            <h2>Nintendo 64</h2>
            <div className="queryContainer">
                {N64Games.map((each, i) => {
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