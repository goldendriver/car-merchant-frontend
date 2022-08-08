import * as React from 'react';
import Header from "../componants/Header";
import Footer from "../componants/Footer";
import { Box, Typography, Container, Divider, Grid, Accordion, AccordionSummary, AccordionDetails, FormControl, Select, MenuItem, TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import "./style.css";
import banner from "../assets/8.jpg";
import icon1 from "../assets/3.png";
import icon2 from "../assets/4.png";
import icon3 from "../assets/5.png";
import icon4 from "../assets/6.png";
import icon5 from "../assets/7.png";
import icon6 from "../assets/8.png";
import puylogo from "../assets/puylogo.png";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/11.JPG";
import card5 from "../assets/card5.jpg";
import brand from "../assets/brands.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import { SelectChangeEvent } from '@mui/material/Select';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import Forms from '../componants/Forms';
export default function Home(props) {
    const [origen, setOrigen] = React.useState('');
    const [destiny, setDestiny] = React.useState('');
    const [date, setDate] = React.useState('');
    const [adult, setAdult] = React.useState('');
    const [kid, setKid] = React.useState('');
    const [drink, setDrink] = React.useState('');
    const [way, setWay] = React.useState('one');
    // const handleSelectOrigen = (event: SelectChangeEvent) => {
    //     setOrigen(event.target.value);
    // };
    // const handleSelectDestiny = (event: SelectChangeEvent) => {
    //     setDestiny(event.target.value);
    // };
    const handleDateChange = (event) => {
        setDate(event.target.value)
    };
    const handleAdultChange = (event) => {
        setAdult(event.target.value)
    };
    const handleKidChange = (event) => {
        setKid(event.target.value)
    };
    const handleDrinkChange = (event) => {
        setDrink(event.target.value)
    };
    return (
        <>
            <Header />
            <Box>
                <img src={banner} width="100%" height="800px" />
                <Box className="form">
                    <Grid container>
                        <Grid item md={6}>
                            <Forms />
                            {/* <Box className="formContent" sx={{ height: way === 'two' ? '720px' : '500px' }}>
                                <Box padding="20px" textAlign="left">
                                    <Typography>
                                        Origen
                                    </Typography>
                                    <FormControl sx={{ width: "100%" }}>
                                        <Select
                                            value={origen}
                                            onChange={handleSelectOrigen}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{ background: "white" }}
                                        >
                                            <MenuItem value="">
                                                <em>Seleccionar lugar de origen</em>
                                            </MenuItem>
                                            <MenuItem value={1}>Madrid City</MenuItem>
                                            <MenuItem value={2}>Madrid-Barajas Airport(MAD)</MenuItem>
                                            <MenuItem value={3}>Toledo City</MenuItem>
                                            <MenuItem value={4}>Puy du Fou Park</MenuItem>
                                            <MenuItem value={5}>Madrid Atocha Station</MenuItem>
                                            <MenuItem value={6}>Madrid Chamartin Station</MenuItem>

                                        </Select>
                                    </FormControl>
                                    <Typography>
                                        Destino
                                    </Typography>
                                    <FormControl sx={{ width: "100%" }}>
                                        <Select
                                            value={destiny}
                                            onChange={handleSelectDestiny}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{ background: "white" }}
                                        >
                                            <MenuItem value="">
                                                <em>Seleccionar lugar de destino</em>
                                            </MenuItem>
                                            <MenuItem value={1}>Aeropuerto Madrid-Barajas(MAD)</MenuItem>
                                            <MenuItem value={3}>Toledo Ciudad</MenuItem>
                                            <MenuItem value={4}>Parque Puy du Fou</MenuItem>
                                            <MenuItem value={5}>Estación de Atocha Madrid</MenuItem>
                                            <MenuItem value={6}>Estación de Chamartín Madrid</MenuItem>

                                        </Select>
                                    </FormControl>
                                    <Typography>
                                        Fecha y hora
                                    </Typography>
                                    <FormControl sx={{ width: "100%" }}>
                                        <TextField
                                            id="datetime-local"
                                            label="Date and Time"
                                            type="datetime-local"
                                            defaultValue="2022-07-22T10:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{ background: "white" }}
                                            onChange={handleDateChange}
                                        />
                                    </FormControl>
                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                        <Box width="25%">
                                            <Typography>
                                                Adultos
                                            </Typography>
                                            <TextField id="outlined-basic" type="number" label="Teléfono" variant="outlined" sx={{ background: "white" }} onChange={handleAdultChange} />
                                        </Box>
                                        <Box width="25%">
                                            <Typography>
                                                Niños
                                            </Typography>
                                            <TextField id="outlined-basic" type="number" label="Teléfono" variant="outlined" sx={{ background: "white" }} onChange={handleKidChange} />
                                        </Box>
                                        <Box width="25%">
                                            <Typography>
                                                Bebés
                                            </Typography>
                                            <TextField id="outlined-basic" type="number" label="Teléfono" variant="outlined" sx={{ background: "white" }} onChange={handleDrinkChange} />
                                        </Box>
                                    </Box>
                                    <FormControl sx={{ margin: '10px 0px' }}>
                                        <RadioGroup
                                            row
                                            aria-label="way" value={way} name='way' onChange={(e) => setWay(e.target.value)}
                                        >
                                            <FormControlLabel value="one" control={<Radio color="default" />} label="One Way" />
                                            <FormControlLabel value="two" control={<Radio color="default" />} label="Round trip" />
                                        </RadioGroup>
                                    </FormControl>
                                    <Box sx={{ display: way === 'two' ? 'block' : "none" }}>
                                        <Typography>
                                            Origen
                                        </Typography>
                                        <FormControl sx={{ width: "100%" }}>
                                            <Select
                                                value={origen}
                                                onChange={handleSelectOrigen}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ background: "white" }}
                                            >
                                                <MenuItem value="">
                                                    <em>Seleccionar lugar de origen</em>
                                                </MenuItem>
                                                <MenuItem value={1}>Madrid City</MenuItem>
                                                <MenuItem value={2}>Madrid-Barajas Airport(MAD)</MenuItem>
                                                <MenuItem value={3}>Toledo City</MenuItem>
                                                <MenuItem value={4}>Puy du Fou Park</MenuItem>
                                                <MenuItem value={5}>Madrid Atocha Station</MenuItem>
                                                <MenuItem value={6}>Madrid Chamartin Station</MenuItem>

                                            </Select>
                                        </FormControl>
                                        <Typography>
                                            Destino
                                        </Typography>
                                        <FormControl sx={{ width: "100%" }}>
                                            <Select
                                                value={destiny}
                                                onChange={handleSelectDestiny}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{ background: "white" }}
                                            >
                                                <MenuItem value="">
                                                    <em>Seleccionar lugar de destino</em>
                                                </MenuItem>
                                                <MenuItem value={1}>Aeropuerto Madrid-Barajas(MAD)</MenuItem>
                                                <MenuItem value={3}>Toledo Ciudad</MenuItem>
                                                <MenuItem value={4}>Parque Puy du Fou</MenuItem>
                                                <MenuItem value={5}>Estación de Atocha Madrid</MenuItem>
                                                <MenuItem value={6}>Estación de Chamartín Madrid</MenuItem>

                                            </Select>
                                        </FormControl>
                                        <Typography>
                                            Fecha y hora
                                        </Typography>
                                        <FormControl sx={{ width: "100%" }}>
                                            <TextField
                                                id="datetime-local"
                                                label="Date and Time"
                                                type="datetime-local"
                                                defaultValue="2022-07-22T10:30"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                sx={{ background: "white" }}
                                                onChange={handleDateChange}
                                            />
                                        </FormControl>
                                    </Box>
                                    <FormControl sx={{ width: "100%", mt: "20px", textAlign: "center" }}>
                                        <Link
                                            className="conBtn"
                                            to={{
                                                pathname: "/selectCar",
                                                origen: origen,
                                            }}
                                        >
                                            Encuentra un transfer
                                        </Link>
                                    </FormControl>
                                </Box>
                            </Box> */}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Container fullWidth className="secContainer">
                <Typography fontSize="51px" fontWeight="700">Alquiler de Coches con Conductor con destino Toledo y Puy du Fou</Typography>
                <Box sx={{ display: "flex", mb:"30px" }}>
                    <Box className="iconBox">
                        <img src={icon1} width="100%"/>
                        <Typography fontWeight="600">CONDUCTOR PROFESIONAL</Typography>
                        <Typography>Coches con conductor a Toledo y Puy du Fou</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon2} width="100%"/>
                        <Typography fontWeight="600">SERVICIO PUERTA A PUERTA</Typography>
                        <Typography>Servicio puerta a puerta desde alojamiento o aeropuerto a destino</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon3} width="100%"/>
                        <Typography fontWeight="600">CANCELACIÓN GRATUITA</Typography>
                        <Typography>Cancelación gratuita con 24 horas de antelacion</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon4} width="100%"/>
                        <Typography fontWeight="600">ATENCIÓN 24/7</Typography>
                        <Typography>Servicio de atención 24 horas los 365 días del año</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon5} width="100%"/>
                        <Typography fontWeight="600">PAGO SEGURO</Typography>
                        <Typography>Pasarela de pago online 100% segura y confiable</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon6} width="100%"/>
                        <Typography fontWeight="600">PAGO SEGURO</Typography>
                        <Typography>Pasarela de pago online 100% segura y confiable</Typography>
                    </Box>
                </Box>
                <a className="reservBtn">RESERVAR</a>
                <Box sx={{ mt: "50px", mb: "50px" }}>
                    <Typography fontSize="51px" fontWeight="700">Nuestros Servicios</Typography>
                    <Box sx={{ display: "flex" }}>
                        <Box className="cardBox">
                            <img src={card1} width="100%" height="250px" />
                            <Typography fontWeight="600" padding="20px">Asegure siempre su llegada a destino</Typography>
                            <Typography sx={{ textAlign: "justify" }}>Le recogemos donde nos diga con absoluta puntualidad para
                                llevarle al destino que nos indique.
                                Controlaremos la hora de llegada que nos ha facilitado para recogerle
                                a tiempo en el aeropuerto o estación concertada, tanto si su vuelo o
                                tren se retrasa, como si llega antes de lo previsto.
                                Nuestros conductores le esperarán en el punto de encuentro más
                                cercano con un cartel con su nombre, le ayudaremos con su equipaje
                                y lo trasladaremos al destino escogido por usted.
                                De la misma forma, si necesita trasladarse al aeropuerto o estación,
                                contrate nuestro servicio de recogida.
                                Nuestro personal colaborará siempre con usted en la carga y descarga
                                de sus equipajes.
                            </Typography>
                        </Box>
                        <Box className="cardBox">
                            <img src={card2} width="100%" height="250px" />
                            <Typography fontWeight="600" padding="20px">Puntualidad y distinción</Typography>
                            <Typography sx={{ textAlign: "justify" }}>Este servicio está destinado a profesionales que necesitan llegar siempre a tiempo a sus reuniones y así poder aprovechar su tiempo durante el trayecto.
                                Nuestros servicios les permitirán mantener sus estándares de puntualidad y eficacia aprovechando el tiempo en sus trayectos.
                                Atochatransfer le facilitará la cobertura a congresos, o convenciones de cualquier tipo asesorándole de forma personalizada de la logística y gestión necesarias para el correcto funcionamiento de cualquier acto que precise.
                                Nuestro departamento de eventos gestionará horarios de vuelos, lista de asistentes, “meet&greet”, necesidades de shuttle a hoteles y recintos feriales.
                            </Typography>
                        </Box>
                        <Box className="cardBox">
                            <img src={card3} width="100%" height="250px" />
                            <Typography fontWeight="600" padding="20px">Viajes turísticos</Typography>
                            <Typography sx={{ textAlign: "justify" }}>Dispondrá no solo de nuestros vehículos y conductores experimentados sino toda nuestra capacidad de gestión para que no se pierda nada en su viaje o visita: guías, traductores, o cualquier profesional que precise.
                                Háganos su propuesta de viaje y nos pondremos a su entera disposición durante el tiempo que necesite.
                                Hemos diseñado varios tours turísticos que ponemos en su conocimiento pensados para aprovechar al máximo su tiempo, disfrutando de la historia, la arquitectura, el arte o la gastronomía, guiado siempre por un profesional que hará de su viaje o visita un experiencia inolvidable.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mt: "100px", mb: "50px" }}>
                    <Typography fontSize="29px" fontWeight="600">Preguntas frecuentes</Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
                        <Divider className="line" />
                    </Box>
                    <Box sx={{ mt: "50px" }}>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">¿Cuánto se tarda en coche con conductor de Madrid a Toledo?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    El tiempo aproximado es de 50 minutos con un tráfico fluido sin complicaciones.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">¿Cuánto tiempo tarda el traslado de Madrid a Puy du Fou?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    El tiempo aproximado es de 50 a 60 minutos con un tráfico fluido.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">¿Con cuánta antelación puedo reservar el traslado a Toledo?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Cuanto antes realices la reserva antes podremos planificar tu traslado, pero basta con que nos contactes al menos con 6 horas de antelación.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">¿Cuánto tiempo me puede esperar el conductor?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nuestro conductor podrá esperar hasta 15 minutos de cortesía para recogidas en hoteles, empresas, apartamentos, domicilio y hasta 30 minutos en aeropuertos, estaciones y parque Puy du Fou en Toledo.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">¿Con cuánto tiempo puedo cancelar la reserva?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Podrás cancelar la reserva sin gastos, siempre que la cancelación se produzca con más de 24 horas de antelación.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">¿Una vez cancelada la reserva puedo recuperar el dinero?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Recuperarás el 100% de la reserva siempre que la cancelación se produzca antes de 24 horas. La devolución del importe se realizará a la misma tarjeta bancaria a la que se realizó el cargo de la reserva.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">¿Qué hago si no localizo a mi conductor?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Deberás llamar al teléfono móvil proporcionado en la confirmación de la reserva, o bien llamar a nuestro servicio de atención 24 horas que figura en nuestra web.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">¿Cómo localizar a mi conductor en caso de recogida en el parque Puy du Fou en Toledo?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    El conductor esperará en la zona habilitada para vehículos de servicio público del aparcamiento de Puy du Fou. Nuestros coches y furgonetas suelen ser marca Mercedes de color negro. El propio conductor le llamará al teléfono facilitado en la reserva en caso de no localizarle a la salida de recinto a la hora pactada.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">Cómo llegar a Puy du Fou</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nuestros conductores conocen la ubicación y accesos al parque Puy du Fou. Nuestro chófer le dejará o recogerá en su caso, en la puerta principal de acceso que se encuentra en el parking de Puy du Fou. Nuestros conductores utilizan la autovía A-42 y enlazan con la A-40 y la CM-40.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">Cómo llegar a Toledo</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Todos nuestros vehículos utilizan la autovía A-42 Madrid-Toledo con llegada directa en 50 minutos.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
                <a className="reservBtn">RESERVAR</a>
                <Box sx={{ mt: "100px", display: "flex", justifyContent: "center" }}>
                    <img src={facebook} />
                    <img src={twitter} />
                    <img src={youtube} />
                </Box>
            </Container>
            <Footer />
        </>
    );
}