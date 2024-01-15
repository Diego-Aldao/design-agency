interface Props {
  navTitle: string;
  mainTitle: string;
  noTitle?: boolean;
  children: JSX.Element;
  nombreSeccion: string;
}

const CustomSection = ({
  navTitle,
  mainTitle,
  children,
  noTitle,
  nombreSeccion,
}: Props) => {
  return (
    <section className="custom-section" id={nombreSeccion}>
      <aside className="custom-section__aside">
        <span className="custom-section__aside__text text-aside">
          {navTitle}
        </span>
      </aside>
      <div className="custom-section__content">
        <header className={noTitle ? "md:hidden" : ""}>
          <h2 className="custom-section__content__title ">{mainTitle}</h2>
        </header>

        {children}
      </div>
    </section>
  );
};

export default CustomSection;
