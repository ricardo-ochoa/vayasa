import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Box, Card, CardContent } from '@mui/material';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';

export const Servicios = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const serviciosPrincipales = [
    {
      titulo: "Puesta en marcha de Sistemas de Gestión",
      descripcion: "Transforma la manera en que las organizaciones operan y generan valor. A partir de un diagnóstico inicial, identificamos brechas, conservamos las mejores prácticas existentes y estandarizamos los procesos mediante documentación clara y funcional. Acompañamos a su equipo en la adopción real del sistema, alineando objetivos en toda la organización y garantizando una implementación eficaz. Preparamos a su empresa para auditorías de certificación, maximizando las probabilidades de éxito y brindando confianza a clientes y partes interesadas. Más que cumplir una norma, ayudamos a construir organizaciones más eficientes, competitivas y orientadas a la mejora continua, respaldadas por asesoría especializada en ingeniería petrolera, sistemas de gestión, desarrollo organizacional y un enfoque estratégico de transformación integral.",
      subtitle:"Nuestra especialidad:",
      items: ["API spec Q1 y API spec Q2, Gestión de l Calidad para el Petróleo y Gas Natural.", "ISO 9001:2015 próxima ISO/DI 9001:2026, Gestión de la Calidad Requisitos."]
    },
    {
      titulo: "Auditoría a Sistemas de Gestión",
      descripcion: "Le permite conocer, con total claridad y objetividad, el nivel real de cumplimiento de su organización y de sus proveedores frente a los estándares aplicables. Diseñamos planes de auditoría estratégicos, ejecutamos verificaciones presenciales o virtuales y entregamos informes detallados con hallazgos y recomendaciones concretas, garantizando el compromiso la mejora continua. El resultado es una organización más confiable, con mayor control sobre sus procesos, una visión clara de sus fortalezas y oportunidades de mejora, y la certeza de que su sistema de gestión evoluciona y se fortalece de manera permanente",
      items: [],
      image:["https://res.cloudinary.com/dnxxkvpiz/image/upload/v1770273482/VAYASA/2_ynmxef.jpg"]
    },
    {
      titulo: "Investigación y Análisis Causa Raíz (ICR/ACR)",
      descripcion: "Fortalece el sistema de gestión, reduce la recurrencia de incidentes, mejora el desempeño operativo y consolida una cultura de aprendizaje continuo basada en lecciones aprendidas y evidencia objetiva. Transforma un evento no deseado en conocimiento organizacional accionable, al identificar de manera sistemática y objetiva no solo qué ocurrió, sino por qué ocurrió. A través del análisis estructurado de hechos, tiempos, causas físicas, humanas y de sistema, la ICR revela debilidades reales en la gestión, evalúa la efectividad de las barreras existentes y orienta la toma de decisiones hacia acciones correctiva y preventivas de fondo.",
    items: [],
    image:["https://res.cloudinary.com/dnxxkvpiz/image/upload/v1770274653/VAYASA/3_gxgiwn.jpg"]
    },
    {
    titulo: "Peritaje en Ingeniería Petrolera e Ingeniería Económica",
    descripcion:
      "Nos distinguimos por contar con una vasta experiencia técnica en prospección, exploración, desarrollo de campos, productividad de pozos, perforación, terminación y mantenimiento de pozos petroleros, intervenciones a pozos con y sin equipo. Al igual que contamos con los conocimientos y experiencia técnico – administrativa con relación al proceso de contratación, maximización del valor económico de los contratos y minimización de riesgos",
    items: [],
  },
  {
    titulo: "Auditoría Económica",
    descripcion:
      "Es una herramienta estratégica diseñada para mejorar el desempeño económico de cada contrato y fortalecer la posición financiera de nuestros clientes frente al contratante. A través de una auditoría integral, identifica montos recuperables, optimiza la rentabilidad y minimiza contingencias. Mediante cálculos especializados permite proteger el poder adquisitivo del contrato, blindar a la empresa ante sanciones y generar liquidez real a través de estrategias de cobro sólidas y documentadas.",
    items: [],
    image:["https://res.cloudinary.com/dnxxkvpiz/image/upload/v1770275346/VAYASA/5_flmshv.jpg"],
  },
    {
      titulo: "Integración de Libros Blancos",
      descripcion: "Nuestro servicio de integración de Libros Blancos convierte cada contrato en un expediente sólido, completo y plenamente trazable. Creamos una memoria documental que resguarda desde el proceso de contratación hasta la terminación y, en su caso, la solución de controversias, asegurando que cada etapa cuente con evidencias claras y ordenadas. Esto permite demostrar el debido proceso de adjudicación, verificar el cumplimiento de obligaciones contractuales, validar la correcta ejecución físico-financiera de los trabajos y respaldar cierres técnicos, administrativos y económicos. El resultado es una herramienta estratégica que protege los intereses de nuestros clientes, fortalece la transparencia, facilita la fiscalización y brinda certeza jurídica y operativa a lo largo de toda la vida un contrato.",
        items: [],
        image:["https://res.cloudinary.com/dnxxkvpiz/image/upload/v1770275459/VAYASA/6_wwgtju.jpg"]
    },
    {
      titulo: "Estudio Análisis de Precio Unitarios",
      descripcion: "Es una herramienta que fortalece la administración presupuestal y financiera del contrato, aportando certidumbre económica, transparencia y una plataforma sólida para maximizar la rentabilidad y minimizar los riesgos económico-financieros del proyecto. Integra todos los costos directos e indirectos que intervienen en cada concepto de obra, permitiendo determinar con precisión el costo real y el margen de utilidad de un proyecto. Esta integración no solo cuantifica los montos máximos por erogar y los gastos devengados por administración, sino que también protege la rentabilidad mediante la incorporación del costo de oportunidad financiero y el blindaje ante cargos adicionales.",
    items: [],
    image:["https://res.cloudinary.com/dnxxkvpiz/image/upload/v1770275602/VAYASA/7_jql70y.jpg"]
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

<Grid container spacing={4} padding={isMobile ? 2 : 6} maxWidth={"1200px"}>
  {serviciosPrincipales.map((servicio, index) => {
    const imgSrc = Array.isArray(servicio.image)
      ? servicio.image[0]
      : servicio.image;

    return (
      <Grid item xs={12} key={index} className="animate__animated animate__fadeInUp">
        <Card sx={{ boxShadow: 1, borderRadius: 3 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" fontWeight="800" color="primary" gutterBottom>
                  {servicio.titulo}
                </Typography>

                <Typography variant="body2" fontSize="1.1rem" color="text.secondary" mb={2}>
                  {servicio.descripcion}
                </Typography>

                {servicio.subtitle && (
                  <Typography variant="h6" fontWeight="800" color="primary" gutterBottom>
                    {servicio.subtitle}
                  </Typography>
                )}

                {!!servicio?.items?.length && (
                  <List dense>
                    {servicio.items.map((item, idx) => (
                      <ListItem key={idx} disableGutters>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                          <DoneTwoToneIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                )}

              {imgSrc && (
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "50%",
                      aspectRatio: "16 / 9",
                      borderRadius: 1,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={imgSrc}
                      alt={servicio.titulo}
                      layout='fill'
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Grid>
              )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  })}
</Grid>


      <Box py={8} textAlign="center">
        <Typography variant='h5' fontStyle="italic" color="text.secondary">
          &quot;Transformamos un evento no deseado en conocimiento organizacional accionable&quot;.
        </Typography>
      </Box>
    </Box>
  );
};