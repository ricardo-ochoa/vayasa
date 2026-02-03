import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Box, Card, CardContent } from '@mui/material';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Servicios = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const serviciosPrincipales = [
    {
      titulo: "Puesta en marcha de Sistemas de Gestión",
      descripcion: "Transforma la manera en que las organizaciones operan y generan valor. A partir de un diagnóstico inicial, identificamos brechas, conservamos las mejores prácticas existentes y estandarizamos los procesos mediante documentación clara y funcional. Ayudamos a construir organizaciones más eficientes, competitivas y orientadas a la mejora continua, respaldadas por asesoría especializada en ingeniería petrolera, sistemas de gestión, desarrollo organizacional y un enfoque estratégico de transformación integral.",
      items: ["Acompañamos a su equipo en la adopción real del sistema, alineando objetivos en toda la organización y garantizando una implementación eficaz.", "Preparamos a su empresa para auditorías de certificación, maximizando las probabilidades de éxito y brindando confianza a clientes y partes interesadas."]
    },
    {
      titulo: "Auditoría a Sistemas de Gestión",
      descripcion: "Más que cumplir una norma, le permite conocer, con total claridad y objetividad, el nivel real de cumplimiento de su organización y de sus proveedores frente a los estándares aplicables.",
      items: ["Estándares: API spec Q1 y API spec Q2 (Gestión de la Calidad para el Petróleo y Gas Natural) e ISO 9001:2015 / próxima ISO/DIS 9001:2026.", "Metodología: Diseñamos planes de auditoría estratégicos, ejecutamos verificaciones presenciales o virtuales y entregamos informes detallados con hallazgos y recomendaciones concretas.", "Resultado: Una organización más confiable, con mayor control sobre sus procesos y la certeza de que su sistema de gestión evoluciona permanentemente."]
    },
    {
      titulo: "Investigación y Análisis Causa Raíz (ICR/ACR)",
      descripcion: "Fortalece el sistema de gestión, reduce la recurrencia de incidentes, mejora el desempeño operativo y consolida una cultura de aprendizaje continuo basada en lecciones aprendidas y evidencia objetiva. Transforma un evento no deseado en conocimiento organizacional accionable al identificar de manera sistemática no solo qué ocurrió, sino por qué ocurrió. A través del análisis estructurado de hechos, tiempos, causas físicas, humanas y de sistema, la ICR revela debilidades reales en la gestión y evalúa la efectividad de las barreras existentes.",
    items: []
    },
    {
      titulo: "Peritaje en Ingeniería Petrolera e Ingeniería Económica",
      descripcion: "Nos distinguimos por contar con una vasta experiencia técnica en:",
      items: ["Prospección y exploración.", "Desarrollo de campos y productividad de pozos.", "Perforación, terminación y mantenimiento de pozos petroleros.", "Intervenciones a pozos con y sin equipo.", "Proceso de contratación y maximización del valor económico de los contratos."]
    },
    {
      titulo: "Auditoría Económica",
      descripcion: "Es una herramienta estratégica diseñada para mejorar el desempeño económico de cada contrato y fortalecer la posición financiera de nuestros clientes frente al contratante. A través de una auditoría integral, identifica montos recuperables, optimiza la rentabilidad y minimiza contingencias. Permite proteger el poder adquisitivo del contrato y generar liquidez real a través de estrategias de cobro sólidas.",
    items: []
    },
    {
      titulo: "Integración de Libros Blancos",
      descripcion: "Nuestro servicio convierte cada contrato en un expediente sólido, completo y plenamente trazable. Creamos una memoria documental que resguarda desde el proceso de contratación hasta la terminación y solución de controversias.",
        items: ["Permite demostrar el debido proceso de adjudicación.", "Verifica el cumplimiento de obligaciones contractuales.", "Respalda cierres técnicos, administrativos y económicos.", "Brinda certeza jurídica y operativa a lo largo de toda la vida de un contrato."]
    },
    {
      titulo: "Estudio Análisis de Precio Unitarios",
      descripcion: "Es una herramienta que fortalece la administración presupuestal y financiera del contrato, aportando certidumbre económica y transparencia. Integra todos los costos directos e indirectos de cada concepto de obra, determinando con precisión el costo real y el margen de utilidad. Protege la rentabilidad mediante la incorporación del costo de oportunidad financiero y el blindaje ante cargos adicionales.",
    items: []
    }
  ];

  return (
    <Box id='servicios' sx={{ overflowX: 'hidden' }}>
      <Typography 
        variant='h2' 
        fontWeight='800' 
        textAlign='center' 
        lineHeight={isMobile ? '1.2' : 'auto'} 
        mb={4} 
        mt={5} 
        className="animate__animated animate__zoomIn"
      >
        Nuestros Servicios Especializados
      </Typography>

      <Typography 
        variant='body1' 
        textAlign='center' 
        fontSize='1.3rem' 
        sx={{ maxWidth: '900px', margin: '0 auto', px: 2 }} 
        mb={6}
      >
        Ayudamos a construir organizaciones más eficientes, competitivas y orientadas a la mejora continua, respaldadas por asesoría especializada.
      </Typography>

      <Grid container spacing={4} padding={isMobile ? 2 : 6}>
        {serviciosPrincipales.map((servicio, index) => (
          <Grid item xs={12} md={6} key={index} className="animate__animated animate__fadeInUp">
            <Card sx={{ height: '100%', boxShadow: 1, borderRadius: 3 }}>
              <CardContent>
                <Typography variant='h5' fontWeight='800' color="text.primary" gutterBottom>
                  {servicio.titulo}
                </Typography>
                <Typography variant='body2' fontSize='1.1rem' color="text.secondary" mb={2}>
                  {servicio.descripcion}
                </Typography>
                <List dense>
                  {servicio?.items?.map((item, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemIcon sx={{ minWidth: 35 }}>
                        <DoneTwoToneIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}

      </Grid>

      <Box py={8} textAlign="center">
        <Typography variant='h5' fontStyle="italic" color="text.secondary">
          &quot;Transformamos un evento no deseado en conocimiento organizacional accionable&quot;.
        </Typography>
      </Box>
    </Box>
  );
};