import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { makeStyles, Typography, Button, Box, Divider } from "@material-ui/core";

//for the count down we have to install this library
import Countdown from "react-countdown";

const useStyle = makeStyles({
  image: {
    height: 120,
  },
  deal: {
    padding: "15px 20px",
    display: "flex",
    fontWeight: "10px",
  },
  component: {
    marginTop: 13,
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
  },
  timer: {
    color: "grey",
    marginLeft: 7,
    display: "flex",
    alignItems: "center",
  },
  btn: {
    marginLeft: "auto",
    background: "#2874f0",
    fontSize: 13,
  },
  text:{
      fontSize: 14,
      marginTop: 5
  },
  wraper:{
      padding:'35px 15px'
  }
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({timer,title, products}) => {
  const classes = useStyle();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {" "}
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };

  return (
    <div className={classes.component}>
      <div className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>
        { 
         timer &&
         <>
        <img src={timerURL} alt="" style={{ width: 20, marginLeft: 5 }} />
        <Countdown date={Date.now() + 5.4e7} renderer={renderer} />
        <Button variant="contained" color="primary" className={classes.btn}>
          View All
        </Button>
        </>
         }
      </div>
      <Divider/>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Box textAlign='center' className={classes.wraper}>
            <img src={product.url} alt="" className={classes.image} />
            <Typography className={classes.text} style={{fontWeight:600}}>{product.title.shortTitle}</Typography>
            <Typography className={classes.text} style={{color:'green'}}>{product.discount}</Typography>
            <Typography className={classes.text} style={{color:'#212121' , opacity: 0.5}}>{product.tagline}</Typography>
          </Box>
        ))}
      </Carousel>
    </div>
  );
};
export default Slide;
