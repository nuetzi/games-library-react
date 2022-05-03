import TopRatedGames from "../queries/topRated.json";

export default function TopRated() {
    return(
        <div className="queryPage">
            <h2>Top Rated Games</h2>
            <p><i>NOTE: Ratings are based on results from IGDP query, so take the results with a grain of salt</i></p>
            <div className="queryContainer">
                {TopRatedGames.map((each, i) => {
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