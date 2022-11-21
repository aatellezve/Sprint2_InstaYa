import "../styles/RegistroOrdenes.css";
export default function RegistroOrdenes (){
    const CrearOrden = () => {
        alert("Aun no disponible para crear ordenes =(  ")
        }
    return(
        <div className="registroOrdenes">
            <h1>REGISTRO DE ORDENES</h1>
            <div className="datosOrdenes">
                
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <p className="col-md-5 col-sm-5 row">
                        <label className="col-md-6 col-sm-6 row" htmlFor="">Fecha</label>
                        <input className="col-md-6 col-sm-6 row" type="date" />
                    </p>
                    <p  className="col-md-5 col-sm-5 row">
                        <label className="col-md-6 col-sm-6 row" htmlFor="">Hora</label>
                        <input className="col-md-6 col-sm-6 row"type="time" />
                    </p>
                    <div className="col-md-1 col-sm-1"></div>
                </div>

                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <p className="col-md-5 col-sm-5 row">
                        <label className="col-md-6 col-sm-6 row" htmlFor="">Ancho (cm)</label>
                        <input className="col-md-6 col-sm-6 row" type="number" />
                    </p>
                    <p  className="col-md-5 col-sm-5 row">
                        <label className="col-md-6 col-sm-6 row" htmlFor="">Largo (cm)</label>
                        <input className="col-md-6 col-sm-6 row"type="number" />
                    </p>
                    <div className="col-md-1 col-sm-1"></div>
                </div>

                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <p className="col-md-5 col-sm-5 row">
                        <label className="col-md-6 col-sm-6 row" htmlFor="">Alto (cm)</label>
                        <input className="col-md-6 col-sm-6 row" type="number" />
                    </p>
                    <p  className="col-md-5 col-sm-5 row">
                        <label className="col-md-6 col-sm-6 row" htmlFor="">Peso (kg)</label>
                        <input className="col-md-6 col-sm-6 row"type="number" />
                    </p>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                    
            </div>
            <div>
            <form className="formularioRegistroOrdenes">
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                        <input class="form-control form-control-lg" type="text" placeholder="Dirección de Recogida" aria-label=".form-control-lg example"></input>
                        <br />
                        
                    </div>
                
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                        <input class="form-control form-control-lg" type="text" placeholder="Ciudad de Recogida" aria-label=".form-control-lg example"></input>
                        <br />
                        
                    </div>
                
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                        <input class="form-control form-control-lg" type="text" placeholder="Nombre del Destinatario" aria-label=".form-control-lg example"></input>
                        <br />
                        
                    </div>
                
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                        <input class="form-control form-control-lg" type="text" placeholder="Cédula/Nit del Destinatario" aria-label=".form-control-lg example"></input>
                        <br />
                        
                    </div>
                
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                        <input class="form-control form-control-lg" type="text" placeholder="Dirección de Entrega" aria-label=".form-control-lg example"></input>
                        <br />
                        
                    </div>
                
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                        <input class="form-control form-control-lg" type="text" placeholder="Ciudad de entrega" aria-label=".form-control-lg example"></input>
                        <hr />
                        
                    </div>
                
                    <div className="col-md-1 col-sm-1"></div>
                </div>

                <button onClick={CrearOrden}>CREAR ORDEN</button>
            </form>
            </div>
        </div>
    );

};