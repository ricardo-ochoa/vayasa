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

<Typography variant='h2' fontWeight='800' textAlign='center' lineHeight={isMobile ? '40px!important' : 'auto'} mt={5} className="animate__animated animate__zoomIn">
Sistemas de Gestión: Calidad, Seguridad y Medio Ambiente.
</Typography>

<Grid container flexDirection="row" paddingX={2}>

  <Grid item xs={12} md={12} mt={6} className="animate__animated animate__zoomIn">
    <Typography variant='body1' textAlign='center' fontSize='1.3rem' mb={4} mt={2}>
    Son un conjunto de políticas, procesos, procedimientos y recursos organizados de manera
estructurada que una organización implementa para alcanzar ciertos objetivos específicos
de manera sistemática y eficiente. Cuando se habla de sistemas de gestión enfocados en
Calidad, Seguridad y Medio Ambiente, se refiere a tres áreas clave que suelen gestionarse
juntas para optimizar el desempeño global de una empresa. Sus principales objetivos
son:
    </Typography>

    <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              height: "100%",
              backgroundColor: "#e8eef7",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" component="h3" color="primary" fontWeight="bold" textAlign="center" mb={2}>
              Calidad
            </Typography>
            <Typography variant="body1">
              Garantizar que los productos o servicios cumplen con los requisitos y expectativas de los clientes,
              continuamente mejorando los procesos.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              height: "100%",
              backgroundColor: "#e8eef7",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" component="h3" color="primary" fontWeight="bold" textAlign="center" mb={2}>
              Seguridad
            </Typography>
            <Typography variant="body1">
              Prevenir accidentes laborales y enfermedades profesionales, garantizando un entorno de trabajo seguro y
              saludable.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              height: "100%",
              backgroundColor: "#e8eef7",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" component="h3" color="primary" fontWeight="bold" textAlign="center" mb={2}>
              Ambiente
            </Typography>
            <Typography variant="body1">
              Minimizar el impacto ambiental de las actividades, productos y servicios, y cumplir con las normativas
              ambientales.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
  </Grid>

  <Grid item xs={12} md={12} mt={6} className="animate__animated animate__zoomIn">
    <Typography variant='h4' fontWeight='800' textAlign='center' mb={4} mt={0}>Hecho a tu medida</Typography>
    <CardMedia component="img" src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1737783877/VAYASA/hechoamedida_rjn3a0.png" alt="Hecho a tu medida" style={{ maxHeight: "90%", maxWidth: "80%", margin: '0 auto' }} />
  </Grid>

  <Grid item xs={12} md={12} mt={3} className="animate__animated animate__zoomIn">
    <Typography variant='h6' textAlign='left' fontSize={'1.5rem'} mb={4} mt={2}>
    <span style={{ fontWeight: "bold"}} >Nuestro enfoque</span> en sistemas de gestión  <span style={{ fontWeight: "bold"}} >nos distingue por su personalización</span> y
sostenibilidad, y sigue cuatro etapas clave. Primero, evaluamos el sistema actual para
identificar fortalezas y áreas de mejora, decidiendo si ajustarlo o diseñar uno nuevo desde
cero. Luego, optimizamos procesos o creamos un sistema alineado con estándares
internacionales y necesidades específicas. En la tercera etapa, implementamos programas
de sensibilización y formación para garantizar la adopción eficaz del sistema. Finalmente,
realizamos ajustes periódicos y mantenemos el sistema para asegurar su sostenibilidad y
mejora continua.
    </Typography>
  </Grid>

  <Grid item xs={12} md={12} mt={3} className="animate__animated animate__zoomIn">
    <Typography variant='h4' fontWeight='800' textAlign='center' mb={4} mt={2}>7 beneficios de los Sistemas de Gestión</Typography>
  <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
      <List>
        {[
          "Mejora la eficiencia operativa: Optimiza procesos y reduce desperdicios, mejorando la productividad y el uso de recursos.",
          "Asegura el cumplimiento normativo: fomenta el cumplimiento de leyes y regulaciones aplicables, evitando sanciones y fortaleciendo la reputación.",
          "Incrementa la satisfacción del cliente: garantiza productos o servicios consistentes y de calidad, aumentando la confianza del cliente.",
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
          "Reduce riesgos: identifica, evalúa y controla riesgos relacionados con la seguridad, el medio ambiente o la calidad.",
          "Potencia la cultura organizacional: promueve la participación, el compromiso y la responsabilidad de los empleados.",
          "Brinda ventaja competitiva: mejora la imagen de la empresa y facilita la entrada a nuevos mercados o clientes.",
          "Fomenta la mejora continua: Establece una base para innovar y adaptarse a los cambios del entorno.",
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

<Grid item xs={12} md={12} mb={4}>
  <List>
    <ListItem>
      <Typography variant='h6'>
      • Para <span style={{ fontWeight: "bold"}}>asesoría</span> durante la implementación del Sistema de Gestión.
      </Typography>
    </ListItem>

    <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
      <Typography variant='h6'>
      • Para <span style={{ fontWeight: "bold"}}>cursos de capacitación</span>. Los cursos consideran 8 horas por día.
        Traslados, aula y servicios por cuenta del cliente. Incluye materiales en formato digital, constancia de
        participación y DC3. En caso de solicitar un curso, se requiere de 8 días hábiles previos para adaptar y
        preparar el material de capacitación. Temas en inventario:
      </Typography>

      <List sx={{ pl: 4, width: "100%" }}>
        {[
          "Sistema de Gestión SSPA: 5 días teórico práctico.",
          "Las 12 Mejores Prácticas Administrativas: 5 días teórico práctico.",
          "Administración de la Seguridad de los Procesos: 3 días teórico práctico.",
          "Administración de la Salud en el Trabajo: 5 días teórico práctico.",
          "Administración Ambiental: 3 días teórico práctico.",
          "Establecimiento de Metas y Objetivos: 1 día teórico práctico.",
          "Análisis Crítico de Resultados: 1 día teórico práctico.",
          "Auditorías Efectivas: 3 días (1 teoría, 2 práctica).",
          "Taller de Disciplina Operativa: 5 días teórico práctico.",
          "Taller de Elaboración de Procedimientos: 3 días teórico práctico.",
          "Investigación de Accidentes: 5 días teórico práctico.",
          "Comunicaciones Efectivas: 1 día teórico práctico.",
          "Análisis de Riesgos de Proceso: 3 días teórico práctico.",
          "Plan de Respuesta a Emergencias (PRE): 3 días teórico práctico.",
          "Análisis de Seguridad del Trabajo (AST): 2 días teórico práctico.",
          "Hoja de Datos de Seguridad de Materiales (HDS): 1 día teórico práctico.",
        ].map((text, index) => (
          <ListItem key={index} sx={{ py: 0.5 }}>
            <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "8px" }}>›</span>
              {text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </ListItem>

    <ListItem>
      <Typography variant='h6'><span style={{ fontWeight: "bold"}}>• Investigación de Accidentes</span> e Incidentes (ICR), Niveles 1 y 2.
      </Typography>
    </ListItem>
  </List>
</Grid>

</Grid>
</Box>

  )
}
