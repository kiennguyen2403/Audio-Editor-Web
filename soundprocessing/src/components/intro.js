

import "./intro.css";

function Intro()
{


    return(

            <div id="main_information">
            <article id="article1"> 
                <div className="text"> 
                    <h1> A simple tool to solve any sound problems </h1>
                    <p> We keep everything as simple as possible. Leave your problems here and we will do what we are best at </p>
                    <a href="#article2">Explore all tools</a>
                </div>
                <div>
                <img src="./picture/download.svg" alt="picture1"/> 
                </div>
            </article>

            <article id="article2">
          
                <h1>Main features</h1>
                <p>Some of our main tools to work with audio files </p>
                <ul >
                    <li>
                    <a href="/noisereduction">
                    <h2>Noise reduction </h2>
                    <p>Reduce background noise that accidentally appears in your audio</p>        
                    </a>
                    </li>

                    <li>
                    <a href="/merge">
                    <h2>Merge file</h2>
                    <p>Merge two or more audio files together</p>
                    </a>
                    </li>

                    <li>
                    <a href="/cut">
                    <h2>Convert file</h2>    
                    <p>Convert different types of audio files</p>
                    </a>
                    </li>


                    <li> 
                    <a href="/bassboost">
                    <h2> Bassboost</h2>
                    <p>Boost your audio's bass for more enjoyable experiences</p>
                    </a>
                    </li>


                    <li>
                    <a href="/volumesetting">
                    <h2>Volume adjust</h2>
                    <p>Increase or decrease the volume of your audio files</p>
                    </a>
                    </li>
                </ul>

          
            </article>
        
            </div>

    );


}



export default Intro;