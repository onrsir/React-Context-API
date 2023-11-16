import { useContext } from "react"
import { Link } from "react-router-dom"
import { SiteContext } from "../context/SiteContext"

export default function ProductCard({item}){

    const {user} = useContext(SiteContext)

    function handleClick(product){
        let localFavs = JSON.parse(localStorage.getItem("favs")) ?? []

       const itemIndex = localFavs.findIndex(localitem => product.id === localitem.id)
       
        if(itemIndex >= 0 ) {
            localFavs = localFavs.filter(item => item.id !== product.id )
        }else {
            localFavs.push({id: product.id, title: product.title})

        }
        localStorage.setItem("favs",JSON.stringify(localFavs))
    }
    return (
        <>
        <div className="col-sm mb-3">

        <div className="card" >
            <Link to={`/products/product/${item.id}`}>
            <img src={item.image} className="card-img-top" alt={item.title} />
            </Link>
    <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description.substring(0, 25)}..</p>
    <p className="lead">{item.price} $</p>

        { user && <a href="#" onClick={() => handleClick(item)} className="btn btn-primary">Favourite</a>}

             </div>
            </div>
        </div>
    
     </>
    )
}