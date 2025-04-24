import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

const Genre = () => {
    const [genres, setGenres] = useState([]);

    const getData = async () => {
        const res = await axios.get("http://localhost:3000/genres");
        if (res.status === 200) {
            setGenres(res.data);
        }
    }

    useEffect(() =>  {
        getData();
    }, []);

    return (
      <>
        <Header />
        <main>
            <h1>Žanri</h1>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </main>
        <Footer />
      </>
  )
}
export default Genre;