import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

const ExtraBox = ({ data, setExtraCounts, extraCounts }) => {
  // let [extraCounts, setExtraCounts] = useState([]);
  let [count, setCount] = useState(0);

  const increment = (item) => {
    let id = item.id;
    let index = extraCounts.findIndex((item) => item.id == id);
    if (index >= 0) {
      setExtraCounts((extraCounts) => { extraCounts[index].qty++; return [...extraCounts]; });
    } else {
      setExtraCounts([...extraCounts, { id: id, qty: 1, item: item }]);
    }
  }

  const getCartQty = (id) => {
    let item = extraCounts.find((item) => item.id == id);

    return item ? item.qty : 0;
  }

  const decrement = (id) => {
    let index = extraCounts.findIndex((item) => item.id == id);
    if (index >= 0 && extraCounts[index].qty >= 1) {
      setExtraCounts((extraCounts) => { extraCounts[index].qty--; return [...extraCounts]; });
    }
  }
  return (
    <>
      {data && data.length > 0 ?
        data.map((item) => (
          <Grid item md={6}>
            <Box className="extraItem">
              <Box sx={{ textAlign: "left" }}>
                <Box sx={{ display: "flex" }}>
                  <img src={item.image} width="20%" height="20%" style={{ padding: "20px" }} />
                  <Typography fontSize="1.25rem" sx={{ padding: "20px" }}>{item.name}</Typography>
                </Box>
                <Typography sx={{ padding: "10px" }}>{item.description}</Typography>
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Typography fontWeight="500" sx={{ padding: "20px" }}>{item.price} €</Typography>
                <Box sx={{ display: "flex", padding: "10px", height: "40px" }}>
                  <Button size="small" variant="outlined" onClick={() => decrement(item.id)}>-</Button>
                  <Typography sx={{ padding: "10px" }}>{getCartQty(item.id)}</Typography>
                  <Button size="small" variant="outlined" onClick={() => increment(item)}>+</Button>
                </Box>
              </Box>
            </Box>
          </Grid>))
        :
        <Box>
          Extras Not Found...
        </Box>
      }
    </>
  )
}

export default ExtraBox