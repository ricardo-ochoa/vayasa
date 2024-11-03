import { useState, useContext } from "react";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Diversity1TwoToneIcon from '@mui/icons-material/Diversity1TwoTone';
import GavelTwoToneIcon from '@mui/icons-material/GavelTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import { UiContext } from "../../context";
import { useRouter } from "next/router";
import { UrlObject } from "url";

export const SideMenu = () => {
    const router = useRouter();
    const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
    const [openSoluciones, setOpenSoluciones] = useState(false);

    const navigateTo = (url: string | UrlObject) => {
        toggleSideMenu();
        router.push(url);
    };

    const handleToggleSoluciones = () => {
        setOpenSoluciones(!openSoluciones);
    };

    return (
        <Drawer
            open={isMenuOpen}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            onClose={toggleSideMenu}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>
                <List>
                    <ListItem button onClick={handleToggleSoluciones}>
                        <ListItemIcon>
                            <EngineeringTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Soluciones'} />
                        {openSoluciones ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    {/* Submenú de Soluciones */}
                    <Collapse in={openSoluciones} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigateTo('/consultoria')}>
                                <ListItemText primary="Maximización del Valor Económico de tu Contrato" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigateTo('/ingenieria')}>
                                <ListItemText primary="Ingeniería de Perforación para Pozos Petroleros" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigateTo('/comercializacion')}>
                                <ListItemText primary="Otros" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={() => navigateTo('/articulos')}>
                        <ListItemIcon>
                            <DescriptionTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Artículos'} />
                    </ListItem>

                    <ListItem button onClick={() => navigateTo('/nosotros')}>
                        <ListItemIcon>
                            <Diversity1TwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Nosotros'} />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};
