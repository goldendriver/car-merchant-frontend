import { Box, Button, Card, Container, Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import CheckOutForm from '../componants/CheckOutForm';
import Footer from '../componants/Footer';
import Header from '../componants/Header';
import { getReq, postReq } from '../http/axios';


const Payment = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    (async () => {
      const body = Object.fromEntries([...searchParams])
      await postReq('/order/complete', body);
      // Call stripe.confirmCardPayment() with the client secret.
    })();
  }, [])

  return (
    <>
      <Header />
      <Container maxWidth="md" bg="#fff">
        <Box p={12}>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }} color="#35455ds">Thank You</Typography>
          <Box mt={4}>
            <Button variant="contained" onClick={() => navigate('/')}>GO Back</Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default Payment