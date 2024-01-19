import { Icon } from "@iconify/react";

const SectionExperiencia = () => {
  return (
    <div className="section-experiencia">
      <div>
        <span className="section-experiencia__numero">
          10 <Icon icon="memory:plus" className="icono" />
        </span>
        <span className="section-experiencia__tiempo">años</span>
      </div>
      <p className="section-experiencia__desc">
        Creemos que ser un socio del cliente es esencial. Con nuestros
        servicios, puede crear diseños y desarrollar su concepto en un producto
        de apariencia sólida que demandan los usuarios. También le
        proporcionaremos todo el apoyo necesario.
      </p>
    </div>
  );
};

export default SectionExperiencia;
