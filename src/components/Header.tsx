import { Leaf, Menu } from "lucide-react";

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <Leaf color="green" />
          <p>DXN Bienestar</p>
        </div>
        <div className="accesos_directos">
          <Menu />
          <nav>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Productos</a>
              </li>
              <li>
                <a href="#">Novedades</a>
              </li>
              <li>
                <a href="#">Afiliate</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
