import { Grid, Typography, List, ListItem, ListItemText, CardMedia, CardActionArea } from '@mui/material'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';

export const Industrias = () => {
  return (
    <>
      <Grid mt={ 12 }>
        <Typography variant='h2' textAlign='center' fontWeight='800'>Nuestras Industrias</Typography>
      </Grid>
      
      <Grid container  flexDirection="row" padding={ 2 } spacing={ 4 }>

        <Grid item xs={ 12 } sm={ 6 } md={ 4 } mt={ 1 }>
        <CardActionArea>
          <CardMedia
          component="img"
          src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663391388/VAYASA/oil_clg5v7.jpg' }
          alt="Valores vayasa"
          style={{objectFit:"cover"}}>
          </CardMedia>
          </CardActionArea>
          <Typography variant='h5' textAlign='center' mt={ 2 }> Oil & Gas </Typography>
        </Grid>

        <Grid item xs={ 12 } sm={ 6 } md={ 4 } mt={ 1 }>
          <CardActionArea>
            <CardMedia
            component="img"
            src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663391388/VAYASA/oil_clg5v7.jpg' }
            alt="Valores vayasa"
            style={{objectFit:"cover"}}>
            </CardMedia>
          </CardActionArea>
          <Typography variant='h5' textAlign='center' mt={ 2 }> Mantenimiento industrial </Typography>
        </Grid>

        <Grid item xs={ 12 } sm={ 6 } md={ 4 } mt={ 1 }>
          <CardActionArea>
          <CardMedia
          component="img"
          src={ 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663391388/VAYASA/oil_clg5v7.jpg' }
          alt="Valores vayasa"
          style={{objectFit:"cover"}}>
          </CardMedia>
          </CardActionArea>
          <Typography variant='h5' textAlign='center' mt={ 2 }> Comercialización </Typography>
        </Grid>

      </Grid>
    </>
  )
}
