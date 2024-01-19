import { Icon } from "@iconify/react";
import { useState } from "react";

const listaServicios = [
  {
    id: 1,
    nombre: "UX y diseño de producto",
  },
  {
    id: 2,
    nombre: "desarrollo de productos",
  },
  {
    id: 3,
    nombre: "diseño web premiado",
  },
  {
    id: 4,
    nombre: "diseño de comunicacion",
  },
];

const SectionServicios = () => {
  const [currentAcordeon, setCurrentAcordeon] = useState<number>(0);

  const handleClick = (id: number) => {
    if (id === currentAcordeon) {
      setCurrentAcordeon(0);
    } else {
      setCurrentAcordeon(id);
    }
  };

  return (
    <ul className="lista-servicios">
      {listaServicios.map((servicio) => (
        <li key={servicio.id} className="lista-servicios__item">
          <div
            onClick={() => {
              handleClick(servicio.id);
            }}
            className="lista-servicios__item__header"
          >
            <span className="lista-servicios__item__header__title">
              {servicio.nombre}
            </span>
            <Icon
              icon="bi:plus"
              className={`icono--small ${
                currentAcordeon === servicio.id
                  ? "lista-servicios__item__header__icono--full-opacity"
                  : "lista-servicios__item__header__icono"
              }`}
            />
          </div>
          <p
            className={
              currentAcordeon === servicio.id
                ? "lista-servicios__item__desc"
                : "lista-servicios__item__desc--hidden"
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sint
            iure iusto, vitae explicabo sapiente illo delectus omnis animi
            quisquam, optio assumenda itaque quos nihil? Illum dicta doloribus
            quae quos.
          </p>
        </li>
      ))}
    </ul>
  );
};

export default SectionServicios;
