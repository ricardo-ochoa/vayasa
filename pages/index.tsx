import type { NextPage } from 'next';
import Link from 'next/link'; // Importante para la navegación interna
import { PageLayout } from '../components/layouts/PageLayout';
import { Contactar } from '../components/ui';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <PageLayout
      title={'Industrias VAYASA'}
      pageDescription={'Mantenimiento industrial · Ingeniería · Comercialización'}
      imageFullUrl={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663371165/VAYASA/main-banner_avf1f8.jpg'}
    >
      
      {/* Contenedor de la imagen al 100% */}
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <Image
          src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1770272748/VAYASA/portada_hxdk3x.jpg"
          alt="Banner Principal Industrias VAYASA"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>

      {/* Botón de acción */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '40px 0' 
      }}>
        <Link href="servicios" passHref>
          <button style={{
            backgroundColor: '#0056b3',
            color: 'white',
            padding: '15px 30px',
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}>
            Ver los servicios
          </button>
        </Link>
      </div>

      <Contactar />
    </PageLayout>
  );
};

export default Home;