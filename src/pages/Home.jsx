import { useState, useEffect } from "react";

export default function Home() {
   return(
       <div className="homeContainer">
           Welcome to my video game library, which I have created using Javascript and MERN techniques. I have attempted to include as many games as possible, but due to some limitations (such as time and my skill level), there are likely to be games missing. I chose to limit my queries to games above a certain "rating," as determined by a combination of critic and user ratings on the Internet Games Database. <br/>
           <br/>
           The links below will allow you to explore games from numerous popular video game consoles. Again, I have opted to be selective in my choices, as there are a number of obscure and/or outdated consoles that lie beyond the scope of the games I am interested in listing. Also, due to the sheer volume of games available on the PC, I couldn't find an adequate way to represent them here. Fortunately, many great modern PC games are being ported to today's consoles.<br/>
           <br/>
           I have also included a link to a representation of my personal game library. These include games I have enjoyed, as well as a little information about each of them. <br/>
           <br/>
           <center>Thank you for visiting, and I hope you enjoy! <br/>
           <h2><a href="/library">My Game Library</a></h2> </center>

            <div className="linksList">
                    <b><a href="/toprated">Top Rated Games</a></b> <br/>
                    <br/>
                    <b>Nintendo</b>
                    <li><a href="/nes">Nintendo Entertainment System</a></li>
                    <li><a href="/snes">Super Nintendo</a></li>
                    <li><a href="/n64">Nintendo 64</a></li>
                    <li><a href="/gamecube">Gamecube</a></li>
                    <li><a href="/wii">Wii</a></li>
                    <li><a href="/wiiu">Wii U</a></li>
                    <li><a href="/switch">Nintendo Switch</a></li>
                    <li><a href="/gameboy">Game Boy</a></li>
                    <li><a href="/gbc">Game Boy Color</a></li>
                    <li><a href="/gba">Game Boy Advance</a></li>
                    <li><a href="/nds">Nintendo DS</a></li>
                    <li><a href="/3ds">Nintendo 3DS</a></li>
                    <br/>
                    <b>Sega</b>
                    <li><a href="/genesis">Genesis</a></li>
                    <li><a href="/saturn">Saturn</a></li>
                    <li><a href="/dreamcast">Dreamcast</a></li>
                    <li><a href="/gamegear">Game Gear</a></li>
                    <br/>
                    <b>Sony</b>
                    <li><a href="/ps1">Playstation</a></li>
                    <li><a href="/ps2">Playstation 2</a></li>
                    <li><a href="/ps3">Playstation 3</a></li>
                    <li><a href="/ps4">Playstation 4</a></li>
                    <li><a href="/ps5">Playstation 5</a></li>
                    <li><a href="/psp">Playstation Portable</a></li>
                    <li><a href="/psvita">Playstation Vita</a></li>
                    <br/>
                    <b>Microsoft</b>
                    <li><a href="/xbox">Xbox</a></li>
                    <li><a href="/xbox360">Xbox 360</a></li>
                    <li><a href="/xboxone">Xbox One</a></li>
                    <li><a href="/xboxseriesx">Xbox Series X|S</a></li>
            </div>
       </div>
   )
}