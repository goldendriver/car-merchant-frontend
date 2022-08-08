export const extrasData = (data) => {
  let arr = [];
  data.map((item) => {
    return arr.push({ ...item, count: 0 });
  })
}

export const totalPrice = (data) => {
  return data.reduce((acc, item) => acc + item.qty * item.item.price, 0)
}