import ProfileCard from "./components/ProfileCard";

import AlexaImg from "./img/alexa.png";
import CortanaImg from "./img/cortana.png";
import SiriImg from "./img/siri.png";

//console.log(SiriImg);
//console.log(CortanaImg);
//console.log(AlexaImg);

import "bulma/css/bulma.css";

function App(){

    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <h1>Asistentes</h1>
                </div> 
            </section>
            
            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard titulo="Alexa" arroba="@Alexa99" img={AlexaImg}>
                            <div>
                                <p>TEXTO</p>
                            </div>
                        </ProfileCard>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Siri" arroba="@Siri21" img={CortanaImg}>
                             <div>
                                <p>TEXTO</p>
                            </div>
                        </ProfileCard>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Cortana" arroba="@Cortana62" img={SiriImg}>
                            <div>
                                <p>TEXTO</p>
                            </div>
                        </ProfileCard>
                    </div>
                </div>
            </div>         
          
              
        </div>
    )

}

export default App;