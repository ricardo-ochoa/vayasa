import { Grid, Typography, List, ListItem, ListItemText, CardMedia, Box } from '@mui/material'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705813822/vayasa/slide2consul_g9cohp.jpg'},
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705813822/vayasa/slide3consul_clmfdj.jpg'},
  {url:  'https://res.cloudinary.com/dsvlqbftn/image/upload/v1705813821/vayasa/slide1consul_exwzz5.jpg'}
]

export const Consultoria = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
<Box id='consultoria'>

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

<Typography variant='h2' fontWeight='800' textAlign='center' lineHeight={isMobile ? '30px!important' : 'auto'} mb={4} mt={5} className="animate__animated animate__zoomIn">
Maximización del Valor Económico de
Contratos e Integración de Propuestas
Técnico – Económicas
</Typography>

<Grid container flexDirection="row" padding={2} spacing={6}>

  <Grid item xs={12} md={12} mt={6} className="animate__animated animate__zoomIn">
    <Typography variant='h4' fontWeight='800' textAlign='center' mb={2} mt={2}>Nuestro compromiso</Typography>
    <Typography variant='body1' textAlign='center' fontSize='1.3rem' mb={4} mt={2}>
    Incrementar el patrimonio y la riqueza de nuestros Clientes mediante la creación
de valor, gestionando, maximizando económicamente y optimizando su contrato; a
través de estrategias que garanticen el cumplimiento de sus intereses económicos-
jurídicos.
    </Typography>
  </Grid>

  <Grid item xs={12} md={12} mt={6} className="animate__animated animate__zoomIn">
    <Typography variant='h4' fontWeight='800' textAlign='center' mb={4} mt={0}>Genere valor en cada momento</Typography>
    <CardMedia component="img" src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1746579168/VAYASA/grfica-consultoria_u93nch.png" alt="Genere valor en cada momento" style={{ maxHeight: "90%", maxWidth: "80%", margin: '0 auto' }} />
  </Grid>

  <Grid item xs={12} md={12} mt={3} className="animate__animated animate__zoomIn">
    <Typography variant='h6' textAlign='left' fontSize={'1.5rem'} mb={4} mt={2}>
    Profundizamos en el análisis económico y jurídico, párrafo a párrafo, letra a letra de
su contrato vinculando todo con su entorno legal. Esto permite utilizar
mecanismos de maximización que usualmente no se encuetran dentro de la gestión
típica de contratos.
    </Typography>
  </Grid>

  <Grid item xs={12} md={12} mt={3} className="animate__animated animate__zoomIn">
    <Typography variant='h4' fontWeight='800' textAlign='center' mb={4} mt={2}>Te tenemos cubierto</Typography>
    <Typography variant='body1' textAlign='left' fontSize={'1.3rem'} mb={4} mt={2}>
    Nuestro enfoque proactivo en la resolución de conflictos, junto con nuestra
experiencia en la negociación y gestión de ajustes de costos y convenios, asegura
la maximización del valor para nuestros clientes, minimizando riesgos legales y
financieros. Además ponemos a tu disposición 22 servicios clave en la gestión:
    </Typography>

    <CardMedia component="img" src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1746579329/VAYASA/cubierto_dellpu.png" alt="Genere valor en cada momento" style={{ maxHeight: "90%", maxWidth: "80%", margin: '0 auto' }} />
  {/* <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
      <List>
        {[
          "Ajuste de costos",
          "Gastos no recuperables",
          "Precios unitarios extraordinarios",
          "Convenios adicionales",
          "Gastos financieros",
          "Convenios modificatorios",
          "PACMA",
          "Contenido nacional",
          "Anexo SSPA",
          "Penas convencionales",
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
          "Análisis de precios unitarios",
          "Disputa",
          "Queja",
          "Amparo",
          "Recurso de inconformidad",
          "Recurso de nulidad",
          "Recurso de reconcideración",
          "Compliance",
          "Elaboración de documentos varios",
        ].map((text, index) => (
          <ListItem key={index + 10}>
            <Typography variant="body1" fontWeight="bold" sx={{ marginRight: '0.5rem' }}>
              {index + 11}.
            </Typography>
            <ListItemText className='itemList' primary={text} sx={{ marginLeft: '0.5rem' }} />
          </ListItem>
        ))}
      </List>
    </Grid>
  </Grid> */}

  </Grid>

  {/* <Grid item xs={12} md={12} my={12} className="animate__animated animate__zoomIn">
    <Typography variant='h6' textAlign='center' fontSize={'2rem'} mb={2} mt={2}>Recuerda que…</Typography>
    <Typography variant='h3' textAlign='center' fontWeight={'800'} fontSize={'2rem'} maxWidth={'600px'} m={'0 auto'}>
      “LA IGNORANCIA DE LA LEY NO EXCUSA SU CUMPLIMIENTO”
    </Typography>
  </Grid> */}

</Grid>
</Box>

  )
}
