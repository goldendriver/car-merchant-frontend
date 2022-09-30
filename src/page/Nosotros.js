import Header from "../componants/Header"
import Footer from "../componants/Footer";
import { Container, Typography, Divider, Box } from "@mui/material";
import us from "../assets/5.jpg";
import { useTranslation, Trans } from 'react-i18next';
export default function Nosotros(){
    const { t } = useTranslation();
    return(
        <>
            <Header/>
            <Container fullWidth>
                <h1 className="title">{t('about.title')}</h1>
                <Divider sx={{ mt: "50px", mb: "50px" }} />
                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                    <Box width="30%">
                        <Typography fontSize="1.5rem" fontWeight="600" sx={{mb:"20px"}}>{t('about.card1.title')}</Typography>
                        <Typography sx={{textAlign:"justify"}}>{t('about.card1.description')}</Typography>
                    </Box>
                    <Box width="30%">
                        <Typography fontSize="1.5rem" fontWeight="600" sx={{mb:"20px"}}>{t('about.card2.title')}</Typography>
                        <Typography sx={{textAlign:"justify"}}>{t('about.card2.description')}</Typography>
                    </Box>
                    <Box width="30%">
                        <Typography fontSize="1.5rem" fontWeight="600" sx={{mb:"20px"}}>{t('about.card3.title')}</Typography>
                        <Typography sx={{textAlign:"justify"}}>{t('about.card3.description')}</Typography>
                    </Box>
                </Box>
                <img src={us} className="us"/>
            </Container>
            <Footer/>
        </>
    );
}