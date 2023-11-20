import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div>
      <h1>
        404 - Esta Pagina no existe
      </h1>
      <Link to="/" style={{color: "dodgerblue"}}>Regresar a pagina principal</Link>
    </div>
  )
}

export default NotFound
