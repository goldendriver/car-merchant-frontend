import React, { useEffect, useState } from 'react'
import { PaymentElement, ElementsConsumer, useStripe, useElements } from '@stripe/react-stripe-js';
import { Box, Button, Card, Container } from '@mui/material';
import { getReq } from '../http/axios';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51ITftMIy2XYOJorrGz48C3F5fiBQdXxXHGrtlaC40TzQVCkvRRUj4opx6VhMHYVxIGhEFI9AkAD2ZINAHmfiPIW000SNkv2brH');


function CheckOutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment",
      },
    });
    if (result.error) {
      console.log(result.error.message);
    } else {

    }
  }

  return (
    <Container maxWidth="sm" bg="#fff">
      <Card sx={{ margin: '92px 0px', padding: '32px', }} >
        <form>
          <PaymentElement />
          <Box my={2}>
            <Button variant="contained" onClick={handleSubmit}> Submit</Button>
          </Box>
        </form>
      </Card>
    </Container>
  )
}

export default CheckOutForm