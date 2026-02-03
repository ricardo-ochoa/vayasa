import type { NextPage } from 'next';
import { PageLayout } from '../components/layouts/PageLayout'; // Ajusta la ruta según tu estructura
import { Servicios } from '../components/ui/Servicios';

const ServiciosPage: NextPage = () => {
  return (
    <PageLayout 
      title="Servicios - Industrias VAYASA" 
      pageDescription="Especialistas en ingeniería petrolera y sistemas de gestión"
    >
      <Servicios />
    </PageLayout>
  );
};

// Esta es la línea que falta y que resuelve el error:
export default ServiciosPage;