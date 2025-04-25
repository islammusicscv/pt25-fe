import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "../components/Card.tsx";

interface GenreList {
    id: number;
    name: string;
    description: string;
}

const Genre = () => {
    const [genres, setGenres] = useState<GenreList[]>([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);

    const getData = async () => {
        const res = await axios.get<GenreList[]>("http://localhost:3000/genres");
        if (res.status === 200) {
            setGenres(res.data);
        }
    }

    const editGenre = async (id: number) => {
        const res = await axios.get<GenreList>(`http://localhost:3000/genres/${id}`);
        const genreData = res.data;
        setName(genreData.name);
        setDescription(genreData.description);
        setEditingId(id);
    };

    const deleteGenre = async (id: number) => {
        await axios.delete(`http://localhost:3000/genres/${id}`);
        getData();
        //setGenres((prev) => prev.filter((genre) => genre.id !== id));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const genreData = { name, description };

        if (editingId === null) {
            await axios.post("http://localhost:3000/genres", genreData);
        } else {
            await axios.patch(`http://localhost:3000/genres/${editingId}`, genreData);
        }

        setName("");
        setDescription("");
        setEditingId(null);
        getData();
    };


    useEffect(() =>  {
        getData();
    }, []);

    return (
        <>
            <Header/>
            <main>
                <div className="container mt-4">
                    <h1>Žanri</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputName">Vnesi ime žanra</label>
                            <input
                                type="text"
                                id="inputName"
                                className="form-control"
                                placeholder="Vnesi ime žanra"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDescription">Vnesi opis žanra</label>
                            <textarea
                                id="inputDescription"
                                className="form-control"
                                placeholder="Vnesi opis žanra"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <br/>
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btn btn-primary m-2"
                                value={editingId === null ? "Dodaj" : "Uredi"}
                            />
                        </div>
                    </form>
                </div>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                            {genres.map((genre) => (
                                <Card
                                    key={genre.id}
                                    data={genre}
                                    onDelete={deleteGenre}
                                    onEdit={editGenre}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
export default Genre;