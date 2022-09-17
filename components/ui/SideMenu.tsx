import { useContext } from "react";

import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"

import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import FactoryTwoToneIcon from '@mui/icons-material/FactoryTwoTone';
import Diversity1TwoToneIcon from '@mui/icons-material/Diversity1TwoTone';

import { UiContext } from "../../context";
import { useRouter } from "next/router";

export const SideMenu = () => {

    const router = useRouter();
    const { isMenuOpen ,toggleSideMenu } = useContext(UiContext);
 
    const navigateTo = ( url: string ) => {
        toggleSideMenu()
        router.push(url)
    }

  return (
    <Drawer
        open={ isMenuOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        onClose={ toggleSideMenu } 
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
            
            <List>

                <ListItem button
                 onClick={ () => navigateTo('/industrias')}>
                    <ListItemIcon>
                        <FactoryTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Industrias'} />
                </ListItem>

                <ListItem button
                onClick={ () => navigateTo('/nosotros')}
                >
                    <ListItemIcon>
                        <Diversity1TwoToneIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Nosotros'} />
                </ListItem>

                <ListItem button
                onClick={ () => navigateTo('/contacto')}
                >
                    <ListItemIcon>
                        <ContactPhoneTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Contacto'} />
                </ListItem>

            </List>
        </Box>
    </Drawer>
  )
}