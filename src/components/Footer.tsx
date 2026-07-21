import { Leaf, Map, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-col gap-2 m-2">
      {/* Descripcion */}
      <div className="py-3 px-2">
        <h2 className="flex font-bold text-[#1F2937] font-['Lexend'] gap-2 pb-3">
          <Leaf className="text-[#10B981] stroke-3" />
          DXN Bienestar
        </h2>
        <p className="text-[#4B5563] py-1 font-['Lexend']">
          Comprometidos con tu salud y bienestar natural a través de productos
          orgánicos de las mas alta calidad.
        </p>
      </div>
      {/* Enlaces */}
      <div className="my-3 mx-2">
        <h2 className="font-bold text-[#1F2937] font-['Lexend'] pb-3">
          Enlaces Rápidos
        </h2>
        <nav>
          <ul className="grid grid-cols-2">
            <li className="py-1">
              <a
                href="#"
                className="text-[#4B5563] font-medium font-['Lexend']"
              >
                Inicio
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-[#4B5563] font-medium font-['Lexend']"
              >
                Novedades
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-[#4B5563] font-medium font-['Lexend']"
              >
                Contacto
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-[#4B5563] font-medium font-['Lexend']"
              >
                Productos
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="text-[#4B5563] font-medium font-['Lexend']"
              >
                Afiliate
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Contacto */}
      <div className="my-3 mx-2">
        <h2 className="font-bold text-[#1F2937] font-['Lexend'] pb-3">
          Contacto
        </h2>
        <nav>
          <ul>
            <li className="py-1">
              <a href="#" className="flex text-[#4B5563] font-['Lexend'] gap-2">
                <Map className="text-[#10B981]" /> Av.Principal 123, Ciudad de
                Perú
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="flex text-[#4B5563] font-['Lexend'] gap-2">
                <Phone className="text-[#10B981]" /> +51 945 654 351
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="flex text-[#4B5563] font-['Lexend'] gap-2">
                <Mail className="text-[#10B981]" /> contacto@dxnbienestar.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Redes sociales */}
      <div className="my-3 mx-2">
        <h2 className="font-bold text-[#1F2937] font-['Lexend'] pb-3">
          Síguenos
        </h2>
        <button>Facebook</button>
        <button>Instagram</button>
      </div>
      {/* Foot */}
      <div className="foot m-5">
        <p className=" text-[#9CA3AF] font-['Lexend'] flex items-center text-xs">
          &copy; {new Date().getFullYear()} DXN Bienestar. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
