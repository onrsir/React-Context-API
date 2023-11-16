import Contact from './page/Contact'
import Home from './page/Home'
import About from './page/About'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './page/PageNotFound'
import { Category, Product, Products, ProductsLayout } from './products'
import Login from './page/Login'
import Fav from './page/Fav'
import PrivateRoute from './PrivateRoute'
import { useContext } from 'react'
import { SiteContext } from './context/SiteContext'

export default function SiteRoutes(){

    const {handleLogin, user} = useContext(SiteContext)
return (

<Routes>

<Route path="/" element={<Home />}/>
<Route path="/About" element={<About />}/>
<Route path="/Contact" element={<Contact />}/>
<Route path="/Products" element={<ProductsLayout />} > 

    <Route index={true} element={<Products  />} /> 
    <Route path="category/:categoryName" element={<Category />} /> 
    <Route path="product/:productId" element={<Product />} /> 
</Route>

<Route path="/login" element={<Login  />}/>
<Route path="/fav" element={ <PrivateRoute > <Fav /> </PrivateRoute>}   />


<Route path="*" element={<PageNotFound />}/>

</Routes>
)
}