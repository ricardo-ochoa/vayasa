import { Grid, Typography, List, ListItem, ListItemText, CardMedia, Box } from '@mui/material'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
// import Image from 'next/image';

export const Oil = () => {
  return (
    <Box id='oil'>
      <CardMedia component="img" src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663391388/VAYASA/oil_clg5v7.jpg" alt="oil and gas" style={{ height: "300px", width: "100%", objectFit: 'cover' }} />
      <Typography variant='h3' fontWeight='800' textAlign='center' mb={4} mt={2} className="animate__animated animate__zoomIn">Ingeniería</Typography>

      <Grid container flexDirection="row" padding={2} spacing={4} className="animate__animated animate__zoomIn">

        <Grid item xs={12} md={6} mt={3}>
          <Typography variant='h5' fontWeight='600'>Upstream</Typography>
          <List>
            <ListItem sx={{ fontSize: '1.3rem!important' }}>
              <DoneTwoToneIcon />
              <ListItemText className='itemList' primary="Soluciones integrales de ingeniería para el mantenimiento de pozos y optimización de la producción de campos petroleros." 
              sx={{ marginLeft: '0.5rem'}} />
            </ListItem>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText className='itemList' primary="Suministro de equipos, herramientas, productos y servicios para el sector petrolero." sx={{ marginLeft: '0.5rem' }} />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} md={6} mt={3}>
          <Typography variant='h5' fontWeight='600'>Midstream</Typography>
          <List>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText className='itemList' primary="Asistencia en operaciones de transporte y almacenamiento." sx={{ marginLeft: '0.5rem' }} />
            </ListItem>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText className='itemList' primary="Facilitador en servicios de compra venta de hidrocarburos y sus derivados." sx={{ marginLeft: '0.5rem' }} />
            </ListItem>
          </List>
        </Grid>

      </Grid>
    </Box>
  )
}
