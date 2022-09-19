import { Grid, Typography, TextField, Box, Button } from '@mui/material'
import React from 'react'

// import { ValidationError, useForm } from '@formspree/react';

const handleContactUsRedirect = () => {
    setTimeout(() => {
        let homeURL = window.location.origin;
        window.location.href = `${homeURL}/#contacto`
    })
}


export const Contactar = () => {

    // const [state, handleSubmit] = useForm('xvoyogoy');
    // if (state.succeeded) {
  
    //   handleContactUsRedirect();
    //   return <div>Gracias por contactarnos</div>;
    // }

  return (
    <div id='contacto'>
    <Grid
    pt={ 20 }

    mt={ 10 }
    mb={ 10 }
    p={ 2 }
    container  
    width='100%'

    justifyContent='space-between'
    maxWidth='1200px' className='contactinfo' 
    >
        <Grid item 
        xs={ 12 } 
        md={ 6 }

        width='100%' display='flex' flexDirection='column' 
        >

            <Typography component='h1' variant='h3' fontWeight={800} sx={{ marginBottom: 3 }}> Contactar </Typography>
                
            <form >

           
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
                {/* <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                /> */}
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
                {/* <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                /> */}
              
            <Box marginTop={ 6 }>

                <Button type="submit" 
                    sx={{ color:'#fff',
                    paddingLeft:'2rem', paddingRight:'2rem',":hover":{transform: 'scale(1.03)'}, width:'100%' }}>
                    <Typography fontWeight={ 700 } fontSize='15px' lineHeight='36px'>Enviar mensaje</Typography>
                </Button>

                </Box>
            </form>

        </Grid>

    </Grid>
    </div>
  )
}


