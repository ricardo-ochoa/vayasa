import { Grid, Typography, List, ListItem, ListItemText, Box } from '@mui/material'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SimpleImageSlider from "react-simple-image-slider";
// import Image from 'next/image';

const images = [
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705808601/vayasa/slide3_zyjvoo.jpg'},
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705808602/vayasa/slide2_tk4wka.jpg'},
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705808601/vayasa/slide1_vq8f6q.jpg'}
]

export const Oil = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id='oil'>

      <Box height={'100%'} width={'100%'} margin={'0 auto'} style={{ backgroundColor: 'green', position: 'sticky'}} >
      <SimpleImageSlider
        width={'100%'}
        height={isMobile ? 200 : 400}
        slideDuration={3}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
      </Box>

      {/* <CardMedia component="img" src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663391388/VAYASA/oil_clg5v7.jpg" 
      alt="oil and gas" style={{ height: "300px", width: "100%", objectFit: 'cover' }} /> */}

      <Typography variant='h3' fontWeight='800' textAlign='center' mb={4} mt={4} className="animate__animated animate__zoomIn">Ingeniería</Typography>

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
