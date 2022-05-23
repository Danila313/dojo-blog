import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* Uso Link to per evitare di fare una richiesta al server per le nuove pagine, in questo modo viene intercettato dal react router */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

// Per inserire uno stile direttamente nel codice
{/* <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px',
                }}>New Blog</a> */}