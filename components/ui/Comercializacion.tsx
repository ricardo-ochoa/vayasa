import { Grid, Typography, List, ListItem, ListItemText, CardMedia, Box } from '@mui/material'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import Image from 'next/image';

export const Comercializacion = () => {
  return (
    <Box id='comercializacion'>
      <CardMedia component="img" src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663600281/VAYASA/comercializacion_y5zz7z.jpg" alt="oil and gas" style={{ height: "300px", width: "100%", objectFit: 'cover' }} />
      <Typography variant='h3' fontWeight='800' textAlign='center' mb={4} mt={2} >Comercializacion</Typography>

      <Grid container flexDirection="row" padding={2} spacing={4}>

        <Grid item xs={12} md={12} mt={3}>
          <List>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText className='itemList' primary="Generar e implementar planes estratégicos de abastecimiento." sx={{ marginLeft: '0.5rem' }} />
            </ListItem>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText className='itemList' primary="Proveeduría de artículos de especialidad para variedad de  sectores." sx={{ marginLeft: '0.5rem' }} />
            </ListItem>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText className='itemList' primary="Proyectar y ejecutar logísticas de comercialización mayorista y minorista." sx={{ marginLeft: '0.5rem' }} />
            </ListItem>
          </List>
        </Grid>


      </Grid>
    </Box>
  )
}
