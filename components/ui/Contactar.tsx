import { Grid, Typography, TextField, Box, Button, CardMedia } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

import { ValidationError, useForm } from '@formspree/react';

const handleContactUsRedirect = () => {
    setTimeout(() => {
        let homeURL = window.location.origin;
        window.location.href = `${homeURL}/#contacto`
    })
}


export const Contactar = () => {

    const [state, handleSubmit] = useForm('mnqkajqe');

    if (state.succeeded) {
        // handleContactUsRedirect();
        return <Grid mt={4}
            mb={10}
            p={2}
            container spacing={6}
            width='100%'
            justifyContent='space-between'
            maxWidth='1200px' className='contactinfo'>
            <Grid item
                xs={12}
                md={6}

                width='100%' display='flex' flexDirection='column'>
                <Typography variant='h5'>Gracias por contactarnos!</Typography>
                <Typography variant='h6'>En seguida le daremos una respuesta.</Typography>
            </Grid>
            <Grid item
                xs={12}
                md={6}>
                <Box>
                    <Typography component='h5' variant='h6' fontWeight={800} sx={{ marginBottom: 3 }}> Teléfono: </Typography>
                    <Box display='flex' flexDirection='row'> <PhoneIcon /> <a href='tel:993 187 1102'><Typography ml={2} mb={1} component='h5' variant='h6' sx={{ color: '#000' }}> 993 187 1102 </Typography> </a></Box>
                </Box>
                <Box mt={4}>
                    <Typography component='h5' variant='h6' fontWeight={800} sx={{ marginBottom: 3 }}> Dirección: </Typography>
                    <Box display='flex' flexDirection='row'> <LocationOnIcon /> <a href='https://goo.gl/maps/SMcStjacTNjXdS1U8' target="_blank" rel="noreferrer">
                        <Typography ml={2} mb={1} component='h5' variant='h6' sx={{ color: '#000' }}>
                            Calle Hicotea edificio 13, depto. 103 multi 83, Tabasco 2000, C.P. 86035, Villahermosa, Tab.
                        </Typography> </a></Box>
                </Box>
                <Box mt={4}>
                    <Typography component='h5' variant='h6' fontWeight={800} sx={{ marginBottom: 3 }}> Email: </Typography>
                    <Box display='flex' flexDirection='row'> <MarkEmailReadIcon />
                        <a href='mailto:contacto@industriasvayasa.com'>
                            <Typography ml={2} mb={1} component='h5' variant='h6' sx={{ color: '#000' }}>
                                contacto@industriasvayasa.com
                            </Typography> </a></Box>
                </Box>
            </Grid>
        </Grid>
    }

    return (
        <Box id='contacto' pt={10} className="animate__animated animate__backInUp solutionContact">
            <CardMedia component="img" src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663620484/VAYASA/contactimg_byevvd.jpg" alt="oil and gas" style={{ height: "300px", width: "100%", objectFit: 'cover' }} />

            <Grid
                mt={0}
                mb={10}
                p={2}
                container spacing={6}

                width='100%'
                justifyContent='space-between'
                maxWidth='1200px' className='contactinfo'
            >
                <Grid item
                    xs={12}
                    md={6}

                    width='100%' display='flex' flexDirection='column'>
                    <Typography component='h2' variant='h3' fontWeight={800} sx={{ marginBottom: 3 }}> Contactar </Typography>

                    <form onSubmit={handleSubmit} >


                        <TextField
                            fullWidth
                            id="name"
                            type="name"
                            name="name"

                            label="Nombre"
                            variant="standard"
                            sx={{ marginBottom: 2 }}
                            required
                        />
                        <TextField
                            fullWidth
                            id="company"
                            type="company"
                            name="company"

                            label="Empresa"
                            variant="standard"
                            sx={{ marginBottom: 2 }}
                            required
                        />
                        <TextField
                            fullWidth
                            id="email"
                            type="email"
                            name="email"

                            label="Email"
                            variant="standard"
                            sx={{ marginBottom: 2 }}

                            required
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <TextField
                            fullWidth
                            id="message"
                            name="message"

                            label="Mensaje"
                            variant="standard"
                            multiline
                            rows={4}
                            sx={{ marginBottom: 2 }}
                            required
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />

                        <Box marginTop={6}>

                            <Button type="submit" disabled={state.submitting}
                                sx={{
                                    color: '#fff',
                                    paddingLeft: '2rem', paddingRight: '2rem', ":hover": { transform: 'scale(1.03)' }, width: '100%'
                                }}>
                                <Typography fontWeight={700} fontSize='15px' lineHeight='36px'>Enviar mensaje</Typography>
                            </Button>

                        </Box>
                    </form>

                </Grid>

                <Grid item
                    xs={12}
                    md={6}>
                    <Box>
                        <Typography component='h5' variant='h6' fontWeight={800} sx={{ marginBottom: 3 }}> Teléfono: </Typography>
                        <Box display='flex' flexDirection='row'> <PhoneIcon /> <a href='tel:993 187 1102'><Typography ml={2} mb={1} component='h5' variant='h6' sx={{ color: '#000' }}> 993 187 1102 </Typography> </a></Box>
                    </Box>
                    <Box mt={4}>
                        <Typography component='h5' variant='h6' fontWeight={800} sx={{ marginBottom: 3 }}> Dirección: </Typography>
                        <Box display='flex' flexDirection='row'> <LocationOnIcon />
                            <a href='https://goo.gl/maps/SMcStjacTNjXdS1U8' target="_blank" rel="noreferrer">
                                <Typography ml={2} mb={1} component='h5' variant='h6' sx={{ color: '#000' }}>
                                    Calle Hicotea edificio 13, depto. 103 multi 83, Tabasco 2000, C.P. 86035, Villahermosa, Tab.
                                </Typography> </a></Box>
                    </Box>
                    <Box mt={4}>
                        <Typography component='h5' variant='h6' fontWeight={800} sx={{ marginBottom: 3 }}> Email: </Typography>
                        <Box display='flex' flexDirection='row'> <MarkEmailReadIcon />
                            <a href='mailto:contacto@industriasvayasa.com'>
                                <Typography ml={2} mb={1} component='h5' variant='h6' sx={{ color: '#000' }}>
                                    contacto@industriasvayasa.com
                                </Typography> </a></Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}


