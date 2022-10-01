import { Box, Typography, Container, Divider, Grid, Accordion, AccordionSummary, AccordionDetails, FormControl, Select, MenuItem, TextField, RadioGroup, FormControlLabel, Radio, Button, FormHelperText } from "@mui/material";
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  return (
    <Box className="formContent" sx={{ height: formData.way === 'two' ? '800px' : '520px' }}>
      <Box padding="20px" textAlign="left">
        <Typography>
          {t('forms.field1.label')}
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
              <em>{t('forms.field1.placeholder')}</em>
            </MenuItem>
            <MenuItem value={t('forms.field1.selector1')}>{t('forms.field1.selector1')}</MenuItem>
            <MenuItem value={t('forms.field1.selector2')}>{t('forms.field1.selector2')}</MenuItem>
            <MenuItem value={t('forms.field1.selector3')}>{t('forms.field1.selector3')}</MenuItem>
            <MenuItem value={t('forms.field1.selector4')}>{t('forms.field1.selector4')}</MenuItem>
            <MenuItem value={t('forms.field1.selector5')}>{t('forms.field1.selector5')}</MenuItem>
            <MenuItem value={t('forms.field1.selector6')}>{t('forms.field1.selector6')}</MenuItem>
          </Select>
          <FormHelperText sx={{ display: error.originOne ? 'block' : 'none' }} error={true}>{t('forms.errors.error1')}</FormHelperText>
        </FormControl>
        <Typography>
          {t('forms.field2.label')}
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
              <em>{t('forms.field2.placeholder')}</em>
            </MenuItem>
            <MenuItem value={t('forms.field2.selector1')}>{t('forms.field2.selector1')}</MenuItem>
            <MenuItem value={t('forms.field2.selector2')}>{t('forms.field2.selector2')}</MenuItem>
            <MenuItem value={t('forms.field2.selector3')}>{t('forms.field2.selector3')}</MenuItem>
            <MenuItem value={t('forms.field2.selector4')}>{t('forms.field2.selector4')}</MenuItem>
            <MenuItem value={t('forms.field2.selector5')}>{t('forms.field2.selector5')}</MenuItem>
          </Select>
          <FormHelperText sx={{ display: error.destinyOne ? 'block' : 'none' }} error={true}>{t('forms.errors.error1')}</FormHelperText>
        </FormControl>
        <Typography>
          {t('forms.field3.title')}
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
              {t('forms.field4.title1')}
            </Typography>
            <TextField id="outlined-basic" type="number" variant="outlined" value={formData.adult} sx={{ background: "white" }} onChange={(e) => setFormData({ ...formData, adult: e.target.value })} />
          </Box>
          <Box width="25%">
            <Typography>
              {t('forms.field4.title2')}
            </Typography>
            <TextField id="outlined-basic" type="number" variant="outlined" value={formData.kid} sx={{ background: "white" }} onChange={(e) => setFormData({ ...formData, kid: e.target.value })} />
          </Box>
          <Box width="25%">
            <Typography>
              {t('forms.field4.title3')}
            </Typography>
            <TextField id="outlined-basic" type="number" variant="outlined" value={formData.drink} sx={{ background: "white" }} onChange={(e) => setFormData({ ...formData, drink: e.target.value })} />
          </Box>
        </Box>
        <FormControl sx={{ margin: '10px 0px' }}>
          <RadioGroup
            row
            aria-label="way" value={formData.way} name='way' onChange={(e) => setFormData({ ...formData, way: e.target.value })}
          >
            <FormControlLabel value="one" control={<Radio color="default" />} label={t('forms.field5.title1')} />
            <FormControlLabel value="two" control={<Radio color="default" />} label={t('forms.field5.title2')} />
          </RadioGroup>
        </FormControl>
        <Box sx={{ display: formData.way === 'two' ? 'block' : "none" }}>
          <Typography>
            {t('forms.field1.label')}
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
                <em>{t('forms.field1.placeholder')}</em>
              </MenuItem>
              <MenuItem value={t('forms.field2.selector1')}>{t('forms.field2.selector1')}</MenuItem>
              <MenuItem value={t('forms.field2.selector2')}>{t('forms.field2.selector2')}</MenuItem>
              <MenuItem value={t('forms.field2.selector3')}>{t('forms.field2.selector3')}</MenuItem>
              <MenuItem value={t('forms.field2.selector4')}>{t('forms.field2.selector4')}</MenuItem>
              <MenuItem value={t('forms.field2.selector5')}>{t('forms.field2.selector5')}</MenuItem>
              <MenuItem value={t('forms.field2.selector6')}>{t('forms.field2.selector6')}</MenuItem>
            </Select>
            <FormHelperText sx={{ display: error.originTwo ? 'block' : 'none' }} error={true}>{t('forms.errors.error1')}</FormHelperText>
          </FormControl>
          <Typography>
            {t('forms.field2.label')}
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
                <em>{t('forms.field2.placeholder')}</em>
              </MenuItem>
              <MenuItem value={t('forms.field1.selector1')}>{t('forms.field1.selector1')}</MenuItem>
              <MenuItem value={t('forms.field1.selector2')}>{t('forms.field1.selector2')}</MenuItem>
              <MenuItem value={t('forms.field1.selector3')}>{t('forms.field1.selector3')}</MenuItem>
              <MenuItem value={t('forms.field1.selector4')}>{t('forms.field1.selector4')}</MenuItem>
              <MenuItem value={t('forms.field1.selector5')}>{t('forms.field1.selector5')}</MenuItem>
            </Select>
            <FormHelperText sx={{ display: error.destinyTwo ? 'block' : 'none' }} error={true}>{t('forms.errors.error1')}</FormHelperText>
          </FormControl>
          <Typography>
            {t('forms.field3.title')}
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
            {t('forms.btn')}
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Forms;