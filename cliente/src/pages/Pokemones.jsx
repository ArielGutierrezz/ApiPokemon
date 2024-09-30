import {PokemonesList} from "../components/PokemonesList";
import '../Formulario.css';

// solo muestra pokemon list 
export function Pokemones() {
    return (
        <div className="pokemones">
            <h2>Listas De Pokemones</h2>
            <PokemonesList/>
        </div>

    );
}