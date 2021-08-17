import { useState,useContext } from "react";
import { Button, makeStyles, Box, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import LoginDialog from "../login/Login";
import {LoginContext} from '../../context/contextProvider';
import Profile from './profile';

const usestyle = makeStyles({
  login: {
    background: "white",
    textTransform: "none",
    fontweight: 600,
    borderRadius: "2",
    padding: "5px 40px",
    boxShadow: "none",
    
  },
  Box: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      //   fontSize: 10
      marginTop: "5px",
      textDecoration: "none",
      color: "white",
    },
   
  },
  container: {
    display: "flex",
    marginTop:'10px',
    
  },
});

const Headbutton = () => {
  const classes = usestyle();
  const [open,setOpen] = useState(false);
  const {account, setAccount} = useContext(LoginContext);
   
  function openLoginDialog(){
    setOpen(true)
  }


  return (
    <>
      <Box className={classes.Box}>
        {
         account? <Profile account={account} setAccount={setAccount}/> :
        <Link>
          <Button variant="contained" onClick={()=> openLoginDialog()} className={classes.login}>
            Login
          </Button>
        </Link>
        }
        <Link>
          <Typography style={{ marginTop: "8px" }}>More</Typography>
        </Link>
        <Link to="/cart" className={classes.container}>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart />
          </Badge>
          <Typography style={{ marginLeft: "10px" }}>Cart</Typography>
        </Link>
        <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
      </Box>
    </>
  );
};

export default Headbutton;
