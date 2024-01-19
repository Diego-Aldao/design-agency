import { Swiper, SwiperSlide } from "swiper/react";
import imagenSwiper1 from "../assets/trabajo1.webp";
import imagenSwiper2 from "../assets/trabajo2.webp";
import imagenSwiper3 from "../assets/trabajo3.webp";
import imagenSwiper4 from "../assets/trabajo4.webp";

// Import Swiper styles
import "swiper/css";

const listadoTrabajos = [
  {
    id: 1,
    imagen: imagenSwiper1,
    tipo: "landing page",
    nombre: "polestar",
  },
  {
    id: 2,
    imagen: imagenSwiper2,
    tipo: "UX design",
    nombre: "svami",
  },
  {
    id: 3,
    imagen: imagenSwiper3,
    tipo: "landing page",
    nombre: "jean",
  },
  {
    id: 4,
    imagen: imagenSwiper4,
    tipo: "diseño de producto",
    nombre: "amidala",
  },
];

const SectionTrabajos = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1.2,
        },
        1024: {
          slidesPerView: 1.4,
          spaceBetween: 100,
        },
      }}
      spaceBetween={50}
      className="swiper"
    >
      {listadoTrabajos.map((trabajo) => (
        <SwiperSlide key={trabajo.id}>
          <div className="contenido-slide">
            <div className="contenedor-imagen">
              <img src={trabajo.imagen} alt="" />
            </div>
            <div className="contenido-slide__desc">
              <span className="contenido-slide__desc__titulo contenido-slide__desc__titulo--mid-opacity contenido-slide__desc__titulo--small ">
                {trabajo.tipo}
              </span>
              <span className="contenido-slide__desc__titulo">
                {trabajo.nombre}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SectionTrabajos;
