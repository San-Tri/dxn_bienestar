import { Leaf, Map, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer>
      <div className="descripcion">
        <h2>
          <Leaf /> DXN bienestar
        </h2>
        <p>
          Comprometidos con tu salud y bienestar natural a través de productos
          orgánicos de las mas alta calidad.
        </p>
      </div>
      <div className="enlaces">
        <h2>Enlaces Rápidos</h2>
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Novedades</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Afiliate</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contacto">
        <h2>Contacto</h2>
        <nav>
          <ul>
            <li>
              <a href="#">
                <Map /> Av.Principal 123, Ciudad de Perú
              </a>
            </li>
            <li>
              <a href="#">
                <Phone /> +51 945 654 351
              </a>
            </li>
            <li>
              <a href="#">
                <Mail /> contacto@dxnbienestar.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="siguenos">
        <h2>Siguenos</h2>
        <button>Facebook</button>
        <button>Instagram</button>
      </div>
      <div className="foot">
        <p>© 2026 DXN Bienestar. Todos los derechos reservados.</p>
        <a href="#">Pólitica de Privacidad</a>
        <a href="#">Términos y Condiciones</a>
      </div>
    </footer>
  );
}

export default Footer;
