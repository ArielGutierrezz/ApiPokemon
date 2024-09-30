import React from 'react'; //para usar jsx
import { useEffect } from "react"; //permite cargar datos
import { useForm } from "react-hook-form"; //permite manejar formularios
import { useNavigate, useParams } from "react-router-dom"; //permite navegar entre rutas (usenavigate) y acceder a la url (useparams)
import { createPokemon, deletePokemon, getPokemon, updatePokemon } from "../api/pokemones.api"; //importa las funciones
import { toast } from "react-hot-toast"; //libreria de notificaciones
import '../Formulario.css'; //estilo css

export function Formulario() {
    const { register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams(); //contiene los parametros de la url

    const onSubmit = handleSubmit(async (data) => { //onsubmit funcion para enviar formulario
        if (params.id) { //si esta id paramas se esta editando pokemon
            await updatePokemon(params.id, data); //se llama updatepokemon para actualizarlo
            toast.success("Pokemon actualizado", { //notificacion de exito de operacion
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        } else {
            await createPokemon(data); //si no hay id se agrega pokemon
            toast.success("Nuevo Pokemon Agregado", { //notificacion de exito de operacion
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        }

        navigate("/Pokemones");
    });

    useEffect(() => { 
        async function loadPokemon() { //si se encuentra el id se establece la informacion en los campos correspondientes
            if (params.id) {
                const { data } = await getPokemon(params.id);
                setValue("nombre", data.nombre);
                setValue("tipo_pokemon", data.tipo_pokemon);
                setValue("tipo_pokemon2", data.tipo_pokemon2);
                setValue("descripcion", data.descripcion);
                setValue("region", data.region);
            }
        }
        loadPokemon();
    }, [params.id, setValue]);

    const tiposPokemon = [ //tipos de pokemon
        'Ninguno', 'Normal', 'Fuego', 'Agua', 'Planta', 'Eléctrico', 'Hielo',
        'Lucha', 'Veneno', 'Tierra', 'Roca', 'Bicho', 'Fantasma', 'Siniestro',
        'Acero', 'Hada', 'Volador', 'Psíquico', 'Dragón'
    ];
    
    //aqui solo esta el formulario
    //se valida que los campos son requeridos con required:true
    return (
        <div> 
            <h1>Formulario de Pokémon</h1> 
            <form  onSubmit={onSubmit}> 
                <input type="text" placeholder='nombre' {...register("nombre", { required: true })} /> 

                <label>Tipo de Pokémon</label>
                <select {...register("tipo_pokemon", { required: "El tipo es obligatorio" })}>
                    {tiposPokemon.map((tipo) => (
                        <option key={tipo} value={tipo}>
                            {tipo}
                        </option>
                    ))}
                </select>

                <select {...register("tipo_pokemon2")}>
                    {tiposPokemon.map((tipo) => (
                        <option key={tipo} value={tipo}>
                            {tipo}
                        </option>
                    ))}
                </select>

                <input type="text" placeholder='descripcion' {...register("descripcion", { required: true })} />
                <input type="text" placeholder='region' {...register("region", { required: true })} />
                <button>Guardar</button>
            </form>
            
            {/* si existe id se indica que se esta editando y muestra boton eliminar */}
            {params.id && (
                <button className='eliminar'
                    onClick={async () => {
                        const accepted = window.confirm("¿Estás seguro?");
                        if (accepted) {
                            await deletePokemon(params.id);
                            toast.success("Pokemon Eliminado", { //notificacion de exito de operacion
                                position: "bottom-right",
                                style: {
                                    background: "#101010",
                                    color: "#fff",
                                },
                            });
                            navigate("/Pokemones");
                        }
                    }}
                >
                Eliminar
                </button>
            )}
        </div>
    );
}