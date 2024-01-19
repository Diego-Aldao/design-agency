import FooterPrincipal from "../components/FooterPrincipal";
import BarraNavegacion from "../components/navegacionPrincipal/BarraNavegacion";

interface Props {
  children: JSX.Element;
}

const MainLayout = ({ children }: Props) => {
  const listadoNavegacion = [
    {
      id: 1,
      nombre: "trabajos",
    },
    {
      id: 2,
      nombre: "servicios",
    },
    {
      id: 3,
      nombre: "experiencia",
    },
    {
      id: 4,
      nombre: "contacto",
    },
  ];
  const listadoRedes = [
    {
      id: 1,
      nombre: "instagram",
    },
    {
      id: 2,
      nombre: "behance",
    },
    {
      id: 3,
      nombre: "facebook",
    },
  ];

  return (
    <>
      <BarraNavegacion
        listadoNavegacion={listadoNavegacion}
        listadoRedes={listadoRedes}
      />
      {children}
      <FooterPrincipal
        listadoNavegacion={listadoNavegacion}
        listadoRedes={listadoRedes}
      />
    </>
  );
};

export default MainLayout;
