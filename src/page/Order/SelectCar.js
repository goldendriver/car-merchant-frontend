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
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();

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
                                            <Step key={t(`carSelect.steper.title${index + 1}`)} {...stepProps}>
                                                <StepLabel {...labelProps}></StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>

                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ ml: "11%" }}>{t('carSelect.steper.title1')}</Typography>
                                <Typography sx={{ ml: "12%" }}>{t('carSelect.steper.title2')}</Typography>
                                <Typography sx={{ ml: "14%" }}>{t('carSelect.steper.title3')}</Typography>
                                <Typography sx={{ ml: "17%" }}>{t('carSelect.steper.title4')}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", backgroundColor: "#35455d", color: "white", justifyContent: "space-around", p: "20px" }}>
                            <Box>
                                <Typography fontSize="1.2rem" fontWeight="800">{t('forms.field5.title1')}</Typography>
                                {values && values?.round_trip === 'true' && <Typography fontSize="1.2rem" fontWeight="800">{t('forms.field5.title2')}</Typography>}
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
                                <Typography>{t('carSelect.edit')}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: "center" }}>
                            <Container fullWidth sx={{ m: "3rem" }}>
                                <Typography fontSize="1.25rem" fontWeight="500" align="left">{t('carSelect.cars.title', { length: data.length })}</Typography>
                                <Grid container sx={{ mt: "10px", mb: "100px" }}>
                                    {[1, 2].length > 0 &&
                                        [1, 2].map((item) => (
                                            <Grid item md={4} sx={{ padding: "20px", width: "30%", height: "300px" }}>
                                                <Card sx={{ boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                                                    <CardContent>
                                                        <img src={item.file} width="100%" height="200px" />
                                                        <Box className="cartCard">
                                                            <Typography fontSize="1.2rem" fontWeight="900">{item.price}€</Typography>
                                                        </Box>
                                                        <Typography fontSize="20px" fontWeight="900" align="left" sx={{ p: "10px" }}>{item.name}</Typography>
                                                        <FormControl sx={{ width: "100%" }}>
                                                            <a className="conBtn" onClick={() => handleNext(item)}>{t('carSelect.cars.btn')}</a>
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
                                                <Step key={t(`carSelect.steper.title${index + 1}`)} {...stepProps}>
                                                    <StepLabel {...labelProps}></StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>

                                </Box>
                                <Box sx={{ display: "flex" }}>
                                    <Typography sx={{ ml: "11%" }}>{t('carSelect.steper.title1')}</Typography>
                                    <Typography sx={{ ml: "12%" }}>{t('carSelect.steper.title2')}</Typography>
                                    <Typography sx={{ ml: "14%" }}>{t('carSelect.steper.title3')}</Typography>
                                    <Typography sx={{ ml: "17%" }}>{t('carSelect.steper.title4')}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", backgroundColor: "#35455d", color: "white", justifyContent: "space-around", p: "20px" }}>
                                <Box>
                                    <Typography fontSize="1.2rem" fontWeight="800">{t('forms.field5.title1')}</Typography>
                                    {values && values?.round_trip === 'true' && <Typography fontSize="1.2rem" fontWeight="800">{t('forms.field5.title2')}</Typography>}
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
                                    <Typography>{t('carSelect.edit')}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: "center" }}>
                                <Container fullWidth sx={{ m: "3rem" }}>
                                    <Box width="100%" sx={{ display: "flex" }}>
                                        <img src={selectedItem?.file} width="40%" style={{ padding: "20px" }} />
                                        <Box sx={{ textAlign: "left", padding: "20px" }}>
                                            <Typography fontSize="1.75rem" fontWeight="800">{selectedItem?.name}</Typography>
                                            <Typography fontSize="1.1rem" fontWeight="600">{t('carSelect.going')}</Typography>
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
                                                    <Typography fontSize="20px" fontWeight="700">{t('carSelect.supplements.title')}</Typography>
                                                    <Divider />
                                                    <Typography fontSize="16px">{t('carSelect.supplements.descri')}
                                                        <br />17,28 €</Typography>
                                                </CardContent>
                                            </Card>
                                            <Card sx={{ boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)", mt: "30px" }}>
                                                <CardContent sx={{ textAlign: "left" }}>
                                                    <Typography fontSize="20px" fontWeight="700">{t('carSelect.extras')}</Typography>
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
                                        <Typography fontSize="1.5rem" fontWeight="600" sx={{ padding: "20px" }}>{t('carSelect.extras')}</Typography>
                                        <Grid container>
                                            <ExtraBox extraCounts={extraCounts} setExtraCounts={setExtraCounts} data={extras} />
                                        </Grid>
                                    </Card>
                                    <Card sx={{ background: "white", mt: "20px" }}>
                                        <Typography fontSize="1.5rem" fontWeight="600" sx={{ padding: "20px" }}>{t('carSelect.customerDetails.title')}</Typography>
                                        <Grid container>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.customerDetails.field1')}*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label={t('carSelect.customerDetails.field1')} variant="outlined" value={form.name} name="name" onChange={handleForm} required />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.customerDetails.field2')}*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label={t('carSelect.customerDetails.field2')} variant="outlined" value={form.surname} name="surname" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.customerDetails.field3')}*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label={t('carSelect.customerDetails.field3')} variant="outlined" value={form.email} name="email" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.customerDetails.field4')}*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label={t('carSelect.customerDetails.field4')} variant="outlined" value={form.confirm_email} name="confirm_email" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.customerDetails.field5')}*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label={t('carSelect.customerDetails.field5')} variant="outlined" value={form.phone_no} name="phone_no" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.customerDetails.field6')}</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label={t('carSelect.customerDetails.field6')} variant="outlined" value={form.other_phone_no} name="other_phone_no" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Typography fontSize="1.25rem" fontWeight="600" sx={{ padding: "20px" }}>{t('carSelect.billingDetail.title')}</Typography>
                                        <Grid container>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.billingDetail.field1')}*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label={t('carSelect.billingDetail.field1')} variant="outlined" value={form.address} name="address" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.billingDetail.field2')}*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label={t('carSelect.billingDetail.field2')} variant="outlined" value={form.city} name="city" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.billingDetail.field3')}*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label={t('carSelect.billingDetail.field3')} variant="outlined" value={form.province} name="province" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.billingDetail.field4')}*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label={t('carSelect.billingDetail.field4')} variant="outlined" value={form.portal_code} name="portal_code" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.billingDetail.field5')}*</Typography>
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
                                        <Typography fontSize="1.25rem" fontWeight="600" sx={{ padding: "20px" }}>{t('carSelect.tripDetail.title')}</Typography>
                                        <Box sx={{ display: "flex", padding: "15px" }}>
                                            <DirectionsCarIcon />
                                            <Typography sx={{ textDecoration: "underline" }}>{values && values?.origin_point}</Typography>

                                        </Box>
                                        <Grid container>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.tripDetail.field1')}*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label={t('carSelect.tripDetail.field1')} variant="outlined" value={form.shipping_no} name="shipping_no" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item md={6} sx={{ padding: "20px" }}>
                                                <Typography>{t('carSelect.tripDetail.field2')}*</Typography>
                                                <FormControl sx={{ width: "100%" }}>
                                                    <TextField id="outlined-basic" type="text" label={t('carSelect.tripDetail.field2')} variant="outlined" value={form.shipping_time} name="shipping_time" onChange={handleForm} />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Box sx={{ display: "flex", padding: "15px" }}>
                                            <LocationOnIcon />
                                            <Typography sx={{ textDecoration: "underline" }}>{values && values?.destination_point}</Typography>

                                        </Box>
                                        <Divider className="cardDivider" sx={{ ml: "2%" }} />
                                        <Typography fontSize="1.25rem" fontWeight="600" sx={{ padding: "20px" }}>{t('carSelect.additionalInfo.title')}</Typography>
                                        <Typography sx={{ paddingLeft: "20px" }}>{t('carSelect.additionalInfo.label')}</Typography>
                                        <FormControl sx={{ width: "97%", padding: "20px" }}>
                                            <TextareaAutosize minRows={10} value={form.comments} name="comments" onChange={handleForm} />
                                        </FormControl>
                                        <Box className="result">
                                            <Typography fontSize="1.5rem" fontWeight="600" sx={{ padding: "10px" }}>{t('carSelect.pay.title')} {totalPrice(extraCounts)} €</Typography>
                                            <Box className="badge1">
                                                <Typography>{t('carSelect.pay.p1')} {totalPrice(extraCounts)}  €.</Typography>
                                            </Box>
                                            <Box className="badge2">
                                                <Typography>{t('carSelect.pay.p2')}</Typography>
                                            </Box>
                                            <Box sx={{ display: "flex" }}>
                                                <img src={visa} className="paycard" />
                                                <img src={mastercard} className="paycard" />
                                            </Box>
                                            <Divider sx={{ mt: "20px", mb: "20px" }} />
                                            <Box sx={{ mb: "20px" }}>
                                                <FormControlLabel
                                                    value="I have read and accept the conditions of the transfer"
                                                    control={<Checkbox />}
                                                    label={t('carSelect.pay.p3')}
                                                    labelPlacement="end"
                                                />
                                            </Box>
                                            <a className="conBtn" onClick={submit}>
                                                {t('carSelect.pay.title')} {totalPrice(extraCounts)} €
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
                                    <Typography sx={{ ml: "11%" }}>{t('carSelect.steper.title1')}</Typography>
                                    <Typography sx={{ ml: "12%" }}>{t('carSelect.steper.title2')}</Typography>
                                    <Typography sx={{ ml: "14%" }}>{t('carSelect.steper.title3')}</Typography>
                                    <Typography sx={{ ml: "17%" }}>{t('carSelect.steper.title4')}</Typography>
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