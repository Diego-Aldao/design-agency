interface Props {
  navTitle: string;
  mainTitle: string;
  noTitle?: boolean;
  children: JSX.Element;
}

const CustomSection = ({ navTitle, mainTitle, children, noTitle }: Props) => {
  return (
    <section className="section py-10 w-full grid-cols-1 lg:py-20 grid md:grid-cols-[150px,_calc(100%_-_150px)] lg:grid-cols-[200px,_calc(100%_-_200px)]">
      <aside className="section__aside hidden md:flex h-full justify-center relative">
        <span className="section__aside__text capitalize text-xs pt-1 min-w-[80px] max-w-[80px] h-fit sticky top-10 lg:top-16 left-0 font-semibold">
          {navTitle}
        </span>
      </aside>
      <div className="section__content flex flex-col gap-10 w-full">
        <header className={`${noTitle && "header--disabled md:hidden"}`}>
          <h2 className="section__content__title capitalize font-semibold text-3xl lg:text-4xl xl:text-5xl font-main-font">
            {mainTitle}
          </h2>
        </header>

        {children}
      </div>
    </section>
  );
};

export default CustomSection;
