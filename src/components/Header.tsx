const Header = () => {
    return (
        <>
            <header data-bs-theme="dark">
                <div className="collapse text-bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4>PT 2025</h4>
                                <p className="text-body-secondary">Enostavna FullStack aplikacija za galerijo
                                    filmov.</p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4>Meni</h4>
                                <ul className="list-unstyled">
                                    <li><a href="/" className="text-white">Domov</a></li>
                                    <li><a href="/genres" className="text-white">Žanri</a></li>
                                    <li><a href="/movies" className="text-white">Filmi</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href="/" className="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                 aria-hidden="true" className="me-2" viewBox="0 0 24 24">
                                <path
                                    d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                                <circle cx="12" cy="13" r="4"/>
                            </svg>
                            <strong>PT25</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;