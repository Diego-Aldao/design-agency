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

const FooterPrincipal = ({ listadoNavegacion, listadoRedes }: Props) => {
  return (
    <footer className="footer-principal">
      <nav className="footer-principal__nav">
        {listadoNavegacion.map((item) => (
          <span key={item.id} className="footer-principal__nav__link">
            {item.nombre}
          </span>
        ))}
      </nav>
      <ul className="redes">
        {listadoRedes.map((item) => (
          <li key={item.id} className="redes__link">
            {item.nombre}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterPrincipal;
