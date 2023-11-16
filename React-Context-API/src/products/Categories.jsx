import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Categories() {

    const [categories,setCategories] = useState([])

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))

    },[])


    return (
        <>
        <h1>Category</h1>
        <div className="list-group"> 
        
        {
            categories.map((item,index) => 
          
            <Link
             key={index}
             className="list-group-item list-group-item-action"
            
             to={`/products/category/${item}`}
             
             >
                 
            {item.toUpperCase()}
             
             </Link>
             )
        }
</div>
  
        </>
    )
}