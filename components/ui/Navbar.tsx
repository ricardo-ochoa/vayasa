import { useState, useContext } from 'react'
import NextLink from 'next/link'
import Image from 'next/image' // Importamos el componente Image
import { UiContext } from '../../context'
import { AppBar, Toolbar, Link, Box, Button, IconButton } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = () => {
    const { toggleSideMenu } = useContext(UiContext)
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ maxWidth: '1920px', margin: '0 auto', width: "100%", height: '70px', alignItems: "center", }}>
                
                <NextLink href='/' passHref>
                    <Link sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* Sustitución del SVG por el archivo en public/logo.svg */}
                        <Image 
                            src="/logo.svg" 
                            alt="Logo Industrias VAYASA" 
                            width={145} 
                            height={50}
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <NextLink href='/servicios' passHref>
                        <Link>
                            <Button color='info'> Servicios </Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/articulos' passHref>
                        <Link>
                            <Button color='info'> Artículos </Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/nosotros' passHref>
                        <Link>
                            <Button color='info'> Nosotros </Button>
                        </Link>
                    </NextLink>
                </Box>

                <IconButton sx={{ display: { xs: 'block', md: 'none' } }} onClick={toggleSideMenu}>
                    <MenuOutlined />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}