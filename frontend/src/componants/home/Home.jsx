import { Box, makeStyles } from "@material-ui/core";

import Navbar from "./Navbar";
import Banner from "./banner";
import Slide from "./Slide";
import MidSection from "./MidSection";
// import { products } from "../../constants/data.js";
import{useSelector,useDispatch} from 'react-redux'
import { useEffect } from "react";
import {getProducts as listProducts} from '../../redux/actions/productActions';

const useStyle = makeStyles({
  component: {
    padding: 12,
    backgroundColor: "#F2F2F2",
  },
  wrapper:{
    background:'#FFFFFF',
    padding:5,
    margin:"12px 0 0 10px",
    width:'17%'
  },
});

const Home = (timer,title) => {
  const classes = useStyle();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
    

    const { products } = useSelector(state => state.getproducts)
    
     


    const dispatch = useDispatch()
    useEffect(() =>{

      dispatch(listProducts())

    },[dispatch])

  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
      </Box>
      <Box style={{display:'flex'}}>
        <Box style={{width:'80%',marginTop:'20px'}}>
          <Slide timer={true}
          title='Deal of the Day'
          products={products}
          />
        </Box>
        <Box className={classes.wrapper}>
          <img src={adURL} alt="" style={{width:230 }}/>
        </Box>
      </Box>
      <MidSection />
      <Slide timer={false}
       title='Best Sellers'
       products={products}
      />
      <Slide timer={false}
       title='Discounts for You'
       products={products}
      />
      <Slide timer={false}
       title='Suggested Item'
       products={products}
      />
      <Slide timer={false}
       title='Top Selection'
       products={products}
      />
    </div>
  );
};

export default Home;
