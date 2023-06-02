import './header.css';


const Header = () => {
    return(
        <header>
            <nav id="nav" class="main-nav">
            <ul class="nav-links">
                <li><a href="#"><img src="../../../Img/logo.svg.svg" class="logo" alt=""></img></a></li>
                <li class="link-item" data-submenu="true"><a href="#">Adopciones</a>
                </li>
                <li class="link-item" data-submenu="true"><a href="#">Denuncias</a>
                </li>
                <li  class="link-item" data-submenu="true"><a href="#">Información general</a>
                </li>
                <li class="link-item"><a href="#">Donaciones</a></li>
                <li class="link-item"><a href="#">Contacto</a>
                    <ul class="nav-icons">
                        <li><i class="fa-brands fa-whatsapp"></i></li>
                        <li><i class="fa-brands fa-facebook-f"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <button type="button" id="btn-burger" class="button-menu">
            <span class="lines"></span>
            <span class="lines"></span>
            <span class="lines"></span>
        </button>
        </header>
    );
}


export default Header;