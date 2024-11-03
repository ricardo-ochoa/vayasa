import { Box, useMediaQuery } from '@mui/material'
import type { NextPage } from 'next'
import { useTheme } from '@mui/material/styles';


import { PageLayout } from '../components/layouts/PageLayout'
import { Industrias, Mantenimiento, Nosotros, Oil, Comercializacion, Contactar } from '../components/ui'
import { Banner } from '../context'
import { IndustriasHome } from '../components/ui/IndustriasHome'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: 'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705814388/vayasa/slide4_fxhpro.jpg' },
  { url: 'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705814388/vayasa/slide3_hdpwbt.jpg' },
  { url: 'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705814387/vayasa/slide1_e96t4b.jpg' },
  { url: 'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705814387/vayasa/slide2_vaop6k.jpg' }
]


const Home: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <PageLayout title={'Industrias VAYASA'} pageDescription={'Mantenimiento industrial · Ingeniería · Comercialización'} imageFullUrl={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663371165/VAYASA/main-banner_avf1f8.jpg'}>
      {/* <Banner image={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663371165/VAYASA/main-banner_avf1f8.jpg'} imageMobile={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663371824/VAYASA/mobile-banner_uqc36z.jpg'}></Banner>
      <Nosotros /> */}
      {/* <IndustriasHome /> */}
      {/* <Oil />
      <Mantenimiento />
      <Comercializacion /> */}

      <Box height={'100%'} width={'100%'} margin={'0 auto'} style={{ backgroundColor: 'green', position: 'sticky' }} >
        <SimpleImageSlider
          width={'100%'}
          height={isMobile ? 200 : 600}
          slideDuration={5}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </Box>
      <Contactar />

    </PageLayout>
  )
}

export default Home
