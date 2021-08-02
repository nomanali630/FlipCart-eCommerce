import { Box , makeStyles } from "@material-ui/core";
import { ImageURL } from "../../constants/data";

const useStyle = makeStyles({
  work:{
      display:'flex',
      marginTop:'5px',
      justifyContent:'space-between'
  }
})



const MidSection = () =>{
    const classes = useStyle()
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        <>
        <Box className={classes.work}>
        {
            ImageURL.map(image => (
                <img src={image} alt='' style={{width:'33%'}}/>
            ))
        }

        </Box>
        <img src={coronaURL} alt="" style={{width:'100%' , marginTop:'12px'}}/>
        </>
    )
}
export default MidSection;