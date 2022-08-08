import Header from "../componants/Header"
import Footer from "../componants/Footer";
import { Container, Typography, Box, Divider, TextField, TextareaAutosize, FormControl } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
export default function Contacto(){
    const mapStyles = {
        width: '90%',
        height: '70%',
        zoom: '5',
      };
    return(
        <>
            <Header/>
            <Container fullWidth>
                
                <Box sx={{mt:"50px", display:"flex"}}>
                    <Box width="40%"  textAlign="left" sx={{marginTop:"50px"}}>
                        <Typography fontSize="45px" fontWeight="700">Contacto</Typography>
                        <Typography fontSize="23px">Si tiene alguna pregunta acerca de nuestro servicio póngase en contacto con nosotros.</Typography>
                    </Box>
                    <Box width="60%">
                        <Typography fontSize="29px" fontWeight="600">VTC Toledo - Traslados a Toledo y Puy du Fou</Typography>
                        <Box sx={{display:"flex", mt:"20px"}}>
                            <PlaceIcon/>
                            <Typography>Jacinto Benavente 4, Mora (Toledo)</Typography>
                        </Box>
                        <Divider sx={{margin:"5px"}}/>
                        <Box sx={{display:"flex"}}>
                            <PhoneIcon/>
                            <Typography>667 73 60 61 </Typography>
                        </Box>
                        <Divider sx={{margin:"5px"}}/>
                        <Box sx={{display:"flex"}}>
                            <PhoneIphoneIcon/>
                            <Typography>629 06 77 93</Typography>
                        </Box>
                        <Divider sx={{margin:"5px"}}/>
                        <Box sx={{display:"flex"}}>
                            <PhoneIphoneIcon/>
                            <Typography>670 61 50 41</Typography>
                        </Box>
                        <Divider sx={{margin:"5px"}}/>
                        <Box sx={{display:"flex"}}>
                            <EmailIcon/>
                            <Typography>info@vtc-toledo.com</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Divider sx={{marginTop:"100px"}}/>
            <Container fullWidth>
            <Box display="flex">
                <Box width="40%">
                    <Box padding="20px" textAlign="left">
                        <Typography>
                            Nombre*
                        </Typography>
                        <FormControl sx={{width:"100%"}}>
                        <TextField id="outlined-basic" label="Nombre" variant="outlined"/>
                        </FormControl>
                        <Typography>
                        Apellidos*
                        </Typography>
                        <FormControl sx={{width:"100%"}}>
                        <TextField id="outlined-basic" label="Apellidos" variant="outlined" />
                        </FormControl>
                        <Typography>
                        Email*
                        </Typography>
                        <FormControl sx={{width:"100%"}}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        </FormControl>
                        <Typography>
                        Teléfono*
                        </Typography>
                        <FormControl sx={{width:"100%"}}>
                        <TextField id="outlined-basic" label="Teléfono" variant="outlined" />
                        </FormControl>
                        <Typography>
                        Mensaje*
                        </Typography>
                        <FormControl sx={{width:"100%", mb:"30px"}}>
                        <TextareaAutosize minRows={7} />
                        </FormControl>
                        
                        <a className="conBtn">Enviar</a>
                    </Box>
                </Box>
                <Box width="60%">
                    <iframe style={mapStyles} allowFullScreen={true} loading="lazy" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.6519567132023!2d-4.023734985257075!3d39.85963209725674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0ba59ba78303%3A0xdb91564bb7f94f6e!2sPl.%20Zocodover%2C%2045001%20Toledo%2C%20Spain!5e0!3m2!1sen!2sru!4v1658578842920!5m2!1sen!2sru" title="C/ Príncipe de Vergara 109 planta 2 28002-Madrid" aria-label="C/ Príncipe de Vergara 109 planta 2 28002-Madrid"></iframe>
                </Box>
            </Box>
            </Container>
            <Box className="contacto">
                <Typography fontSize="60px" fontWeight="700" color="white">Le atenderemos 24/7</Typography>
                <Typography fontSize="60px" fontWeight="700" color="#faa152">+34 629 06 77 93</Typography>
                <Typography fontSize="60px" fontWeight="700" color="#faa152">+34 670 61 50 41</Typography>
                <Container fullWidth>
                <Box display="flex" justifyContent="center">
                    <Box display="flex" sx={{alignItems:"center"}}>
                    <EmailIcon sx={{color:"white"}}/>
                    <Typography fontSize="25px" color="white" p="30px">info@vtc-toledo.com</Typography>
                    </Box>
                    <Box display="flex" sx={{alignItems:"center"}}>
                    <PhoneIcon sx={{color:"white"}}/>
                    <Typography fontSize="25px" color="white" p="30px">+34 629 06 77 93</Typography>
                    </Box>
                </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
}