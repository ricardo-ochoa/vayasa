import { Grid, Typography, List, ListItem, ListItemText, CardMedia, Box, Paper } from '@mui/material'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705808601/vayasa/slide3_zyjvoo.jpg'},
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705808602/vayasa/slide2_tk4wka.jpg'},
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705808601/vayasa/slide1_vq8f6q.jpg'}
]

export const Gestion = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
<Box id='consultoria' style={{ marginBottom: "100px"}}>

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

<Typography variant='h2' fontWeight='800' textAlign='center' lineHeight={isMobile ? '40px!important' : 'auto'} mt={5} className="animate__animated animate__zoomIn">
Sistemas de Gestión de la Calidad para la
Industria Petrolera.
</Typography>

<Grid container flexDirection="row" paddingX={2}>
  <Grid item xs={12} md={12} mt={6} className="animate__animated animate__zoomIn">
<Typography variant='h4' fontWeight='800' textAlign='center' mb={4} mt={2}>La Calidad nos aleja de los problemas</Typography>
    <Typography variant='body1' textAlign='center' fontSize='1.3rem' mb={4} mt={2}>
    Calidad es la capacidad de proporcionar sistemáticamente productos y servicios
que se satisfagan las expectativas de su Cliente. Sus principales beneficios son:
    </Typography>

    <Grid container spacing={0} sx={{ mt: 1, justifyContent: 'center' }}>
  <List sx={{ listStyleType: 'disc', pl: 4 }}>
    {[
      "Aumenta la eficiencia operativa.",
      "Reduce riesgos.",
      "Mejor cultura organizacional.",
      "Brinda ventaja competitiva.",
      "Fomenta la mejora continua.",
    ].map((text, index) => (
      <ListItem key={index} sx={{ display: 'list-item', textAlign: 'center' }}>
        <ListItemText
          className="itemList"
          primary={
            <Typography variant="body1" fontWeight="bold">
              {text}
            </Typography>
          }
        />
      </ListItem>
    ))}
  </List>
  <CardMedia
    component="img"
    src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1746637934/VAYASA/diagrama_sistema_t5qmle.png"
    alt="Nivel de satisfacción"
    style={{ maxHeight: "90%", maxWidth: "80%", margin: '0 auto' }}
  />
</Grid>

  </Grid>

  <Grid item xs={12} md={12} mt={6} className="animate__animated animate__zoomIn">
    <Typography variant='h4' fontWeight='800' textAlign='center' mb={4} mt={0}>Un equipo sin igual</Typography>
    <Typography variant='body1' textAlign='center' fontSize='1.3rem' mb={4} mt={2}>
    Somos expertos en Ingeniería Petrolera, Sistemas de Gestión y Desarrollo
Organizacional, lo que nos distingue por nuestro enfoque de intervención integral
estratégica; orientado a la auténtica experiencia del proceso transformacional a
todo lo largo y ancho de su organización.
    </Typography>
  </Grid>

  <Grid item xs={12} md={12} mt={6} className="animate__animated animate__zoomIn">
    <Typography variant='h4' fontWeight='800' textAlign='center' mb={4} mt={0}>Hecho a tu medida</Typography>
    <CardMedia component="img" src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1746638924/VAYASA/diagrama_sistemas_dos_gpv4o8.png" alt="Hecho a tu medida" style={{ maxHeight: "90%", maxWidth: "80%", margin: '0 auto' }} />
  </Grid>

  <Grid item xs={12} md={12} mt={3} className="animate__animated animate__zoomIn">
  <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
      <List>
        {[
          "Evaluamos el sistema actual para identificar fortalezas y áreas de mejora, decidiendo si ajustarlo o diseñar uno nuevo desde cero.",
          "Optimizamos procesos o creamos un sistema alineado con estándares internacionales y necesidades específicas.",
        ].map((text, index) => (
          <ListItem key={index}>
            <Typography variant="body1" fontWeight="bold" sx={{ marginRight: '0.5rem' }}>
              {index + 1}.
            </Typography>
            <ListItemText className='itemList' primary={text} sx={{ marginLeft: '0.5rem' }} />
          </ListItem>
        ))}
      </List>
    </Grid>

    <Grid item xs={12} md={6}>
      <List>
        {[
          "Implementamos programas de formación y sensibilización para garantizar la adopción eficaz del sistema.",
          "Realizamos ajustes periódicos y mantenemos el sistema para asegurar su sostenibilidad y mejora continua.",
        ].map((text, index) => (
          <ListItem key={index + 3}>
            <Typography variant="body1" fontWeight="bold" sx={{ marginRight: '0.5rem' }}>
              {index + 4}.
            </Typography>
            <ListItemText className='itemList' primary={text} sx={{ marginLeft: '0.5rem' }} />
          </ListItem>
        ))}
      </List>
    </Grid>
  </Grid>
  </Grid>

</Grid>
</Box>

  )
}
