import { Grid, Typography, List, ListItem, ListItemText, CardMedia, Box } from '@mui/material'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';

export const Mantenimiento = () => {
  return (
    <Box pt={ 14 } id='mantenimiento'>
    <img src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663600281/VAYASA/mantenimiento_iehh6i.jpg" alt="oil and gas" style={{ height:"300px", width:"100%", objectFit:'cover' }} />
    <Typography variant='h3' fontWeight='800' textAlign='center' mb={4} mt={ 2 } >Mantenimiento</Typography>
    
    <Grid container  flexDirection="row" padding={ 2 } spacing={ 4 }>

        <Grid item xs={ 12 } md={ 12 } mt={ 3 }>
        <List>
            <ListItem>
            <DoneTwoToneIcon />
            <ListItemText primary="Servicios de ingeniería, diseño procura, construcción y mantenimiento de instalaciones a nivel industrial, con el más alto estándar de calidad." sx={{ marginLeft:'0.5rem' }} />
            </ListItem>
            <ListItem>
            <DoneTwoToneIcon />
            <ListItemText primary="Diseñar, planear, ejecutar y dirigir proyectos de infraestructura para el desarrollo de los diferentes sectores productivos." sx={{ marginLeft:'0.5rem' }} />
            </ListItem>
        </List>
        </Grid>


    </Grid>
    </Box>
  )
}
