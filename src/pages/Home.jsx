import { useState, useEffect } from "react";
import { getTop50 } from "../services/igdbTop50";


export default function Home() {
   return(
       <div className="homeContainer">
           Welcome to my video game library, which I have created using Javascript and MERN techniques. I have attempted to include as many games as possible, but due to some limitations (such as time and my skill level), there are likely to be games missing. I chose to limit my queries to games above a certain "rating," as determined by a combination of critic and user ratings on the Internet Games Database. <br/>
           <br/>
           The links below will allow you to explore games from numerous popular video game consoles. Again, I have opted to be selective in my choices, as there are a number of obscure or outdated consoles that lie beyond the scope of the games I am interested in. <br/>
           <br/>
           I have also included a link to a representation of my personal game library. These include games I have enjoyed, as well as a little information about each of them. <br/>
           <br/>
           <center>Thank you for visiting, and I hope you enjoy! <br/>
           <h3><a href="/library">My Game Library</a></h3> </center>

            <div className="linksList">
                <ul>
                    <li><a href="/toprated">Top Rated Games</a></li>
                    <li><a href="/snes">Super Nintendo</a></li>
                </ul>
            </div>
       </div>
   )
}