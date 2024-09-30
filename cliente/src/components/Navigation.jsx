import { Link } from "react-router-dom";
import '../Formulario.css';

export function Navigation() {
    return (
        // hace que al apretar h1 o button te mande directo a la parte principal /Pokemones
        <div className="navigation">
                <Link to="/Pokemones"> 
                    <h1 class="">Pokemon Aplicacion</h1>
                </Link>
            <button class="buttonPokemon">
                <Link to="/Pokemones-create">Create Pokemon</Link>
            </button>
        </div>
    );
}
