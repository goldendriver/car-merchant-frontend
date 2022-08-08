import { Box, Container, Link, Typography } from "@mui/material";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import logo from "../assets/logo.png";
export default function Header(){
    return(
        <>
            <Box className="topHeader">
                <Container fullWidth className="container" sx={{display:"flex"}}>
                    <Box sx={{display:"flex"}}>
                        <PhoneEnabledIcon />
                        <Typography>+34 667 73 60 61 // +34 629 06 77 93  //  670 61 50 41</Typography>
                        <MailOutlineIcon sx={{ml:"1rem"}}/>
                        <Typography> info@vtc-toledo.com</Typography>
                    </Box>
                    <Box sx={{display:"flex"}}>
                        <Typography>+34 667 73 60 61 // +34 629 06 77 93  //  670 61 50 41 | </Typography>
                        <Typography sx={{fontWeight:"800"}}>24hrs</Typography>
                    </Box>
                </Container>
            </Box>
            <Box className="nav">
                <Container fullWidth className="container" sx={{display:"flex"}}>
                    <Link href="/" underline="none">
                    <Box sx={{display:"flex"}}>
                        <img src={logo} width="20%"/>
                        <Typography className="description" color="black" fontSize="14px">Vehículos con Conductor</Typography>
                    </Box></Link>
                    <Box sx={{display:"flex"}}>
                        <Link href="/" underline="none" className="menu-item" color="black">Inicio</Link>
                        <Link href="/nosotros" underline="none" className="menu-item" color="black">Nosotros</Link>
                        <Link href="/nuestraflota" underline="none" className="menu-item" color="black">NuestraFlota</Link>
                        <Link href="/grupos" underline="none" className="menu-item" color="black">Grupos</Link>
                        {/*<Link href="/blog" underline="none" className="menu-item" color="black">Blog</Link>*/}
                        <Link href="/contacto" underline="none" className="menu-item" color="black">Contacto</Link>
                    </Box>
                </Container>
            </Box>
        </>
    );
}