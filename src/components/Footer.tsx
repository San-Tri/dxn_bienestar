import { Leaf, Map, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-col gap-10">
      {/* Descripcion */}
      <div className="py-3 px-2">
        <h2 className="flex font-bold text-[#1F2937] gap-2">
          <Leaf className="text-[#10B981] stroke-3" />
          DXN Bienestar
        </h2>
        <p className="text-[#4B5563] py-1">
          Comprometidos con tu salud y bienestar natural a través de productos
          orgánicos de las mas alta calidad.
        </p>
      </div>
      {/* Enlaces */}
      <div className="my-3 mx-2">
        <h2 className="font-bold text-[#1F2937]">Enlaces Rápidos</h2>
        <nav>
          <ul>
            <li className="py-1">
              <a href="#" className="text-[#4B5563] font-bold">
                Inicio
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-[#4B5563] font-bold">
                Novedades
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-[#4B5563] font-bold">
                Contacto
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-[#4B5563] font-bold">
                Productos
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-[#4B5563] font-bold">
                Afiliate
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Contacto */}
      <div className="my-3 mx-2">
        <h2 className="font-bold text-[#1F2937]">Contacto</h2>
        <nav>
          <ul>
            <li className="py-1">
              <a href="#" className="flex text-[#4B5563] gap-2">
                <Map className="text-[#10B981]" /> Av.Principal 123, Ciudad de
                Perú
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="flex text-[#4B5563] gap-2">
                <Phone className="text-[#10B981]" /> +51 945 654 351
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="flex text-[#4B5563] gap-2">
                <Mail className="text-[#10B981]" /> contacto@dxnbienestar.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Redes sociales */}
      <div className="my-3 mx-2">
        <h2 className="font-bold text-[#1F2937]">Siguenos</h2>
        <button>Facebook</button>
        <button>Instagram</button>
      </div>
      {/* Foot */}
      <div className="foot">
        <p className="text-[#4B5563]">
          © 2026 DXN Bienestar. Todos los derechos reservados.
        </p>
        <a href="#" className="text-[#4B5563]">
          Pólitica de Privacidad
        </a>
        <a href="#" className="text-[#4B5563]">
          Términos y Condiciones
        </a>
      </div>
    </footer>
  );
}

export default Footer;
