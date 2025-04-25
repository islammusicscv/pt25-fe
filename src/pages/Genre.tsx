import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

interface GenreList {
    id: number;
    name: string;
    description: string;
}

const Genre = () => {
    const [genres, setGenres] = useState<GenreList[]>([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const getData = async () => {
        const res = await axios.get("http://localhost:3000/genres");
        if (res.status === 200) {
            setGenres(res.data);
        }
    }

    const deleteGenre = async (id: number) => {
        await axios.delete(`http://localhost:3000/genres/${id}`);
        getData();
        //setGenres((prev) => prev.filter((genre) => genre.id !== id));
    }

    const addGenre = async (e: React.FormEvent) => {
        e.preventDefault();
        const genreData = {
            name,
            description
        };

        await axios.post("http://localhost:3000/genres", genreData);
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
              <h1>Žanri</h1>

              <form onSubmit={addGenre}>
                  <input type="text" placeholder="Vnesi ime žanra" value={name}
                         onChange={(e) => setName(e.target.value)}/><br/>
                  <textarea placeholder="Vnesi opis žanra" value={description}
                            onChange={(e) => setDescription(e.target.value)}/><br/>
                  <input type="submit" value="Dodaj"/>
              </form>


              <ul>
                  {genres.map((genre) => (
                      <li key={genre.id}>
                          {genre.name}
                          <button onClick={() => deleteGenre(genre.id)}>Izbriši</button>
                      </li>
                  ))}
              </ul>
          </main>
          <Footer/>
      </>
    )
}
export default Genre;