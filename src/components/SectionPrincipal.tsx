import { Icon } from "@iconify/react";
import imagenHeader from "../assets/ImagenHero.webp";

const SectionPrincipal = () => {
  return (
    <section className="main-section">
      <aside className="main-section__aside">
        <p className="main-section__aside__text text-aside">
          creando productos impresionantes. creando marcas atractivas.
        </p>
        <button className="main-section__aside__button">
          <Icon icon="radix-icons:arrow-bottom-right" className="icono--huge" />
        </button>
      </aside>
      <article className="main-section__info">
        <div className="main-section__info__desc">
          <h1 className="main-section__info__titulo">
            <span>diseño.</span>
            <span>desarrollo.</span>
            <span>experiencia.</span>
          </h1>
          <p className="main-section__info__subtitulo">
            Construyendo productos impresionantes. Creando marcas atractivas.
          </p>
          <button className="main-section__info__button">
            <span className="main-section__info__text">explorar</span>
            <Icon icon="mdi:arrow-bottom" className="icono" />
          </button>
        </div>

        <div className="main-section__info__image ">
          <img src={imagenHeader} alt="" />
        </div>
      </article>
    </section>
  );
};

export default SectionPrincipal;
