import { Leaf, Map, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col gap-2 m-2">
      {/* Descripcion */}
      <div className="py-3 px-2">
        <h2 className="flex font-bold text-text-primary font-['Lexend'] gap-2 pb-3">
          <Leaf className="text-primary stroke-3" />
          DXN Bienestar
        </h2>
        <p className="text-text-secondary py-1 font-['Lexend']">
          Comprometidos con tu salud y bienestar natural a través de productos
          orgánicos de las mas alta calidad.
        </p>
      </div>
      {/* Enlaces */}
      <div className="my-3 mx-2">
        <h2 className="font-bold text-text-primary font-['Lexend'] pb-3">
          Enlaces Rápidos
        </h2>
        <nav>
          <ul className="grid grid-cols-2">
            <li className="py-1">
              <a
                href="#"
                className="text-text-secondary font-medium font-['Lexend']"
              >
                Inicio
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-text-secondary font-medium font-['Lexend']"
              >
                Novedades
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-text-secondary font-medium font-['Lexend']"
              >
                Contacto
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-text-secondary font-medium font-['Lexend']"
              >
                Productos
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-text-secondary font-medium font-['Lexend']"
              >
                Afiliate
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Contacto */}
      <div className="my-3 mx-2">
        <h2 className="font-bold text-text-primary font-['Lexend'] pb-3">
          Contacto
        </h2>
        <nav>
          <ul>
            <li className="py-1">
              <a
                href="#"
                className="flex text-text-secondary font-['Lexend'] gap-2"
              >
                <Map className="text-primary" /> Av.Principal 123, Ciudad de
                Perú
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="flex text-text-secondary font-['Lexend'] gap-2"
              >
                <Phone className="text-primary" /> +51 945 654 351
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="flex text-text-secondary font-['Lexend'] gap-2"
              >
                <Mail className="text-primary" /> contacto@dxnbienestar.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Redes sociales */}
      <div className="my-3 mx-2">
        <h2 className="font-bold text-text-primary font-['Lexend'] pb-3">
          Síguenos
        </h2>
        <div className="flex gap-3">
          <button className="bg-secondary p-2 rounded-full">
            <FaFacebook className="text-xl text-text-secondary" />
          </button>
          <button className="bg-secondary p-2 rounded-full">
            <FaInstagram className="text-xl text-text-secondary" />
          </button>
        </div>
      </div>
      {/* Foot */}
      <div className="foot m-5">
        <p className=" text-text-muted font-['Lexend'] flex items-center text-xs">
          &copy; {new Date().getFullYear()} DXN Bienestar. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
