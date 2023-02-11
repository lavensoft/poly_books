const read_nabar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Capuchino</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* <div className="collapse navbar-collapse" id="collapsibleNavId"> */}
                    <form className="d-flex my-2 justify-content-end">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                {/* </div> */}
            </div>
        </nav>

    )
};
export default read_nabar;