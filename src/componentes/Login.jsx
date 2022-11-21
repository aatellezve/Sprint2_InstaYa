import "./styles/Login.css";
export default function Login(){
    const iniciarSesion = () => {
        alert("Aun no disponible para iniciar sesion =(  ")
        }
    return(
        <div className="login">
            <div className="encabezado">
            <h1>LOGIN</h1>
            <a href=""><h2>Registrarse</h2></a>
            </div>
            <form className="formulariologin">
                <p>
                <label htmlFor="">Email</label>
                <input type="text" />
                </p>
                <p>
                <label htmlFor="">Contraseña</label>
                <input type="password" />
                </p>
                <button onClick={iniciarSesion}>Iniciar Sesion</button>
            </form>
        </div>


    )

}