import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { SiteContext } from "../context/SiteContext"
import ThemeIcon from "./ThemeIcon"



export default function NavBar() {
  const {user, handleLogout} = useContext(SiteContext)

    return (
        <>
        
        <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
  <div className="container">
    {/* Navbar Markası - React Router Link Kullanımı */}
    <Link className="navbar-brand" to="/">
      <svg className="bi" width="24" height="24" ><use xlinkHref="#aperture"></use></svg>
      R-Store
    </Link>

    {/* Navbar Toggle Butonu */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar İçeriği - Collapse Kullanımı */}
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ paddingLeft: '60px' }} >
      <div className="navbar-nav flex-grow-1 justify-content-between">
        {/* NavLink'ler - React Router NavLink Kullanımı */}
        <NavLink className="nav-link" to="/"> Ana Sayfa </NavLink>
        <NavLink className="nav-link" to="/products"> Ürünler </NavLink>
        <NavLink className="nav-link" to="/contact"> Kategoriler </NavLink>
        <NavLink className="nav-link" to="/about"> Hakkımızda </NavLink>

        {/* Kullanıcı Giriş Durumuna Göre Linkler */}
        {user ? (
          <>
            <NavLink className="nav-link" to="/fav"> Favoriler </NavLink>
            <button className="nav-link ms-right" onClick={handleLogout}> Logout ({user.name}) </button>
          </>
        ) : (
          <NavLink className="nav-link" to="/login"> Login </NavLink>
        )}

        {/* Tema Değiştirme İkonu */}
        <ThemeIcon />

        {/* Diğer Linkler */}
      
        <NavLink className="nav-link" to="/cart">
          <svg className="bi" width="24" height="24"><use xlinkHref="#cart"></use></svg>
        </NavLink>
      </div>
    </div>
  </div>
</nav>

        </>
    )
}