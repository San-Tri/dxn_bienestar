import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

function Header() {
  {
    /* agregar el useState */
  }
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [seccionMarcado, setSeccionMarcado] = useState(false);
  return (
    <>
      <header className="w-full h-auto justify-between flex items-center px-4 py-3">
        {/* logo y nombre */}
        <div className="flex gap-2">
          <Leaf className="text-primary stroke-3" />
          <p className="font-bold font-['Lexend'] text-text-primary">
            DXN Bienestar
          </p>
        </div>

        {/*boton de la amburguesa */}
        <div className="accesos_directos">
          <button onClick={() => setMenuAbierto(!menuAbierto)}>
            {/*si es falso muestra el menu y si es verdadero muestra la X */}
            {menuAbierto ? (
              <X className="text-text-primary" />
            ) : (
              <Menu className="text-text-primary" />
            )}
          </button>
        </div>

        {/*barra de navegacion */}
        {menuAbierto && (
          <nav className="absolute top-13.5 left-0 backdrop-blur-lg w-full z-50">
            <ul className="ml-20">
              <li
                onClick={() => setSeccionMarcado(!seccionMarcado)}
                className="py-5"
              >
                {seccionMarcado ? (
                  <a href="#" className="font-bold font-['Lexend'] text-white">
                    Inicio
                  </a>
                ) : (
                  // usamos el after para crear el Active State del enlace directo
                  <a
                    href="#"
                    className="font-bold font-['Lexend'] text-primary relative after:content-[''] after:absolute after:bg-primary after:w-[210%] after:h-0.5 after:-bottom-2 after:-left-1"
                  >
                    Inicio
                  </a>
                )}
              </li>
              <li className="py-5">
                <a href="#" className="font-bold font-['Lexend'] text-white">
                  Productos
                </a>
              </li>
              <li className="py-5">
                <a href="#" className="font-bold font-['Lexend'] text-white">
                  Novedades
                </a>
              </li>
              <li className="py-5">
                <a href="#" className="font-bold font-['Lexend'] text-white">
                  Afiliate
                </a>
              </li>
              <li className="py-5">
                <a href="#" className="font-bold font-['Lexend'] text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
