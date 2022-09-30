
import Home from "./page/Home";
import Nosotros from "./page/Nosotros";
import Flota from "./page/Flota";
import Grupos from "./page/Grupos";
import Blog from "./page/Blog";
import Contacto from "./page/Contacto";
import SelectCar from "./page/Order/SelectCar";
import Admin from "./page/Admin";
import Order from "./page/Admin/Order";
import Customer from "./page/Admin/Customer";
import Car from "./page/Admin/Car";
import Extra from "./page/Admin/Extra";
import {useMediaQuery} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Payment from "./page/Payment";

function App() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/nuestraflota" element={<Flota />} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/selectCar/" element={<SelectCar />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/order" element={<Order />} />
        <Route path="/admin/customer" element={<Customer />} />
        <Route path="/admin/car" element={<Car />} />
        <Route path="/admin/extra" element={<Extra />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
