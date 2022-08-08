import Header from "../../componants/Header"
import Footer from "../../componants/Footer";
import * as React from 'react';
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import car1 from "../../assets/1.JPG"
import extra1 from "../../assets/extra1.jpg";
import extra2 from "../../assets/extra2.jpeg";
import extra3 from "../../assets/extra3.jpeg";
import extra4 from "../../assets/extra4.jpg";
import extra5 from "../../assets/extra5.jpg";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, Grid, Card, CardContent, FormControl, Divider, Button, TextField, Select, MenuItem, TextareaAutosize, Checkbox, FormControlLabel } from "@mui/material";
import Forms from "../../componants/Forms";
import { format } from "date-fns";
import { getReq, postReq } from "../../http/axios";
import ExtraBox from "../../componants/ExtraBox";
import { totalPrice } from "../../utils/extras";
import CheckOutForm from "../../componants/CheckOutForm";
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51ITftMIy2XYOJorrGz48C3F5fiBQdXxXHGrtlaC40TzQVCkvRRUj4opx6VhMHYVxIGhEFI9AkAD2ZINAHmfiPIW000SNkv2brH');

export default function SelectCar(props) {
    const navigate = useNavigate();
    let [extraCounts, setExtraCounts] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    console.log('search params ', Object.fromEntries([...searchParams]));
    const values = Object.fromEntries([...searchParams])
    const steps = ['Seleccionar fechas', 'Seleccionar vehículo', 'Completar', 'Resumen'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedCountry, setSelectedCountry] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [modelType, setModelType] = React.useState('edit');
    const [data, setData] = React.useState([]);
    const [extras, setExtras] = React.useState([]);
    const [origen, setOrigen] = React.useState('');
    const [destiny, setDestiny] = React.useState('');
    const [date, setDate] = React.useState('');
    const [adult, setAdult] = React.useState('');
    const [kid, setKid] = React.useState('');
    const [drink, setDrink] = React.useState('');
    const [selectedItem, setSelectedItem] = React.useState('');
    const [form, setForm] = React.useState({
        name: '',
        surname: '',
        email: '',
        confirm_email: '',
        phone_no: '',
        other_phone_no: '',
        address: '',
        city: '',
        province: '',
        portal_code: '',
        country: '',
        shipping_no: '',
        shipping_time: '',
        comments: '',
    });
    const [secret, setSecret] = React.useState('');

    // React.useEffect(() => {
    //     (async () => {
    //         const amount = totalPrice(extraCounts)
    //         const { client_secret } = await postReq('/secret', { amount: amount });
    //         setSecret(client_secret);
    //         // Call stripe.confirmCardPayment() with the client secret.
    //     })();
    // }, [extraCounts]);
    const options = {

        // passing the client secret obtained from the server
        clientSecret: secret.toString(),

    };

    const handleSelectOrigen = (event: SelectChangeEvent) => {
        setOrigen(event.target.value);
    };
    const handleSelectDestiny = (event: SelectChangeEvent) => {
        setDestiny(event.target.value);
    };
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
    const selectCountryHandler = (e) => {
        setSelectedCountry(e.target.value)
    };
    countries.registerLocale(enLocale);
    countries.registerLocale(itLocale);
    const countryObj = countries.getNames("en", { select: "official" });
    const countryArr = Object.entries(countryObj).map(([key, value]) => {
        return {
            label: value,
            value: key
        };
    });
    const setModal = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleNext = (item) => {
        setSelectedItem(item)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleChange = (event) => {

    }
    const handleForm = (e) => {
        const { name, value } = e.target;
        setForm((form) => ({ ...form, [name]: value }));
    };
    const submit = async (event) => {
        const amount = totalPrice(extraCounts)
        const { client_secret } = await postReq('/secret', { amount: amount });
        setSecret(client_secret);
        await postReq('/addorder', { ...form, extras: extraCounts, amount: amount, payment_id: client_secret });
        setModelType('payment');
        setOpen(true);
    }

    React.useEffect(() => {
        (async () => {
            const data = await getReq('/cars');
            const extra = await getReq('/extras');
            data && setData(data);
            extra && setExtras(extra);
        })()
    }, [])

    return (
        <>
            <Header />
            {
                activeStep === 0 ?
                    <Box>
                        <Box sx={{ backgroundColor: "#f5f5f5", p: "30px" }}>
                            <Box sx={{ width: '70%', ml: "15%" }}>
                                <Stepper activeStep={activeStep}>
                                    {steps.map((label, index) => {
                                        const stepProps = {};
                                        const labelProps = {};
                                        return (
                                            <Step key={label} {...stepProps}>
                                                <StepLabel {...labelProps}></StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>

                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ ml: "11%" }}>Seleccionar fechas</Typography>
                                <Typography sx={{ ml: "12%" }}>Seleccionar vehículo</Typography>
                                <Typography sx={{ ml: "14%" }}>Completar</Typography>
                                <Typography sx={{ ml: "17%" }}>Resumen</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", backgroundColor: "#35455d", color: "white", justifyContent: "space-around", p: "20px" }}>
                            <Typography fontSize="1.2rem" fontWeight="800">SÓLO IDA</Typography>
                            <Box>
                                <Box sx={{ display: "flex" }}>
                                    <ArrowForwardIcon sx={{ mr: "10px" }} />
                                    <CalendarMonthIcon />
                                    <Typography>{values && format(parseInt(values.datetime), 'yyyy-MM-dd kk:mm')}</Typography>
                                    <DirectionsCarIcon />
                                    <Typography>{values && values?.origin_point}</Typography>
                                    <LocationOnIcon />
                                    <Typography>{values && values?.destination_point}</Typography>
                                </Box>
                                {values && values?.round_trip === 'true' && <Box sx={{ display: "flex" }}>
                                    <ArrowBackIcon sx={{ mr: "10px" }} />
                                    <CalendarMonthIcon />
                                    <Typography>{values && format(parseInt(values.return_datetime), 'yyyy-MM-dd kk:mm')}</Typography>
                                    <DirectionsCarIcon />
                                    <Typography>{values && values?.return_origin_point}</Typography>
                                    <LocationOnIcon />
                                    <Typography>{values && values?.return_destination_point}</Typography>
                                </Box>}
                                <Box sx={{ display: "flex" }}>
                                    <PersonIcon />
                                    <Typography>{values && values?.number_of_adults}</Typography>
                                    <AccessibilityNewIcon />
                                    <Typography>{values && values?.number_of_children}</Typography>
                                    <BabyChangingStationIcon />
                                    <Typography>{values && values?.number_of_infants}</Typography>
                                </Box>
                            </Box>
                            <Box className="editor" onClick={setModal}>
                                <CreateIcon sx={{ mr: "10px" }} />
                                <Typography>EDITAR</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: "center" }}>
                            <Container fullWidth sx={{ m: "3rem" }}>
                                <Typography fontSize="1.25rem" fontWeight="500" align="left">Hemos encontrado {data.length} vehículos disponibles</Typography>
                                <Grid container sx={{ mt: "10px", mb: "100px" }}>
                                    {data.length > 0 &&
                                        data.map((item) => (
                                            <Grid item md={4} sx={{ padding: "20px", width: "30%", height: "300px" }}>
                                                <Card sx={{ boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                                                    <CardContent>
                                                        <img src={item.file} width="100%" height="200px" />
                                                        <Box className="cartCard">
                                                            <Typography fontSize="1.2rem" fontWeight="900">{item.price}€</Typography>
                                                        </Box>
                                                        <Typography fontSize="20px" fontWeight="900" align="left" sx={{ p: "10px" }}>{item.name}</Typography>
                                                        <FormControl sx={{ width: "100%" }}>
                                                            <a className="conBtn" onClick={() => handleNext(item)}>Resérvalo</a>
                                                        </FormControl>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))
                                    }

                                </Grid>
                            </Container>
                        </Box>
                    </Box>
                    : activeStep === 1 ?
                        <Box>
                            <Box sx={{ backgroundColor: "#f5f5f5", p: "30px" }}>
                                <Box sx={{ width: '70%', ml: "15%" }}>
                                    <Stepper activeStep={activeStep}>
                                        {steps.map((label, index) => {
                                            const stepProps = {};
                                            const labelProps = {};
                                            return (
                                                <Step key={label} {...stepProps}>
                                                    <StepLabel {...labelProps}></StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>

                                </Box>
                                <Box sx={{ display: "flex" }}>
                                    <Typography sx={{ ml: "11%" }}>Seleccionar fechas</Typography>
                                    <Typography sx={{ ml: "12%" }}>Seleccionar vehículo</Typography>
                                    <Typography sx={{ ml: "14%" }}>Completar</Typography>
                                    <Typography sx={{ ml: "17%" }}>Resumen</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", backgroundColor: "#35455d", color: "white", justifyContent: "space-around", p: "20px" }}>
                                <Box>
                                    <Typography fontSize="1.2rem" fontWeight="800">SÓLO IDA</Typography>
                                    <Typography fontSize="1.2rem" fontWeight="800" align="left">{selectedItem?.price}€</Typography>
                                </Box>

                                <Box>
                                    <Box sx={{ display: "flex" }}>
                                        <ArrowForwardIcon sx={{ mr: "10px" }} />
                                        <CalendarMonthIcon />
                                        <Typography>{values && format(parseInt(values.datetime), 'yyyy-MM-dd kk:mm')}</Typography>
                                        <DirectionsCarIcon />
                                        <Typography>{values && values?.origin_point}</Typography>
                                        <LocationOnIcon />
                                        <Typography>{values && values?.destination_point}</Typography>
                                    </Box>
                                    {values && values?.round_trip === 'true' && <Box sx={{ display: "flex" }}>
                                        <ArrowBackIcon sx={{ mr: "10px" }} />
                                        <CalendarMonthIcon />
                                        <Typography>{values && format(parseInt(values.return_datetime), 'yyyy-MM-dd kk:mm')}</Typography>
                                        <DirectionsCarIcon />
                                        <Typography>{values && values?.return_origin_point}</Typography>
                                        <LocationOnIcon />
                                        <Typography>{values && values?.return_destination_point}</Typography>
                                    </Box>}
                                    <Box sx={{ display: "flex" }}>
                                        <PersonIcon />
                                        <Typography>{values && values?.number_of_adults}</Typography>
                                        <AccessibilityNewIcon />
                                        <Typography>{values && values?.number_of_children}</Typography>
                                        <BabyChangingStationIcon />
                                        <Typography>{values && values?.number_of_infants}</Typography>
                                    </Box>
                                </Box>
                                <Box className="editor" onClick={setModal}>
                                    <CreateIcon sx={{ mr: "10px" }} />
                                    <Typography>EDITAR</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: "center" }}>
                                <Container fullWidth sx={{ m: "3rem" }}>
                                    <Box width="100%" sx={{ display: "flex" }}>
                                        <img src={selectedItem?.file} width="40%" style={{ padding: "20px" }} />
                                        <Box sx={{ textAlign: "left", padding: "20px" }}>
                                            <Typography fontSize="1.75rem" fontWeight="800">{selectedItem?.name}</Typography>
                                            <Typography fontSize="1.1rem" fontWeight="600">IDA</Typography>
                                            <Box sx={{ display: "flex", mt: "20px" }}>
                                                <CalendarMonthIcon />
                                                <Typography>{values && format(parseInt(values.datetime), 'yyyy-MM-dd kk:mm')}</Typography>
                                            </Box>
                                            <Divider sx={{ margin: "5px" }} />
                                            <Box sx={{ display: "flex" }}>
                                                <DirectionsCarIcon />
                                                <Typography>{values && values?.origin_point}</Typography>
                                            </Box>
                                            <Divider sx={{ margin: "5px" }} />
                                            <Box sx={{ display: "flex" }}>
                                                <LocationOnIcon />
                                                <Typography>{values && values?.destination_point}</Typography>
                                            </Box>
                                            <Divider sx={{ margin: "5px" }} />
                                            <Box sx={{ display: "flex" }}>
                                                <PersonIcon />
                                                <Typography>{values && values?.number_of_adults}</Typography>
                                                <AccessibilityNewIcon />
                                                <Typography>{values && values?.number_of_children}</Typography>
                                                <BabyChangingStationIcon />
                                                <Typography>{values && values?.number_of_infants}</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ padding: "20px" }}>
                                            <Card sx={{ boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                                                <CardContent sx={{ textAlign: "left" }}>
                                                    <Typography fontSize="20px" fontWeight="700">Suplementos</Typography>
                                                    <Divider />
                                                    <Typography fontSize="16px">Suplemento nocturnidad/festivo
                                                        <br />17,28 €</Typography>
                                                </CardContent>
                                            </Card>
                                            <Card sx={{ boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)", mt: "30px" }}>
                                                <CardContent sx={{ textAlign: "left" }}>
                                                    <Typography fontSize="20px" fontWeight="700">Extras</Typography>
                                                    <Divider />
                                                    {extraCounts && extraCounts.map((item) => (
                                                        <Typography fontSize="16px">
                                                            <b>{item.item.name}</b>&nbsp;&nbsp;
                                                            {item.item.price} x {item.qty} = {item.item.price * item.qty} €
                                                        </Typography>
                                                    ))}

                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Box>

                                </Container>
                            </Box>
                            <Box sx={{ backgroundColor: "#eeeeee" }}>
                                <Container fullWidth sx={{ mt: "3rem", textAlign: "left" }}>
                                    <Card sx={{ background: "white", mt: "20px" }}>
                                        <Typography fontSize="1.5rem" fontWeight="600" sx={{ padding: "20px" }}>Extras</Typography>
                                        <Grid container>
                                            <ExtraBox extraCounts={extraCounts} setExtraCounts={setExtraCounts} data={extras} />
                                        </Grid>
                                    </Card>
                                    <Card sx={{ background: "white", mt: "20px" }}>
                                        <Typography fontSize="1.5rem" fontWeight="600" sx={{ padding: "20px" }}>Detalles del cliente</Typography>
                                        <Grid container>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Nombre*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label="Nombre" variant="outlined" value={form.name} name="name" onChange={handleForm} required />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Apellidos*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label="Apellidos" variant="outlined" value={form.surname} name="surname" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Correo electrónico*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label="Correo electrónico" variant="outlined" value={form.email} name="email" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Confirmar el correo electrónico*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label="Confirmar el correo electrónico" variant="outlined" value={form.confirm_email} name="confirm_email" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Número de teléfono*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label="Número de teléfono" variant="outlined" value={form.phone_no} name="phone_no" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Teléfono alternativo</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label="Teléfono alternativo" variant="outlined" value={form.other_phone_no} name="other_phone_no" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Typography fontSize="1.25rem" fontWeight="600" sx={{ padding: "20px" }}>Dirección de facturación</Typography>
                                        <Grid container>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Dirección*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label="Dirección" variant="outlined" value={form.address} name="address" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Ciudad*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label="Ciudad" variant="outlined" value={form.city} name="city" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Provincia*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label="Provincia" variant="outlined" value={form.province} name="province" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Código postal*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label="Código postal" variant="outlined" value={form.portal_code} name="portal_code" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Pais*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <Select
                                                        value={selectedCountry}
                                                        name="conutry"
                                                        onChange={handleForm}
                                                    >
                                                        {
                                                            countryArr.map(({ label, value }) => {
                                                                return (
                                                                    <MenuItem value={value}>{label}</MenuItem>
                                                                )

                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Divider className="cardDivider" sx={{ ml: "2%" }} />
                                        <Typography fontSize="1.25rem" fontWeight="600" sx={{ padding: "20px" }}>Detalles del viaje</Typography>
                                        <Box sx={{ display: "flex", padding: "15px" }}>
                                            <DirectionsCarIcon />
                                            <Typography sx={{ textDecoration: "underline" }}>Recogida Aeropuerto Madrid-Barajas (MAD)</Typography>

                                        </Box>
                                        <Grid container>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Número de vuelo o barco*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label="Número de vuelo o barco" variant="outlined" value={form.shipping_no} name="shipping_no" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>Hora estimada del vuelo o del barco*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label="Hora estimada del vuelo o del barco" variant="outlined" value={form.shipping_time} name="shipping_time" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Box sx={{ display: "flex", padding: "15px" }}>
                                            <LocationOnIcon />
                                            <Typography sx={{ textDecoration: "underline" }}>Destino Parque Puy du Fou</Typography>

                                        </Box>
                                        <Divider className="cardDivider" sx={{ ml: "2%" }} />
                                        <Typography fontSize="1.25rem" fontWeight="600" sx={{ padding: "20px" }}>Información adicional</Typography>
                                        <Typography sx={{ paddingLeft: "20px" }}>Comentarios</Typography>
                                        <FormControl sx={{ width: "97%", padding: "20px" }}>
                                            <TextareaAutosize minRows={10} value={form.comments} name="comments" onChange={handleForm} />
                                        </FormControl>
                                        <Box className="result">
                                            <Typography fontSize="1.5rem" fontWeight="600" sx={{ padding: "10px" }}>Pagar {totalPrice(extraCounts)} €</Typography>
                                            <Box className="badge1">
                                                <Typography>Para confirmar su reserva ha de realizarse un pago de {totalPrice(extraCounts)}  €.</Typography>
                                            </Box>
                                            <Box className="badge2">
                                                <Typography>La confirmación de la reserva se realiza de forma segura en la plataforma bancaria, una vez haya completado el formulario de reserva.</Typography>
                                            </Box>
                                            <Box sx={{ display: "flex" }}>
                                                <img src={visa} className="paycard" />
                                                <img src={mastercard} className="paycard" />
                                            </Box>
                                            <Divider sx={{ mt: "20px", mb: "20px" }} />
                                            <Box sx={{ mb: "20px" }}>
                                                <FormControlLabel
                                                    value="He leído y acepto las condiciones del transfer"
                                                    control={<Checkbox />}
                                                    label="He leído y acepto las condiciones del transfer"
                                                    labelPlacement="end"
                                                />
                                            </Box>
                                            <a className="conBtn" onClick={submit}>
                                                Pagar {totalPrice(extraCounts)} €
                                            </a>
                                        </Box>
                                    </Card>
                                </Container>
                            </Box>
                        </Box>
                        :
                        <Box>
                            <Box sx={{ backgroundColor: "#f5f5f5", p: "30px" }}>
                                <Box sx={{ width: '70%', ml: "15%" }}>
                                    <Stepper activeStep={activeStep}>
                                        {steps.map((label, index) => {
                                            const stepProps = {};
                                            const labelProps = {};
                                            return (
                                                <Step key={label} {...stepProps}>
                                                    <StepLabel {...labelProps}></StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>

                                </Box>
                                <Box sx={{ display: "flex" }}>
                                    <Typography sx={{ ml: "11%" }}>Seleccionar fechas</Typography>
                                    <Typography sx={{ ml: "12%" }}>Seleccionar vehículo</Typography>
                                    <Typography sx={{ ml: "14%" }}>Completar</Typography>
                                    <Typography sx={{ ml: "17%" }}>Resumen</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", backgroundColor: "#35455d", color: "white", justifyContent: "space-around", p: "20px" }}>
                                <Typography fontSize="1.5rem" fontWeight="800" align="center">asd, your reservation is pending confirmation</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: "center" }}>
                                <Box sx={{ textAlign: "left", padding: "20px", width: "600px" }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography fontSize="1.75rem" fontWeight="800">Car1</Typography>
                                        <Typography fontSize="1.75rem" fontWeight="800">110,00 €</Typography>
                                    </Box>
                                    <Divider sx={{ margin: "5px" }} />
                                    <Box sx={{ display: "flex" }}>
                                        <DirectionsCarIcon />
                                        <Typography>Aeropuerto Madrid-Barajas (MAD)</Typography>
                                    </Box>
                                    <Divider sx={{ margin: "5px" }} />
                                    <Box sx={{ display: "flex" }}>
                                        <LocationOnIcon />
                                        <Typography> Parque Puy du Fou</Typography>
                                    </Box>
                                    <Divider sx={{ margin: "5px" }} />
                                    <Box sx={{ display: "flex", mt: "20px" }}>
                                        <CalendarMonthIcon />
                                        <Typography>2022-07-27 05:00</Typography>
                                    </Box>
                                    <Divider sx={{ margin: "5px" }} />
                                    <Box sx={{ display: "flex" }}>
                                        <PersonIcon />
                                        <Typography>2</Typography>
                                        <AccessibilityNewIcon />
                                        <Typography>1</Typography>
                                        <BabyChangingStationIcon />
                                        <Typography>0</Typography>
                                    </Box>
                                    <Divider sx={{ margin: "5px" }} />
                                    <img src={car1} width="100%" style={{ marginTop: "30px" }} />
                                    <Divider sx={{ marginTop: "50px" }} />
                                    <Typography fontSize="1.5rem" fontWeight="600">Extras</Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                        <Typography fontSize="1.1rem" fontWeight="600">Silla niños grupo II</Typography>
                                        <Typography fontSize="1.1rem" fontWeight="600">6,00 €</Typography>
                                    </Box>
                                    <Divider sx={{ margin: "5px" }} />
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography fontSize="1.75rem" fontWeight="600">Total</Typography>
                                        <Typography fontSize="1.75rem" fontWeight="600">116,00 €</Typography>
                                    </Box>
                                    <Divider sx={{ margin: "5px" }} />
                                    <Typography fontSize="1.5rem" fontWeight="600" sx={{ marginTop: "50px" }}>Detalles del cliente</Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                                        <Typography fontSize="1.1rem" fontWeight="600">Nombre:</Typography>
                                        <Typography fontSize="1.1rem" >Mer1</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography fontSize="1.1rem" fontWeight="600">Correo electrónico:</Typography>
                                        <Typography fontSize="1.1rem">test@gmail.com</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography fontSize="1.1rem" fontWeight="600">Teléfono:	</Typography>
                                        <Typography fontSize="1.1rem">123451234512</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
            }
            <Dialog open={open} onClose={handleClose}>
                {modelType === 'edit' ?
                    <Forms {...values} />
                    :
                    <>
                        {secret &&
                            <Elements stripe={stripePromise} options={options}>
                                <CheckOutForm />
                            </Elements>
                        }
                    </>
                }
            </Dialog>
            <Footer />
        </>
    );
}