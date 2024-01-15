import CustomSection from "./components/CustomSection";
import SectionPrincipal from "./components/SectionPrincipal";
import MainLayout from "./layouts/MainLayout";

import BreakSection from "./components/BreakSection";

import FormularioContacto from "./components/FormularioContacto";
import SectionTrabajos from "./components/SectionTrabajos";
import SectionServicios from "./components/SectionServicios";
import SectionExperiencia from "./components/SectionExperiencia";

function App() {
  return (
    <>
      <MainLayout>
        <main className="main">
          <SectionPrincipal />
          <CustomSection
            navTitle="trabajos"
            mainTitle="nuestros trabajos"
            nombreSeccion="trabajos"
          >
            <SectionTrabajos />
          </CustomSection>
          <CustomSection
            navTitle="servicios"
            mainTitle="nuestros servicios"
            nombreSeccion="servicios"
          >
            <SectionServicios />
          </CustomSection>
          <BreakSection />
          <CustomSection
            navTitle="experiencia"
            noTitle={true}
            mainTitle="nuestra experiencia"
            nombreSeccion="experiencia"
          >
            <SectionExperiencia />
          </CustomSection>
          <CustomSection
            navTitle="cuéntanos sobre ti y el proyecto"
            mainTitle="contáctanos"
            nombreSeccion="contacto"
          >
            <FormularioContacto />
          </CustomSection>
        </main>
      </MainLayout>
    </>
  );
}

export default App;
