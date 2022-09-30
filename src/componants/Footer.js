import { Typography, Box, Container, Grid, Modal } from "@mui/material";
import footer from "../assets/footer.png";
import { useState } from "react";
import PopoverComponant from "./PopoverComponant";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t, i18n } = useTranslation();

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
                            <Typography>{t('footer.toledo')}</Typography>
                            <Typography>{t('footer.toledoAddress')}</Typography>
                            <Typography>{t('footer.toledoNum')}</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Typography fontSize="1.3rem" fontWeight="600">{t('footer.information')}</Typography>
                            <Typography>{t('footer.informationCon')}</Typography>
                            <Typography>{t('footer.informationFre')}</Typography>
                            <Typography>{t('footer.informationGdpr')}</Typography>
                            <Typography>{t('footer.informationLegal')}</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Typography fontSize="1.3rem" fontWeight="600">{t('footer.link')}</Typography>
                            <Typography>{t('footer.link1')}</Typography>
                            <Typography>{t('footer.link2')}</Typography>
                            <Typography>{t('footer.link3')}</Typography>
                            <Typography>{t('footer.link4')}</Typography>
                            <Typography>{t('footer.link5')}</Typography>
                            <Typography>{t('footer.link6')}</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Typography>{t('footer.taxi')}</Typography>
                            <Typography>{t('footer.taxi1')}</Typography>
                            <Typography>{t('footer.taxi2')}</Typography>
                            <Typography>{t('footer.taxi3')}</Typography>
                            <img src={footer} className="footerImg" />
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: "100px", textAlign: "center" }}>
                        <Typography>{t('footer.copyright')}</Typography>
                    </Box>
                    <PopoverComponant />
                </Container>
            </Box>
        </>
    );
}