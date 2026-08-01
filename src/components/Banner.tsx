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
    <div className="relative m-4">
      <img src={imagenBanner} alt="" className="absolute" />
      <p className="absolute">{etiquetaBanner}</p>
      <h2 className="absolute">
        {tituloBanner}
        <span className="absolute">{tituloMarcadoBanner}</span>
      </h2>
      <p className="absolute">{descripcionBanner}</p>
      <a href="#" className="absolute">
        Ver Productos
      </a>
      <a href={redireccionBanner} className="absolute">
        Conoce Más
      </a>
    </div>
  );
}
export default Banner;
