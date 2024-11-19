import { Box, useMediaQuery } from '@mui/material';
import type { NextPage } from 'next';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

import { PageLayout } from '../components/layouts/PageLayout';
import { Contactar } from '../components/ui';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1731993175/VAYASA/salide1_x8hwwm.jpg', redirect: '/consultoria' },
  { url: 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1731993175/VAYASA/slide2_pnwnta.jpg', redirect: '/ingenieria' },
  { url: 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1731993175/VAYASA/slide3_wnbnvt.jpg', redirect: '/comercializacion' },
];

const Home: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  const handleImageClick = (index: number) => {
    if (index >= 0 && index < images.length) {
      const redirectUrl = images[index].redirect;
      router.push(redirectUrl);
    } else {
      console.error(`Invalid index: ${index}`);
    }
  };

  return (
    <PageLayout
      title={'Industrias VAYASA'}
      pageDescription={'Mantenimiento industrial · Ingeniería · Comercialización'}
      imageFullUrl={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663371165/VAYASA/main-banner_avf1f8.jpg'}
    >
      <Box height={'100%'} width={'100%'} margin={'0 auto'} style={{ backgroundColor: 'green', position: 'sticky' }}>
        <SimpleImageSlider
          width={'100%'}
          height={isMobile ? 200 : 400}
          slideDuration={5}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onClick={(idx) => {
            const adjustedIndex = idx; // Ajustar índice para ser 0-based
            handleImageClick(adjustedIndex);
          }}
        />
      </Box>
      <Contactar />
    </PageLayout>
  );
};

export default Home;
