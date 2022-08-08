import Header from "../componants/Header"
import Footer from "../componants/Footer";
import { Container, Typography, Box, Divider, TextField, TextareaAutosize, FormControl } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import group from "../assets/group.png";
export default function Grupos() {
    const mapStyles = {
        width: '90%',
        height: '70%',
        zoom: '5',
    };
    return (
        <>
            <Header />
            <Container fullWidth>
                <Typography fontSize="39px" fontWeight="600"> Traslados de grupos a Toledo</Typography>
                <Typography sx={{ mt: "20px", textAlign: "left" }}>Tanto para empresas como para particulares en Toledo ofrecemos transporte privado para grupos desde Madrid o desde el Aeropuerto a Toledo.
                    <br /><br />
                    Organizamos traslados para grupos turísticos, para eventos, exposiciones y congresos o cualquier otro evento que necesite.
                    <br /><br />
                    Parte de nuestro equipo es de Toledo y por tanto, conocemos hasta el último rincón de la ciudad. Esto hace que podamos garantizarle una gestión eficaz de sus solicitudes adaptando nuestros recursos a sus necesidades.
                    <br /><br />
                    En Toledo le ofrecemos un servicio integral para grupos particulares o bien para agencias y empresas.
                    <br /><br />
                    Organizamos traslados para grupos a Toledo y Puy du Foy España, bien sea en minibuses o autobuses de gran capacidad en función del número de personas. También disponemos de furgonetas Mercedes Vito y Viano de hasta 8 pasajeros.
                    <br /><br />
                    Solicite presupuesto  sin compromiso</Typography>
                <Box sx={{ mt: "50px" }}>
                    <Typography fontSize="39px" fontWeight="600">Realizamos traslados de grupos a Puy du Fou</Typography>
                    <Box sx={{ display: "flex" }}>
                        <Box width="65%">
                            <Typography textAlign="left">Con nuestros traslados de grupos a Puy du Fou desde Toledo o Madrid podréis llegar a descubrir un maravilloso parque que está capacitado para ofrecer espectáculos que te dejarán con la boca abierta. Estás muy cerca de poder descubrir un mundo lleno de cultura. Además, ahora tienes la posibilidad de poder disfrutar del que ha sido galardonado de forma reciente como mejor espectáculo del mundo. Son muchas las cosas que puedes ver y hacer en Toledo. Acércate a conocer todas ellas con nosotros. Get Toledo es lo que necesitas para cualquier traslado.
                                <br /><br />
                                Cuando realices la búsqueda Toledo Puy du Fou cómo llegar, no dudes en elegir nuestros servicios. Queremos hacerte la vida más fácil.
                                <br /><br />
                                Si buscas un servicio de taxi desde Toledo a Puy du Fou con la seguridad de un conductor profesional, apuesta por nosotros.</Typography>
                        </Box>
                        <Box width="35%">
                            <img src={group} width="100%" />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mt: "50px", display: "flex" }}>
                    <Box width="40%" textAlign="left" sx={{ marginTop: "50px" }}>
                        <Typography fontSize="45px" fontWeight="700">Contacto</Typography>
                        <Typography fontSize="23px">Si tiene alguna pregunta acerca de nuestro servicio póngase en contacto con nosotros.</Typography>
                    </Box>
                    <Box width="60%">
                        <Typography fontSize="29px" fontWeight="600">VTC Toledo - Traslados a Toledo y Puy du Fou</Typography>
                        <Box sx={{ display: "flex", mt: "20px" }}>
                            <PlaceIcon />
                            <Typography>Jacinto Benavente 4, Mora (Toledo)</Typography>
                        </Box>
                        <Divider sx={{ margin: "5px" }} />
                        <Box sx={{ display: "flex" }}>
                            <PhoneIcon />
                            <Typography>667 73 60 61 </Typography>
                        </Box>
                        <Divider sx={{ margin: "5px" }} />
                        <Box sx={{ display: "flex" }}>
                            <PhoneIphoneIcon />
                            <Typography>629 06 77 93</Typography>
                        </Box>
                        <Divider sx={{ margin: "5px" }} />
                        <Box sx={{ display: "flex" }}>
                            <PhoneIphoneIcon />
                            <Typography>670 61 50 41</Typography>
                        </Box>
                        <Divider sx={{ margin: "5px" }} />
                        <Box sx={{ display: "flex" }}>
                            <EmailIcon />
                            <Typography>info@vtc-toledo.com</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Divider sx={{ marginTop: "100px", marginBottom: "100px" }} />
            <Container fullWidth>
                <Box display="flex">
                    <Box width="40%">
                        <Box padding="20px" textAlign="left">
                            <Typography>
                                Nombre*
                            </Typography>
                            <FormControl sx={{ width: "100%" }}>
                                <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                            </FormControl>
                            <Typography>
                                Apellidos*
                            </Typography>
                            <FormControl sx={{ width: "100%" }}>
                                <TextField id="outlined-basic" label="Apellidos" variant="outlined" />
                            </FormControl>
                            <Typography>
                                Email*
                            </Typography>
                            <FormControl sx={{ width: "100%" }}>
                                <TextField id="outlined-basic" label="Email" variant="outlined" />
                            </FormControl>
                            <Typography>
                                Teléfono*
                            </Typography>
                            <FormControl sx={{ width: "100%" }}>
                                <TextField id="outlined-basic" label="Teléfono" variant="outlined" />
                            </FormControl>
                            <Typography>
                                Mensaje*
                            </Typography>
                            <FormControl sx={{ width: "100%", mb: "30px" }}>
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
            <Footer />
        </>
    );
}