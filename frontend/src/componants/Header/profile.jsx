import { Typography,Menu,MenuItem,makeStyles } from "@material-ui/core";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { useState } from "react";
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    component:{
        marginTop:40,
    },
    logout:{
        marginLeft: 20,
        fontSize: 15,
    }
})



const Profile = ({ account, setAccount }) => {
    const [open,setOpen] = useState(false)
    const classes = useStyle()
    const handleClose = () =>{
        setOpen(false)
    }
    const handleClick = (event) =>{
        setOpen(event.currentTarget)
    }
    const logout = () =>{
        setAccount('');
    }

  return (
    <>
      <Link><Typography  onClick={handleClick} style={{ marginTop: 5 }}>{account}</Typography></Link>
      <Menu
        className={classes.component}
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose(); logout()}}>
         <PowerSettingsNewIcon fontSize='small' color='primary' /> 
         <Typography className={classes.logout}>Logout</Typography> 
         </MenuItem>
       
      </Menu>
    </>
  );
};
export default Profile;
