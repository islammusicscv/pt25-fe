import Header from "../components/Header.tsx";
import Album from "../components/Album.tsx";
import Footer from "../components/Footer.tsx";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">DOMOV</h1>
                            <p className="lead text-body-secondary">Pregled mojih najljubših filmov.</p>
                        </div>
                    </div>
                </section>
                <Album />
            </main>
            <Footer />
        </>
    )
}
export default Home;