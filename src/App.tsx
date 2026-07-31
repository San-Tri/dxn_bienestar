import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner
        imagenBanner=""
        etiquetaBanner="SALUD INTEGRAL"
        tituloBanner="Bienvenido a tu salud natural."
        tituloMarcadoBanner="Descubre el poder de DXN."
        descripcionBanner="Mejora tu calidad de vida con productos orgánicos."
        redireccionBanner=""
      />
      <Footer />
    </>
  );
}
export default App;
