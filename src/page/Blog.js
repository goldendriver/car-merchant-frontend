import Header from "../componants/Header"
import Footer from "../componants/Footer";
import blog1 from "../assets/blog1.JPG";
import blog2 from "../assets/blog2.JPG";
import { Typography, Box, Container } from "@mui/material";
export default function Blog(){
    return(
        <>
            <Header />
            <Container fullWidth>
                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                    <Box sx={{padding:"30px"}}>
                    <img src={blog1} width="100%"/>
                    <Typography fontWeight="600">Espectáculos en Puy Du Fou</Typography>
                    </Box>
                    <Box sx={{padding:"30px"}}>
                    <img src={blog1} width="100%"/>
                    <Typography fontWeight="600">Espectáculos en Puy Du Fou</Typography>
                    </Box>
                    <Box sx={{padding:"30px"}}>
                    <img src={blog1} width="100%"/>
                    <Typography fontWeight="600">Espectáculos en Puy Du Fou</Typography>
                    </Box>
                </Box>
                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                    <Box sx={{padding:"30px"}}>
                    <img src={blog2} width="100%"/>
                    <Typography fontWeight="600">Espectáculos en Puy Du Fou</Typography>
                    </Box>
                    <Box sx={{padding:"30px"}}>
                    <img src={blog2} width="100%"/>
                    <Typography fontWeight="600">Espectáculos en Puy Du Fou</Typography>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </>
    );
}