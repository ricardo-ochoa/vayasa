import { Grid, Typography, List, ListItem, ListItemText, CardMedia, Box } from '@mui/material'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705814388/vayasa/slide4_fxhpro.jpg'},
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705814388/vayasa/slide3_hdpwbt.jpg'},
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705814387/vayasa/slide1_e96t4b.jpg'},
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705814387/vayasa/slide2_vaop6k.jpg'}
]

export const Comercializacion = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id='comercializacion'>
      {/* <CardMedia component="img" src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663600281/VAYASA/comercializacion_y5zz7z.jpg" 
      alt="oil and gas" style={{ height: "300px", width: "100%", objectFit: 'cover' }} /> */}

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


      <Typography variant='h3' fontWeight='800' textAlign='center' mb={4} mt={5} className="animate__animated animate__zoomIn">Comercializacion</Typography>

      <Grid container flexDirection="row" padding={2} spacing={4} className="animate__animated animate__zoomIn">

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
