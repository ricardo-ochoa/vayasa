import { Grid, Typography, List, ListItem, ListItemText, CardMedia } from '@mui/material'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';

export const Nosotros = () => {
  return (
    <section id='nosotros'>
      <Grid mt={ 12 } >
        <Typography variant='h2' textAlign='center' fontWeight='800'>Nosotros</Typography>
      </Grid>
      
      <Grid container  flexDirection="row" padding={ 2 } spacing={ 4 }>

        <Grid item xs={ 12 } md={ 6 } mt={ 5 }>
          <Typography variant='h4' fontWeight='500'>Visión</Typography>
          <Typography mt={ 2 }>Estamos convencidos de que a través de la ingeniería y la innovación tecnológica, se promueven entornos de negocios más competitivos y se logran resultados que crean un futuro más sustentable para el beneficio de todos.</Typography>
        </Grid>

        <Grid item xs={ 12 } md={ 6 } mt={ 5 }>
          <Typography variant='h4' fontWeight='500'>Misión</Typography>
          <Typography mt={ 2 }>Desarrollamos soluciones tecnológicas basadas en ingeniería que contribuyen en resolver los desafíos a los que se enfrentan nuestros clientes.</Typography>
        </Grid>

        <Grid item xs={ 12 } md={ 6 } mt={ 5 }>
          <Typography variant='h4' fontWeight='500'>Valores</Typography>
          <Typography mt={ 2 }>Creemos firmemente en que es fundamental considerar perspectivas económicas, sociales y ambientales por lo que nuestros principios reflejan el compromiso que tenemos hacia las personas, a la comunidad y al medio ambiente.</Typography>
          
          <List>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText primary="Integridad" sx={{ marginLeft:'0.5rem' }} />
            </ListItem>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText primary="Respeto" sx={{ marginLeft:'0.5rem' }} />
            </ListItem>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText primary="Ética en los negocios" sx={{ marginLeft:'0.5rem' }} />
            </ListItem>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText primary="Transparencia" sx={{ marginLeft:'0.5rem' }} />
            </ListItem>
          </List>

        </Grid>

        <Grid item xs={ 6 } md={ 3 } mt={ 0 }>
          <CardMedia
            component="img"
            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663390641/VAYASA/cora_l5bdzp.jpg' }
            alt="Valores vayasa"
            style={{objectFit:"cover"}}
            width='200px'>
          </CardMedia>

        </Grid>
      

      </Grid>
    </section>
  )
}
