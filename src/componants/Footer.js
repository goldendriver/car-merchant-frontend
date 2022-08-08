import { Typography, Box, Container, Grid, Modal } from "@mui/material";
import footer from "../assets/footer.png";
import { useState } from "react";
import PopoverComponant from "./PopoverComponant";
export default function Footer() {
    
    const [open, setOpen] = useState(false);
    const handleContact = () => {
        setOpen(true);
    }
    return (
        <>
            <Box className="footer">
                <Container fullWidth>
                    <Grid container sx={{ textAlign: "left" }}>
                        <Grid item md={3}>
                            <Typography>Toledo</Typography>
                            <Typography>Calle Jacinto Benavente 4</Typography>
                            <Typography>45400 - Mora (Toledo)</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Typography fontSize="1.3rem" fontWeight="600">INFORMACIÓN LEGAL</Typography>
                            <Typography>Condiciones generales</Typography>
                            <Typography>Preguntas frecuentes</Typography>
                            <Typography>Aceptación RGPD</Typography>
                            <Typography>Aviso legal</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Typography fontSize="1.3rem" fontWeight="600">ENLACES DE INTERÉS</Typography>
                            <Typography>Traslados Toledo</Typography>
                            <Typography>Traslados a Puy du Fou</Typography>
                            <Typography>Transfer Toledo-Madrid</Typography>
                            <Typography>Transfer a Toledo</Typography>
                            <Typography>Transporte privado</Typography>
                            <Typography>Transfer Toledo Aeropuerto</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Typography>Taxi Toledo - Puy du Fou</Typography>
                            <Typography>Transporte Toledo - Puy du Fou</Typography>
                            <Typography>Traslados grupos Puy du Fou</Typography>
                            <Typography>Toledo - Puy du Fou cómo llegar</Typography>
                            <img src={footer} className="footerImg" />
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: "100px", textAlign: "center" }}>
                        <Typography>Toledo Puy du Fou © 2022 Get Toledo</Typography>
                    </Box>
                    <PopoverComponant />
                </Container>
            </Box>
        </>
    );
}