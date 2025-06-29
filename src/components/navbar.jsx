import "./navbar.css"

export let Navbar=()=>{
    return(
        <>
        <div className="navbar-logo">
            FlashBackQs
        </div>
        <div className="navbar-menu-container">
            <a href="#home" className="home-menu">Home</a>
            <a href="#browse" className="browse-menu">Browse papers</a>
            <a className="upload-menu">Upload</a>
        </div>
        <div className="navbar-search">
            Search
        </div>
        </>
    )
};
