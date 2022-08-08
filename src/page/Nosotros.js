import Header from "../componants/Header"
import Footer from "../componants/Footer";
import { Container, Typography, Divider, Box } from "@mui/material";
import us from "../assets/5.jpg";
export default function Nosotros(){
    return(
        <>
            <Header/>
            <Container fullWidth>
                <h1 className="title">Nosotros</h1>
                <Divider sx={{ mt: "50px", mb: "50px" }} />
                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                    <Box width="30%">
                        <Typography fontSize="1.5rem" fontWeight="600" sx={{mb:"20px"}}>Misión</Typography>
                        <Typography sx={{textAlign:"justify"}}>Dotar a nuestros clientes de transporte privado de calidad, con vehículos de alta gama y conductores profesionales, con el único objetivo de satisfacer sus necesidades de desplazamiento.</Typography>
                    </Box>
                    <Box width="30%">
                        <Typography fontSize="1.5rem" fontWeight="600" sx={{mb:"20px"}}>Visión</Typography>
                        <Typography sx={{textAlign:"justify"}}>Dar respuesta al incremento del flujo de turistas, empresas y particulares que demandan un servicio de transporte privado rápido y eficaz entre Madrid y Toledo.</Typography>
                    </Box>
                    <Box width="30%">
                        <Typography fontSize="1.5rem" fontWeight="600" sx={{mb:"20px"}}>Valores</Typography>
                        <Typography sx={{textAlign:"justify"}}>Apostar por un futuro de transporte sostenible, responsable, seguro y competitivo que nos haga continuar siendo un referente en los desplazamientos por carretera.</Typography>
                    </Box>
                </Box>
                <img src={us} className="us"/>
            </Container>
            <Footer/>
        </>
    );
}