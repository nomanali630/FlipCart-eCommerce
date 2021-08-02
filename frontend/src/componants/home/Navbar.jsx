import { navData } from "../../constants/data";
import { Box, Typography,makeStyles } from "@material-ui/core";



const useStyles = makeStyles({
    componants: {
        display: 'flex',
        marginTop : '60px',
        marginLeft: '60px',
        marginRight: '60px',
        justifyContent: 'space-between'
    },
    container:{
        textAlign: 'center',
        // padding: '12px 8px',

    },
    image:{
        width: '64px'
    },
    text:{
        fontSize: 14,
        fontWeight:600,
    }

});



const Navbar = () => {
    const classes = useStyles()
    return (
    <Box className={classes.componants}>
      {navData.map((data) => (
        <Box className={classes.container}>
           <img src={data.url} alt=''  className={classes.image}/>
          <Typography className={classes.text}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};
export default Navbar;
