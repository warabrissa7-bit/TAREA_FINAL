import { useState } from "react" 
function Nuevo ()
{
    const [contador, setContador ] = useState (0);
    const sumar =()=>
    {
        setContador(contador+1);
    }
    return(
     
        <div>
            <h1>Contador de Brissa Wara Andrade Sánchez</h1>
            <h2>{contador}</h2>
            <button onClick={sumar}>
                click para sumar el contador
            </button>
             <br />
             <button onClick={resta }>
                Click para reducir el contador 
            </button>

        </div>
    );
}
export default Nuevo