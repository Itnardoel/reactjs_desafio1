import logo from '../logo.svg';

const NavBar = () => {
    return (
        <header style={styles.cabecera}>

            <img style={styles.imagen} src={logo} className="App-logo" alt="" />
            
            <h1>Tienda</h1>
            
            <ul style={styles.lista}>
                <li>
                    <a style={styles.enlaces} href="#!">Inicio</a>
                </li>
                <li>
                    <a style={styles.enlaces} href="#!">Productos</a>
                </li>
                <li>
                    <a style={styles.enlaces} href="#!">Nosotros</a>
                </li>
            </ul>
            
        </header>
    )
}

export default NavBar;

const styles = {
    cabecera: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
    },
    imagen: {
        width: '10%',
    },
    lista: {
        display: 'flex',
        flexDirection: 'row',
        listStyleType: 'none',
    },
    enlaces: {
        margin: 10,
        textDecoration: 'none',
        color: '#fff',
    }
}