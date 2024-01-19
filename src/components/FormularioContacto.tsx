import { Icon } from "@iconify/react";

const FormularioContacto = () => {
  return (
    <form
      className="formulario"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="formulario__main-info">
        <div className="formulario__main-info__fieldset">
          <label htmlFor="email" className="formulario__label">
            Tu email
          </label>
          <input
            type="email"
            name="email"
            id=""
            className="formulario__input"
          />
        </div>
        <div className="formulario__main-info__fieldset">
          <label htmlFor="comentario" className="formulario__label">
            Describe tu idea
          </label>
          <textarea
            name="comentario"
            id=""
            className="formulario__textarea"
          ></textarea>
        </div>
      </div>
      <button className="formulario__button">
        <span>enviar</span>
        <Icon icon="formkit:arrowright" className="formulario__icon" />
      </button>
    </form>
  );
};

export default FormularioContacto;
