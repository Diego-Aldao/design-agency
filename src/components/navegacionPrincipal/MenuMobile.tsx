import { Icon } from "@iconify/react";

interface Props {
  isVisible: boolean;
  toggleMenu: () => void;
  listadoNavegacion: {
    id: number;
    nombre: string;
  }[];
  listadoRedes: {
    id: number;
    nombre: string;
  }[];
}

const MenuMobile = ({
  isVisible,
  toggleMenu,
  listadoNavegacion,
  listadoRedes,
}: Props) => {
  return (
    <div className={isVisible ? "menu-mobile" : "menu-mobile--hidden"}>
      <header className="menu-mobile__header">
        <div className="logo" onClick={toggleMenu}>
          <Icon
            icon="ph:feather-fill"
            rotate={3}
            className="icono--small icono--white"
          />
          <a href="#" className="logo__nombre--white logo__nombre">
            BlackFeather
          </a>
        </div>

        <Icon
          icon="line-md:menu"
          className="icono--small icono--white"
          onClick={toggleMenu}
        />
      </header>
      <ul className="menu-mobile__list">
        {listadoNavegacion.map((link) => (
          <li
            key={link.id}
            className="menu-mobile__list__item"
            onClick={toggleMenu}
          >
            <a href={`#${link.nombre}`} className="text-main-white">
              {link.nombre}
            </a>
          </li>
        ))}
      </ul>
      <footer className="menu-mobile__footer">
        <ul className="redes">
          {listadoRedes.map((red) => (
            <li key={red.id} className="redes__link redes__link--white">
              {red.nombre}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default MenuMobile;
