import {useNavigate} from 'react-router-dom'

//se define pokemonescard y recibe pokemones
export function Pokemonescard({ Pokemones }) {
    const navigate = useNavigate() //se usa para cambiar la ruta

    return (
        <div style={{background: ""}} //aqui esta el fondo negro horrible (quiza lo cambie) (SI LO CAMBIE :D)
        
            onClick={() => { //evento al dar click
                navigate(`/Pokemones/${Pokemones.id}`);
            }}
        >

            {/* muestra la informacion de /pokemones */}
            {/* AQUI PUEDES MODIFICAR LA INFO QUE SALE AL PRINCIPIOOOOO */}
            <hr />
            <h1>{"Nombre: "}{Pokemones.nombre}</h1>
            <p>{"Tipo: "}{Pokemones.tipo_pokemon}</p>
            <p>{"Tipo: "}{Pokemones.tipo_pokemon2}</p>
            <p>{"Descripcion: "}{Pokemones.descripcion}</p>
            <p>{"Region: "}{Pokemones.region}</p>
            <hr />
        </div>
    );
}