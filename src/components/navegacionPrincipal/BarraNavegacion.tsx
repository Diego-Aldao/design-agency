import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import MenuMobile from "./MenuMobile";

interface Props {
  listadoNavegacion: {
    id: number;
    nombre: string;
  }[];
  listadoRedes: {
    id: number;
    nombre: string;
  }[];
}

const BarraNavegacion = ({ listadoNavegacion, listadoRedes }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsVisible((isVislble) => !isVislble);
  };

  return (
    <>
      <header
        className={`barra-navegacion ${
          scrollY >= 550
            ? "fixed backdrop-blur bg-[rgba(228,228,228,0.5)]"
            : "absolute backdrop-blur-0 "
        }`}
      >
        <div className="logo">
          <Icon
            icon="ph:feather-fill"
            rotate={3}
            className="icono--small icono"
          />
          <a href="#" className="logo__nombre">
            BlackFeather
          </a>
        </div>
        <nav className="nav-desktop">
          <ul className="nav-desktop__list ">
            {listadoNavegacion.map((link) => (
              <li key={link.id} className="nav-desktop__list__item">
                <a href={`#${link.nombre}`}>{link.nombre}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="button-menu-mobile md:hidden" onClick={handleClick}>
          <Icon icon="line-md:menu" className="icono--small icono" />
        </button>
      </header>
      <MenuMobile
        toggleMenu={handleClick}
        isVisible={isVisible}
        listadoNavegacion={listadoNavegacion}
        listadoRedes={listadoRedes}
      />
    </>
  );
};

export default BarraNavegacion;
