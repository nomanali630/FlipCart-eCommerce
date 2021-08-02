import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    Box,
    withStyles,
  } from "@material-ui/core";
  import Searchbar from "./Searchbar";
  import Headbutton from "./Headbutton";
  import { Link } from 'react-router-dom';

  const usestyle = makeStyles({
    header: {
      background: "#2874f0",
      height: 55,
    },
    logo: {
      width: 75,
    },
    sub: {
      width: 10,
      marginLeft: 4,
      height: 10
    },
    container:{
        display:'flex',
        
    },
    componant:{
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration: 'none',
        color:'white',
      
    },
    head:{
        fontSize: 10,
        fontStyle: 'italic'
    }
  });
  
  
  
  const ToolBar = withStyles({
      root:{
          minHeight: 55
      }
  })(Toolbar);
  
  const Header = () => {
    const classes = usestyle();
    const logoURL =
      "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL =
      "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  
    return (
      <>
        <AppBar className={classes.header}>
          <ToolBar>
            <Link to = '/' className={classes.componant}>
              <img src={logoURL} alt="" className={classes.logo} />
              <Box className={classes.container}>
                <Typography className={classes.head}>Explore plus</Typography>
                <img src={subURL} alt="" className={classes.sub} />
              </Box>
            </Link>
              <Searchbar/>
              <Headbutton />
          </ToolBar>
        </AppBar>
      </>
    );
  };
  
  export default Header;
  