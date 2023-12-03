//componente

function ProfileCard(props){
    
    let {titulo, arroba, img} = props;
    return(
    
    //version 1
    //let titulo = props.titulo;
    //let arroba = props.arroba;
    //

    //version 2

   
    <div>   
        <img src={img} alt="Logo"/>
        <h3>Titulo {props.titulo}</h3>
        <p>{arroba}</p>
    </div>
    )
}


export default ProfileCard;

//Retorna cada una de las cartas 