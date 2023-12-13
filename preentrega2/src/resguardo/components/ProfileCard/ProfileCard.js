//componente
import {useState} from "react"; //para el  contador
function ProfileCard(props){
    const [count, setCount]= useState(0); //retorna un arreglo que va a tener la variable de estado y un  seter  que setea la variable de estado

    function handleClickSuma(){
        console.log("Se clickeo el boton");
        setCount(count + 1)
    }

    function handleClickSResta(){
     
        if(count>0){
            setCount(count - 1)
        }
    }
    
    let {titulo, arroba, img} = props;
    return (
        <div className="card">
            <div className="card-img">
                <figure className="image is-1by1">
                    <img src={img} alt="logo"/>
                </figure>
            </div>  
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{titulo}</p>
                    <p className="subtitle is-6">{arroba}</p>
                </div>                
            </div> 
            <div className="columns">
                <div className="columns is-4">
                     <button onClick={handleClickSuma} className="button is-danger is-fullwidth">+</button>
                </div>
            </div> 
            <div className="column is-4">
                <span>Likes {count}</span>    
            </div>      
            <div className="column is-4">
                <button onClick={handleClickSResta} className="button is-primary is-fullwidth">-</button>
            </div>
                     
        </div>        
    )
}


export default ProfileCard;

//Retorna cada una de las cartas 