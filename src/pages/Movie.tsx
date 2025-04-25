import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

interface MovieList {
    id: number;
    name: string;
    description: string;
}

interface GenreList {
    id: number;
    name: string;
    description: string;
}

const Movie = () => {
    const [movies, setMovies] = useState<MovieList[]>([]);
    const [genres, setGenres] = useState<GenreList[]>([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [genreId, setGenreId] = useState<number | null>(null);

    const getData = async () => {
        const res = await axios.get("http://localhost:3000/movies");
        if (res.status === 200) {
            setMovies(res.data);
        }
    }

    const getGenres = async () => {
        const res = await axios.get("http://localhost:3000/genres");
        if (res.status === 200) {
            setGenres(res.data);
        }
    }

    const deleteMovie = async (id: number) => {
        await axios.delete(`http://localhost:3000/movies/${id}`);
        getData();
        //setMovies((prev) => prev.filter((movie) => movie.id !== id));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const movieData = {
            name,
            description,
            genre:{
                id:genreId
            }
        };

        if (editingId === null) {
            await axios.post("http://localhost:3000/movies", movieData);
        } else {
            await axios.patch(`http://localhost:3000/movies/${editingId}`, movieData);
        }
        setName("");
        setDescription("");
        setEditingId(null);

        getData();
    }

    const editMovie = async (id: number) => {
        const res = await axios.get(`http://localhost:3000/movies/${id}`);
        const movieData = res.data;
        setName(movieData.name);
        setDescription(movieData.description);
        setGenreId(movieData.genre.id);
        setEditingId(id);
    }

    useEffect(() =>  {
        getData();
        getGenres();
    }, []);

    return (
        <>
            <Header />
            <main>
                <h1>Filmi</h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Vnesi ime filma" value={name} onChange={(e) =>setName(e.target.value)} /><br />
                    <textarea placeholder="Vnesi opis filma" value={description} onChange={(e) =>setDescription(e.target.value)}/><br />
                    <select value={genreId} onChange={(e)=>setGenreId(e.target.value)}>
                        <option value="">Izberi žanr</option>
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))}
                    </select>
                    <input type="submit" value={editingId === null ? "Dodaj" : "Uredi"} />
                </form>

                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            {movie.name} ( {movie.genre.name} )
                            <button onClick={()=>deleteMovie(movie.id)}>Izbriši</button>
                            <button onClick={()=>editMovie(movie.id)}>Uredi</button>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </>
    )
}
export default Movie;