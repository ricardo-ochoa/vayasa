import { Grid, Typography, List, ListItem, ListItemText, CardMedia, CardActionArea } from '@mui/material'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { useRouter } from 'next/router';

export const IndustriasHome = () => {

  const router = useRouter();

  const navigateTo = (url: string) => {
    router.push(url)
  }

  return (
    <section id='industrias'>
      <Grid pt={12}>
        <Typography variant='h2' textAlign='left' fontWeight='800'>Soluciones</Typography>
      </Grid>

      <Grid container flexDirection="row" padding={2} spacing={4}>

        <Grid item xs={12} sm={6} md={3} mt={1}>
          <CardActionArea sx={{ backgroundColor: '#35569d' }}>

            <CardMedia
              onClick={() => navigateTo('/oil')}
              component="img"
              height={350}
              sx={{ mixBlendMode: "luminosity", ":hover": { mixBlendMode: "normal" } }}
              src={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663391388/VAYASA/oil_clg5v7.jpg'}
              alt="Valores vayasa"
              style={{ objectFit: "cover" }}>
            </CardMedia>

          </CardActionArea>
          <Typography variant='h6' textAlign='center' mt={2} fontWeight={800}> Ingeniería </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3} mt={1} >
          <CardActionArea sx={{ backgroundColor: '#35569d' }}>
            <CardMedia
              onClick={() => navigateTo('/')}
              component="img"
              height={350}
              sx={{ mixBlendMode: "luminosity", ":hover": { mixBlendMode: "normal" } }}
              src={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1687644600/VAYASA/capacitacion_ky5laa.jpg'}
              alt="Valores vayasa"
              style={{ objectFit: "cover" }}>
            </CardMedia>
          </CardActionArea>
          <Typography variant='h6' textAlign='center' mt={2} fontWeight={800}> Capacitación </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3} mt={1} >
          <CardActionArea sx={{ backgroundColor: '#35569d' }}>
            <CardMedia
              onClick={() => navigateTo('/consultoria')}
              component="img"
              height={350}
              sx={{ mixBlendMode: "luminosity", ":hover": { mixBlendMode: "normal" } }}
              src={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1687645657/VAYASA/consultoria_b0qaae.jpg'}
              alt="Valores vayasa"
              style={{ objectFit: "cover" }}>
            </CardMedia>
          </CardActionArea>
          <Typography variant='h6' textAlign='center' mt={2} fontWeight={800}> Consultaría jurídico mercantil </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3} mt={1}>
          <CardActionArea sx={{ backgroundColor: '#35569d' }}>
            <CardMedia
              onClick={() => navigateTo('/comercializacion')}
              component="img"
              height={350}
              sx={{ mixBlendMode: "luminosity", ":hover": { mixBlendMode: "normal" } }}
              src={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663600281/VAYASA/comercializacion_y5zz7z.jpg'}
              alt="Valores vayasa"
              style={{ objectFit: "cover" }}>
            </CardMedia>
          </CardActionArea>
          <Typography variant='h6' textAlign='center' mt={2} fontWeight={800}> Comercialización </Typography>
        </Grid>

      </Grid>
    </section>
  )
}
