import { useEffect, useState } from "react"; //permiten manejar el estado y efectos en componentes funcionales
import { getAllPokemones } from '../api/pokemones.api'; //funcion que realiza llamada a una api para obtener la lista
import { Pokemonescard } from './Pokemonescard'; //se encarga de mostrar la info de cada pokemon


export function PokemonesList() {
    const [Pokemones, setPokemones] = useState([]); //setpokemones se usa para actualizar el estado

    //aqui se recibe la lista de pokemones y se actualiza
    useEffect(() => {
        async function loadPokemones() {
            const res = await getAllPokemones();
            setPokemones(res.data);  
        }
        loadPokemones();
    }, []);

    //asegura que cada pokemon tenga una clave unica y pasa los datos como propiedades
    return (
        <div>
            {Pokemones.map((Pokemones) => (
                <Pokemonescard key={Pokemones.id} Pokemones={Pokemones} />
            ))}
        </div>
    );
}
