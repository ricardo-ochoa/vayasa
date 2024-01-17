import { useContext } from 'react'
import NextLink from 'next/link'
import { UiContext } from '../../context'
import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Badge } from '@mui/material'
import { FavoriteBorderOutlined, MenuOutlined, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material'


export const Navbar = () => {

    const { toggleSideMenu } = useContext(UiContext)

    return (

        <AppBar position="fixed">
            <Toolbar sx={{ maxWidth: '1920px', margin: '0 auto', width: "100%", height: '70px', alignItems: "center", }}>
                <NextLink href='/' passHref>
                    <Link >
                        <svg width="145" height="50" id="Capa_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.53 106.38"><defs></defs><g id="Capa_1-2"><g>
                            <path className="cls-1" d="M196.8,48.05c-2-6.52-4.42-12.91-6.64-19.36-.41-1.19-1.15-1.8-2.48-1.7-1.18,.09-2.38,0-3.57,.02-1.22,.02-2.73-.36-3.59,.22-.85,.58-1.09,2.11-1.53,3.24-5.11,12.97-8.7,26.38-11.51,40-.52,2.52-.93,5.06-1.24,7.61-.18,1.46,.37,1.93,1.82,1.94,1.48,.01,2.95-.04,4.43,.02,.85,.04,1.12-.31,1.25-1.09,.71-4.27,1.48-8.53,2.19-12.8,.13-.77,.45-1.05,1.2-1.04,5.09,.01,10.17,.01,15.26,0,.74,0,1.07,.26,1.2,1.04,.68,4.07,1.45,8.12,2.15,12.19,.17,.97,.59,1.65,1.62,1.68,2.08,.05,4.17,.01,6.43,.01-.03-.58,0-.99-.07-1.39-1.67-10.34-3.81-20.58-6.89-30.59Zm-19.94,11c2.56-8.66,5.03-17.02,7.5-25.38,.16,.02,.32,.03,.49,.05,2.92,8.28,5.55,16.64,7.55,25.34h-15.54Z" />
                            <path className="cls-1" d="M269.84,47.83c-1.97-6.44-4.38-12.75-6.58-19.13-.44-1.27-1.23-1.79-2.6-1.72-1.84,.1-3.7,.12-5.53,0-1.28-.09-1.84,.37-2.31,1.53-5.46,13.58-9.29,27.64-12.25,41.96-.53,2.56-.93,5.14-1.25,7.74-.17,1.36,.4,1.82,1.8,1.83,1.48,.01,2.95-.04,4.43,.02,.83,.03,1.13-.27,1.26-1.07,.71-4.27,1.48-8.53,2.19-12.8,.12-.76,.42-1.06,1.19-1.06,5.09,.02,10.17,.01,15.26,0,.73,0,1.08,.23,1.21,1.02,.68,4.07,1.45,8.12,2.15,12.19,.17,.96,.58,1.67,1.6,1.69,2.08,.05,4.17,.01,6.38,.01,0-.56,.06-.98,0-1.37-1.68-10.42-3.86-20.74-6.94-30.83Zm-19.88,11.2c2.56-8.66,5.03-17.02,7.51-25.38,.16,.02,.32,.04,.47,.06,2.93,8.26,5.51,16.61,7.57,25.32h-15.55Z" />
                            <path className="cls-1" d="M358.5,78.69c-1.46-9-3.36-17.91-5.75-26.71-2.14-7.9-4.74-15.65-7.77-23.25-.46-1.15-1.1-1.84-2.46-1.74-1.14,.09-2.3,0-3.44,.02-1.27,.01-2.85-.4-3.71,.2-.91,.64-1.18,2.24-1.65,3.45-5.08,12.93-8.66,26.3-11.45,39.89-.52,2.56-.92,5.15-1.24,7.74-.15,1.23,.42,1.72,1.65,1.74,1.56,.02,3.12-.04,4.67,.02,.81,.03,1.05-.32,1.17-1.04,.71-4.23,1.49-8.45,2.17-12.68,.15-.95,.53-1.23,1.43-1.22,4.96,.03,9.92,.02,14.89,0,.81,0,1.23,.19,1.39,1.12,.67,4.07,1.44,8.13,2.15,12.19,.15,.86,.55,1.55,1.44,1.58,2.16,.08,4.32,.02,6.54,.02,0-.53,.06-.94,0-1.33Zm-26.56-19.63c1.96-8.69,4.64-17.02,7.56-25.32,3.07,8.28,5.72,16.62,7.71,25.32h-15.26Z" />
                            <path className="cls-1" d="M162.36,27.02c-1.89-.01-3.77-.04-5.66,.03-.28,.01-.75,.45-.8,.75-.62,3.62-1.13,7.27-1.76,10.89-1.94,11.01-4.75,21.78-8.43,32.34-.09,.27-.27,.52-.5,.93-.23-.51-.39-.83-.51-1.17-2.99-8.36-5.35-16.9-7.14-25.59-1.13-5.48-1.96-11.02-3-16.51-.12-.61-.74-1.55-1.18-1.58-2.39-.16-4.8-.07-7.29-.07,.19,1.36,.33,2.58,.53,3.78,1.73,10.08,4,20.03,7.1,29.78,1.84,5.8,3.92,11.53,5.94,17.27,.68,1.93,1.16,2.18,3.19,2.18,1.15,0,2.3,0,3.44,0,3.28,0,3.31,.01,4.46-3.01,5.04-13.2,8.79-26.78,11.58-40.62,.52-2.56,.88-5.15,1.28-7.74,.15-.95-.17-1.64-1.27-1.65Z" />
                            <path className="cls-1" d="M306.46,51.91c-3.4-1.4-6.87-2.63-10.27-4.04-3.71-1.54-5.58-3.27-5.36-8.06,.16-3.39,1.51-5.31,4.78-6.28,3.2-.95,6.48-.82,9.75-.57,2.52,.19,5.04,.44,7.74,.67,0-1.11,0-2.16,0-3.21-.02-1.88-.42-2.46-2.3-2.92-5.55-1.35-11.17-1.75-16.8-.7-4.83,.9-8.6,3.37-10.01,8.32-.62,2.17-.84,4.52-.81,6.78,.06,5.16,2.35,9.14,7.03,11.53,1.85,.95,3.81,1.7,5.73,2.5,2.6,1.08,5.25,2.06,7.82,3.21,1.59,.71,2.83,1.96,3.13,3.72,.27,1.56,.38,3.19,.25,4.76-.26,3.18-2.07,5.32-5.2,5.86-2.72,.47-5.52,.65-8.28,.58-3.3-.08-6.58-.57-10.04-.9,0,1,0,1.93,0,2.87,0,2.27,.41,2.92,2.63,3.47,5.9,1.46,11.89,1.92,17.89,.76,5.09-.99,8.98-3.65,10.24-9.01,.47-2.01,.53-4.13,.61-6.2,.25-6.36-2.69-10.72-8.53-13.13Z" />
                            <path className="cls-1" d="M237.75,27.02c-1.56-.02-3.12,.05-4.67-.03-.93-.05-1.22,.32-1.45,1.18-2.25,8.36-5.47,16.35-9.41,24.06-.13,.26-.34,.49-.58,.82-.28-.49-.52-.83-.69-1.19-1.71-3.76-3.54-7.47-5.06-11.31-1.53-3.87-2.7-7.88-4.11-11.8-.23-.65-.86-1.6-1.36-1.64-2.43-.17-4.87-.08-7.32-.08,0,.27-.02,.4,0,.51,.12,.47,.25,.95,.39,1.41,3.13,10.44,7.67,20.26,13.26,29.6,.62,1.03,.88,2.04,.87,3.24-.04,5.49,0,10.99-.03,16.48,0,1.12,.46,1.73,1.56,1.75,2.01,.04,4.01,0,6.22,0v-1.47c0-5.66,.02-11.32-.02-16.98,0-1.11,.24-2.06,.81-3.01,5.39-8.98,9.8-18.41,12.93-28.42,.13-.43,.27-.86,.31-1.3,.12-1.26-.39-1.82-1.68-1.83Z" />
                            <path className="cls-1" d="M98.75,0c-1.08-.03-1.57,.31-1.96,1.31-10.84,27.38-21.72,54.75-32.59,82.12-1.22,3.07-2.45,6.14-3.77,9.43-6.7-13.82-16.56-24.35-30.03-31.71,0,4.07,.02,7.88-.02,11.69,0,.74,.23,1.19,.83,1.61,10.89,7.76,18.33,18.03,22.28,30.8,.24,.77,.59,.99,1.37,.98,3.84-.04,7.69-.04,11.53,0,.71,0,1-.26,1.24-.88,1.21-3.13,2.47-6.25,3.71-9.37,11.5-28.93,23-57.86,34.49-86.79,1.19-3,2.38-6,3.64-9.17-.57,0-.97,0-1.37,0-3.12,0-6.24,.05-9.35-.03Z" />
                            <path className="cls-1" d="M16.75,93.03c0-11.72,0-23.45,0-35.17,0-2.2,.02-2.28-2.2-2.71-3.56-.69-7.14-1.27-10.82-1.92v53.16h13.08c0-.54,0-.99,0-1.43-.02-3.98-.05-7.95-.05-11.93Z" />
                            <path className="cls-1" d="M10.13,16.57C4.53,16.53,.04,20.9,0,26.42c-.04,5.55,4.38,10.04,9.92,10.08,5.69,.04,10.22-4.3,10.27-9.86,.06-5.57-4.4-10.03-10.06-10.07Z" /></g></g>
                        </svg>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href='/ingenieria' passHref>
                        <Link>
                            <Button color='info'> Ingeniería </Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/' passHref>
                        <Link>
                            <Button color='info'> Capacitación </Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/consultoria' passHref>
                        <Link>
                            <Button color='info'> Consultoria </Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/comercializacion' passHref>
                        <Link>
                            <Button color='info'> Comercialización </Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/nosotros' passHref>
                        <Link>
                            <Button color='info'> Nosotros </Button>
                        </Link>
                    </NextLink>
                    {/* <NextLink href='#contacto' passHref>
                        <Link>
                            <Button color='info'> Contacto </Button>
                        </Link>
                    </NextLink> */}
                </Box>


                <IconButton sx={{ display: { xs: 'block', sm: 'none' } }} onClick={toggleSideMenu}>
                    <MenuOutlined></MenuOutlined>
                </IconButton>

            </Toolbar>
        </AppBar>
    )
}
