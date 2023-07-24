import { useNavigate } from "react-router-dom"
import "./NotFound.scss"

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-img-notfound">
        <button className="button" onClick={() => navigate("/")}>Go Home</button>
        <button className="button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default NotFound