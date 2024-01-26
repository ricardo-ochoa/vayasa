import { useEffect, useState } from 'react';
import { Grid, Typography, List, ListItem, ListItemText, CardMedia, CardActionArea, Box } from '@mui/material'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { useRouter } from 'next/router';

export const IndustriasHome = () => {

  const router = useRouter();

  const navigateTo = (url: string) => {
    router.push(url)
  }

  const solutions = {
    inge: ['https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663391388/VAYASA/oil_clg5v7.jpg',
    'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705802050/vayasa/F1_Ing_et3nnt.jpg',
    'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705802050/vayasa/F2_Ing_mrjsmw.jpg',
    'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705802050/vayasa/F3_Ing_htxcff.jpg',],
    capa: ['https://res.cloudinary.com/dsvlqbftn/image/upload/v1705802805/vayasa/F1_Cap_ain3ca.jpg',
    'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705802805/vayasa/F2_Cap_kfaaec.jpg',
    'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705802805/vayasa/F3_Cap_pwpebq.jpg',
    'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1687644600/VAYASA/capacitacion_ky5laa.jpg',],
    consulto: ['https://res.cloudinary.com/dnxxkvpiz/image/upload/v1687645657/VAYASA/consultoria_b0qaae.jpg',
    'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705803304/vayasa/F2_Cons_gnnqvv.jpg',
    'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705803304/vayasa/F3_Cons_ehdf8j.jpg',
    'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705803304/vayasa/F1_Cons_sv1cpq.webp',],
    comer: ['https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663600281/VAYASA/comercializacion_y5zz7z.jpg',
    'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705803710/vayasa/F3_Comer_ltslar.webp',
    'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705803692/vayasa/F1_Comer_ewcov5.jpg',
    'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705803711/vayasa/F4_Comer_du5dxh.jpg',
    'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705803692/vayasa/F2_Comer_l7ovoh.avif']
}

const [count, setCount] = useState(0);
const [cambio, setCambio] = useState('');
////// Images //////
const imageArray = solutions.inge
const ingeImages = imageArray[count % imageArray.length];

const capaArray = solutions.capa
const capaImages = capaArray[count % capaArray.length];

const consultoArray = solutions.consulto
const consultoImages = consultoArray[count % consultoArray.length];

const comerArray = solutions.comer
const comerImages = comerArray[count % comerArray.length];

useEffect(() => {
  const timerId = setInterval(() => {
    setCount(count => count + 1);
  }, 6000);
  return () => clearInterval(timerId);
}, []);

useEffect(() => {
  setTimeout(() => {
    setCambio('opacityImage')
  }, 10);
  setCambio('')
}, [count]);

  return (
    <section id='industrias'>
      <Grid pt={12}>
        <Typography variant='h2' textAlign='left' fontWeight='800'>Soluciones</Typography>
      </Grid>

      <Grid container flexDirection="row" padding={2} spacing={4}>

        <Grid item xs={12} sm={6} md={3} mt={1} className="animate__animated animate__fadeInUp solutionInge">
          <CardActionArea sx={{ backgroundColor: '#35569d', display: 'flex' }}>
            
            <Box
              className={`${cambio} solutionImage`}
              onClick={() => navigateTo('/ingenieria')}
              sx={{ mixBlendMode: "luminosity", ":hover": { mixBlendMode: "normal" } }}
              component='img'
              src={ ingeImages } 
              width='100%'
              height={'350px'}
              alt='Ingeniería Industrias Vayasa'
              style={{ objectFit: "cover" }}
            />

          </CardActionArea>
          <Typography variant='h6' textAlign='center' mt={2} fontWeight={800}> Ingeniería </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3} mt={1} className="animate__animated animate__fadeInUp solutionCapa">
          <CardActionArea sx={{ backgroundColor: '#35569d', display: 'flex' }}>

          <Box
              className={`${cambio} solutionImage`}
              onClick={() => navigateTo('/')}
              sx={{ mixBlendMode: "luminosity", ":hover": { mixBlendMode: "normal" } }}
              component='img'
              src={ capaImages } 
              width='100%'
              height={'350px'}
              alt='Capacitación Industrias Vayasa'
              style={{ objectFit: "cover" }}
            />

          </CardActionArea>
          <Typography variant='h6' textAlign='center' mt={2} fontWeight={800}> Capacitación </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3} mt={1} className="animate__animated animate__fadeInUp solutionConsu">
          <CardActionArea sx={{ backgroundColor: '#35569d',  display: 'flex' }}>
          <Box
              className={`${cambio} solutionImage`}
              onClick={() => navigateTo('/consultoria')}
              sx={{ mixBlendMode: "luminosity", ":hover": { mixBlendMode: "normal" } }}
              component='img'
              src={ consultoImages } 
              width='100%'
              height={'350px'}
              alt='Consultoría Industrias Vayasa'
              style={{ objectFit: "cover" }}
            />
          </CardActionArea>
          <Typography variant='h6' textAlign='center' mt={2} fontWeight={800}> Consultaría jurídico mercantil </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3} mt={1} className="animate__animated animate__fadeInUp solutionComer">
          <CardActionArea sx={{ backgroundColor: '#35569d',  display: 'flex'  }}>
          <Box
              className={`${cambio} solutionImage`}
              onClick={() => navigateTo('/comercializacion')}
              sx={{ mixBlendMode: "luminosity", ":hover": { mixBlendMode: "normal" } }}
              component='img'
              src={ comerImages } 
              width='100%'
              height={'350px'}
              alt='Comercialización Industrias Vayasa'
              style={{ objectFit: "cover" }}
            />
          </CardActionArea>
          <Typography variant='h6' textAlign='center' mt={2} fontWeight={800}> Comercialización </Typography>
        </Grid>

      </Grid>
    </section>
  )
}
