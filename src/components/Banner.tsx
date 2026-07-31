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
    <div>
      <img src={imagenBanner} alt="" />
      <p>{etiquetaBanner}</p>
      <h2>
        {tituloBanner}
        <span>{tituloMarcadoBanner}</span>
      </h2>
      <p>{descripcionBanner}</p>
      <a href="#">Ver Productos</a>
      <a href={redireccionBanner}>Conoce Más</a>
    </div>
  );
}
export default Banner;
