import { Grid, Typography, List, ListItem, ListItemText, CardMedia, CardActionArea } from '@mui/material'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { useRouter } from 'next/router';

export const Industrias = () => {

  const router = useRouter();

  const navigateTo = ( url: string ) => {
    router.push(url)
}
  
  return (
    <section id='industrias'>
      <Grid mt={ 12 }>
        <Typography variant='h2' textAlign='center' fontWeight='800'>Nuestras Industrias</Typography>
      </Grid>
      
      <Grid container  flexDirection="row" padding={ 2 } spacing={ 4 }>

        <Grid item xs={ 12 } sm={ 6 } md={ 4 } mt={ 1 }>
        <CardActionArea  sx={{ backgroundColor:'#35569d'}}>

            <CardMedia
            onClick={ () => navigateTo('#oil')}
            component="img"
            sx={{ mixBlendMode: "luminosity", ":hover":{ mixBlendMode:"normal" } }}
            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663391388/VAYASA/oil_clg5v7.jpg' }
            alt="Valores vayasa"
            style={{objectFit:"cover"}}>
            </CardMedia>

          </CardActionArea>
          <Typography variant='h5' textAlign='center' mt={ 2 }> Oil & Gas </Typography>
        </Grid>

        <Grid item xs={ 12 } sm={ 6 } md={ 4 } mt={ 1 } >
          <CardActionArea sx={{ backgroundColor:'#35569d'}}>
            <CardMedia
            onClick={ () => navigateTo('#mantenimiento')}
            component="img"
            sx={{ mixBlendMode: "luminosity", ":hover":{ mixBlendMode:"normal" } }}
            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663600281/VAYASA/mantenimiento_iehh6i.jpg' }
            alt="Valores vayasa"
            style={{objectFit:"cover"}}>
            </CardMedia>
          </CardActionArea>
          <Typography variant='h5' textAlign='center' mt={ 2 }> Mantenimiento industrial </Typography>
        </Grid>

        <Grid item xs={ 12 } sm={ 6 } md={ 4 } mt={ 1 }>
          <CardActionArea sx={{ backgroundColor:'#35569d'}}>
          <CardMedia
          onClick={ () => navigateTo('#comercializacion')}
          component="img"
          sx={{ mixBlendMode: "luminosity", ":hover":{ mixBlendMode:"normal" } }}
          src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663600281/VAYASA/comercializacion_y5zz7z.jpg' }
          alt="Valores vayasa"
          style={{objectFit:"cover"}}>
          </CardMedia>
          </CardActionArea>
          <Typography variant='h5' textAlign='center' mt={ 2 }> Comercialización </Typography>
        </Grid>

      </Grid>
    </section>
  )
}
