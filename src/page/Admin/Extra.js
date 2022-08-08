import * as React from 'react';
import { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from '../../componants/ListItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FileUpload from "../../componants/FileUpload";
import logo from "../../assets/logo.png";
import axios from 'axios';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function CarContent() {
  const [open, setOpen] = React.useState(true);
  const [modal, setModal] = React.useState(false);
  const [name, setName] = React.useState();
  const [dec, setDec] = React.useState();
  const [price, setPrice] = React.useState();
  const [rows, setRows] = React.useState([]);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const setOpenModal = () => {
    setModal(true);
  }
  const handleClose = () => {
    setModal(false);
  }
  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  }
  const onChangeDec = (e) => {
    setDec(e.target.value);
  }
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const saveCar = () => {
    setModal(false);
    const form = new FormData();
    form.append('name', name);
    form.append('price', price);
    form.append('description', dec);
    form.append('image', newUserInfo.profileImages[0]);
    // console.log('files data', newUserInfo.profileImages);
    axios.post("http://localhost:8080/addextra", form)
      .then(res => {
        setRows(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }
  const deleteCar = (key) => {
    console.log(key);
    axios.post("http://localhost:8080/delextra", [key])
      .then(res => {
        setRows(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }
  React.useEffect(() => {
    axios.get(`http://localhost:8080/extras`).then((res) => {
      setRows(res.data);
    })
  }, [])
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Extra
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <Link href="/">
              <img src={logo} width="100%" />
            </Link>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box textAlign="left" sx={{ mb: 4 }}>
              <a className="conBtn" onClick={setOpenModal}>Agregar</a>
            </Box>

            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell width="15%">Id</TableCell>
                      <TableCell width="15%">Name</TableCell>
                      <TableCell width="15%">Price</TableCell>
                      <TableCell width="40%">Description</TableCell>
                      <TableCell width="40%">Image</TableCell>
                      <TableCell width="15%">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, rowkey) => (
                      <TableRow key={row.id}>
                        <TableCell>{rowkey}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell>{row.description.substring(0, 24) + "..."}</TableCell>
                        <TableCell ><img src={row.image} width="30%" /></TableCell>
                        <TableCell><a className="delBtn" onClick={() => deleteCar(row.id)}>Delete</a></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Dialog open={modal} onClose={handleClose}>
        <DialogTitle>Añadir coche</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Añadir Coche con nombre y precio e imagen.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre del coche"
            fullWidth
            type="text"
            variant="standard"
            onChange={onChangeName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Precio"
            fullWidth
            type="number"
            variant="standard"
            onChange={onChangeDec}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Descripción"
            fullWidth
            type="text"
            variant="standard"
            onChange={onChangePrice}
          />
          <FileUpload
            accept=".jpg,.png,.jpeg"
            label="Imagen del coche(s)"
            updateFilesCb={updateUploadedFiles}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveCar}>Save</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default function Extra() {
  return <CarContent />;
}