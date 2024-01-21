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

      {/* <CardMedia component="img" src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1687646269/VAYASA/banner_consutoria_remmgk.jpg" 
      alt="oil and gas" style={{ height: "300px", width: "100%", objectFit: 'cover' }} /> */}
      <Typography variant='h2' fontWeight='800' textAlign='center' mb={4} mt={5} className="animate__animated animate__zoomIn">Consultaría jurídico mercantil</Typography>

      <Grid container flexDirection="row" padding={2} spacing={6}>

        <Grid item xs={12} md={12} mt={6} className="animate__animated animate__zoomIn">
        <Typography variant='h4' fontWeight='800' textAlign='left' mb={4} mt={2} >Objetivo</Typography>
        <Typography variant='body1' textAlign='left' fontSize='1.3rem' mb={4} mt={2} >Incrementar el patrimonio y riqueza de nuestros clientes mediante la gestión de VALOR, maximizando económicamente y optimizando su contrato de obra y/o servicio a través de estrategias que velen por sus intereses económicos-jurídicos.</Typography>
        <CardMedia component="img" src="https://res.cloudinary.com/dsvlqbftn/image/upload/v1705466279/vayasa/objetivoImg_lxtwd0.jpg" alt="oil and gas" style={{ maxHeight: "300px", maxWidth: "300px", margin: '0 auto' }} />
        </Grid>

        <Grid item xs={12} md={12} mt={6} className="animate__animated animate__zoomIn">
        <Typography variant='h4' fontWeight='800' textAlign='left' mb={4} mt={2} >Soluciones</Typography>
          <List>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText className='itemList' primary="Servicio de Maximización Económica y Optimización de los Contratos de Obras y Servicios." sx={{ marginLeft: '0.5rem' }} />
            </ListItem>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText className='itemList' primary="Soporte y asesoría Económica-jurídica integral sobre los contratos de Obras y Servicios." sx={{ marginLeft: '0.5rem' }} />
            </ListItem>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText className='itemList' primary="Integración de propuestas técnico-económicas para licitaciones." sx={{ marginLeft: '0.5rem' }} />
            </ListItem>
            <ListItem>
              <DoneTwoToneIcon />
              <ListItemText className='itemList' primary="Procesos en instancias civiles, mercantiles, administrativos y de amparo de los contratos." sx={{ marginLeft: '0.5rem' }} />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} md={12} mt={3} className="animate__animated animate__zoomIn">
        <Typography variant='h6' textAlign='left' fontSize={'1.5rem'} mb={4} mt={2} >En el proceso contractual cada detalle es clave en la Maximización Económica y Optimización del Contrato de Obras y Servicios , ya que el más mínimo error, inconsistencia, omisión, lenguaje ambiguo o términos poco claros, pueden generar malos entendidos entre las partes involucradas y perjudicar económicamente a la Contratista.</Typography>
        </Grid>

        <Grid item xs={12} md={12} mt={3} className="animate__animated animate__zoomIn">
        <Typography variant='h4' fontWeight='800' textAlign='center' mb={1} mt={2} >MACROPROCESO DE LA ADMINISTRACIÓN DE LOS CONTRATOS</Typography>
        <CardMedia component="img" src="https://res.cloudinary.com/dsvlqbftn/image/upload/v1705477831/vayasa/banner_macro_hzkblq.jpg" alt="oil and gas" style={{ maxHeight: "90%", maxWidth: "80%", margin: '0 auto' }} />
        </Grid>

        <Grid item xs={12} md={12} mt={3} className="animate__animated animate__zoomIn">
        <Typography variant='h6' textAlign='left' fontSize={'1.5rem'} mb={4} mt={2} >Profundizamos en el análisis económico y jurídico, párrafo a párrafo, letra a letra del  contrato de Obras y Servicios y sus anexos, vinculado todo con su entorno legal.
          Asimismo, contamos con la  experiencia, capacidad, las competencias y el conocimiento para analizar detalladamente la complejidad que implica cada Contrato o acuerdo.</Typography>
        </Grid>

        <Grid item xs={12} md={12} my={3} className="animate__animated animate__zoomIn">
        <CardMedia component="img" src="https://res.cloudinary.com/dsvlqbftn/image/upload/v1705478078/vayasa/esquema_mnyq2t.jpg" alt="oil and gas" style={{ maxHeight: "100%", maxWidth: "100%", margin: '0 auto' }} />
        </Grid>


        <Grid item xs={12} md={12} my={12} className="animate__animated animate__zoomIn">
        <Typography variant='h6' textAlign='center' fontSize={'2rem'} mb={2} mt={2} >Recuerda que…</Typography>
        <Typography variant='h3' textAlign='center' 
        fontWeight={'800'} 
        fontSize={'2rem'} 
        maxWidth={'600px'} 
        m={'0 auto'}
        >“LA IGNORANCIA DE LA LEY NO EXCUSA SU CUMPLIMIENTO”</Typography>
        </Grid>

      </Grid>
    </Box>
  )
}
