interface BannerProps {
  imagenBanner: string;
  etiquetaBanner: string;
  tituloBanner: string;
  tituloMarcadoBanner: string;
  descripcionBanner: string;
  redireccionBanner: string;
}

function Banner({
  imagenBanner,
  etiquetaBanner,
  tituloBanner,
  tituloMarcadoBanner,
  descripcionBanner,
  redireccionBanner,
}: BannerProps) {
  return (
    <div className="relative m-4 overflow-hidden rounded-xl aspect-3/4">
      <img
        src={imagenBanner}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black to-transparent"></div>
      <div className="relative z-10 grid justify-items-center gap-6 m-4">
        <div className="bg-accent rounded-full mt-2">
          <p className="font-['Lexend'] font-bold text-[12px] mx-3 my-1">
            {etiquetaBanner}
          </p>
        </div>
        <div>
          <h2 className="text-white font-['Lexend'] text-3xl font-bold text-center">
            {tituloBanner}
            <span className="text-primary font-['Lexend'] block">
              {tituloMarcadoBanner}
            </span>
          </h2>
        </div>
        <div>
          <p className="text-secondary font-['Lexend'] text-center">
            {descripcionBanner}
          </p>
        </div>
        <div className="mt-5">
          <a
            href="#"
            className="text-white font-['Lexend'] font-bold bg-primary px-20 py-5 rounded-full"
          >
            Ver Productos
          </a>
          <a
            href={redireccionBanner}
            className="text-white font-['Lexend'] font-bold block text-center mt-6 backdrop-blur-md py-5 rounded-full border"
          >
            Conoce Más
          </a>
        </div>
      </div>
    </div>
  );
}
export default Banner;
