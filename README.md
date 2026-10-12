# Web Catálogo DXN

Una aplicación web moderna y responsiva para mostrar el catálogo de productos, novedades y recetas de café DXN.

## Tecnologías Utilizadas

- **React (Vite):** Para la estructura basada en componentes.
- **Tailwind CSS (v4):** Para el maquetado responsivo y estilos.
- **Lucide React:** Para la iconografía limpia y moderna.
- **React Icons:** Para recursos visuales y logotipos de marcas.
- **next-themes:** Para manejar el modo oscuro y claro de forma dinamica.

## Arquitectura del Proyecto

- `src/providers.tsx`: Componente proveedor global (`ThemeProviders`) que envuelve la aplicación utilizando `next-themes` con `attribute="class"` para sincronizar la clase `.dark`.

## Cómo ejecutar el proyecto en tu computadora

1. Clona este repositorio.
2. Abre la terminal y ejecuta `npm install` para descargar las herramientas.
3. Ejecuta `npm run dev` para encender el servidor local.
