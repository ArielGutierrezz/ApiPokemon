import axios from 'axios'

const PokemonApi = axios.create({
    baseURL: 'http://localhost:8000/api/Pokemones/' //Url del back end
})

//constantes para usar en el formulario
export const getAllPokemones = () => PokemonApi.get("/")

export const getPokemon = (id) => PokemonApi.get(`/${id}/`)

export const createPokemon = (Pokemones) => PokemonApi.post("/", Pokemones)

export const deletePokemon = (id) => PokemonApi.delete(`/${id}/`)

export const updatePokemon = (id, Pokemones) => PokemonApi.put(`/${id}/`,Pokemones)