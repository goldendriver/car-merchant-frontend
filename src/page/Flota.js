import Header from "../componants/Header"
import Footer from "../componants/Footer";
import { Container, Typography, Box, Card, CardContent, Grid } from "@mui/material";
import axios from 'axios'
import * as React from 'react';
import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
export default function Flota() {
    const [rows, setRows] = React.useState([]);
    React.useEffect(() => {
        axios.post(`http://localhost:8080/cars`).then((res) => {
            setRows(res.data);
        })
    })
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <Container fullWidth>
                <h1 className="title">{t('fleet.description1')}</h1>
                <Typography fontSize="29px" fontWeight="600" sx={{ mt: "20px" }}>{t('fleet.description2')} </Typography>
                <Typography sx={{ mt: "20px" }}>{t('fleet.description3')}</Typography>
                <Typography sx={{ mt: "20px" }}>{t('fleet.description4')}</Typography>
                <Typography sx={{ mt: "20px" }}>{t('fleet.description5')}</Typography>
                <Typography sx={{ mt: "20px" }}>{t('fleet.description6')}</Typography>
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
                    <a className="reservBtn" >{t('fleet.button1')}</a>
                </Box>
            </Container>
            <Footer />
        </>
    );
}