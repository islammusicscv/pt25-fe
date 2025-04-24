import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

interface MovieList {
    id: number;
    name: string;
    description: string;
}

const Movie = () => {
    const [movies, setMovies] = useState<MovieList[]>([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const getData = async () => {
        const res = await axios.get("http://localhost:3000/movies");
        if (res.status === 200) {
            setMovies(res.data);
        }
    }

    const deleteMovie = async (id: number) => {
        await axios.delete(`http://localhost:3000/movies/${id}`);
        //setMovies((prev) => prev.filter((movie) => movie.id !== id));
    }

    const addMovie = async (e: React.FormEvent) => {
        e.preventDefault();
        const movieData = {
            name,
            description,
            genre:{
                id:"1"
            }
        };

        await axios.post("http://localhost:3000/movies", movieData);
        setName("");
        setDescription("");

        getData();
    }

    useEffect(() =>  {
        getData();
    }, []);

    return (
        <>
            <Header />
            <main>
                <h1>Filmi</h1>

                <form onSubmit={addMovie}>
                    <input type="text" placeholder="Vnesi ime filma" value={name} onChange={(e) =>setName(e.target.value)} /><br />
                    <textarea placeholder="Vnesi opis filma" value={description} onChange={(e) =>setDescription(e.target.value)}/><br />
                    <input type="submit" value="Dodaj" />
                </form>

                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            {movie.name}
                            <button onClick={()=>deleteMovie(movie.id)}>Izbriši</button>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </>
    )
}
export default Movie;