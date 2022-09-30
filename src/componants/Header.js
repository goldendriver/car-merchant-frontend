import { Box, Button, Container, Link, Typography } from "@mui/material";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import logo from "../assets/logo.png";
import enFlag from "../assets/english.png";
import esFlag from "../assets/spain.png";
import { useTranslation, Trans } from 'react-i18next';


export default function Header() {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    return (
        <>
            <Box className="topHeader">
                <Container fullWidth className="container" sx={{ display: "flex" }}>
                    <Box sx={{ display: "flex" }}>
                        <PhoneEnabledIcon />
                        <Typography>+34 667 73 60 61 // +34 629 06 77 93  //  670 61 50 41</Typography>
                        <MailOutlineIcon sx={{ ml: "1rem" }} />
                        <Typography> info@vtc-toledo.com</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography>+34 667 73 60 61 // +34 629 06 77 93  //  670 61 50 41 | </Typography>
                        <Typography sx={{ fontWeight: "800" }}>24hrs</Typography>
                    </Box>
                </Container>
            </Box>
            <Box className="nav">
                <Container fullWidth className="container" sx={{ display: "flex" }}>
                    <Box width="50%">
                        <Link href="/" underline="none" className="logo">
                            <img src={logo} width="20%" />
                            <Typography className="description" color="black" fontSize="14px" pt={1}>{t('header.logoTitle')}</Typography>
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Button variant="text" size="small" className="menu-item" onClick={() => changeLanguage("es")} >
                            <img src={esFlag} width="50%" />
                        </Button>
                        <Button variant="text" size="small" className="menu-item" onClick={() => changeLanguage("en")}>
                            <img src={enFlag} width="50%" />
                        </Button>
                        <Link href="/" underline="none" className="menu-item" color="black">{t('header.start')}</Link>
                        <Link href="/nosotros" underline="none" className="menu-item" color="black">{t('header.about')}</Link>
                        <Link href="/nuestraflota" underline="none" className="menu-item" color="black">{t('header.ourFleet')}</Link>
                        <Link href="/grupos" underline="none" className="menu-item" color="black">{t('header.group')}</Link>
                        {/*<Link href="/blog" underline="none" className="menu-item" color="black">Blog</Link>*/}
                        <Link href="/contacto" underline="none" className="menu-item" color="black">{t('header.contact')}</Link>
                    </Box>
                </Container>
            </Box>
        </>
    );
}