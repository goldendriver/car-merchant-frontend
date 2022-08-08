import { Box, Typography, Container, Divider, Grid, Accordion, AccordionSummary, AccordionDetails, FormControl, Select, MenuItem, TextField, RadioGroup, FormControlLabel, Radio, Button, FormHelperText } from "@mui/material";
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Forms = ({ datetime, destination_point, number_of_adults, number_of_children, number_of_infants, origin_point, return_datetime, return_destination_point, return_origin_point, round_trip }) => {

  const navigate = useNavigate();
  const [error, setError] = useState({ originOne: false, destinyOne: false, originTwo: false, destinyTwo: false });
  const [formData, setFormData] = useState({
    originOne: origin_point ? origin_point : '',
    originTwo: return_origin_point ? return_origin_point : '',
    destinyOne: destination_point ? destination_point : '',
    destinyTwo: return_destination_point ? return_destination_point : '',
    dateTimeOne: datetime ? datetime : '2022-07-22T10:30',
    dateTimeTwo: return_datetime ? return_datetime : '2022-07-22T10:30',
    adult: number_of_adults ? number_of_adults : 1,
    kid: number_of_children ? number_of_children : 0,
    drink: number_of_infants ? number_of_infants : 0,
    way: round_trip === 'true' ? 'two' : 'one'
  });

  const submit = (e) => {
    e.preventDefault();
    console.log('form data ', formData);
    const { originOne, originTwo, destinyOne, destinyTwo, dateTimeOne, dateTimeTwo, adult, kid, drink, way } = formData;
    const params = `origin_point=${originOne}&destination_point=${destinyOne}&datetime=${dateTimeOne}&number_of_adults=${adult}&number_of_children=${kid}&number_of_infants=${drink}&round_trip=${way === 'two' ? 'true' : 'false'}&${way === 'two' ? `&return_origin_point=${originTwo}&return_destination_point=${destinyTwo}&return_datetime=${dateTimeTwo}` : 'return_date='}`
    if (originOne && destinyOne) {
      if (way === 'two' && originTwo === '' && destinyTwo === '') {
        setError({ ...error, originTwo: true, destinyTwo: true });
        return;
      }
      navigate({
        pathname: '/selectCar/',
        search: `?${params}`,
      })
    } else {
      setError({ ...error, originOne: true, destinyOne: true });
    }

    // if (way === 'two' && (originOne || destinyOne)) {
    //   navigate({
    //     pathname: '/selectCar/',
    //     search: `?${params}`,
    //   })
    // } else {
    //   setError({ ...error, originTwo: true, destinyTwo: true });
    // }
  }
  return (
    <Box className="formContent" sx={{ height: formData.way === 'two' ? '800px' : '520px' }}>
      <Box padding="20px" textAlign="left">
        <Typography>
          Origen
        </Typography>
        <FormControl sx={{ width: "100%" }}>
          <Select
            value={formData.originOne}
            onChange={(e) => { setFormData({ ...formData, originOne: e.target.value }); setError({ ...error, originOne: false }) }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ background: "white" }}
          >
            <MenuItem value="">
              <em>Seleccionar lugar de origen</em>
            </MenuItem>
            <MenuItem value='madrid city'>Madrid City</MenuItem>
            <MenuItem value='madrid-barajas airport'>Madrid-Barajas Airport(MAD)</MenuItem>
            <MenuItem value='toledo city'>Toledo City</MenuItem>
            <MenuItem value='puy du fou park'>Puy du Fou Park</MenuItem>
            <MenuItem value='madrid atocha station'>Madrid Atocha Station</MenuItem>
            <MenuItem value='madrid chamartin station'>Madrid Chamartin Station</MenuItem>
          </Select>
          <FormHelperText sx={{ display: error.originOne ? 'block' : 'none' }} error={true}>Obligatorio</FormHelperText>
        </FormControl>
        <Typography>
          Destino
        </Typography>
        <FormControl sx={{ width: "100%" }}>
          <Select
            value={formData.destinyOne}
            onChange={(e) => { setFormData({ ...formData, destinyOne: e.target.value }); setError({ ...error, destinyOne: false }) }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ background: "white" }}
          >
            <MenuItem value="">
              <em>Seleccionar lugar de destino</em>
            </MenuItem>
            <MenuItem value='aeropuerto madrid-barajas'>Aeropuerto Madrid-Barajas(MAD)</MenuItem>
            <MenuItem value='toledo ciudad'>Toledo Ciudad</MenuItem>
            <MenuItem value='parque puy du fou'>Parque Puy du Fou</MenuItem>
            <MenuItem value='estación de atocha madrid'>Estación de Atocha Madrid</MenuItem>
            <MenuItem value='estación de chamartín madrid'>Estación de Chamartín Madrid</MenuItem>
          </Select>
          <FormHelperText sx={{ display: error.destinyOne ? 'block' : 'none' }} error={true}>Obligatorio</FormHelperText>
        </FormControl>
        <Typography>
          Fecha y hora
        </Typography>
        <FormControl sx={{ width: "100%" }}>
          <TextField
            id="datetime-local"
            label="Date and Time"
            type="datetime-local"
            defaultValue={formData.dateTimeOne}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ background: "white" }}
            onChange={(e) => setFormData({ ...formData, dateTimeOne: e.target.value })}
          />
        </FormControl>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          <Box width="25%">
            <Typography>
              Adultos
            </Typography>
            <TextField id="outlined-basic" type="number" label="Teléfono" variant="outlined" value={formData.adult} sx={{ background: "white" }} onChange={(e) => setFormData({ ...formData, adult: e.target.value })} />
          </Box>
          <Box width="25%">
            <Typography>
              Niños
            </Typography>
            <TextField id="outlined-basic" type="number" label="Teléfono" variant="outlined" value={formData.kid} sx={{ background: "white" }} onChange={(e) => setFormData({ ...formData, kid: e.target.value })} />
          </Box>
          <Box width="25%">
            <Typography>
              Bebés
            </Typography>
            <TextField id="outlined-basic" type="number" label="Teléfono" variant="outlined" value={formData.drink} sx={{ background: "white" }} onChange={(e) => setFormData({ ...formData, drink: e.target.value })} />
          </Box>
        </Box>
        <FormControl sx={{ margin: '10px 0px' }}>
          <RadioGroup
            row
            aria-label="way" value={formData.way} name='way' onChange={(e) => setFormData({ ...formData, way: e.target.value })}
          >
            <FormControlLabel value="one" control={<Radio color="default" />} label="Sólo ida" />
            <FormControlLabel value="two" control={<Radio color="default" />} label="Ida y vuelta" />
          </RadioGroup>
        </FormControl>
        <Box sx={{ display: formData.way === 'two' ? 'block' : "none" }}>
          <Typography>
            Origen
          </Typography>
          <FormControl sx={{ width: "100%" }}>
            <Select
              value={formData.originTwo}
              onChange={(e) => { setFormData({ ...formData, originTwo: e.target.value }); setError({ ...error, originTwo: false }) }}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ background: "white" }}
            >
              <MenuItem value="">
                <em>Seleccionar lugar de origen</em>
              </MenuItem>
              <MenuItem value='madrid city'>Madrid City</MenuItem>
              <MenuItem value='madrid-barajas airport'>Madrid-Barajas Airport(MAD)</MenuItem>
              <MenuItem value='toledo city'>Toledo City</MenuItem>
              <MenuItem value='puy du fou park'>Puy du Fou Park</MenuItem>
              <MenuItem value='madrid atocha station'>Madrid Atocha Station</MenuItem>
              <MenuItem value='madrid chamartin station'>Madrid Chamartin Station</MenuItem>
            </Select>
            <FormHelperText sx={{ display: error.originTwo ? 'block' : 'none' }} error={true}>Obligatorio</FormHelperText>
          </FormControl>
          <Typography>
            Destino
          </Typography>
          <FormControl sx={{ width: "100%" }}>
            <Select
              value={formData.destinyTwo}
              onChange={(e) => { setFormData({ ...formData, destinyTwo: e.target.value }); setError({ ...error, destinyTwo: false }) }}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ background: "white" }}
            >
              <MenuItem value="">
                <em>Seleccionar lugar de destino</em>
              </MenuItem>
              <MenuItem value='aeropuerto madrid-barajas'>Aeropuerto Madrid-Barajas(MAD)</MenuItem>
              <MenuItem value='toledo ciudad'>Toledo Ciudad</MenuItem>
              <MenuItem value='parque puy du fou'>Parque Puy du Fou</MenuItem>
              <MenuItem value='estación de atocha madrid'>Estación de Atocha Madrid</MenuItem>
              <MenuItem value='estación de chamartín madrid'>Estación de Chamartín Madrid</MenuItem>
            </Select>
            <FormHelperText sx={{ display: error.destinyTwo ? 'block' : 'none' }} error={true}>Obligatorio</FormHelperText>
          </FormControl>
          <Typography>
            Fecha y hora
          </Typography>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="datetime-local"
              label="Date and Time"
              type="datetime-local"
              defaultValue={formData.dateTimeTwo}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ background: "white" }}
              onChange={(e) => setFormData({ ...formData, dateTimeTwo: e.target.value })}
            />
          </FormControl>
        </Box>
        <FormControl sx={{ width: "100%", mt: "20px", textAlign: "center" }}>
          <Button
            className="conBtn"
            onClick={submit}
          >
            Encuentra un transfer
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Forms;