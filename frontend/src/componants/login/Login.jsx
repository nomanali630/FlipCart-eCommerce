import { useState } from "react";
import {authenticatesignup , authenticatelogin} from '../../service/api.js';
import {
  Box,
  Dialog,
  DialogContent,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const useStyle = makeStyles({
  component: {
    width: "90vh",
    height: "70vh",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  signup: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 10,
    },
  },
  text: {
    color: "#78787",
    fontSize: 12,
  },
  loginbtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "white",
    height: "48",
    borderRadius: 2,
  },
  requestbtn: {
    textTransform: "none",
    background: "#FFFFFF",
    color: "#2874F0",
    height: "48",
    borderRadius: 2,
    boxShadow:'0 2px 4px 0 rgb( 0 0 0 / 20%)'
  },
  sign: {
      textAlign:'center',
      marginTop:'auto',
      fontSize: 14,
      color:'#2874F0',
      cursor:'pointer',
  },
  err:{
    fontSize:10,
    color: 'red',
    marginTop:10,
    fontWeight:600,
    lineHeight: 0
  }
});


const initialValue = {
  Login:{
   view: 'login',
   heading: 'Login',
   subHeading:'Get access to your Orders , wishlist and Recommandations'
   },
   signup:{
     view: 'signup',
   heading: 'Looks like you are New here',
   subHeading:'Sign up now with your Email to get started'
   }
 }
 const initailSignupValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    phone: '',
 }
 const initialLoginValue ={
   userName: '',
   password: '',
 }

const Login = ({ open, setOpen, setAccount }) => {
  const classes = useStyle();
  const [Account,toggleAcount] = useState(initialValue.Login) // toogle account will act same like setAccount due to pros we have to use it
  const [signup, setSignup] = useState(initailSignupValues)
  const [login, setLogin] = useState(initialLoginValue)
  const [error,setError] = useState(false)

  const onInputChange = (e) =>{
    setSignup({...signup, [e.target.name]: e.target.value})
    // console.log(signup)
  }
  const onValueChange = (e) =>{
    setLogin({...login, [e.target.name]: e.target.value});
  }


  const signupUser = async () =>{
   let response = await authenticatesignup(signup);
   if(!response) return;
   handleClose();
   setAccount(signup.userName)
  }

  const loginUser = async () =>{
    let response = await authenticatelogin(login)
    if(!response) {
      setError(true)
      return;
    }

    handleClose();
    setAccount(login.userName)
  }

  const AccountToggle = ()=>{
    toggleAcount(initialValue.signup)
  }
 
  const handleClose = () => {
    setOpen(false);
    toggleAcount(initialValue.Login)
    setError(false)
  };

  
  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={classes.component}>
          <Box style={{ display: "flex" }}>
            <Box className={classes.image}>
              <Typography variant="h5">{Account.heading}</Typography>
              <Typography style={{ marginTop: 20, opacity: 0.8 }}>
                {Account.subHeading}
              </Typography>
            </Box>
            {
              Account === initialValue.Login? 
            
            <Box className={classes.login}>
              <TextField onChange={(e) => onValueChange(e)} name="userName" label="Enter User Name" />
              <TextField onChange={(e) => onValueChange(e)} name="password" label="password" />
              {error ? <Typography className={classes.err}>Invalid username or password</Typography>:null}
              <Typography className={classes.text}>
                By continuing You agree to Flipcart's Term of use and policy.
              </Typography>
              <Button onClick={ ()=> loginUser()} variant="contained" className={classes.loginbtn}>
                Login
              </Button>
              <Typography
                className={classes.text}
                style={{ textAlign: "center" }}
              >
                OR
              </Typography>
              <Button variant="contained" className={classes.requestbtn}>
                Request OTP
              </Button>
              <Typography onClick={()=> AccountToggle()} className={classes.sign}>
                New to FlipCart? Create an Account
              </Typography>
            </Box>
            :
            <Box className={classes.signup}>
              <TextField onChange={(e) => onInputChange(e)} name="firstName" label="First Name" />
              <TextField onChange={(e) => onInputChange(e)} name="lastName" label="Last Name" />
              <TextField onChange={(e) => onInputChange(e)} name="userName" label="User Name" />
              <TextField onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
              <TextField onChange={(e) => onInputChange(e)} name="password" label="password" />
              <TextField onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone" />
              <Button variant="contained" onClick={()=> signupUser()} className={classes.loginbtn}>
                Sign up
              </Button>
              
              {/* <Typography  className={classes.sign}>
                Already Have An Account? Login Now
              </Typography> */}
            </Box>
            }
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
export default Login;
