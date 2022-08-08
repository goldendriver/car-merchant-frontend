import Header from "../componants/Header"
import Footer from "../componants/Footer";
import { Container, Typography, Box, Card, CardContent, Grid } from "@mui/material";
import axios from 'axios'
import * as React from 'react';
import { useState } from 'react';
export default function Flota() {
    const [rows, setRows] = React.useState([]);
    React.useEffect(() => {
        axios.post(`http://localhost:8080/cars`).then((res) => {
            setRows(res.data);
        })
    })
    return (
        <>
            <Header />
            <Container fullWidth>
                <h1 className="title">Nuestra Flota</h1>
                <Typography fontSize="29px" fontWeight="600" sx={{ mt: "20px" }}>STANDAR, BUSSINES AND VAN  </Typography>
                <Typography sx={{ mt: "20px" }}>Nuestros vehículos cuentan con sistemas de seguridad activa, como frenos ABS, control de estabilidad ESP, control de tracción y Airbags frontales y laterales.</Typography>
                <Typography sx={{ mt: "20px" }}>Disponemos de coches con chófer con gran experiencia al volante</Typography>
                <Typography sx={{ mt: "20px" }}>Todos nuestros vehículos disponen de licencia VTC</Typography>
                <Typography sx={{ mt: "20px" }}>También ofrecemos servicio de chófer privado por horas</Typography>
                <Grid container sx={{ mt: "100px", mb:"100px" }}>
                    {
                        rows.map((row) => (
                            <Grid item md={4} sx={{ padding: "20px", width: "30%", height: "300px" }}>
                                <Card sx={{ boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                                    <CardContent>
                                        <img src={`../assets/${row.file}`} width="100%" />
                                        <Typography fontSize="20px" fontWeight="700">{row.name}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }

                </Grid>
                <Box sx={{ mb: "100px" }}>
                    <a className="reservBtn" >RESERVAR</a>
                </Box>
            </Container>
            <Footer />
        </>
    );
}