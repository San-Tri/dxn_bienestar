/**
 * Componente para mostrar el encabezado de la página, incluyendo el logo, nombre de la empresa y un menú de navegación.
 */

import { useState } from "react";
import { useTheme } from "next-themes";
import { Leaf, Sun, Moon, UserPlus } from "lucide-react";

function Header() {
  /** useTheme para manejar el modo oscuro y claro */
  const { theme, setTheme } = useTheme();
  /** useState para marcar el acceso directo seleccionado */
  const [seccionMarcado, setSeccionMarcado] = useState(false);

  //verifica el modo oscuro
  const isDark = theme === "dark";

  return (
    <>
      <header className="w-full h-auto justify-between flex items-center px-4 py-3 border-b border-border-subtle bg-header-bg">
        <div className="flex gap-2 cursor-pointer">
          <Leaf className="text-primary stroke-3" />
          <p className="font-bold text-text-primary">DXN Bienestar</p>
        </div>

        {/* Uso del hidden para ocultar el menú de navegación en pantallas pequeñas*/}
        <nav className={"hidden md:flex"}>
          <ul className="flex gap-10">
            <li onClick={() => setSeccionMarcado(!seccionMarcado)} className="">
              {seccionMarcado ? (
                <a href="#" className="text-nav-text hover:text-nav-text-hover">
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
              <a
                href="#"
                className="text-text-primary hover:text-nav-text-hover"
              >
                Productos
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="text-text-primary hover:text-nav-text-hover"
              >
                Novedades
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="text-text-primary hover:text-nav-text-hover"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4">
          <button className="hidden md:flex gap-1 rounded-full px-5 py-2 font-semibold bg-accent text-[#1f2937] shadow cursor-pointer">
            Afíliate <UserPlus className="stroke-3 text-[#1f2967] w-4" />
          </button>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="border border-border-subtle bg-surface rounded-full p-2 shadow cursor-pointer"
          >
            {isDark ? (
              <Sun className="text-brand-title" />
            ) : (
              <Moon className="text-brand-title" />
            )}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
