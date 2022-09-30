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
import { useTranslation } from 'react-i18next';
export default function Home(props) {
    const [origen, setOrigen] = React.useState('');
    const [destiny, setDestiny] = React.useState('');
    const [date, setDate] = React.useState('');
    const [adult, setAdult] = React.useState('');
    const [kid, setKid] = React.useState('');
    const [drink, setDrink] = React.useState('');
    const [way, setWay] = React.useState('one');
    const { t } = useTranslation();
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
                <Typography fontSize="51px" fontWeight="700">{t('iconBox.title')}</Typography>
                <Box sx={{ display: "flex", mb:"30px" }}>
                    <Box className="iconBox">
                        <img src={icon1} width="100%"/>
                        <Typography fontWeight="600">{t('iconBox.iconBox1.title')}</Typography>
                        <Typography>{t('iconBox.iconBox1.desc')}</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon2} width="100%"/>
                        <Typography fontWeight="600">{t('iconBox.iconBox2.title')}</Typography>
                        <Typography>{t('iconBox.iconBox2.desc')}</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon3} width="100%"/>
                        <Typography fontWeight="600">{t('iconBox.iconBox3.title')}</Typography>
                        <Typography>{t('iconBox.iconBox3.desc')}</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon4} width="100%"/>
                        <Typography fontWeight="600">{t('iconBox.iconBox4.title')}</Typography>
                        <Typography>{t('iconBox.iconBox4.desc')}</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon5} width="100%"/>
                        <Typography fontWeight="600">{t('iconBox.iconBox5.title')}</Typography>
                        <Typography>{t('iconBox.iconBox5.desc')}</Typography>
                    </Box>
                    <Box className="iconBox">
                        <img src={icon6} width="100%"/>
                        <Typography fontWeight="600">{t('iconBox.iconBox6.title')}</Typography>
                        <Typography>{t('iconBox.iconBox6.desc')}</Typography>
                    </Box>
                </Box>
                <a className="reservBtn">{t('iconBox.btn')}</a>
                <Box sx={{ mt: "50px", mb: "50px" }}>
                    <Typography fontSize="51px" fontWeight="700">{t('services.title')}</Typography>
                    <Box sx={{ display: "flex" }}>
                        <Box className="cardBox">
                            <img src={card1} width="100%" height="250px" />
                            <Typography fontWeight="600" padding="20px">{t('services.card1.title')}</Typography>
                            <Typography sx={{ textAlign: "justify" }}>{t('services.card1.desc')}
                            </Typography>
                        </Box>
                        <Box className="cardBox">
                            <img src={card2} width="100%" height="250px" />
                            <Typography fontWeight="600" padding="20px">{t('services.card2.title')}</Typography>
                            <Typography sx={{ textAlign: "justify" }}>{t('services.card2.desc')}
                            </Typography>
                        </Box>
                        <Box className="cardBox">
                            <img src={card3} width="100%" height="250px" />
                            <Typography fontWeight="600" padding="20px">{t('services.card3.title')}</Typography>
                            <Typography sx={{ textAlign: "justify" }}>{t('services.card3.desc')}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mt: "100px", mb: "50px" }}>
                    <Typography fontSize="29px" fontWeight="600">{t('faqs.title')}</Typography>
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
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">{t('faqs.faqs1.title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {t('faqs.faqs1.desc')}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">{t('faqs.faqs2.title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {t('faqs.faqs2.desc')}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">{t('faqs.faqs3.title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {t('faqs.faqs3.desc')}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">{t('faqs.faqs4.title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {t('faqs.faqs4.desc')}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">{t('faqs.faqs5.title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {t('faqs.faqs5.desc')}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">{t('faqs.faqs6.title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {t('faqs.faqs6.desc')}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">{t('faqs.faqs7.title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {t('faqs.faqs7.desc')}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">{t('faqs.faqs8.title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {t('faqs.faqs8.desc')}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">{t('faqs.faqs9.title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {t('faqs.faqs9.desc')}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accBorder">
                            <AccordionSummary
                                expandIcon={<AddIcon className="iconStyle" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize="18px" fontWeight="600" color="#35455d">{t('faqs.faqs10.title')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {t('faqs.faqs10.desc')}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
                <a className="reservBtn">{t('faqs.btn')}</a>
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