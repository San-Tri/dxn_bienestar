/**
 * Componente para mostrar el encabezado de la página, incluyendo el logo, nombre de la empresa y un menú de navegación.
 */

import { useState } from "react";
import { Leaf, Sun, Moon } from "lucide-react";

function Header() {
  /** useState para manejar el modo oscuro y claro */
  const [darkMode, setDarkMode] = useState(false);
  /** useState para marcar el acceso directo seleccionado */
  const [seccionMarcado, setSeccionMarcado] = useState(false);
  return (
    <>
      <header className="w-full h-auto justify-between flex items-center px-4 py-3 border-b border-black/6">
        <div className="flex gap-2">
          <Leaf className="text-primary stroke-3" />
          <p className="font-bold text-text-primary">DXN Bienestar</p>
        </div>

        {/* Uso del hidden para ocultar el menú de navegación en pantallas pequeñas*/}
        <nav className={"hidden md:flex"}>
          <ul className="flex gap-10">
            <li onClick={() => setSeccionMarcado(!seccionMarcado)} className="">
              {seccionMarcado ? (
                <a href="#" className="text-text-primary">
                  Inicio
                </a>
              ) : (
                // uso el after para crear el Active State del enlace directo
                <a
                  href="#"
                  className="text-primary relative after:content-[''] after:absolute after:bg-primary after:w-[200%] after:h-0.5 after:-bottom-2 after:-left-5"
                >
                  Inicio
                </a>
              )}
            </li>
            <li className="">
              <a href="#" className="text-text-primary">
                Productos
              </a>
            </li>
            <li className="">
              <a href="#" className="text-text-primary">
                Novedades
              </a>
            </li>
            <li className="">
              <a href="#" className="text-text-primary">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4">
          <button className="hidden md:block rounded-full px-5 py-2 font-bold bg-accent">
            Afíliate
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border border-[#A7F3D0]/50 bg-[#ECFDF5] rounded-full p-2"
          >
            {darkMode ? (
              <Moon className="text-text-primary" />
            ) : (
              <Sun className="text-text-primary" />
            )}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
